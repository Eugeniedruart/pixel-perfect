export interface MockCompany {
  id: string;
  name: string;
  siret: string;
  address: string;
  city: string;
}

export const mockCompanies: MockCompany[] = [
  {
    id: "1",
    name: "DURAULT-PAGEAUD",
    siret: "84540571100019",
    address: "23 Chemin des Vignes",
    city: "44390 Petit-Mars, France",
  },
  {
    id: "2",
    name: "DURAULT-PAGEAUD",
    siret: "84540571100027",
    address: "23 Chemin des Vignes",
    city: "44390 Petit-Mars, France",
  },
  {
    id: "3",
    name: "TECH SOLUTIONS SAS",
    siret: "12345678900012",
    address: "12 rue de la Paix",
    city: "75002 Paris, France",
  },
];

export const companySizeOptions = [
  { value: "less-50", label: "Moins de 50 employés" },
  { value: "50-250", label: "Entre 50 et 250 employés" },
  { value: "251-1000", label: "Entre 251 et 1000 employés" },
  { value: "1001-2000", label: "Entre 1001 et 2000 employés" },
  { value: "2001-5000", label: "Entre 2001 et 5000 employés" },
  { value: "more-5000", label: "Plus de 5000 employés" },
];

export const conventionOptions = [
  { value: "syntec", label: "Convention SYNTEC" },
  { value: "metallurgie", label: "Convention de la Métallurgie" },
  { value: "commerce", label: "Convention du Commerce de détail" },
  { value: "banque", label: "Convention de la Banque" },
  { value: "batiment", label: "Convention du Bâtiment" },
  { value: "hotellerie", label: "Convention de l'Hôtellerie-Restauration" },
  { value: "transport", label: "Convention du Transport routier" },
  { value: "chimie", label: "Convention de la Chimie" },
];
