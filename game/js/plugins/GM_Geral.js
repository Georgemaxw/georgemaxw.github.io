/*:
 * @plugindesc Configurações gerais.
 * @author George Maxwell
 *
 * @help
 * 
 * 1 - Janelas
 *
 *    1.1 - Opacidade
 *    1.2 - Tamanho Horizontal da Janela Opções
 *    1.3 - Alinhamento das Escolhas das Janelas
 *    1.4 - Remover a 'Opções' da Tela de Título
 *    1.5 - Correção de Bug que Ocorre na Janela 'Inserção de Nome' ao Mudar a
 *          Fonte de Texto
 *    1.6 - Adaptando o Tamanho de Algumas Janelas para que na Tela de Toque, o
 *          Scroll Funcione Nestas Janelas                        
 *
 * 2 - Mudar cores dos textos e medidores.
 * 
 * 3 - Medidores de HP, MP, e TP
 * 
 *    3.1 - Bordas
 *    3.2 - Mostrar custos de MP e de TP nas habilidades (ambos ao mesmo tempo).
 *    3.3 - Remover Medidores de HP e MP.
 *
 * 4 - Remover Espaço dos Ícones
 *
 *    4.1 - Habilidades
 *    4.2 - Itens
 * 
 *  5 - Ícone De Fundo Dos Ícones
 * 
 *  6 - Ícone De Ouro
 * 
 */

//=============================================================================
// 0 - Variáveis De Parâmetros
//=============================================================================

var BackIconIndex = 2;
var GoldIconIndex = 1;

//=============================================================================
// 1 - Janelas
//=============================================================================

// 1.1 - Opacidade

/*Window_Base.prototype.standardBackOpacity = function() {
    return 255; // Default: 192. Ouro: 200
};*/

// 1.2 - Tamanho Horizontal da Janela Opções

Window_Options.prototype.windowWidth = function() {
    return 400; //Note: Suggested minimum 300, max 800.
};

// 1.3 - Alinhamento das Escolhas das Janelas

Window_TitleCommand.prototype.itemTextAlign = function() { return 'center'; };
Window_MenuCommand.prototype.itemTextAlign = function() { return 'center'; };
Window_SkillType.prototype.itemTextAlign = function() { return 'center'; };
Window_GameEnd.prototype.itemTextAlign = function() { return 'center'; };
Window_PartyCommand.prototype.itemTextAlign = function() { return 'center'; };
Window_ActorCommand.prototype.itemTextAlign = function() { return 'center'; };

// 1.4 - Remover a 'Opções' da Tela de Título

/*Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    //this.addCommand(TextManager.options,   'options');
};*/

// 1.5 - Correção de Bug que Ocorre na Janela 'Inserção de Nome' ao Mudar a
//       Fonte de Texto

/*
Window_NameEdit.prototype.initialize = function(actor, maxLength) {

    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x - 30, y, width + 60, height); // <(GM) Default: Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = actor;
    this._name = actor.name().slice(0, this._maxLength);
    this._index = this._name.length;
    this._maxLength = maxLength;
    this._defaultName = this._name;
    this.deactivate();
    this.refresh();
    ImageManager.reserveFace(actor.faceName());

};

Window_NameInput.prototype.initialize = function(editWindow) {

    var x = editWindow.x;
    var y = editWindow.y + editWindow.height + 8;
    var width = editWindow.width;
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x + 30, y, width - 60, height); // <(GM) Default: Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._editWindow = editWindow;
    this._page = 0;
    this._index = 0;
    this.refresh();
    this.updateCursor();
    this.activate();

};
*/

