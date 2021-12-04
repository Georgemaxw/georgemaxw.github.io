/*:
 * @plugindesc Batalha front view.
 * @author George Maxwell
 *
 * @help
 * 
 * 
 * 
 *
 *
 */

//=============================================================================
// 1 - 
//=============================================================================
 
// 1.1 - 

Window_PartyCommand.prototype.lineHeight = function() { return 72; }; 
Window_ActorCommand.prototype.lineHeight = function() { return 72; }; 
//Window_BattleStatus.prototype.lineHeight = function() { return 36; };

Window_PartyCommand.prototype.initialize = function() {
    var x = 0;
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
};

Window_PartyCommand.prototype.windowWidth = function() {
    return 204; // 192 // Value to be symmetric: 204
};

Sprite_Actor.prototype.stepForward = function() {
        this.startMove(0, 0, 10); // this.startMove(-48, 0, 12);
};

Window_ActorCommand.prototype.initialize = function() {
    var x = 0;
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_ActorCommand.prototype.windowWidth = function() {
    return 204; // 192 // Value to be symmetric: 204
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 2;
};

Window_BattleStatus.prototype.standardFontSize = function() {
        return 22;
};

/*Window_BattleStatus.prototype.standardPadding = function() {
    return 13; // 18.
};*/

var BattleStatusWindowWidth = 204;
    
Window_BattleStatus.prototype.windowWidth = function() {
    return BattleStatusWindowWidth;
};

/**/Window_BattleStatus.prototype.windowHeight = function() {
    return 180;
};

/*Window_BattleStatus.prototype.numVisibleRows = function() {
    return 1;
};*/

/*Window_BattleStatus.prototype.maxItems = function() { // BUG: Usar isso buga quando se usa uma técnica com o 'Efeito Especial' de 'Fugir'.
    return 1; // Evita que apareça a seta ao invocar um aliado. // $gameParty.battleMembers().length;
};*/

Window_BattleStatus.prototype.itemHeight = function() { 
    if($gameParty.battleMembers().length === 1){
        return 0.01; // Faz o item (seletor) desaparecer.
    }else if($gameParty.battleMembers().length === 2){
        return 72;
    }else if($gameParty.battleMembers().length === 3){
        return 48;
    }else{
        return 36;
    }
};

Window_BattleStatus.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 6;
    this.contents.fillRect(x - 1, gaugeY + 1, width + 2, 6, this.gaugeBackColor());
    this.contents.gradientFillRect(x - 1 + 1, gaugeY + 2, fillW - 2 + 2, 4, color1, color2);
};

Window_BattleStatus.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    if($gameParty.battleMembers().length <= 2){ 
        this.drawText(TextManager.hpA, x, y, 44); 
    }
    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
};

Window_BattleStatus.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
    this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    if($gameParty.battleMembers().length <= 2){
        this.drawText(TextManager.mpA, x, y, 44);
    }
    this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                           this.mpColor(actor), this.normalColor());
};

Window_BattleStatus.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    if($gameParty.battleMembers().length <= 2){
        this.drawText(TextManager.tpA, x, y, 44);
    }
    this.changeTextColor(this.tpColor(actor));
    this.drawText(actor.tp, x + width - 64, y, 64, 'right');
};

Window_BattleStatus.prototype.drawCurrentAndMax = function(current, max, x, y,
    width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    if($gameParty.battleMembers().length <= 2){
        var valueWidth = this.textWidth('0000');
    }else{
        var valueWidth = 41; // this.textWidth('0000');
    }
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
    this.changeTextColor(color1);
    this.drawText(current, x3, y, valueWidth, 'right');
    this.changeTextColor(color2);
    this.drawText('/', x2, y, slashWidth, 'right');
    this.drawText(max, x1, y, valueWidth, 'right');
    } else {
    this.changeTextColor(color1);
    this.drawText(current, x1, y, valueWidth, 'right');
    }
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    //this.drawActorName(actor, rect.x, rect.y, 150);
    if($gameParty.battleMembers().length === 1){
        this.drawActorIcons(actor, rect.x - 2, rect.y + 110, (5 * 32)); 
    }else if($gameParty.battleMembers().length === 2){
        this.drawActorIcons(actor, rect.x + 129, rect.y, (1 * 32)); 
    }else if($gameParty.battleMembers().length === 3){
        this.drawActorIcons(actor, rect.x - 5, rect.y + 6, (1 * 32)); 
    }else{
        this.drawActorIcons(actor, rect.x - 5, rect.y, (1 * 32)); 
    }
};

