/*
 * File: app/store/CompetitorsStore.js
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

Ext.define('DecisionLink.store.CompetitorsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DecisionLink.model.Competitors',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'DecisionLink.model.Competitors',
        storeId: 'CompetitorsStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'companies',
                totalProperty: 'totalRecs'
            }
        }
    }
});