/*
 * File: app/view/ChangeCurrencyPanel.js
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

Ext.define('DecisionLink.view.ChangeCurrencyPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.changeCurrencyPanel',

    requires: [
        'Ext.field.Select',
        'Ext.Spacer',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'selectfield',
                itemId: 'currencySelectField',
                label: 'Currency',
                labelAlign: 'top',
                displayField: 'currency_name',
                store: 'CurrenciesStore',
                valueField: 'id'
            },
            {
                xtype: 'spacer',
                height: 15
            },
            {
                xtype: 'button',
                itemId: 'changeCurrencyButton',
                margin: 5,
                text: 'Change Currency Preference'
            }
        ]
    }

});