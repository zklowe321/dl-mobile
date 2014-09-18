/*
 * File: app/view/SendAssetPanel.js
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

Ext.define('DecisionLink.view.SendAssetPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.sendassetpanel',

    requires: [
        'Ext.field.Select',
        'Ext.Label',
        'Ext.Container',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        centered: true,
        fullscreen: false,
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'selectfield',
                itemId: 'deliverySelectField',
                margin: 10,
                label: 'Delivery Method',
                labelWidth: '40%',
                labelWrap: true,
                readOnly: false,
                displayField: 'name',
                options: [
                    {
                        name: 'Download',
                        value: 1
                    },
                    {
                        name: 'Email to me',
                        value: 2
                    },
                    {
                        name: 'Send to another email',
                        value: 3
                    },
                    {
                        name: 'Post to Google Drive',
                        value: 4
                    }
                ]
            },
            {
                xtype: 'label',
                centered: false,
                hidden: true,
                html: 'Add emails, comma separated',
                itemId: 'emailTip',
                margin: 10
            },
            {
                xtype: 'textfield',
                hidden: true,
                itemId: 'emailField',
                label: 'Email(s)',
                labelWidth: '40%',
                labelWrap: true
            },
            {
                xtype: 'container',
                itemId: 'buttonContainer',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        flex: 1,
                        itemId: 'sendAssetButton',
                        margin: 5,
                        text: 'Send'
                    },
                    {
                        xtype: 'spacer',
                        width: 15
                    },
                    {
                        xtype: 'button',
                        flex: 1,
                        itemId: 'cancelSendButton',
                        margin: 5,
                        text: 'Cancel'
                    }
                ]
            }
        ]
    }

});