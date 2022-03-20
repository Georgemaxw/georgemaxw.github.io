
var GM_BigLineHeight = 54;

Window_Base.prototype.standardFontSize = function() {
    return 24;  // Default: 28
};

Window_TitleCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_Options.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_MenuCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_ItemCategory.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_ItemList.prototype.lineHeight = function() { return 58; }; 
Window_SkillType.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_SkillList.prototype.lineHeight = function() { return 46; }; 
Window_EquipItem.prototype.lineHeight = function() { return 36; }; 
Window_GameEnd.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
//Window_ShopCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_ShopBuy.prototype.lineHeight = function() { return 52; }; 
Window_ShopSell.prototype.lineHeight = function() { return 53; }; 
Window_ChoiceList.prototype.lineHeight = function() { return 52; }; 
Window_PartyCommand.prototype.lineHeight = function() { return 72; }; 
Window_ActorCommand.prototype.lineHeight = function() { return 48; }; 
// A definição de lineHeight de Window_BigBattleStatus está em seu próprio tópico.
Window_BattleEnemy.prototype.lineHeight = function() { return 50; }; 
Window_BattleSkill.prototype.lineHeight = function() { return 51; }; 
Window_BattleItem.prototype.lineHeight = function() { return 51; }; 

//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor.level, x + 34, y, 36, 'right'); // Default: this.drawText(actor.level, x + 84, y, 36, 'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) { // Window_MenuStatus e Window_SkillStatus usam este método.
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.max(200, width - 180 - this.textPadding()); // <(GM) Bug fix. Default : var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x + 20, y);
    this.drawActorLevel(actor, x + 20, y + lineHeight * 1);
    this.drawActorIcons(actor, x + 20, y + lineHeight * 2);

    if ($dataSystem.optDisplayTp) {
        this.drawActorHp(actor, x2, y, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorTp(actor, x2, y + lineHeight * 2, width2);
    } else {
        this.drawActorClass(actor, x2, y);
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    }
};

Window_Base.prototype.drawItemName_GM_SmallLine = function(item, x, y, width) { // <(GM) Eu criei.
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 8, y, width - iconBoxWidth);
    }
};

//-----------------------------------------------------------------------------
// Window_TitleCommand
//-----------------------------------------------------------------------------

Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    //this.addCommand(TextManager.options,   'options');
};

//-----------------------------------------------------------------------------
// Menu Windows
//-----------------------------------------------------------------------------

// ====== Main Menu Windows ======

Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addSaveCommand();
    this.addOptionsCommand();
    this.addGameEndCommand();
};

Window_MenuCommand.prototype.numVisibleRows = function() { return this.maxItems() - 2; };

Window_MenuStatus.prototype.windowWidth = function() { //
    return 598; //Default: Graphics.boxWidth - 240
};

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x, rect.y - 12, Window_Base._faceWidth, Window_Base._faceHeight);
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) { 
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var x = rect.x + 162;
    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
    var width = rect.width - x - this.textPadding() + 16;
    this.drawActorSimpleStatus(actor, x - 20, y, width);
};

// ====== Itens Windows ======

Window_ItemList.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 13, y + 13); // <(GM) Default: this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 17, y, width - iconBoxWidth); // <(GM) Default: this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ItemList.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x - 7, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

// ====== Skills Windows ======

Window_SkillType.prototype.numVisibleRows = function() { return 3; };

Window_SkillStatus.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width - 100, height);
    this._actor = null;
};

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        var y = h / 2 - this.lineHeight() * 1.5;
        var width = w - 136 - this.textPadding();
        this.drawActorFace(this._actor, -4, 0, 144, h);
        this.drawActorSimpleStatus(this._actor, 138, y, width);
    }
};

Window_SkillList.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 9, y + 6); 
        this.drawText(item.name, x + iconBoxWidth + 13, y, width - iconBoxWidth);
    }
};

Window_SkillList.prototype.drawItem = function(index) {
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x - 4, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

// ====== Equips Windows ======

Window_EquipStatus.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height - 12);
        this._actor = null;
        this._tempActor = null;
        this.refresh();
    };

Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        //this.drawActorName(this._actor, this.textPadding(), 12);
        for (var i = 0; i < 6; i++) {
            this.drawItem(0, this.lineHeight() * (0 + i) + 12, 2 + i);
        }
    }
};

Window_EquipCommand.prototype.standardPadding = function() {
    return 12; // Default: 18
};

