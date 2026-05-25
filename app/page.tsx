export default function Home() {
  return (
    <main className="bg-[#f5f3ef] text-black min-h-screen">
      
      {/* NAV */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#f5f3ef]/80 border-b border-black/5 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          
          <h1 className="tracking-[0.35em] text-sm">
            VIVRELZ
          </h1>

          <nav className="flex gap-8 text-xs uppercase tracking-[0.2em] text-black/60">
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6">

          <p className="text-white/70 uppercase tracking-[0.35em] text-xs mb-6">
            Editorial Menswear
          </p>

          <h2 className="text-white text-5xl md:text-8xl font-light tracking-[0.2em]">
            VIVRELZ
          </h2>

          <p className="text-white/80 mt-8 max-w-xl leading-8 text-sm md:text-base">
            Quiet silhouettes for modern solitude.
          </p>

        </div>
      </section>

      {/* COLLECTION */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-xs text-black/40 mb-4">
            Collection
          </p>

          <h3 className="text-4xl md:text-6xl font-light">
            Essentials
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[600px] object-cover grayscale"
            />

            <div className="flex justify-between mt-4 text-sm uppercase tracking-[0.15em]">
              <p>Structured Coat</p>
              <p>$320</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1506629905607-c6fbbd5dbe22?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[600px] object-cover grayscale"
            />

            <div className="flex justify-between mt-4 text-sm uppercase tracking-[0.15em]">
              <p>Pleated Trousers</p>
              <p>$180</p>
            </div>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-6 border-t border-black/10"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-xs text-black/40 mb-6">
            About
          </p>

          <h3 className="text-3xl md:text-5xl leading-[1.5] font-light">
            A minimalist menswear project focused on restraint,
            balance, atmosphere, and modern solitude.
          </h3>

        </div>

      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="border-t border-black/10 py-20 px-6"
      >

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">

          <div>
            <h4 className="text-3xl md:text-5xl font-light leading-tight">
              Contact
            </h4>
          </div>

          <div className="space-y-5 text-sm">

            <div>
              <p className="uppercase tracking-[0.25em] text-black/40 text-xs mb-2">
                Instagram
              </p>

              <p>@vivrelz</p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-black/40 text-xs mb-2">
                Email
              </p>

              <p>contact@vivrelz.com</p>
            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}