Window_BattleStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    if($gameParty.battleMembers().length === 1){
        for (var i = 0; i < 5; i++) {
            this.drawIcon(BackIconIndex, x + Window_Base._iconWidth * i, y + 2);
        }
    }else{
        for (var i = 0; i < 1; i++) {
            this.drawIcon(BackIconIndex, x + Window_Base._iconWidth * i, y + 2);
        }
    }
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    if($gameParty.battleMembers().length === 1){
        this.drawActorHp(actor, rect.x + 170, rect.y - 4, 165);
        this.drawActorMp(actor, rect.x + 170, rect.y + 36 - 4, 165);
        this.drawActorTp(actor, rect.x + 170, rect.y + 72 - 4, 165);  
    }else if($gameParty.battleMembers().length === 2){
        this.drawActorHp(actor, rect.x + 170, rect.y - 4, 120);
        this.drawActorMp(actor, rect.x + 170, rect.y + 36 - 4, 82);
        this.drawActorTp(actor, rect.x + 264, rect.y + 36 - 4, 70);  
    }else if($gameParty.battleMembers().length === 3){
        this.drawActorHp(actor, rect.x + 208, rect.y + 1, 39);
        this.drawActorMp(actor, rect.x + 255, rect.y + 1, 39);
        this.drawActorTp(actor, rect.x + 302, rect.y + 1, 32);  
    }else{
        this.drawActorHp(actor, rect.x + 208, rect.y - 4, 39);
        this.drawActorMp(actor, rect.x + 255, rect.y - 4, 39);
        this.drawActorTp(actor, rect.x + 302, rect.y - 4, 32);  
    }  
};
    
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
        // ...
};

Scene_Battle.prototype.updateWindowPositions = function() {
    var statusX = 0;
    if (BattleManager.isInputting()) {
        statusX = 938 - BattleStatusWindowWidth;
    } else {
        statusX = 938 - BattleStatusWindowWidth;
    }
    if (this._statusWindow.x < statusX) {
        this._statusWindow.x += 16;
        if (this._statusWindow.x > statusX) {
            this._statusWindow.x = statusX;
        }
    }
    if (this._statusWindow.x > statusX) {
        this._statusWindow.x -= 16;
        if (this._statusWindow.x < statusX) {
            this._statusWindow.x = statusX;
        }
    }
};

Window_BattleActor.prototype.initialize = function(x, y) {
    Window_BigBattleStatus.prototype.initialize.call(this);
    this.x = x + 96;
    this.y = y - 191;
    this.openness = 255;
    this.hide();
};



















/*
if($gameParty.battleMembers().length === 1){
    
}else{
    
}
*/











Sprite_Actor.prototype.updateFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    var bitmap = this._mainSprite.bitmap;
    if (bitmap) {
        var motionIndex = this._motion ? this._motion.index : 0;
        var pattern = this._pattern < 3 ? this._pattern : 1;
        var cw = bitmap.width; // bitmap.width / 9;
        var ch = bitmap.height; // bitmap.height / 6;
        var cx = 0; // Math.floor(motionIndex / 6) * 3 + pattern;
        var cy = 0; // motionIndex % 6;
        this._mainSprite.setFrame(cx * cw, cy * ch, cw, ch);
    }
};

Sprite_StateOverlay.prototype.updateFrame = function() {
    if (this._overlayIndex > 0) {
        var w = 3 * 96;
        var h = 3 * 96;
        var sx = this._pattern * w;
        var sy = (this._overlayIndex - 1) * h;
        this.setFrame(sx, sy, w, h);
    } else {
        this.setFrame(0, 0, 0, 0);
    }
};