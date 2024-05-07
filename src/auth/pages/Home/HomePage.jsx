
import whatsapp from "../../../assets/img/whatsapp.png";
import footer from "../../../assets/img/footer-bg.jpg";
import imagePart from "../../../assets/img/quote.png";
import bl1 from "../../../assets/img/bl1.jpg";
import bl2 from "../../../assets/img/bl2.jpg";
import bl3 from "../../../assets/img/bl3.jpg";
import bl4 from "../../../assets/img/bl4.jpg";
import bg15 from "../../../assets/img/bg15.jpg";
import i3 from "../../../assets/img/3.jpg";
import s1 from "../../../assets/img/h6-sl1.jpg";
import s2 from "../../../assets/img/h6-sl2.jpg";
import "../../../assets/stylesHome.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HomeNavbar } from "../../../components";

export const HomePage = () => {
    
    
    return (
        <>
            <body className="home-six">
                <a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier" style={{ bottom: 10, position: 'fixed', left: 20, zIndex: 9999 }}>
                    <img src={whatsapp} style={{ height: 90 }} />
                </a>
                <div className="full-width-header header-style-4">
                    <div className="toolbar-area hidden-md">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="toolbar-contact">
                                        <ul>
                                            <li><i className="flaticon-email"></i><a href="mailto:contacto@traksupplier.com">contacto@traksupplier.com</a></li>
                                            <li><i className="flaticon-call"></i><a href="tel:+525543780852"><b> 55 4378 0852</b></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="toolbar-sl-share">
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header id="rs-header" className="rs-header">
                        <HomeNavbar />
                    </header>
                </div>

               
                    <div id="rs-header"  className="rs-slider slider6" >
                        <OwlCarousel responsive={{ 100: { items: 1, }, 600: { items: 1, }, 1000: { items: 1, } }} style={{ width: '100%' }} dots={false} autoplay
                            autoplayTimeout={3000}
                            loop>
                            <div className="slider slide1" style={{
                                backgroundImage: `url(${s1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                            }}>
                                <div className="container">
                                    <div className="content-part">
                                        <div className="slider-des">
                                            <div className="sl-subtitle mb-16">Bienvenido a </div>
                                            <h1 className="sl-title mb-18">¡Trak Supplier!</h1>
                                            <div className="sl-desc">Tu aliado en el abastecimiento de insumos para oficina y residenciales</div>
                                        </div>
                                        <div className="slider-bottom mt-40">
                                            <ul>
                                                <li><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier" className="readon sl style6">Contacta a un agente</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider slide2" style={{
                                backgroundImage: `url(${s2})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                                <div className="container">
                                    <div className="content-part">
                                        <div className="slider-des">
                                            <h1 className="sl-title">Provisión<span> de suministros</span></h1>
                                        </div>
                                        <div className="slider-bottom mar_2m">
                                            <ul>
                                                <li><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier" className="readon sl style6">Contáctanos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>



                    </div>

                   
                
                <div id="rs-about" className="rs-services style7 pt-20 pb-90 lg-pb-85 md-pb-71 sm-pt-0" >
                        <div className="container">
                            <div data-fx="slow-up" className="sec-title style2 mb-60 md-mb-42">
                                <div className="first-half">
                                    <div className="sub-title green">En Trak Supplier</div>
                                    <h2 className="title mb-0">Entendemos la importancia de contar con suministros esenciales...</h2>
                                </div>
                                <div className="last-half">
                                    <p className="desc mb-0 pr-10">Para mantener tu lugar de trabajo o residencia en óptimas condiciones.
                                        Nos especializamos en brindar un servicio eficiente y conveniente de abastecimiento de insumos que incluyen productos de limpieza, mantenimiento, papelería, promocionales y mucho más.

                                    </p>
                                </div>
                            </div>
                            <div className="row gutter-16">
                                <div data-fx="slow-up" className="col-lg-3 col-sm-6 md-mb-16">
                                    <div className="services-wrap">
                                        <div className="icon-part">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-star" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M11 21h-5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3.5" />
                                                <path d="M16 3v4" />
                                                <path d="M8 3v4" />
                                                <path d="M4 11h11" />
                                                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                            </svg>
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title"><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier">Eficiencia Operacional</a></h4>
                                            <div className="desc">Centraliza la gestión de compras, ahorrando tiempo y esfuerzo en las empresas o residencias.</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-fx="slow-up" className="col-lg-3 col-sm-6 md-mb-16 ">
                                    <div className="services-wrap">
                                        <div className="icon-part">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M3 21l18 0" />
                                                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                                                <path d="M5 21l0 -10.15" />
                                                <path d="M19 21l0 -10.15" />
                                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                                            </svg>
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title"><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier">Conveniencia</a></h4>
                                            <div className="desc"> Ofrece múltiples productos y servicios en un solo lugar, agilizando la adquisición de suministros.</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-fx="slow-up" className="col-lg-3 col-sm-6 xs-mb-16 ">
                                    <div className="services-wrap">
                                        <div className="icon-part">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pig-money" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M15 11v.01" />
                                                <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                                <path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" />
                                            </svg>
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title"><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier">Optimización de Costos</a></h4>
                                            <div className="desc"> Posibles descuentos por volumen y precios competitivos al usar un proveedor único.</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-fx="slow-up" className="col-lg-3 col-sm-6 ">
                                    <div className="services-wrap">
                                        <div className="icon-part">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shield-star" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M11.143 20.743a12 12 0 0 1 -7.643 -14.743a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.504 1.716 .614 3.505 .343 5.237" />
                                                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                            </svg>
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title"><a href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier">Mejora del Espacio</a></h4>
                                            <div className="desc">Suministros de alta calidad garantizan un ambiente óptimo, mejorando la productividad y el bienestar.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-fx="slow-up" className="more-btn mt-61 md-mt-40 text-center ">
                                ¡Reserva una cita hoy y descubre cómo podemos hacer tu vida más fácil y productiva!
                            </div>
                        </div>
                    </div>

                    <div id="rs-services" className="rs-about style3 pb-100 md-pb-80">
                        <div className="container">
                            <div className="row y-middle">
                                <div className="col-lg-6 pr-85 lg-pr-50 md-pr-15">
                                    <div data-fx="slow-up" className="sec-title mb-24 ">
                                        <div className="sub-title green">Nuestros Servicios</div>
                                        <h2 className="title mb-21">Ofrecemos dos modalidades de servicio <br />
                                            flexibles para adaptarnos a tus necesidades:
                                        </h2>
                                        <div style={{ fontWeight: 600, fontSize: 20 }}>Servicio a Demanda:</div>
                                    </div>
                                    <ul className="listing-style mb-40">
                                        <li>
                                            Sistema inteligente el cual analiza tu consumo pasado y presente para prever tus necesidades de insumos semanalmente.
                                        </li>
                                        <li>Prevee tus necesidades de insumos semanalmente.</li>
                                        <li>Recíbe los consumibles que necesitas en el momento adecuado.</li>
                                        <li>Despreocupate por quedarte sin suministros.</li>
                                    </ul>

                                    <div className="btn-part">
                                        <a className="readon" href="https://api.whatsapp.com/send?phone=525543780852&text=Quiero%20Informes%20de%20Trak%20Supplier">Contacta a un agente</a>
                                    </div>


                                </div>
                                <div className="col-lg-6 md-order-first md-mb-30">
                                    <div className="mt-30">
                                        <img style={{ width: 550 }} className="mb-20" src={i3} alt="" />
                                    </div>
                                    <div className="row gutter-20">
                                        <div className="col-6">
                                            <div style={{ fontWeight: 600, fontSize: 20 }} className="desc">Membresía:</div>
                                        </div>
                                        <ul className="listing-style mb-40">
                                            <li>
                                                Conviértete en miembro de Trak Supplier
                                            </li>
                                            <li>Disfruta de un servicio personalizado y eficiente. </li>
                                            <li>Asignación de uno de nuestros ejecutivos especializados para una guía constante. </li>
                                            <li>Coordinación y administración de tus pedidos.</li>
                                            <li>Nos aseguramos de que siempre tengas lo necesario.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                <div id="rs-blog" style={{
                    backgroundImage: `url(${bg15})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} className="rs-whychooseus style2 bg15 pt-92 pb-100 md-pt-72 md-pb-80">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title mb-50 md-mb-43 center_txt">
                                    <div className="sub-title green">¿Cómo Funciona?
                                    </div>
                                    <h2 className="title mb-21">Nosotros nos ocupamos<br /> de los detalles</h2>
                                    <div className="desc"><b>Tu comodidad y eficiencia en 4 sencillos pasos <br /> para cubrir todas tus necesidades de suministros</b></div>
                                </div>
                                <div className="row gutter-16">
                                    <div className="col-md-3 sm-mb-30 ">
                                        <div className="rs-counter-list ">
                                            <div className="icon-part">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-message" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
                                                    <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
                                                    <path d="M10 18v.01" />
                                                </svg>
                                            </div>
                                            <div className="counter-text">
                                                <div className="rs-count">1</div>
                                                <span className="title">Contacta a nuestro equipo
                                                </span>
                                                <p>
                                                    Ponte en contacto con uno de nuestros ejecutivos y cuéntanos sobre tus necesidades y preferencias.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 sm-mb-30 ">
                                        <div className="rs-counter-list ">
                                            <div className="icon-part">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pocket" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
                                                    <path d="M8 11l4 4l4 -4" />
                                                </svg>
                                            </div>
                                            <div className="counter-text">
                                                <div className="rs-count">2</div>
                                                <span className="title">Análisis y Evaluación</span>
                                                <p >
                                                    Realizamos un análisis de tu consumo para determinar la cantidad y frecuencia de insumos que necesitas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 ">
                                        <div className="rs-counter-list ">
                                            <div className="icon-part">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-package-export" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                                                    <path d="M12 12l8 -4.5" />
                                                    <path d="M12 12v9" />
                                                    <path d="M12 12l-8 -4.5" />
                                                    <path d="M15 18h7" />
                                                    <path d="M19 15l3 3l-3 3" />
                                                </svg>
                                            </div>
                                            <div className="counter-text">
                                                <div className="rs-count">3</div>
                                                <span className="title">Programación de Entregas</span>
                                            </div>
                                            <p >
                                                Programamos entregas semanales de tus consumibles, garantizando que siempre tengas lo necesario. </p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 ">
                                        <div className="rs-counter-list ">
                                            <div className="icon-part">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-premium-rights" width="76" height="76" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff8b00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                    <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
                                                    <path d="M12 7v2" />
                                                    <path d="M12 15v2" />
                                                </svg>
                                            </div>
                                            <div className="counter-text">
                                                <div className="rs-count">4</div>
                                                <span className="title">Pago Fácil y Seguro</span>
                                                <p >Aceptamos múltiples métodos de pago para tu comodidad y seguridad en cada transacción.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="rs-beneficios" className="rs-blog style1 modify2 green pt-100 pb-70 md-pt-72 md-pb-50">
                    <div className="container">
                        <div data-fx="slow-up" className="sec-title style2 mb-92 md-mb-42 ">
                            <div className="first-half">
                                <div className="sub-title green">Beneficios</div>
                                <h2 className="title mb-0">Beneficios de elegir Trak Supplier</h2>
                            </div>
                            <div className="last-half">
                                <p className="desc mb-0 pr-10">Más que un simple proveedor de suministros, somos tu aliado estratégico comprometido en optimizar la eficiencia y productividad de tu empresa o residencia, a través de una gestión de suministros personalizada y altamente eficaz.</p>
                            </div>
                        </div>
                        <OwlCarousel responsive={{ 100: { items: 1, }, 600: { items: 2, }, 1000: { items: 3, } }} className="rs-carousel owl-carousel " style={{ padding: 10 }} loop margin={10} >
                            <div className="blog-wrap">
                                <div className="img-part">
                                    <img src={bl1} alt="" />

                                </div>
                                <div className="content-part">
                                    <a className="categories">Eficiencia</a>
                                    <h3 className="title">Entregas puntuales</h3>
                                    <p style={{ color: 'black' }}>Nos anticipamos a tus necesidades y garantizamos entregas puntuales para que no tengas interrupciones en tus labores diarias.
                                    </p>

                                </div>
                            </div>
                            <div className="blog-wrap">
                                <div className="img-part">
                                    <img src={bl2} alt="" />

                                </div>
                                <div className="content-part">
                                    <a className="categories">Ahorro de Tiempo y Energía</a>
                                    <h3 className="title">Mejores resultados en menor tiempo</h3>
                                    <p style={{ color: 'black' }}>Simplificamos el proceso de abastecimiento para que puedas enfocarte en lo que realmente importa.
                                    </p>

                                </div>
                            </div>
                            <div className="blog-wrap">
                                <div className="img-part">
                                    <img src={bl3} alt="" />

                                </div>
                                <div className="content-part">
                                    <a className="categories">Personalización</a>
                                    <h3 className="title">Capacidad de adaptación</h3>
                                    <p style={{ color: 'black' }}>Adaptamos nuestro servicio a tus necesidades específicas, brindándote una experiencia única.
                                    </p>

                                </div>
                            </div>
                            <div className="blog-wrap">
                                <div className="img-part">
                                    <img src={bl4} alt="" />

                                </div>
                                <div className="content-part">
                                    <a className="categories">Variedad de Productos</a>
                                    <h3 className="title">Amplia gama de insumos para oficina y residenciales</h3>
                                    <p style={{ color: 'black' }}>Ofrecemos una amplia gama de insumos para oficina y residenciales, asegurando que encuentres todo en un solo lugar.</p>

                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>

                {/* custom card style */}
                <div data-fx="slow-up" id="rs-contact" className="rs-quote style1 pt-92 md-pt-72 md-pb-80 " style={{ paddingBottom: 40 }}>
                    <div className="container">
                        <div className="sec-title style2 mb-92 md-mb-42">
                            <div className="first-half">
                                <div className="sub-title green">Contacto</div>
                                <h2 className="title mb-0">No esperes más para tener tus insumos al alcance de tu mano. </h2>
                            </div>
                            <div className="last-half">
                                <p className=" mb-0 pr-10">Contacta a uno de nuestros ejecutivos y descubre cómo Trak Supplier puede facilitar tu vida cotidiana.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row md-row-container">
                        <div className="col-lg-6 pr-40 md-pr-15 md-mb-30">
                            <div className="image-part text-right">
                                <img src={imagePart} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pr-40 md-pr-15 md-mb-30" >
                            <div style={{ textAlign: 'center', fontWeight: 600, margin: 20 }} id="result"></div>
                            <form id="contacto-form" className="quote-form" >
                                <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" />
                                <div className="form-ctrl mb-20">
                                    <label>Ingresa tu nombre</label>
                                    <input type="text" name="name" placeholder="Nombre" required />
                                </div>
                                <div className="form-ctrl mb-20">
                                    <label>Ingresa tu email</label>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="form-ctrl mb-20">
                                    <label>Ingresa tu teléfono </label>
                                    <input type="phone" name="phone" placeholder="Teléfono" required />
                                </div>

                                <div className="submit-btn">
                                    <button type="submit">Contactar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer id="rs-footer" style={{
                    backgroundImage: `url(${footer})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundrepeat: 'no-repeat',
                    padding: 24,
                    borderRadius: 3
                }}>
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row y-middle">
                                <div className="col-lg-6 col-md-8 sm-mb-21">
                                    <div className="copyright">
                                        <p>© Copyright 2023 <b>Trak Supplier</b>. Todos los derechos reservados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </>
    );
};
