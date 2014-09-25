/*
 * File: app/store/ScenarioIndustriesStore.js
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

Ext.define('DecisionLink.store.ScenarioIndustriesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DecisionLink.model.ScenarioIndustries',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'DecisionLink.model.ScenarioIndustries',
        storeId: 'ScenarioIndustriesStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'industries'
            }
        }
    }
});