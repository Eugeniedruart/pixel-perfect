import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Legal Notice –{" "}
            <span className="font-serif-display italic font-normal">
              Women Equity Label
            </span>
          </h1>

          <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="space-y-1">
              <p><strong className="text-foreground">Website:</strong> <a href="https://womenequitylabel.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://womenequitylabel.fr</a></p>
              <p><strong className="text-foreground">Company name:</strong> Women Equity Label</p>
              <p><strong className="text-foreground">Legal form:</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
              <p><strong className="text-foreground">Company registration number (SIREN):</strong> 992783894</p>
              <p><strong className="text-foreground">Director of publication:</strong> Eugénie Druart</p>
            </div>

            <hr className="border-border" />

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">1. Purpose of the Website</h2>
              <p>The Women Equity Label website aims to provide information about the label, its methodology, services, and corporate commitments regarding gender equality in the workplace.</p>
              <p className="mt-2">All information published on the website is for general informational purposes only and may be updated or modified at any time.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">2. Intellectual Property</h2>
              <p>All elements appearing on the website (text, images, logos, videos, icons, layout, etc.) are protected under intellectual property laws. Unless otherwise stated, they are the exclusive property of Women Equity Label.</p>
              <p className="mt-2">Any reproduction, distribution, modification, or adaptation, in whole or in part, of any element of the website without prior written consent is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">3. Personal Data Protection</h2>
              <p>The website complies with the European General Data Protection Regulation (GDPR – Regulation (EU) 2016/679).</p>

              <h3 className="font-semibold text-foreground mt-3 mb-1">Data collected:</h3>
              <p>The website may collect personal data via contact forms or subscription forms (name, email, company, position, etc.).</p>

              <h3 className="font-semibold text-foreground mt-3 mb-1">Purpose of processing:</h3>
              <p>Personal data are processed solely to respond to contact requests, manage subscriptions, or provide information about Women Equity Label services.</p>

              <h3 className="font-semibold text-foreground mt-3 mb-1">Data retention period:</h3>
              <p>Personal data are kept only as long as necessary to fulfil the purpose for which they were collected.</p>

              <h3 className="font-semibold text-foreground mt-3 mb-1">User rights:</h3>
              <p>In accordance with the GDPR, users have the right to access, rectify, erase, and restrict the processing of their personal data.</p>
              <p className="mt-2">If users believe that their rights are not being respected, they may file a complaint with the CNIL (Commission Nationale de l'Informatique et des Libertés – <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.cnil.fr</a>).</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">4. Cookies</h2>
              <p>The website may use cookies for statistical, functional, or audience measurement purposes. Users may configure their browser to refuse cookies or be notified when a cookie is placed.</p>
              <p className="mt-2">No personal data are shared with third parties without consent.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">5. Liability</h2>
              <p>Women Equity Label strives to provide accurate and up-to-date information. However, the company cannot guarantee that all information on the site is free from errors, omissions, or inaccuracies.</p>
              <p className="mt-2">The company cannot be held liable for:</p>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                <li>temporary interruptions in access to the website,</li>
                <li>indirect damages resulting from the use of the site or its content,</li>
                <li>or external links leading to third-party websites.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">6. External Links</h2>
              <p>The website may include hyperlinks to external sites. Women Equity Label cannot be held responsible for the content, privacy policies, or practices of these third-party websites.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">7. Applicable Law</h2>
              <p>These legal notices are governed by French law. Any dispute relating to the use of this website shall fall under the jurisdiction of the French courts, in accordance with applicable rules of procedure.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-2">8. Contact</h2>
              <p>For any question or request regarding this website, please contact:</p>
              <p className="mt-2"><strong className="text-foreground">Eugénie Druart</strong> – Women Equity Label</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
