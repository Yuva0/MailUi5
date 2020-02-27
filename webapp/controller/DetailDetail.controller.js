sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("main.Email2.controller.DetailDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf main.Email2.view.DetailDetail
		 */
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel("tempMails");
			this.getView().setModel(oModel);
			this.byId("dd").bindElement("/0");
			
			UIComponent.getRouterFor(this).getRoute("DetailDetail").attachPatternMatched(this._onDetailMatched, this);
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		_onDetailMatched : function (oEvent) {
			var mailid = oEvent.getParameter("arguments").id;
			var oModel = this.getOwnerComponent().getModel("tempMails");
			this.getView().setModel(oModel);
			this.byId("dd").bindElement("/" + mailid);
		}

	});

});