/** @odoo-module **/

import { Component, onWillStart, useState } from "@odoo/owl";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class DivisasSystray extends Component {
    static template = "inventario_test.DivisasSystray";
    static components = { Dropdown };
    static props = {};

    setup() {
        this.orm = useService("orm");
        this.state = useState({
            usd: 0.0,
            eur: 0.0,
            loading: false,
        });

        onWillStart(async () => {
            await this.fetchTasas();
        });
    }

    async fetchTasas() {
        this.state.loading = true;
        try {
            const data = await this.orm.call(
                "ferreteria.producto",
                "get_divisas_tasas",
                []
            );
            if (data) {
                this.state.usd = data.usd || 0.0;
                this.state.eur = data.eur || 0.0;
            }
        } catch (error) {
            console.error("Error al consultar tasas de divisas:", error);
        } finally {
            this.state.loading = false;
        }
    }
}

export const divisasSystrayItem = {
    Component: DivisasSystray,
};

// Registramos el widget en la categoría systray de la barra superior
registry.category("systray").add("divisas_systray", divisasSystrayItem, { sequence: 10 });