Window_EquipSlot.prototype.drawItem = function(index) {
        if (this._actor) {
            var rect = this.itemRectForText(index);
            this.changeTextColor(this.systemColor());
            this.changePaintOpacity(this.isEnabled(index));
            this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
            this.drawItemName_GM_SmallLine(this._actor.equips()[index], rect.x + 138, rect.y); // <(GM) Default: this.drawItemName(this._actor.equips()[index], rect.x + 138, rect.y);
            this.changePaintOpacity(true);
        }
};

Window_EquipItem.prototype.drawItemName = function(item, x, y, width) { // <(GM) Eu criei.
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 8, y, width - iconBoxWidth);
    }
};

// ====== Window_Status ======

Window_Status.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Selectable.prototype.initialize.call(this, 61, 0, width - 122, height);
    this._actor = null;
    this.refresh();
    this.activate();
};

Window_Status.prototype.refresh = function() {
        this.contents.clear();
        if (this._actor) {
            var lineHeight = this.lineHeight();
            this.drawBlock1(lineHeight * -0.15);
            this.drawHorzLine(lineHeight * 1/2);
            this.drawBlock2(lineHeight * 1.1);
            this.drawHorzLine(lineHeight * 4.9);
            this.drawBlock3(lineHeight * 5.5);
            this.drawHorzLine(lineHeight * 11.15);
            this.drawBlock4(lineHeight * 11.75);
        }
};

Window_Status.prototype.drawBlock2 = function(y) {
    this.drawActorFace(this._actor, 20, y);
    this.drawBasicInfo(194, y);
    this.drawExpInfo(466, y);
};

Window_Status.prototype.drawHorzLine = function(y) {
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = 128; // Default: 48
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
};

/*Window_Status.prototype.lineColor = function() {
    return this.textColor(0);
};*/

Window_Status.prototype.drawBasicInfo = function(x, y) {

    if ($dataSystem.optDisplayTp) {
        var lineHeight = this.lineHeight();
        this.drawActorLevel(this._actor, x, y + lineHeight * 0);
        this.drawActorIcons(this._actor, x + 80, y + lineHeight * 0);
        this.drawActorHp(this._actor, x, y + lineHeight * 1);
        this.drawActorMp(this._actor, x, y + lineHeight * 2);
        this.drawActorTp(this._actor, x, y + lineHeight * 3, 186);   
    } else {
        var lineHeight = this.lineHeight();
        this.drawActorLevel(this._actor, x, y + lineHeight * 0);
        this.drawActorIcons(this._actor, x, y + lineHeight * 1);
        this.drawActorHp(this._actor, x, y + lineHeight * 2);
        this.drawActorMp(this._actor, x, y + lineHeight * 3);           
    }
        //this.drawActorTp(actor, x2, y + lineHeight * 2);
};

Window_Status.prototype.drawBlock3 = function(y) {
    this.drawParameters(48, y - 2);
    this.drawEquipments(432, y + 18);
};

Window_Status.prototype.drawEquipments = function(x, y) {
    var equips = this._actor.equips();
    var count = Math.min(equips.length, this.maxEquipmentLines());
    for (var i = 0; i < count; i++) {
        this.drawItemName_GM_SmallLine(equips[i], x, y + this.lineHeight() * i);
    }
};

//-----------------------------------------------------------------------------
// Window_SavefileList
//-----------------------------------------------------------------------------

Window_SavefileList.prototype.drawFileId = function(id, x, y) {
    this.drawText(TextManager.file + ' ' + id, x + 16, y + 10, 180);
};

Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
        //this.drawGameTitle(info, rect.x + 192, rect.y, rect.width - 192);
        if (valid) {
            this.drawPartyCharacters(info, rect.x + 373, bottom - 20);
        }
    }
    var lineHeight = this.lineHeight();
    var y2 = bottom - lineHeight;
    if (y2 >= lineHeight) {
        this.drawPlaytime(info, rect.x - 16, y2 - 10, rect.width);
    }
};

//-----------------------------------------------------------------------------
// Shop Windows
//-----------------------------------------------------------------------------

Window_ShopBuy.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 7, y + 10); // <(GM) Default: this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 11, y, width - iconBoxWidth); // <(GM) Default: this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ShopSell.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 12, y + 10); // <(GM) Default: this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 15, y, width - iconBoxWidth); // <(GM) Default: this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_ShopNumber.prototype.drawItemName = function(item, x, y, width) { // <(GM) Eu criei.
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth + 8, y, width - iconBoxWidth);
    }
};