// 1.6 - Adaptando o Tamanho de Algumas Janelas para que na Tela de Toque, o
//       Scroll Funcione Nestas Janelas
/*
var GM_HeightOFF = 16; // Espaço retirado da janela para o scroll de uma janela 
                      // que está no canto da tela funcionar (p. ex., para dar
                      // scroll para baixo numa janela que está colada com o
                      // canto de baixo da tela).
                      // GM_HeightOFF_min = 8
                      // GM_HeightOFF_max = 180 - (36 + (2 * LineHeigth) )

Window_ItemList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height - GM_HeightOFF); // Esta janela tb influencia nas de equipamento, loja, e na  
                                                                                           // 'Selecionar Item' (executada em 'Comandos por Eventos').

    this._category = 'none';
    this._data = [];
};

Window_SkillList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height - GM_HeightOFF);
    this._actor = null;
    this._stypeId = 0;
    this._data = [];
};


Window_ShopBuy.prototype.initialize = function(x, y, height, shopGoods) {
    var width = this.windowWidth();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height - (GM_HeightOFF));
    this._shopGoods = shopGoods;
    this._money = 0;
    this.refresh();
    this.select(0);
};

Window_SavefileList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height - GM_HeightOFF); // <(GM) Default: Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.activate();
    this._mode = null;
};
*/



//=============================================================================
// 2 - Mudar cores dos textos e medidores.
//=============================================================================
/*
Window_Base.prototype.normalColor = function() {
    return this.textColor(0);
};*/

Window_Base.prototype.systemColor = function() {
    return this.textColor(22);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(10);
};
/**/
Window_Base.prototype.deathColor = function() {
    return this.textColor(7);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(19);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(29);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(24);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(17);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(6);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(17);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(24);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(25);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(18);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(10);
};

Window_Base.prototype.tpCostColor = function() {
    return this.textColor(10);
};

//=============================================================================
// 3 - Medidores de HP, MP, e TP
//=============================================================================

// 3.1 - Bordas

Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    var gaugeY = y + this.lineHeight() - 8;
    this.contents.fillRect(x, gaugeY - 0.5, width, 6, this.gaugeBackColor());
    this.contents.gradientFillRect(x + 1, gaugeY, fillW - 2, 5, color1, color2);
};

// 3.2 - Mostrar custos de MP e de TP nas habilidades (ambos ao mesmo tempo).

Window_SkillList.prototype.drawItem = function(index) {
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillMpCost(skill) > 0 && this._actor.skillTpCost(skill) === 0) {
        this.changeTextColor(this.mpCostColor());
        this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) === 0 && this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0 && this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        this.drawText(this._actor.skillMpCost(skill), x - 51, y, width, 'right');
        this.changeTextColor(this.tpCostColor());
        this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
    }
};

// 3.3 - Remover Medidores de HP e MP

/*
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    //this.drawGauge(x, y, width, actor.hpRate(), color1, color2); // <- Desenha o medidor.
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
};
*/

/*
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.mpGaugeColor1();
    var color2 = this.mpGaugeColor2();
    //this.drawGauge(x, y, width, actor.mpRate(), color1, color2); // <- Desenha o medidor.
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.mpA, x, y, 44);
    this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                           this.mpColor(actor), this.normalColor());
};
*/
//=============================================================================
// 4 - Remover Espaço dos Ícones (Alteração do plugin rpg_windows.)
//=============================================================================

// 4.1 - Habilidades
/*
Window_SkillList.prototype.drawItem = function(index) {
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x - 32, rect.y, rect.width - costWidth); //Default: this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

// 4.2 - Itens

Window_ItemList.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x - 34, rect.y, rect.width - numberWidth); //Default: this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    var priceWidth = 96;
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x - 32, rect.y, rect.width - priceWidth); //Default: this.drawItemName(item, rect.x, rect.y, rect.width - priceWidth);
    this.drawText(this.price(item), rect.x + rect.width - priceWidth,
                  rect.y, priceWidth, 'right');
    this.changePaintOpacity(true);
};
*/

//=============================================================================
// 5 - Ícone De Fundo Dos Ícones
//=============================================================================

Window_Base.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < 4; i++) {
        this.drawIcon(BackIconIndex, x + Window_Base._iconWidth * i, y + 2);
    }
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * i, y + 2);
    }
};

//=============================================================================
// 6 - Ícone De Ouro
//=============================================================================

Window_Gold.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x + 51, 0, width);
};

Window_Gold.prototype.currencyUnit = function() {
    return this.drawIcon(GoldIconIndex, 172, 2);;
};
