import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Office from '../image/office.jpg';
import Ball from '../image/ball.jpg';
import Mountains from '../image/mountains.jpg';
import SunRise from '../image/sunrise.jpg';
import Hex from '../image/hex.jpg';

// CLASS
class Main extends Component {

    // display
    static displayName = "Main"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
        //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {
        let data = (this.props.t('about'))
        return (
            <React.Fragment >
                {/* start codes Header  */}
                <header id="header">
                    <div className="jumbotron text-white">
                        <div className="container">
                            <div className="p-4 text-center">
                                <h1 className="text-uppercase display-3 shadow wow bounceIn animated" data-wow-delay=".50s">Harun Biradlı <br /> software engineer</h1>
                                <h4>Html5, Css3, Js, React JS, Git</h4>
                                <a href="#services_id" className="btn btn-outline-primary shadow">
                                    {this.props.t('services')}
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ends codes Header  */}

                {/* start codes Main  */}
                <main>
                    {/* start services_id */}
                    <section id="services_id">
                        <div className="icon_service">
                            <h2 className='text-center'> Services</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <a href="https://www.linkedin.com/in/harunbiradlioffical/">
                                            <i class="fa-brands fa-linkedin text-center"></i>
                                        </a>
                                        <h4>linkedin</h4>
                                        <p className='line-clamp4'>LinkedIn profilime göz atmak ister misiniz? Buradan benimle bağlantı kurabilir, güncel projelerimi ve deneyimlerimi keşfederken işbirliği olanaklarını değerlendirebilirsiniz.</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <a href="https://github.com/harunbiradlioffical"><i class="fa-brands fa-github"></i></a>
                                        <h4>Github</h4>
                                        <p className='line-clamp4'>GitHub profilimde kodlama projelerimi bulabilirsiniz. Yeni projeler ve açık kaynak katkıları üzerinde çalışırken beni takip edebilir ve projelerime katkıda bulunabilirsiniz.</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <a href="https://www.instagram.com/harunbiradliofficial/"><i class="fa-brands fa-instagram"></i></a>
                                        <h4>Instagram</h4>
                                        <p className='line-clamp4'>Instagram'da günlük yaşamımdan anlık paylaşımları takip edebilir, teknoloji ve yazılım dünyasındaki gözlemlerimi keşfedebilirsiniz. Birlikte daha fazlasını paylaşmak için takip edin!</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <a href="https://www.youtube.com/channel/UC9svKAmdcd-VB6xc9IVgoOw"><i class="fa-brands fa-youtube"></i></a>
                                        <h4>youtube</h4>
                                        <p className='line-clamp4'>YouTube kanalımda teknoloji, yazılım ve eğitim içerikleri paylaşıyorum. Yeni videolarımı izleyerek, konular hakkında bilgi sahibi olabilir ve eğitici içeriklere katılabilirsiniz.</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end services */}

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center'>Blog</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Ball} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">TISAR 3D</h4>
                                                <p class="card-text line-clamp5">Türk islam alimleri arttırılmış gerçeklik uygulaması Github Üzerinde paylaştım. Ayrıca PlayStore Üzerinde
                                                    Yayınladım. Unity C# üzerinden geliştirdim. Tasarımlar için Blender 3D kullandım.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Hex} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Örümcek Robot</h4>
                                                <p class="card-text line-clamp5">Savaşan Karınca (Paraponera CLAVATA) projesi
                                                    olarak Doğu Anadolu bölgesinde Geleceğin Mühendisler
                                                    Tasarımlarını Yarıştırıyor Yarışmasında üniversiteler arasında 1. seçildi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Mountains} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Güvenli Ulak</h4>
                                                <p class="card-text line-clamp5">Raspberry pi üzerinde python kullanarak taşınabilir
                                                    donanım üzerinde kriptoloji üzerine çalıştım.
                                                    TÜBİTAK BİÇABA lisans öğrenci bursiyeri olarak
                                                    projeyi geliştirdim. Çekmiş olduğum ilk
                                                    prototip videosu. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={SunRise} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">EMG EEG Bilekliği</h4>
                                                <p class="card-text line-clamp5">Python ile yapay zeka algoritmaları kullarak çalışan bir
                                                    bileklik tasarladık. 2 kişi takım olarak çalışıtık.
                                                    TEKNOFEST 2023 Sağlıkta Yapay Zeka Yarışması Final
                                                    Sıralamasına girerek 8. olduk.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end blog */}

                    {/* start about_id */}
                    <section id="about_id">
                        <div className="about_service">
                            <h2 className='text-center text-black'> About Me</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                        <i class="fa-solid fa-eject"></i>
                                        <p className='line-clamp15  text-black'> Fırat Üniversitesi Teknoloji Fakültesi Yazılım Mühendisliği Bölümünden mezun oldum. Ortak
                                            kurmuş olduğumuz startup şirketinde bir yıl aktif olarak çalıştım. Yazılım ve donanım projeleri
                                            ağırlıklı olmak üzere mikro denetleyici kartlar ve bilgi güvenliği alanında projeler geliştirdim.
                                            Gömülü sistemlerin geliştirilmesi, test edilmesi, sorun giderilmesi, donanım ve yazılım arasındaki
                                            iletişimin sağlanması, sistemlerin entegrasyonu, veri toplama ve veri analizi konularında yetkinlik
                                            kazandım. TÜBİTAK BİÇABA programı lisans bursiyeri olarak bilgi güvenliği alanında, güvenli
                                            depolama birimleri üzerine çalıştım. Gençlik ve Spor Bakanlığına bağlı Elazığ Gençlik Merkezinde
                                            Deneyap Atölyesi nde eğitimler verdim. Bu eğitimler ile birlikte TÜBİTAK ve Teknofest
                                            yarışmalarında öğrenci danışmanlığında bulundum.</p>
                                        <button className="btn btn-outline-primary text-cente">CV</button>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}


                    {/* start contact_id */}
                    <section id="contact_id">
                        <div className="contact_service">
                            <h2 className='text-center  mb-4 text-dark text-uppercase'> İletişim</h2>
                            <div className="container">
                                <div className="row">
                                    {/* MAP */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe
                                                    className="gmap_iframe"
                                                    frameBorder={0}
                                                    scrolling="no"
                                                    marginHeight={0}
                                                    marginWidth={0}
                                                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=malatya&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                />
                                                <a href="https://embed-googlemap.com">embed google map</a>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}"
                                                }}
                                            />
                                        </div>

                                    </div>

                                    {/* FORM */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <form action="#!" method="post" autoComplete='on'>
                                            {/* Username */}
                                            <div className="form-group mt-4 mb-4">
                                                <label htmlFor="uname">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="uname"
                                                    placeholder="kullanıcı adınız"
                                                    title='kullanıcı adınız'
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="uemail">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="uemail"
                                                    name="uemail"
                                                    placeholder="Email adresiniz"
                                                    title="Email adresiniz"
                                                />
                                            </div>

                                            {/* Subject */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="usubject">Konu</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="usubject"
                                                    name="usubject"
                                                    placeholder="Konu"
                                                    title="Email Konusu"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="exampleFormControlTextarea1">İçerik</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows={3}
                                                    defaultValue={""}
                                                />
                                            </div>

                                            <div className="form-group mt-4 mb-4">
                                                <input type="reset" id="reset" name="reset" value="Temizle" className="btn btn-danger me-3" />
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary">Gönder </button>
                                            </div>

                                        </form>

                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}

                    {/* start backToTop */}
                    <a href="#header" id="backToTop" className="btn btn-outline-primary">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>

                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);