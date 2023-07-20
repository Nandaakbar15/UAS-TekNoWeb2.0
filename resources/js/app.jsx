import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: (name) => {
        if (name.startsWith("aboutus/")) {
            return resolvePageComponent(
                `./Pages/AboutUs/${name}.jsx`,
                import.meta.glob("./Pages/AboutUs/*.jsx")
            );
        } else if (name.startsWith("barang/")) {
            return resolvePageComponent(
                `./Pages/Barang/${name}.jsx`,
                import.meta.glob("./Pages/Barang/*.jsx")
            );
        } else if (name.startsWith("mediasosial/")) {
            return resolvePageComponent(
                `./Pages/MediaSosial/${name}.jsx`,
                import.meta.glob("./Pages/MediaSosial/*.jsx")
            );
        } else if (name.startsWith("pelanggan/")) {
            return resolvePageComponent(
                `./Pages/Pelanggan/${name}.jsx`,
                import.meta.glob("./Pages/Pelanggan/*.jsx")
            );
        }

        // Add more conditions for other page folders/patterns

        // Default fallback
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        );
    },
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init();
