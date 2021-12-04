


Window_BattleStatus.prototype.itemWidth = function() { return 144; };

//Window_BattleStatus.prototype.itemHeight = function() { return this.lineHeight() * 4; };

//Window_BattleStatus.prototype.gaugeAreaWidth = function() {  return 230; };

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    //this.drawActorName(actor, rect.x + 0, rect.y, 150);
    this.drawActorFace(actor, (5.1 * rect.y) + 0, rect.x - 3, 150, 144);
    this.drawActorIcons(actor, rect.x + 156, rect.y, rect.width - 156);
    
    if ($dataSystem.optDisplayTp) {
        this.drawActorHp(actor, (rect.y * 5.1) + 15, rect.x - 10, 120);
        this.drawActorMp(actor, (rect.y * 5.1) + 15, rect.x + 100, 60);
        this.drawActorTp(actor, (rect.y * 5.1) + 75, rect.x + 100, 60);
    } else {
        this.drawActorHp(actor, (rect.y * 5.1) + 15, rect.x - 10, 120);
        this.drawActorMp(actor, (rect.y * 5.1) + 15, rect.x + 100, 120);
    }
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) { };
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) { };

    Window_BattleStatus.prototype.standardFontSize = function() {
        return 22;  // <(GM) Default: 28
    };
