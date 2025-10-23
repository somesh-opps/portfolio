import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          animation: "fadeIn 1.2s ease-out forwards"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Profile image - only visible on mobile/tablet */}
        <div className="lg:hidden w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-2xl mx-auto">
          <img
            src={profileImg}
            alt="Somesh Kumar Sahoo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-primary-foreground/80 text-base md:text-xl mb-4 font-light tracking-wide">
          HELLO, I'M
        </p>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          Somesh Kumar Sahoo
        </h1>
        
        <p className="text-base md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          A second year B. Tech student specialising in Computer Science and Technology (CST).
        </p>
      </div>
    </section>
  );
};

export default Hero;