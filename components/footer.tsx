export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hrishik B. Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
