export default function Dispatch() {
  return (
    <div suppressHydrationWarning className="p-12 flex items-center justify-center min-h-full">
      <div suppressHydrationWarning className="max-w-2xl w-full border border-divider p-16 text-center bg-background">
        <h1 suppressHydrationWarning className="font-serif text-4xl mb-6 text-foreground">Subscribe to Dispatch</h1>
        <p suppressHydrationWarning className="font-sans text-base text-foreground/70 mb-12 leading-relaxed">
          Receive monthly syntheses of our latest publications, research notes, and curated clinical literature directly to your inbox. No promotional material.
        </p>
        <form suppressHydrationWarning className="flex flex-col gap-6">
          <input suppressHydrationWarning 
            type="email" 
            placeholder="Academic or Professional Email Address" 
            className="w-full border-b border-divider bg-transparent p-4 text-center font-sans text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-nutrition transition-colors"
            required
          />
          <div suppressHydrationWarning className="flex justify-center gap-6 mt-4">
            <label suppressHydrationWarning className="flex items-center gap-2 text-sm font-sans cursor-pointer text-foreground/70 hover:text-foreground">
                <input suppressHydrationWarning type="radio" name="domain" value="nutrition" className="accent-foreground" required /> Nutrition
            </label>
            <label suppressHydrationWarning className="flex items-center gap-2 text-sm font-sans cursor-pointer text-foreground/70 hover:text-foreground">
                <input suppressHydrationWarning type="radio" name="domain" value="psychology" className="accent-foreground" /> Psychology
            </label>
            <label suppressHydrationWarning className="flex items-center gap-2 text-sm font-sans cursor-pointer text-foreground/70 hover:text-foreground">
                <input suppressHydrationWarning type="radio" name="domain" value="integrated" className="accent-foreground" /> Integrated
            </label>
          </div>
          <button suppressHydrationWarning 
            type="submit" 
            className="w-full border border-divider p-4 mt-6 text-sm uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
