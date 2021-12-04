var GM_BigLineHeight = 54;

var GM_drawItemName_IconAdjustY = ((GM_BigLineHeight - 36)/2) + 1;

Window_MenuCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; // <(GM)
Window_BattleSkill.prototype.lineHeight = function() { return GM_BigLineHeight; }; // <(GM)

Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    //this.addOptionsCommand();
    this.addSaveCommand();
    //this.addGameEndCommand();
};

Window_Base.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + GM_drawItemName_IconAdjustY); // <(GM) Default: this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
    }
};

Window_SkillList.prototype.maxCols = function() {
    return 3;
};