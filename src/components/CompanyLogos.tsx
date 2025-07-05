export default function CompanyLogos() {
  const companies = [
    { name: "HubSpot", logo: "HubSpot" },
    { name: "Dropbox", logo: "Dropbox" },
    { name: "Square", logo: "Square" },
    { name: "Intercom", logo: "INTERCOM" },
    { name: "Grammarly", logo: "grammarly" },
  ];

  return (
    <div className="w-full px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-left mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            More than 100+
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            companies partner
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-8 lg:gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
