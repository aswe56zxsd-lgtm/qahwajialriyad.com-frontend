'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a href="#main-hero" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] focus:bg-royal-emerald focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        تخطي إلى المحتوى الرئيسي
      </a>

      {/* Header */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-4 md:px-0 pointer-events-none" role="banner">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <nav className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl shadow-royal-emerald/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/95" role="navigation" aria-label="التنقل الرئيسي">
            <a href="#" className="flex items-center gap-2 sm:gap-3" aria-label="قهوجيين الرياض - الصفحة الرئيسية">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-royal-emerald text-antique-gold rounded-full flex items-center justify-center relative overflow-hidden group" aria-hidden="true">
                <div className="absolute inset-0 bg-antique-gold/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <span className="material-symbols-outlined relative z-10 text-lg sm:text-xl" aria-hidden="true">coffee</span>
              </div>
              <span className="font-serif text-base sm:text-xl font-bold text-royal-emerald hidden xs:block sm:block">قهوجيين الرياض</span>
            </a>
            <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 rounded-full p-1 border border-gray-200/50" role="menubar">
              <a className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-royal-emerald hover:shadow-sm transition-all duration-300" href="#" role="menuitem">الرئيسية</a>
              <a className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-royal-emerald hover:shadow-sm transition-all duration-300" href="#services" role="menuitem">خدماتنا</a>
              <a className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-royal-emerald hover:shadow-sm transition-all duration-300" href="#gallery" role="menuitem">معرض الصور</a>
              <a className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-royal-emerald hover:shadow-sm transition-all duration-300" href="#locations" role="menuitem">المناطق</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+966506451744"
                className="bg-royal-emerald hover:bg-deep-maroon text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-royal-emerald/20 flex items-center gap-1 sm:gap-2 group"
                aria-label="حجز موعد - اتصل بنا"
              >
                <span className="hidden xs:inline sm:inline">حجز موعد</span>
                <span className="xs:hidden sm:hidden">حجز</span>
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform hidden sm:inline" aria-hidden="true">arrow_back</span>
              </a>
              <button
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center text-royal-emerald hover:bg-gray-200 transition-colors"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-3 sm:mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-xl border border-white/40" role="menu" aria-label="القائمة المتنقلة">
              <div className="flex flex-col gap-1 sm:gap-2">
                <a className="px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-royal-emerald/10 hover:text-royal-emerald transition-all" href="#" onClick={closeMobileMenu} role="menuitem">الرئيسية</a>
                <a className="px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-royal-emerald/10 hover:text-royal-emerald transition-all" href="#services" onClick={closeMobileMenu} role="menuitem">خدماتنا</a>
                <a className="px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-royal-emerald/10 hover:text-royal-emerald transition-all" href="#gallery" onClick={closeMobileMenu} role="menuitem">معرض الصور</a>
                <a className="px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-royal-emerald/10 hover:text-royal-emerald transition-all" href="#locations" onClick={closeMobileMenu} role="menuitem">المناطق</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="main-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 sm:pb-20 pt-24 sm:pt-32" aria-labelledby="hero-title">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            alt="قهوة عربية أصيلة - خدمات ضيافة قهوجيين الرياض"
            className="w-full h-full object-cover"
            src="/images/1.webp"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{ objectPosition: 'center' }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQFESExBhJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2a9vLm3xUEEdzMsYhUKokYADX4KzPkk88Fy5juJvVum6I/KUoH//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-royal-emerald/40 to-royal-emerald/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cream-paper via-transparent to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block p-1 border border-antique-gold/30 rounded-xl sm:rounded-2xl backdrop-blur-sm bg-white/5 mb-6 sm:mb-8 animate-float" aria-hidden="true">
            <div className="border border-antique-gold/50 rounded-lg sm:rounded-xl px-4 sm:px-8 py-1.5 sm:py-2 bg-black/20 text-antique-gold flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-antique-gold animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium tracking-wide">الضيافة السعودية الأصيلة</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-antique-gold animate-pulse"></span>
            </div>
          </div>
          <h1 id="hero-title" className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            <span className="block text-stroke text-transparent mb-1 sm:mb-2 opacity-80 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">قهوجي الرياض</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-antique-gold via-white to-antique-gold">قهوجيين الرياض</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans border-r-2 border-antique-gold pr-4 sm:pr-6 text-right">
            قهوجيين وصبابين الرياض بخدمة ضيافة راقية لجميع المناسبات. نمزج بين عراقة الماضي وأناقة الحاضر في كل فنجان.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="tel:+966506451744" className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-antique-gold text-rich-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)]" aria-label="اتصل بنا الآن">
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" aria-hidden="true"></div>
              <span className="relative flex items-center justify-center gap-2">
                اتصل بنا الآن
                <span className="material-symbols-outlined" aria-hidden="true">call</span>
              </span>
            </a>
            <a href="https://wa.me/966506451744" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all backdrop-blur-md flex items-center justify-center gap-2" aria-label="تواصل معنا عبر واتساب">
              تواصل واتساب
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform" aria-hidden="true">chat</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70" aria-hidden="true">
          <span className="text-white text-[10px] sm:text-xs tracking-widest uppercase">اكتشف المزيد</span>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-antique-gold to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-cream-paper overflow-hidden" aria-labelledby="about-title">
        <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-antique-gold/10 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-0.5 bg-deep-maroon" aria-hidden="true"></span>
                <span className="text-deep-maroon font-bold tracking-wider text-xs sm:text-sm uppercase">لمسة فنية</span>
              </div>
              <h2 id="about-title" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-royal-emerald mb-6 sm:mb-8 leading-snug">
                عندما تصبح الضيافة <br/>
                <span className="text-antique-gold">لوحة فنية متكاملة</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-justify pl-4 border-l-2 border-gray-200">
                في &quot;قهوجيين الرياض&quot;، لا نقدم القهوة فحسب، بل نصنع تجربة حسية متكاملة. كل صبّة قهوة هي إيقاع، وكل تمرة تقدم هي تحفة، وكل ابتسامة من فريقنا هي دعوة للفرح. نحن نؤمن بأن الضيافة فن لا يتقنه إلا من ورث أسراره وعشق تفاصيله.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                <article className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:border-antique-gold/50 transition-colors group">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-royal-emerald mb-2 group-hover:scale-110 transition-transform block" aria-hidden="true">diversity_3</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-rich-black">500+</h3>
                  <p className="text-xs sm:text-sm text-gray-500">مناسبة ملكية</p>
                </article>
                <article className="bg-royal-emerald p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-royal-emerald/20 text-white transform translate-y-2 sm:translate-y-4">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-antique-gold mb-2 block" aria-hidden="true">workspace_premium</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">100%</h3>
                  <p className="text-xs sm:text-sm text-white/80">جودة استثنائية</p>
                </article>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-full overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto aspect-square border-4 sm:border-8 border-white shadow-2xl">
                <Image
                  alt="صبّ القهوة العربية - فن الضيافة السعودية"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="/images/2.webp"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 border-2 border-dashed border-antique-gold rounded-full scale-105 sm:scale-110 animate-spin-slow max-w-sm sm:max-w-md lg:max-w-full mx-auto" aria-hidden="true"></div>
              <figure className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl z-20 max-w-[200px] sm:max-w-xs transform rotate-3">
                <blockquote className="font-serif text-royal-emerald text-sm sm:text-lg text-center leading-relaxed">&quot;القهوة هي لغة الكرم التي لا تحتاج إلى ترجمة&quot;</blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative clip-slant-left" id="services" aria-labelledby="services-title">
        <div className="absolute inset-0 bg-pattern-islamic opacity-40" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 id="services-title" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-royal-emerald mb-4">خدماتنا الفاخرة</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-antique-gold to-transparent mx-auto" aria-hidden="true"></div>
          </header>
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {/* Service 1 */}
            <article className="group relative grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-emerald/80 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" aria-hidden="true"></div>
                  <Image
                    alt="تجهيز المجالس والمناسبات - خدمات قهوجيين الرياض"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/3.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur text-royal-emerald p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg z-20" aria-hidden="true">
                    <span className="material-symbols-outlined text-2xl sm:text-4xl">chair_alt</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:-ml-12 lg:mt-12 bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl relative z-20 border-r-4 border-antique-gold transform transition-transform group-hover:-translate-y-2">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-royal-emerald mb-3 sm:mb-4">تجهيز المجالس والمناسبات</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-loose">
                  نحول المساحات الفارغة إلى مجالس عامرة بالفخامة. نوفر الجلسات الأرضية المطرزة، الكراسي المذهبة، والسجاد الفاخر، مع تنسيق متقن يعكس ذوقكم الرفيع.
                </p>
                <a className="inline-flex items-center text-deep-maroon font-bold hover:text-royal-emerald transition-colors text-sm sm:text-base" href="#locations" aria-label="تفاصيل خدمة تجهيز المجالس">
                  <span>تفاصيل الخدمة</span>
                  <span className="material-symbols-outlined mr-2 text-sm" aria-hidden="true">arrow_back</span>
                </a>
              </div>
            </article>

            {/* Service 2 */}
            <article className="group relative grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 lg:col-start-7 relative z-20 bg-royal-emerald text-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl lg:-mr-12 lg:mb-12 border-l-4 border-antique-gold transform transition-transform group-hover:-translate-y-2">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-antique-gold mb-3 sm:mb-4">قهوجيين وصبابين محترفين</h3>
                <p className="text-gray-200 text-sm sm:text-base mb-4 sm:mb-6 leading-loose">
                  فريقنا ليس مجرد مقدمي خدمة، بل سفراء للضيافة. بزي موحد أنيق، وابتسامة دائمة، ومهارة في صب القهوة بتقاليدها الأصيلة، نضمن لضيوفكم استقبالاً يليق بمقامهم.
                </p>
                <a className="inline-flex items-center text-white font-bold hover:text-antique-gold transition-colors text-sm sm:text-base" href="#locations" aria-label="تفاصيل خدمة القهوجيين والصبابين">
                  <span>تفاصيل الخدمة</span>
                  <span className="material-symbols-outlined mr-2 text-sm" aria-hidden="true">arrow_back</span>
                </a>
              </div>
              <div className="lg:col-span-7 lg:col-start-1 lg:order-1 relative z-10">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-l from-deep-maroon/80 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" aria-hidden="true"></div>
                  <Image
                    alt="قهوجيين وصبابين محترفين - خدمات الضيافة"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/4.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur text-deep-maroon p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg z-20" aria-hidden="true">
                    <span className="material-symbols-outlined text-2xl sm:text-4xl">coffee_maker</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Service 3 */}
            <article className="group relative grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-antique-gold/80 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" aria-hidden="true"></div>
                  <Image
                    alt="تمور فاخرة وحلويات شرقية - ضيافة سعودية"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src="/images/5.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur text-royal-emerald p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg z-20" aria-hidden="true">
                    <span className="material-symbols-outlined text-2xl sm:text-4xl">bakery_dining</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:-ml-12 lg:mt-12 bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl relative z-20 border-r-4 border-royal-emerald transform transition-transform group-hover:-translate-y-2">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-royal-emerald mb-3 sm:mb-4">تمور فاخرة وحلويات شرقية</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-loose">
                  نكمل القهوة بأطيب ما تجود به النخيل. تشكيلة مختارة من التمور السكرية والخلاص المحشية، بجانب أطباق الحلويات الشرقية التي تذوب في الفم.
                </p>
                <a className="inline-flex items-center text-deep-maroon font-bold hover:text-royal-emerald transition-colors text-sm sm:text-base" href="#locations" aria-label="تفاصيل خدمة التمور والحلويات">
                  <span>تفاصيل الخدمة</span>
                  <span className="material-symbols-outlined mr-2 text-sm" aria-hidden="true">arrow_back</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-rich-black text-white relative overflow-hidden" id="gallery" aria-labelledby="gallery-title">
        <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-royal-emerald/20 rounded-full blur-[100px]" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 border-b border-white/10 pb-6 sm:pb-8 gap-4">
            <div>
              <h2 id="gallery-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl text-antique-gold mb-2">معرض اللحظات</h2>
              <p className="text-gray-400 font-light text-sm sm:text-base lg:text-lg">مقتطفات من مناسبات تشرفنا بخدمتها في الرياض</p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-transparent border border-white/30 hover:bg-white hover:text-black text-white px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base" aria-label="عرض جميع الصور">عرض الكل</button>
            </div>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]" role="list" aria-label="معرض صور المناسبات">
            <figure className="col-span-2 row-span-2 relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer" role="listitem">
              <Image
                alt="المجالس الكبرى - مناسبات ملكية في الرياض"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                src="/images/1.webp"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                loading="lazy"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 p-4 sm:p-6 lg:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-antique-gold text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 block">ملكي</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">المجالس الكبرى</h3>
                </div>
              </figcaption>
            </figure>
            <figure className="col-span-1 row-span-2 relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer" role="listitem">
              <Image
                alt="أمسيات مفتوحة - حفلات وفعاليات"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                src="/images/2.webp"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                loading="lazy"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 right-0 p-3 sm:p-4 lg:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold">أمسيات مفتوحة</h3>
                </div>
              </figcaption>
            </figure>
            <figure className="col-span-1 row-span-1 relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer" role="listitem">
              <Image
                alt="فعاليات الشركات - خدمات ضيافة للأعمال"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                src="/images/3.webp"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal-emerald/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <span className="material-symbols-outlined text-2xl sm:text-4xl text-white">zoom_in</span>
              </div>
            </figure>
            <figure className="col-span-1 row-span-1 relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer" role="listitem">
              <Image
                alt="تفاصيل دقيقة - جودة الضيافة"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                src="/images/4.webp"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                loading="lazy"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 right-0 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-300">تفاصيل دقيقة</h3>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-cream-paper relative" id="locations" aria-labelledby="locations-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-royal-emerald rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A059 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} aria-hidden="true"></div>
            <div className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 w-48 sm:w-96 h-48 sm:h-96 bg-antique-gold/20 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-antique-gold text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-white/10">
                  <span className="material-symbols-outlined text-xs sm:text-sm" aria-hidden="true">location_on</span>
                  تغطية شاملة للرياض
                </div>
                <h2 id="locations-title" className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">نصل إليكم.. <br/>أينما كانت مناسبتكم</h2>
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  من شمال الرياض المتجدد إلى أحيائها الجنوبية العريقة، ومن شرقها لغربها. أسطولنا جاهز لتلبية دعوتكم في الوقت المحدد وبكامل التجهيزات.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-antique-gold flex items-center justify-center text-rich-black flex-shrink-0" aria-hidden="true">
                      <span className="material-symbols-outlined text-lg sm:text-xl">north</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg">شمال وغرب الرياض</h3>
                      <p className="text-xs sm:text-sm text-gray-300">حطين، الملقا، النخيل، الدرعية</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-deep-maroon flex items-center justify-center text-white flex-shrink-0" aria-hidden="true">
                      <span className="material-symbols-outlined text-lg sm:text-xl">east</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg">شرق وجنوب الرياض</h3>
                      <p className="text-xs sm:text-sm text-gray-300">الرمال، اليرموك، العزيزية، الشفا</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-96 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner border-2 sm:border-4 border-white/10">
                <Image
                  alt="خريطة تغطية خدمات قهوجيين الرياض"
                  className="w-full h-full object-cover opacity-60 grayscale"
                  src="/images/6.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute top-1/3 right-1/4" aria-hidden="true">
                  <span className="relative flex h-4 w-4 sm:h-6 sm:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 sm:h-6 sm:w-6 bg-royal-emerald border-2 border-white shadow-lg"></span>
                  </span>
                </div>
                <div className="absolute bottom-1/3 left-1/3" aria-hidden="true">
                  <span className="relative flex h-4 w-4 sm:h-6 sm:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-maroon opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 sm:h-6 sm:w-6 bg-deep-maroon border-2 border-white shadow-lg"></span>
                  </span>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <form className="bg-white/90 backdrop-blur-md p-2 rounded-lg sm:rounded-xl shadow-lg flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="location-search" className="sr-only">ابحث عن منطقتك</label>
                    <input
                      id="location-search"
                      className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-xs sm:text-sm placeholder-gray-500 text-rich-black px-2 sm:px-3 min-w-0"
                      placeholder="ابحث عن منطقتك..."
                      type="search"
                      autoComplete="off"
                    />
                    <button type="submit" className="bg-royal-emerald text-white p-1.5 sm:p-2 rounded-md sm:rounded-lg hover:bg-royal-emerald/90 flex-shrink-0" aria-label="بحث">
                      <span className="material-symbols-outlined text-lg sm:text-xl" aria-hidden="true">search</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rich-black text-gray-300 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-white/5 font-sans" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-royal-emerald text-white rounded-lg flex items-center justify-center" aria-hidden="true">
                  <span className="material-symbols-outlined text-lg sm:text-xl">coffee</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">قهوجيين الرياض</h3>
              </div>
              <p className="text-xs sm:text-sm leading-loose mb-4 sm:mb-6">
                نقدم أرقى مستويات الضيافة العربية في الرياض. شغفنا هو تقديم تجربة لا تنسى تمزج بين الأصالة والحداثة.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-antique-gold hover:text-rich-black hover:border-antique-gold transition-all" href="#" aria-label="مشاركة على وسائل التواصل">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">share</span>
                </a>
                <a className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-antique-gold hover:text-rich-black hover:border-antique-gold transition-all" href="#" aria-label="تابعنا على انستغرام">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">photo_camera</span>
                </a>
              </div>
            </div>
            <nav aria-label="روابط الاستكشاف">
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">استكشف</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a className="hover:text-antique-gold transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-antique-gold rounded-full" aria-hidden="true"></span> الرئيسية</a></li>
                <li><a className="hover:text-antique-gold transition-colors flex items-center gap-2" href="#services"><span className="w-1 h-1 bg-antique-gold rounded-full" aria-hidden="true"></span> خدماتنا</a></li>
                <li><a className="hover:text-antique-gold transition-colors flex items-center gap-2" href="#gallery"><span className="w-1 h-1 bg-antique-gold rounded-full" aria-hidden="true"></span> المعرض</a></li>
                <li><a className="hover:text-antique-gold transition-colors flex items-center gap-2" href="#locations"><span className="w-1 h-1 bg-antique-gold rounded-full" aria-hidden="true"></span> اتصل بنا</a></li>
              </ul>
            </nav>
            <nav aria-label="روابط الخدمات">
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">خدماتنا</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a className="hover:text-antique-gold transition-colors" href="#services">قهوجيين وصبابين</a></li>
                <li><a className="hover:text-antique-gold transition-colors" href="#services">ضيافة نسائية</a></li>
                <li><a className="hover:text-antique-gold transition-colors" href="#services">تجهيز بوفيهات وتمور</a></li>
                <li><a className="hover:text-antique-gold transition-colors" href="#services">تأجير معدات الضيافة</a></li>
              </ul>
            </nav>
            <address className="not-italic">
              <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">تواصل معنا</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-royal-emerald text-lg sm:text-xl flex-shrink-0" aria-hidden="true">location_on</span>
                  <span>الرياض، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-royal-emerald text-lg sm:text-xl flex-shrink-0" aria-hidden="true">call</span>
                  <a href="tel:+966506451744" className="font-sans hover:text-antique-gold transition-colors" dir="ltr">+966 50 645 1744</a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-royal-emerald text-lg sm:text-xl flex-shrink-0" aria-hidden="true">mail</span>
                  <a href="mailto:info@qahwajialriyad.com" className="break-all hover:text-antique-gold transition-colors">info@qahwajialriyad.com</a>
                </li>
              </ul>
            </address>
          </div>
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-gray-400">
            <p className="text-center sm:text-right">&copy; {new Date().getFullYear()} مؤسسة قهوجيين الرياض للضيافة. جميع الحقوق محفوظة.</p>
            <nav className="flex gap-4 sm:gap-6" aria-label="روابط قانونية">
              <a className="hover:text-white transition-colors" href="#">سياسة الخصوصية</a>
              <a className="hover:text-white transition-colors" href="#">الشروط والأحكام</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
