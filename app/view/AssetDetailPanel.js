/*
 * File: app/view/AssetDetailPanel.js
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

Ext.define('DecisionLink.view.AssetDetailPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.assetdetailpanel',

    requires: [
        'Ext.Spacer',
        'Ext.field.TextArea',
        'Ext.Label',
        'Ext.Img'
    ],

    config: {
        items: [
            {
                xtype: 'textfield',
                itemId: 'assetNameField',
                label: 'Name',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textareafield',
                itemId: 'assetDescriptionField',
                label: 'Description',
                labelWidth: '40%',
                readOnly: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'label',
                html: 'Click icon to download:'
            },
            {
                xtype: 'image',
                centered: false,
                height: 40,
                itemId: 'downloadImage',
                margin: 10,
                width: 40,
                src: 'http://test.decisionlink.com/images/logo.png'
            }
        ]
    }

});