Window_ShopStatus.prototype.drawPossession = function(x, y) {
    var width = this.contents.width - this.textPadding() - x;
    var possessionWidth = this.textWidth('0000');
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.possession, x, y, width - possessionWidth);
    this.resetTextColor();
    this.drawText($gameParty.numItems(this._item), x - 337, y, width, 'right');
};

Window_ShopStatus.prototype.drawEquipInfo = function(x, y) {
    var members = this.statusMembers();
    for (var i = 0; i < members.length; i++) {
        this.drawActorEquipInfo(x + 114, y + this.lineHeight() * (i * 2.17) - 72, members[i]); // Default: this.drawActorEquipInfo(x, y + this.lineHeight() * (i * 2.4), members[i]);
    }
};

Window_ShopStatus.prototype.drawActorEquipInfo = function(x, y, actor) {
    var enabled = actor.canEquip(this._item);
    this.changePaintOpacity(enabled);
    this.resetTextColor();
    this.drawText(actor.name(), x, y, 168);
    var item1 = this.currentEquippedItem(actor, this._item.etypeId);
    if (enabled) {
        this.drawActorParamChange(x, y, actor, item1);
    }
    this.drawItemName_GM_SmallLine(item1, x, y + this.lineHeight()); // <(GM) Default: this.drawItemName(item1, x, y + this.lineHeight());
    this.changePaintOpacity(true);
};

Window_ShopStatus.prototype.drawActorParamChange = function(x, y, actor, item1) {
    var width = this.contents.width - this.textPadding() - x;
    var paramId = this.paramId();
    var change = this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
    this.changeTextColor(this.paramchangeTextColor(change));
    this.drawText((change > 0 ? '+' : '') + change, x, y, width, 'right');
};

//-----------------------------------------------------------------------------
// Window_NameEdit
//-----------------------------------------------------------------------------

Window_NameEdit.prototype.windowHeight = function() {
    return this.fittingHeight(2);
};

Window_NameEdit.prototype.left = function() {
    var nameCenter = (this.contentsWidth()) / 2; // Default: var nameCenter = (this.contentsWidth() + this.faceWidth()) / 2;
    var nameWidth = (this._maxLength + 1) * this.charWidth();
    return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
};

Window_NameEdit.prototype.drawUnderline = function(index) {
    var rect = this.underlineRect(index);
    var color = this.underlineColor();
    this.contents.paintOpacity = 48;
    this.contents.fillRect(rect.x, rect.y - 36, rect.width, rect.height, color);
    this.contents.paintOpacity = 255;
};

Window_NameEdit.prototype.drawChar = function(index) {
    var rect = this.itemRect(index);
    this.resetTextColor();
    this.drawText(this._name[index] || '', rect.x, rect.y - 36);
};

Window_NameEdit.prototype.refresh = function() {
    this.contents.clear();
    //this.drawActorFace(this._actor, 0, -12);
    for (var i = 0; i < this._maxLength; i++) {
        this.drawUnderline(i);
    }
    for (var j = 0; j < this._name.length; j++) {
        this.drawChar(j);
    }
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y - 36, rect.width, rect.height);
};

//-----------------------------------------------------------------------------
// Window_ChoiceList
//-----------------------------------------------------------------------------

Window_ChoiceList.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    this.drawTextEx(this.commandName(index), rect.x, rect.y + 8); // <(GM) Default: this.drawTextEx(this.commandName(index), rect.x, rect.y);
};

//-----------------------------------------------------------------------------
// Battle Windows
//-----------------------------------------------------------------------------

// ====== Commands Windows ======

Window_PartyCommand.prototype.numVisibleRows = function() {
    return 2;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 3;
};

// ====== Window_BattleSkill ======

Window_BattleSkill.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 9, y + 10);
        this.drawText(item.name, x + iconBoxWidth + 13, y, width - iconBoxWidth); 
    }
};

Window_BattleSkill.prototype.drawItem = function(index) {
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x - 4, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

// ====== Window_BattleStatus ======

Window_BattleStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < 2; i++) {
        this.drawIcon(BackIconIndex, x + Window_Base._iconWidth * i, y + 2);
    }
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    this.drawActorName(actor, rect.x + 0, rect.y, 150);
    this.drawActorIcons(actor, rect.x + 156, rect.y, rect.width - 289);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x - 132, rect.y, 172);
    this.drawActorMp(actor, rect.x + 56, rect.y, 172);
    this.drawActorTp(actor, rect.x + 244, rect.y, 85);
};
    
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x - 132, rect.y, 222);
    this.drawActorMp(actor, rect.x + 106, rect.y, 222);
};

