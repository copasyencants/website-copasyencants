import type { Metadata } from "next";
import { Navbar02 } from "@/components/sections/navbar";
import { Footer02 } from "@/components/sections/footer";
import { MenuCard } from "@/components/menu/menu-card";
import { MenuCategory } from "@/components/menu/menu-category";
import { MenuHeader } from "@/components/menu/menu-header";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Carta Completa | Copas y Encants",
  description:
    "Descubre nuestra carta completa: pizzas napolitanas, pizzas blancas, bebidas y cócteles. Pizzabar y cócteles artesanales en Barcelona.",
});

const MENU_DATA = {
  clasicas: [
    { name: "Margherita", description: "Tomate, mozzarella, albahaca fresca", price: "9.50€" },
    { name: "Bufala", description: "Tomate, mozzarella di bufala fresca", price: "11.50€" },
    { name: "Marinara", description: "Tomate, ajo, aceite de oliva, orégano", price: "6.00€" },
    { name: "Diavola", description: "Tomate, mozzarella, pepperoni", price: "11.00€" },
    { name: "Vegetariana", description: "Verduras mixtas, mozzarella", price: "13.00€" },
    { name: "Prosciutto Cotto", description: "Tomate, mozzarella, jamón", price: "11.00€" },
    { name: "Salami", description: "Tomate, mozzarella, salami", price: "11.00€" },
    { name: "4 Estaciones", description: "Tomate, mozzarella, jamón, champiñones", price: "12.50€" },
    { name: "Calzone", description: "Cerrada, queso, jamón, champiñones", price: "13.00€" },
  ],
  blancas: [
    { name: "Mozzarella", description: "Mozzarella fresca, aceite de oliva virgen extra", price: "15.50€" },
    { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, pecorino, provolone ahumado", price: "16.00€" },
    { name: "Prosciutto", description: "Jamón de Parma, rúcula, parmesano", price: "14.50€" },
  ],
  entrantes: [
    { name: "Bruschetta", description: "Pan tostado con tomate y albahaca", price: "4.00€" },
    { name: "Focaccia", description: "Pan tradicional italiano", price: "5.00€" },
    { name: "Pan de Ajo", description: "Pan casero con ajo y perejil", price: "5.50€" },
    { name: "Camarones al Vapor", description: "Camarones frescos al vapor", price: "12.50€" },
  ],
  bebidas: {
    cervezas: [
      { name: "Estrella Damm", price: "3.50€" },
      { name: "Voll Damm", price: "3.75€" },
      { name: "Selección Craft", price: "5.00€" },
    ],
    vinos: [
      { name: "Vino Blanco", price: "4.00€ / copa" },
      { name: "Vino Tinto", price: "4.00€ / copa" },
      { name: "Vino Rosado", price: "3.50€ / copa" },
    ],
    licores: [
      { name: "Gin & Tonic", price: "8.00€" },
      { name: "Ron & Cola", price: "7.50€" },
      { name: "Vodka & Limón", price: "7.00€" },
    ],
    cocteles: [
      { name: "Mojito", description: "Ron, menta, lima y soda", price: "9.00€" },
      { name: "Margarita", description: "Tequila, triple sec y lima", price: "9.50€" },
      { name: "Piña Colada", description: "Ron, coco y piña", price: "9.00€" },
      { name: "Daiquiri", description: "Ron blanco, lima y azúcar", price: "9.00€" },
    ],
  },
  postres: [
    { name: "Pizza Nutella", description: "Base de pizza con Nutella y fresas", price: "9.00€" },
    { name: "Pizza Sicilia", description: "Base de pizza con chocolate y pistacho", price: "8.00€" },
    { name: "Tiramisú", description: "Postre italiano clásico", price: "7.50€" },
  ],
};

export default function CartaPage() {
  return (
    <>
      <Navbar02 />
      <main className="min-h-screen">
        <MenuHeader />

        <div className="container-content py-12 space-y-20">
          {/* Pizzas Clásicas */}
          <section>
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">Pizzas Clásicas</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {MENU_DATA.clasicas.map((item, i) => (
                <MenuCard key={`clasica-${i}`} {...item} />
              ))}
            </div>
          </section>

          {/* Pizzas Blancas */}
          <section>
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">Pizzas Blancas</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {MENU_DATA.blancas.map((item, i) => (
                <MenuCard key={`blanca-${i}`} {...item} />
              ))}
            </div>
          </section>

          {/* Entrantes */}
          <section>
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">Entrantes</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {MENU_DATA.entrantes.map((item, i) => (
                <MenuCard key={`entrante-${i}`} {...item} />
              ))}
            </div>
          </section>

          {/* Bebidas */}
          <section>
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">Bebidas</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-12">
              {/* Cervezas */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Cervezas</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {MENU_DATA.bebidas.cervezas.map((item, i) => (
                    <MenuCard key={`cerveza-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Vinos */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Vinos</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {MENU_DATA.bebidas.vinos.map((item, i) => (
                    <MenuCard key={`vino-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Licores */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Licores</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {MENU_DATA.bebidas.licores.map((item, i) => (
                    <MenuCard key={`licor-${i}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Cócteles */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Cócteles</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {MENU_DATA.bebidas.cocteles.map((item, i) => (
                    <MenuCard key={`coctel-${i}`} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Postres */}
          <section>
            <div className="mb-8">
              <h2 className="text-h2 font-heading font-semibold mb-2">Postres</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {MENU_DATA.postres.map((item, i) => (
                <MenuCard key={`postre-${i}`} {...item} />
              ))}
            </div>
          </section>
        </div>

        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 mt-20">
          <div className="container-content text-center">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Nuestro Compromiso</p>
            <h3 className="font-heading text-2xl font-semibold mb-4">Ingredientes Frescos, Artesanía Auténtica</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada pizza es elaborada artesanalmente con ingredientes frescos de primera calidad.
              Horneadas a 485° en nuestro horno de leña tradicional para sellar el sabor perfecto.
            </p>
          </div>
        </section>
      </main>
      <Footer02 address="Carrer de Bilbao, 18-22, Sant Marti, 08005 Barcelona" />
    </>
  );
}
