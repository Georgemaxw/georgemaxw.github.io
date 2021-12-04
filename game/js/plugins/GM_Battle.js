/*:
 * @plugindesc Configurações da batalha.
 * @author George Maxwell
 *
 * @help
 * 
 * 1 - Janela De Comandos Dos Atores Na Batalha (Window_ActorCommand)
 *
 * 2 - Janelas De Menssagens
 *
 *    2.1 - Remover
 *
 *       2.1.1 - Emergir
 *       2.1.2 - Derrota
 *       2.1.3 - Consequir Fugir
 *
 *    2.2 - Log
 *       
 *       2.2.1 - Cor
 *       2.2.2 - Opacidade
 *       2.2.3 - Padding
 *
 *       2.2.4 - Tempo de Espera
 *
 *              2.2.4.1 - Geral
 *              2.2.4.2 - Ajuste do Timing do Crítico, Contra-Ataque, e Reflexão
 *
 *       2.2.5 - Remover Menssagem
 *
 *              2.2.5.1 - Todas
 *              2.2.5.2 - Nome da Ação
 *              2.2.5.3 - Dano
 *
 *       2.2.6 - Apagar Log de Nome da Ação Antes do Próximo Log Aparecer
 *
 *    2.3 - Img de Dano
 *
 *       2.3.1 - Desligar
 *       2.3.2 - Posição
 *
 * 3 - Tempo de Espera Pré-Animação
 * 
 *      3.1 - Geral
 *      3.2 - Tempo Entre As Repetições Das Skills Com Repetições
 *
 * 4 - Efeitos dos Parâmetros Base Agility & Luck (Alterações do rpg_objects)
 *
 *       4.1 - Agility
 *       4.2 - Luck
 *
 * 5 - Crítico (Alterações do plugin rpg_objects)
 *
 *    5.1 - Acerto
 *    5.2 - Dano
 * 
 * 6 - Ajuste Da Ordem Do Resultado Das Ações
 *
 * 7 - Fórmula Da Chance De Fugir
 *
 */

//=============================================================================
// 1 - Janela De Comandos Dos Atores Na Batalha (Window_ActorCommand)
//=============================================================================

Window_ActorCommand.prototype.numVisibleRows = function() {
    return 2;
};

Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        //this.addAttackCommand();
        this.addSkillCommands();
        //this.addGuardCommand();
        this.addItemCommand();
    }
};

//=============================================================================
// 2 - Janelas De Menssagens
//=============================================================================

// 2.1 - Remover

// 2.1.1 - Emergir

BattleManager.startBattle = function() {
    this._phase = 'start';
    $gameSystem.onBattleStart();
    $gameParty.onBattleStart();
    $gameTroop.onBattleStart();
    //this.displayStartMessages();
};

// 2.1.2 - Derrota

BattleManager.displayDefeatMessage = function() { 
    //$gameMessage.add(TextManager.defeat.format($gameParty.name()));
};

// 2.1.3 - Consequir Fugir

BattleManager.displayEscapeSuccessMessage = function() { 
    //$gameMessage.add(TextManager.escapeStart.format($gameParty.name()));
};

// 2.2 - Log

// 2.2.1 - Cor

Window_BattleLog.prototype.backColor = function() {
    return '#99CAFF' // Ouro: #FFF0A7. Ouro claro: FFFDC8
};

// 2.2.2 - Opacidade

Window_BattleLog.prototype.backPaintOpacity = function() {
    return 0.5 * 255; // Default: 64. P/ a cor preta: 0.38 * 255. Se o texto não tiver contorno: 80. P/ a cor Ouro e Ouro Claro: 188
};

// 2.2.3 - Padding

Window_BattleLog.prototype.standardPadding = function() {
    return 0;
};

// 2.2.4 - Tempo de Espera

// 2.2.4.1 - Geral
/*
Window_BattleLog.prototype.messageSpeed = function() {
    return 48; //Default: 16. Last modification: +8
};
*/

// 2.2.4.2 - Ajuste do Timing do Crítico, Contra-Ataque, e Reflexão

// A) Crítico
/*
Window_BattleLog.prototype.displayCritical = function(target) {
    if (target.result().critical) {
        this.push('wait');
        if (target.isActor()) {
            this.push('addText', TextManager.criticalToActor);

        } else {
            this.push('addText', TextManager.criticalToEnemy);
        }
        this.push('wait');
        this.push('clear');
    }
};

// B) Contra-Ataque

Window_BattleLog.prototype.displayCounter = function(target) {
    this.push('performCounter', target);
    this.push('addText', TextManager.counterAttack.format(target.name()));
    this.push('wait');
};

// C) Reflexão

Window_BattleLog.prototype.displayReflection = function(target) {
    this.push('performReflection', target);
    this.push('addText', TextManager.magicReflection.format(target.name()));
    this.push('wait');
};
*/

// 2.2.5 - Remover Menssagem 

// 2.2.5.1 - Todas