// ====== Window_BigBattleStatus ====== <(GM) Eu criei.

function Window_BigBattleStatus() {
    this.initialize.apply(this, arguments);
}

Window_BigBattleStatus.prototype = Object.create(Window_Selectable.prototype);
Window_BigBattleStatus.prototype.constructor = Window_BigBattleStatus;

Window_BigBattleStatus.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = Graphics.boxWidth - width;
    var y = Graphics.boxHeight - height;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.openness = 0;
};

Window_BigBattleStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - 192;
};

Window_BigBattleStatus.prototype.windowHeight = function() {
    return 252 // Default: this.fittingHeight(this.numVisibleRows());
};

Window_BigBattleStatus.prototype.numVisibleRows = function() {
    return 4;
};

Window_BigBattleStatus.prototype.maxItems = function() {
    return $gameParty.battleMembers().length;
};

Window_BigBattleStatus.prototype.itemHeight = function() { 
    return GM_BigLineHeight; 
}; 

Window_BigBattleStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < 2; i++) {
        this.drawIcon(BackIconIndex, x + Window_Base._iconWidth * i, y + 2);
    }
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

Window_BigBattleStatus.prototype.refresh = function() {
    this.contents.clear();
    this.drawAllItems();
};

Window_BigBattleStatus.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    this.drawBasicArea(this.basicAreaRect(index), actor);
    this.drawGaugeArea(this.gaugeAreaRect(index), actor);
};

Window_BigBattleStatus.prototype.basicAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.width -= this.gaugeAreaWidth() + 15;
    return rect;
};

Window_BigBattleStatus.prototype.gaugeAreaRect = function(index) {
    var rect = this.itemRectForText(index);
    rect.x += rect.width - this.gaugeAreaWidth();
    rect.width = this.gaugeAreaWidth();
    return rect;
};

Window_BigBattleStatus.prototype.gaugeAreaWidth = function() {
    return 330;
};

Window_BigBattleStatus.prototype.drawBasicArea = function(rect, actor) {
    this.drawActorName(actor, rect.x + 0, rect.y + 9, 150);
    this.drawActorIcons(actor, rect.x + 156, rect.y + 9, rect.width - 289);
};

Window_BigBattleStatus.prototype.drawGaugeArea = function(rect, actor) {
    if ($dataSystem.optDisplayTp) {
        this.drawGaugeAreaWithTp(rect, actor);
    } else {
        this.drawGaugeAreaWithoutTp(rect, actor);
    }
};

Window_BigBattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x - 132, rect.y + 9, 172);
    this.drawActorMp(actor, rect.x + 56, rect.y + 9, 172);
    this.drawActorTp(actor, rect.x + 244, rect.y + 9, 85);
};
    
Window_BigBattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    this.drawActorHp(actor, rect.x - 132, rect.y + 9, 222);
    this.drawActorMp(actor, rect.x + 106, rect.y + 9, 222);
};

// ====== Window_BattleActor ======

function Window_BattleActor() {
    this.initialize.apply(this, arguments);
}

Window_BattleActor.prototype = Object.create(Window_BigBattleStatus.prototype);
Window_BattleActor.prototype.constructor = Window_BattleActor;

Window_BattleActor.prototype.initialize = function(x, y) {
    Window_BigBattleStatus.prototype.initialize.call(this);
    this.x = x + 192;
    this.y = y - 72;
    this.openness = 255;
    this.hide();
};

Window_BattleActor.prototype.show = function() {
    this.select(0);
    Window_BigBattleStatus.prototype.show.call(this);
};

Window_BattleActor.prototype.hide = function() {
    Window_BigBattleStatus.prototype.hide.call(this);
    $gameParty.select(null);
};

Window_BattleActor.prototype.select = function(index) {
    Window_BigBattleStatus.prototype.select.call(this, index);
    $gameParty.select(this.actor());
};

Window_BattleActor.prototype.actor = function() {
    return $gameParty.members()[this.index()];
};

// ====== Window_BattleEnemy ======

/**/Window_BattleEnemy.prototype.initialize = function(x, y) {
    this._enemies = [];
    var width = this.windowWidth();
    var height = 236; // this.windowHeight();
    var y = Graphics.boxHeight - height;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.hide();
};

Window_BattleEnemy.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

// ====== Window_BattleItem ======

Window_BattleItem.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 12, y + 9);
        this.drawText(item.name, x + iconBoxWidth + 16, y, width - iconBoxWidth);
    }
};

Window_BattleItem.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x - 7, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};