const whatsappUrl =
  "https://wa.me/51916851544?text=Hola%20Alex%2C%20deseo%20recibir%20informaci%C3%B3n%20sobre%20Terra%20Nova%20Residencial.";

const benefits = [
  {
    number: "01",
    title: "Privacidad real",
    text: "Un proyecto residencial de escala íntima, pensado para solo cuatro familias.",
  },
  {
    number: "02",
    title: "Bienestar conectado",
    text: "Cerraduras, cámaras, videoportero e iluminación preparados para acompañar una vida más cómoda.",
  },
  {
    number: "03",
    title: "Diseño funcional",
    text: "Ambientes bien aprovechados, cocinas americanas y espacios que se adaptan a tu día a día.",
  },
  {
    number: "04",
    title: "Entorno tranquilo",
    text: "La calma de Palián con acceso a los servicios y oportunidades de Huancayo.",
  },
];

const flats = [
  { floor: "3.er piso", price: "S/ 220,000" },
  { floor: "4.º piso", price: "S/ 210,000" },
  { floor: "5.º piso", price: "S/ 200,000" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="RU GRUP, ir al inicio">
          <img src="/ru-grup-logo.png" alt="RU GRUP Desarrollo Inmobiliario" />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#proyecto">Terra Nova</a>
          <a href="#unidades">Unidades</a>
          <a href="#financiamiento">Financiamiento</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Conversar con un asesor
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" role="img" aria-label="Vista exterior de Terra Nova Residencial" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow light">Desarrollo inmobiliario en Huancayo</span>
          <h1>Espacios que equilibran tu vida.</h1>
          <p>
            Seguridad, diseño y tecnología para transformar una vivienda en el lugar al que siempre quieras volver.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#proyecto">Conocer Terra Nova</a>
            <a className="button ghost" href="/catalogo-terra-nova.pdf" target="_blank">Ver catálogo</a>
          </div>
        </div>
        <div className="hero-fact">
          <span>Proyecto destacado</span>
          <strong>Terra Nova Residencial</strong>
          <small>Palián · Huancayo</small>
        </div>
      </section>

      <section className="trust-bar" aria-label="Pilares de RU GRUP">
        <span>Confianza</span><i />
        <span>Seguridad</span><i />
        <span>Innovación</span><i />
        <span>Confort</span>
      </section>

      <section className="section about" id="nosotros">
        <div className="section-heading">
          <span className="eyebrow">RU GRUP</span>
          <h2>Construimos bienestar con propósito.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            Desarrollamos viviendas modernas y funcionales que unen la tranquilidad del hogar con las ventajas de la tecnología.
          </p>
          <p>
            Nuestro compromiso es trabajar con seriedad, responsabilidad y calidad para brindar espacios seguros, confortables y pensados alrededor de las personas.
          </p>
          <div className="signature-line">
            <span>El equilibrio perfecto para vivir.</span>
          </div>
        </div>
      </section>

      <section className="project" id="proyecto">
        <div className="project-image">
          <img src="/terra-nova-fachada-v3.png" alt="Nueva fachada 3D proyectada de Terra Nova Residencial" />
          <span className="image-note">Imagen referencial del proyecto</span>
        </div>
        <div className="project-content">
          <img className="terra-logo" src="/terra-nova-logo.png" alt="Terra Nova Residencial" />
          <span className="eyebrow">Proyecto en desarrollo</span>
          <h2>Un refugio urbano para cuatro familias.</h2>
          <p>
            En la Urbanización Los Parques de Huancayo, Terra Nova propone una forma más íntima de vivir: pocas unidades, ambientes cómodos y una ubicación que conecta la calma de Palián con la ciudad.
          </p>
          <div className="project-stats">
            <div><strong>4</strong><span>unidades familiares</span></div>
            <div><strong>70.23 m²</strong><span>área de cada flat</span></div>
            <div><strong>176.42 m²</strong><span>área total del dúplex</span></div>
          </div>
          <a className="text-link" href="#unidades">Explorar unidades <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section units" id="unidades">
        <div className="section-heading compact">
          <span className="eyebrow">Unidades disponibles</span>
          <h2>Elige el espacio que encaja contigo.</h2>
          <p>Precios de lanzamiento sujetos a disponibilidad y confirmación comercial.</p>
        </div>

        <article className="unit-card duplex-card">
          <div className="unit-number">01</div>
          <div className="unit-title">
            <span>Dúplex · 1.er y 2.º piso</span>
            <h3>Amplitud para crecer en familia.</h3>
          </div>
          <div className="unit-details">
            <span>176.42 m²</span>
            <span>4 dormitorios</span>
            <span>3 baños</span>
            <span>Estudio o sala de estar</span>
          </div>
          <div className="unit-price">
            <small>Desde</small>
            <strong>S/ 500,000</strong>
            <span>Cochera opcional: S/ 30,000</span>
          </div>
        </article>

        <div className="flats-layout">
          <article className="unit-card flats-card">
            <div className="unit-number">02—04</div>
            <div className="unit-title">
              <span>Flats · 3.er, 4.º y 5.º piso</span>
              <h3>Funcionalidad, luz y comodidad.</h3>
              <p>
                Dos dormitorios, dormitorio principal con walk-in closet y baño, cocina americana, baño común y patio de servicio.
              </p>
            </div>
            <div className="flat-prices">
              {flats.map((flat) => (
                <div key={flat.floor}>
                  <span>{flat.floor}</span>
                  <strong>{flat.price}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="plans-gallery" aria-label="Planos 3D actualizados de Terra Nova Residencial">
          <figure className="plan-card">
            <div className="plan-image">
              <img src="/terra-nova-duplex-primer-piso-v4.png" alt="Plano 3D actualizado del primer piso del dúplex" />
            </div>
            <figcaption>
              <span>Dúplex</span>
              <strong>1.er piso</strong>
              <small>Distribución 3D actualizada</small>
            </figcaption>
          </figure>
          <figure className="plan-card">
            <div className="plan-image">
              <img src="/terra-nova-duplex-segundo-piso-v4.png" alt="Plano 3D actualizado del segundo piso del dúplex" />
            </div>
            <figcaption>
              <span>Dúplex</span>
              <strong>2.º piso</strong>
              <small>Distribución 3D actualizada</small>
            </figcaption>
          </figure>
          <figure className="plan-card">
            <div className="plan-image">
              <img src="/terra-nova-plano-3er-piso-v2.png" alt="Plano 3D actualizado del departamento del tercer piso" />
            </div>
            <figcaption>
              <span>Departamento flat</span>
              <strong>3.er piso</strong>
              <small>Distribución 3D actualizada</small>
            </figcaption>
          </figure>
          <figure className="plan-card">
            <div className="plan-image">
              <img src="/terra-nova-plano-4to-5to-v2.png" alt="Plano 3D actualizado de los departamentos del cuarto y quinto piso" />
            </div>
            <figcaption>
              <span>Departamentos flat</span>
              <strong>4.º y 5.º piso</strong>
              <small>Distribución 3D actualizada</small>
            </figcaption>
          </figure>
          <figure className="plan-card">
            <div className="plan-image">
              <img src="/terra-nova-nivel-superior-v4.png" alt="Plano 3D actualizado del nivel superior con minidepartamento y terraza diferenciados" />
            </div>
            <figcaption>
              <span>Nivel superior</span>
              <strong>Minidepartamento y terraza</strong>
              <small>Dos zonas diferenciadas</small>
            </figcaption>
          </figure>
        </div>
        <p className="plans-disclaimer">
          Las imágenes muestran la distribución referencial del proyecto. En el nivel superior, el minidepartamento y la terraza son zonas diferenciadas dentro del mismo piso. Los detalles finales se confirman con el asesor comercial.
        </p>
      </section>

      <section className="benefits-section">
        <div className="section-heading compact light-heading">
          <span className="eyebrow light">Una vida mejor pensada</span>
          <h2>Detalles que se sienten todos los días.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section finance" id="financiamiento">
        <div className="finance-copy">
          <span className="eyebrow">Financiamiento</span>
          <h2>Tu nuevo hogar puede comenzar hoy.</h2>
          <p>
            Te orientamos durante el proceso de compra para que puedas evaluar la alternativa que mejor se adapte a ti.
          </p>
          <a className="button primary dark-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            Solicitar orientación
          </a>
        </div>
        <div className="finance-steps">
          <div><span>01</span><strong>Separa con S/ 1,500</strong><p>Reserva la unidad que prefieras.</p></div>
          <div><span>02</span><strong>Inicial desde 20 %</strong><p>Consulta las condiciones aplicables.</p></div>
          <div><span>03</span><strong>Opciones de financiamiento</strong><p>Bancos y Fondo Mivivienda, sujetos a evaluación.</p></div>
        </div>
      </section>

      <section className="location" id="ubicacion">
        <div className="location-card">
          <span className="eyebrow light">Ubicación</span>
          <h2>Cerca de la ciudad.<br />Lejos del ruido.</h2>
          <p>Urbanización Los Parques de Huancayo<br />Calle Antonio de Sucre 158 · Palián</p>
          <a className="text-link light-link" href="https://www.google.com/maps/search/?api=1&query=Calle+Antonio+de+Sucre+158+Palian+Huancayo" target="_blank" rel="noreferrer">
            Ver ubicación referencial <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="location-art" aria-hidden="true">
          <span className="route route-a" /><span className="route route-b" />
          <span className="pin"><i /></span>
          <strong>Palián</strong><small>Huancayo</small>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div>
          <span className="eyebrow">Conversemos</span>
          <h2>Da el primer paso hacia tu nuevo hogar.</h2>
        </div>
        <div className="contact-details">
          <p><span>Asesor</span><strong>Alex Urco</strong></p>
          <p><span>WhatsApp</span><a href={whatsappUrl} target="_blank" rel="noreferrer">916 851 544</a></p>
          <p><span>Correo</span><a href="mailto:albassurinversiones@gmail.com">albassurinversiones@gmail.com</a></p>
        </div>
        <a className="contact-button" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir a Alex por WhatsApp">
          <span>Escribir por WhatsApp</span><b aria-hidden="true">↗</b>
        </a>
      </section>

      <footer>
        <img src="/ru-grup-logo.png" alt="RU GRUP Desarrollo Inmobiliario" />
        <p>Viviendas seguras, modernas y pensadas para vivir mejor.</p>
        <div><a href="#inicio">Volver arriba ↑</a><span>Huancayo · Perú</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <span>WA</span>
      </a>
    </main>
  );
}
