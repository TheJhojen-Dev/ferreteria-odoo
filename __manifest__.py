# -*- coding: utf-8 -*-
{
    "name": "Ferretería - Inventario Test",
    "version": "18.0.1.0.0",
    "summary": "Simulación de inventario para ferretería con Spreadsheet Dashboard",
    "category": "Inventory",
    "author": "Tecnosoft",
    "website": "https://www.tecnosoft.com",
    "license": "LGPL-3",
    "depends": [
        "base",
        "spreadsheet_dashboard",
        "spreadsheet_dashboard_stock",
    ],
    "data": [
        "security/ir.model.access.csv",
        "data/data.xml",
        "views/views.xml",
        "views/report_ferreteria_template.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "inventario_test/static/src/systray/divisas_systray.xml",
            "inventario_test/static/src/systray/divisas_systray.js",
        ],
    },
    "application": True,
}