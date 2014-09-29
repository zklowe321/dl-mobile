/*
 * File: app/store/CompanyScenariosStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DecisionLink.store.CompanyScenariosStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DecisionLink.model.CompanyScenarios',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'DecisionLink.model.CompanyScenarios',
        storeId: 'CompanyScenariosStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'opptys'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreLoad',
                event: 'load'
            }
        ]
    },

    onJsonpstoreLoad: function(store, records, successful, operation, eOpts) {
        var count = store.data.items.length,
            i;

        for(i = 0; i < count; i++) {
            var temp = store.data.items[i].data.yr1_benefit_sum;

            temp = DecisionLink.app.formatCurrency(temp);

            store.data.items[i].data.yr1_benefit_sum = temp;
        }

        company = Ext.ComponentQuery.query('companyscenariospanel #companyScenariosList')[0];
        company.refresh();
    }

});