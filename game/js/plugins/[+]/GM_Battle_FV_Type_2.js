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

Window_PartyCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; 
Window_ActorCommand.prototype.lineHeight = function() { return GM_BigLineHeight; }; 

Window_PartyCommand.prototype.initialize = function() {
    var x = (Graphics.boxWidth - this.windowWidth())/2;
    var y = (Graphics.boxHeight - this.windowHeight())/2 - 20;
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
};

Sprite_Actor.prototype.stepForward = function() {
    if($gameParty.battleMembers().length === 1){
        this.startMove(0, 0, 12);
    }else{
        this.startMove(0, -11, 12);
    }
};

Window_ActorCommand.prototype.initialize = function() {
    var x = (Graphics.boxWidth - this.windowWidth())/2;
    var y = (Graphics.boxHeight - this.windowHeight())/2 - 20;
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 2;
};

/**/Window_BattleStatus.prototype.standardPadding = function() {
    return 13; // 18.
};
    
Window_BattleStatus.prototype.windowWidth = function() {
    if($gameParty.battleMembers().length === 1){
        return Graphics.boxWidth - (2 * 192) + 32 - 2;
    }else{
        return Graphics.boxWidth;
    }
};

/*Window_BattleStatus.prototype.windowHeight = function() {
    return 62;
};*/

Window_BattleStatus.prototype.numVisibleRows = function() {
    return 1;
};

/*Window_BattleStatus.prototype.maxItems = function() { // BUG: Usar isso buga quando se usa uma técnica com o 'Efeito Especial' de 'Fugir'.
    return 1; // Evita que apareça a seta ao invocar um aliado. // $gameParty.battleMembers().length;
};*/

Window_BattleStatus.prototype.itemHeight = function() { 
    if($gameParty.battleMembers().length === 1){
        return 0.001; // Faz o item (seletor) desaparecer.
    }else{
        return 36;
    }
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    //this.drawActorName(actor, rect.x, rect.y, 150);
    if($gameParty.battleMembers().length === 1){
        this.drawActorIcons(actor, rect.x + 2, rect.y, 64); 
    }else{
        this.drawActorIcons(actor, rect.x -2, rect.y, 32); 
    }
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    if($gameParty.battleMembers().length === 1){
        this.drawActorHp(actor, rect.x - 132, rect.y, 172);
        this.drawActorMp(actor, rect.x + 56, rect.y, 172);
        this.drawActorTp(actor, rect.x + 244, rect.y, 85);    
    }else{
        // Falta fazer!     
        this.drawActorHp(actor, rect.x - 132, rect.y, 172);
        this.drawActorMp(actor, rect.x + 56, rect.y, 172);
        this.drawActorTp(actor, rect.x + 244, rect.y, 85);    
    }
};
    
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    if($gameParty.battleMembers().length === 1){
        this.drawActorHp(actor, rect.x - 132, rect.y, 222);
        this.drawActorMp(actor, rect.x + 106, rect.y, 222);    
    }else{
        // Falta fazer!     
    }
};

Scene_Battle.prototype.updateWindowPositions = function() {
    var statusX = 0;
    if (BattleManager.isInputting()) {
        if($gameParty.battleMembers().length === 1){
            statusX = this._partyCommandWindow.width - 16 + 1; // Posição principal.
        }else{
            statusX = 0;
        }
    } else {
        if($gameParty.battleMembers().length === 1){
            statusX = Graphics.boxWidth - 279; // this._partyCommandWindow.width / 2;
        }else{
            statusX = 0;
        }
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