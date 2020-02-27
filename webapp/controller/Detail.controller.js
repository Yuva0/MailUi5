sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,UIComponent,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("main.Email2.controller.Detail", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf main.Email2.view.Detail
		 */
		onInit: function () {
			UIComponent.getRouterFor(this).getRoute("Detail").attachPatternMatched(this._onDetailMatched, this);
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		_onDetailMatched : function (oEvent) {
			var sMovieIndex = oEvent.getParameter("arguments").categoryid;
			var aFilter = [],
				// retrieve list control
				oList = this.getView().byId("nlg"),
				// get binding for aggregation 'items'
				oBinding = oList.getBinding("items");
			
			if (sMovieIndex) {
				aFilter.push(new Filter("Type", FilterOperator.EQ, sMovieIndex));
			}
			// apply filter. an empty filter array simply removes the filter
			// which will make all entries visible again
			oBinding.filter(aFilter);
		},
		onPressed: function(oEvent){
			var id = oEvent.getSource().getBindingContext("tempMails").getProperty("id");
			this.oRouter.navTo("DetailDetail",{id:id},true);
		},
		onFilterProducts: function(oEvent){
			var aFilter = [], sQuery = oEvent.getParameter("query"),
				oList = this.getView().byId("nlg"),
				oBinding = oList.getBinding("items");
			if (sQuery) {
				aFilter.push(new Filter("Sender", FilterOperator.Contains, sQuery));
			}
			oBinding.filter(aFilter);
		}


	});

});