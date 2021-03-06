/*
 * File: app/view/SearchPanel.js
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

Ext.define('DecisionLink.view.SearchPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.searchpanel',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        navView: 'searchpanel',
        layout: 'fit',
        items: [
            {
                xtype: 'container',
                itemId: 'savedPanel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'savedList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>Name: {name}<br/><small>Revenue: ${revenue} M</small>'
                        ],
                        store: 'SavedStore'
                    }
                ]
            }
        ]
    }

});