/*
 * File: app/view/checkboxitem.js
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

Ext.define('DecisionLink.view.checkboxitem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.checkboxitem',

    requires: [
        'Ext.field.Checkbox'
    ],

    config: {
        padding: 3,
        layout: 'hbox',
        items: [
            {
                xtype: 'checkboxfield',
                flex: 1,
                itemId: 'checkbox',
                labelWidth: '75%',
                labelWrap: true
            }
        ]
    },

    updateRecord: function(record) {
        var checkbox = this.items.items[0];

        if (checkbox) {
            checkbox.setValue(record.data.id);
            checkbox.setLabel(record.data.name);
        }
    }

});