/*
Window_BattleLog.prototype.addText = function(text) {
    //this._lines.push(text);
    this.refresh();
    this.wait();
};
*/

// 2.2.5.2 - Nome da Ação
/*
Window_BattleLog.prototype.displayAction = function(subject, item) {
    var numMethods = this._methods.length;
    if (DataManager.isSkill(item)) {
        if (item.message1) {
            //this.push('addText', subject.name() + item.message1.format(item.name));
        }
        if (item.message2) {
            //this.push('addText', item.message2.format(item.name));
        }
    } else {
        //this.push('addText', TextManager.useItem.format(subject.name(), item.name));
    }
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
};
*/

// ATENÇÃO: Remover o nome das ações ignora o Tempo de Espera entre elas.

// 2.2.5.3 - Dano
/*
Window_BattleLog.prototype.displayHpDamage = function(target) {
    if (target.result().hpAffected) {
        if (target.result().hpDamage > 0 && !target.result().drain) {
            this.push('performDamage', target);
        }
        if (target.result().hpDamage < 0) {
            this.push('performRecovery', target);
        }
        //this.push('addText', this.makeHpDamageText(target));
    }
};
*/

// 2.2.6 - Apagar Log de Nome da Ação Antes do Próximo Log Aparecer
/*
Window_BattleLog.prototype.displayAction = function(subject, item) {
    var numMethods = this._methods.length;
    if (DataManager.isSkill(item)) {
        if (item.message1) {
            this.push('addText', subject.name() + item.message1.format(item.name));
        }
        if (item.message2) {
            this.push('addText', item.message2.format(item.name));
        }
    } else {
        this.push('addText', TextManager.useItem.format(subject.name(), item.name));
    }
    if (this._methods.length === numMethods) {
        this.push('wait');
    }
    //
    this.push('wait');
    this.push('clear');
};
*/

// 2.3 - Img de Dano

// 2.3.1 - Desligar
/*
Sprite_Battler.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    if (this._battler) {
        this.updateMain();
        this.updateAnimation();
        //this.updateDamagePopup();
        this.updateSelectionEffect();
    } else {
        this.bitmap = null;
    }
};
*/

// 2.3.2 - Posição

Sprite_Battler.prototype.setupDamagePopup = function() {
    if (this._battler.isDamagePopupRequested()) {
        if (this._battler.isSpriteVisible()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x + this.damageOffsetX();
            sprite.y = this.y - this.damageOffsetY() - 60; //Default: sprite.y = this.y + this.damageOffsetY();
            sprite.setup(this._battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
        }
        this._battler.clearDamagePopup();
        this._battler.clearResult();
    }
};


//=============================================================================
// 3 - Tempo de Espera Pré-Animação
//=============================================================================

// 3.1 - Geral

Window_BattleLog.prototype.animationBaseDelay = function() {
    return 40; // 8
};

// 3.2 - Tempo Entre As Repetições Das Skills Com Repetições

Window_BattleLog.prototype.animationNextDelay = function() {
    return 55 // 12; 
};

//=============================================================================
// 4 - Efeitos dos Parâmetros Base Agility & Luck (Alterações do rpg_objects)
//=============================================================================

// 4.1 - Agility

Game_Action.prototype.speed = function() {
    var agi = this.subject().agi;
    var speed = agi; // Default: var speed = agi + Math.randomInt(Math.floor(5 + agi / 4));
    if (this.item()) {
        speed += this.item().speed;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed();
    }
    return speed;
};

// 4.2 - Luck

Game_Action.prototype.lukEffectRate = function(target) {
    return 1; // Default: return Math.max(1.0 + (this.subject().luk - target.luk) * 0.001, 0.0);
};

//=============================================================================
// 5 - Crítico
//=============================================================================

// 5.1 - Acerto

Game_Action.prototype.itemCri = function(target) {
    return this.item().damage.critical ? this.subject().cri : 0; // Default: return this.item().damage.critical ? this.subject().cri * (1 - target.cev) : 0;
};

// 5.2 - Dano

Game_Action.prototype.applyCritical = function(damage) {
    return damage * 2; // Default: return damage * 3; 
};

//=============================================================================
// 6 - Ajuste Da Ordem Do Resultado Das Ações
//=============================================================================
/*
Window_BattleLog.prototype.displayActionResults = function(subject, target) {
    if (target.result().used) {
        this.push('pushBaseLine');
        this.push('popupDamage', target);
        this.push('popupDamage', subject);
        this.displayDamage(target);
        this.displayCritical(target);
        this.displayAffectedStatus(target);
        this.displayFailure(target);
        this.push('waitForNewLine');
        this.push('popBaseLine');
    }
};
*/

//=============================================================================
// 7 - Fórmula Da Chance De Fugir
//=============================================================================

BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = 1; // Default: 0.5 * $gameParty.agility() / $gameTroop.agility();
};












//=============================================================================
// ? - ...
//=============================================================================