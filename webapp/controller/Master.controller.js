sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,Sorter,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("main.Email2.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf main.Email2.view.Master
		 */
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		showInbox: function(oEvent){
			this.oRouter.navTo("Detail",{categoryid:"Inbox"},true);
		},
		showDrafts: function(oEvent){
			this.oRouter.navTo("Detail",{categoryid:"Draft"},true);
		},
		sentItems: function(oEvent){
			this.oRouter.navTo("Detail",{categoryid:"Sent"},true);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf main.Email2.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf main.Email2.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf main.Email2.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});