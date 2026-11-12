const { useState, useMemo, useEffect } = React;
function cx(...styleObjs) {
  return Object.assign({}, ...styleObjs.filter(Boolean));
}
const Icon = ({ children, size = 18, color = "currentColor", strokeWidth = 2, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);
const Search = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>;
const MapPin = (p) => <Icon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></Icon>;
const MessageCircle = (p) => <Icon {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></Icon>;
const UserIcon = (p) => <Icon {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const ChevronLeft = (p) => <Icon {...p}><polyline points="15 18 9 12 15 6"/></Icon>;
const ChevronDown = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
const Star = ({ filled, ...p }) => <Icon {...p} fill={filled ? (p.color || "currentColor") : "none"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const CameraIcon = (p) => <Icon {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></Icon>;
const Check = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const CheckCircle = (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></Icon>;
const SlidersHorizontal = (p) => <Icon {...p}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="9" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="18" r="2"/></Icon>;
const Edit2 = (p) => <Icon {...p}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></Icon>;
const Trash2 = (p) => <Icon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></Icon>;
const Send = (p) => <Icon {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></Icon>;
const XIcon = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
const CheckSquare = (p) => <Icon {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></Icon>;
const Square = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2"/></Icon>;
const Truck = (p) => <Icon {...p}><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17.5" cy="19" r="2"/></Icon>;
const BookOpen = (p) => <Icon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>;
const ShoppingBag = (p) => <Icon {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></Icon>;
const Store = (p) => <Icon {...p}><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/></Icon>;
const Banknote = (p) => <Icon {...p}><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></Icon>;
const Phone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></Icon>;
const Mail = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></Icon>;
const PlusCircle = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></Icon>;
const Loader = (p) => (
  <svg width={p.size || 28} height={p.size || 28} viewBox="0 0 24 24" fill="none" stroke={p.color || "currentColor"} strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
    <path d="M12 2 A10 10 0 0 1 22 12" />
  </svg>
);
const EMOJI = {
  "sprout": "🌱", "factory": "🏭", "store-outline": "🏬", "truck-outline": "🚚",
  "account-group-outline": "🤝", "office-building-outline": "🏢",
  "silverware-fork-knife": "🍽️", "cart-outline": "🛒", "airplane": "✈️",
  "hand-heart-outline": "❤️", "bank-outline": "🏦", "basket-outline": "🧺",
  "account": "👤", "cellphone": "📱", "cash": "💵", "book-open-variant": "📖",
  "weather-partly-rainy": "🌦️", "leaf-off": "🥀", "school-outline": "🎓",
};
function DataIcon({ name, size = 20 }) {
  return <span style={{ fontSize: size, lineHeight: 1 }}>{EMOJI[name] || "•"}</span>;
}
const C = {
  forest: "#163527", leaf: "#3E8E5A", leafBright: "#4FAE6E", laterite: "#C1440E",
  gold: "#E3A23A", cream: "#F2F0E1", card: "#FFFFFF", ink: "#16241A", inkSoft: "#5B6B5E", line: "#E1DFCC",
};
const REGION_COORDS = {
  Kinshasa: { lat: -4.4419, lng: 15.2663 },
  Lubumbashi: { lat: -11.6609, lng: 27.4794 },
  Goma: { lat: -1.6792, lng: 29.2228 },
  Kisangani: { lat: 0.5150, lng: 25.1913 },
  Bukavu: { lat: -2.5083, lng: 28.8608 },
};
const REGIONS = Object.keys(REGION_COORDS);
function distanceKm(a, b) {
  if (!a || !b) return null;
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)));
}
const CATEGORIES = [
  { id: "vivrier", label: "Vivriers", icon: "sprout" },
  { id: "transforme", label: "Transformés", icon: "factory" },
  { id: "intrants", label: "Intrants", icon: "store-outline" },
  { id: "materiel", label: "Matériel", icon: "truck-outline" },
];
const SEED_PRODUCTS = [
  { id: 1, name: "Manioc frais", cat: "vivrier", region: "Kinshasa", seller: "Coopérative Mama Nzuzi", price: "1 200 FC / sac", unit: "sac 50kg", rating: 4.8, emoji: "🍠" },
  { id: 2, name: "Maïs sec grain", cat: "vivrier", region: "Lubumbashi", seller: "Ferme Kalonji", price: "38 000 FC / sac", unit: "sac 100kg", rating: 4.6, emoji: "🌽" },
  { id: 3, name: "Haricots rouges", cat: "vivrier", region: "Goma", seller: "Groupement Umoja", price: "22 500 FC / sac", unit: "sac 50kg", rating: 4.9, emoji: "🫘" },
  { id: 4, name: "Huile de palme", cat: "transforme", region: "Kisangani", seller: "Huilerie Boyoma", price: "3 500 FC / L", unit: "bidon 20L dispo", rating: 4.7, emoji: "🧴" },
  { id: 5, name: "Farine de manioc (chikwangue)", cat: "transforme", region: "Kinshasa", seller: "Atelier Mbote", price: "1 800 FC / kg", unit: "sacs de 25kg", rating: 4.5, emoji: "🌾" },
  { id: 6, name: "Engrais NPK", cat: "intrants", region: "Bukavu", seller: "AgriPlus Kivu", price: "45 000 FC / sac", unit: "sac 50kg", rating: 4.4, emoji: "🧪" },
  { id: 7, name: "Semences de maïs hybride", cat: "intrants", region: "Lubumbashi", seller: "SemAgri SARL", price: "15 000 FC / kg", unit: "sachets 1kg", rating: 4.6, emoji: "🌱" },
  { id: 8, name: "Motoculteur d'occasion", cat: "materiel", region: "Kinshasa", seller: "MécaFerme", price: "850 $", unit: "1 unité disponible", rating: 4.3, emoji: "🚜" },
];
const ROLES = [
  { id: "agriculteur", label: "Agriculteur", desc: "Je produis et je vends mes récoltes", icon: "sprout" },
  { id: "cooperative", label: "Coopérative", desc: "Je représente un groupement de producteurs", icon: "account-group-outline" },
  { id: "pme_agricole", label: "PME agricole", desc: "Petite ou moyenne entreprise du secteur agricole", icon: "office-building-outline" },
  { id: "transformateur", label: "Transformateur", desc: "Je transforme des produits agricoles", icon: "factory" },
  { id: "fournisseur", label: "Fournisseur d'intrants", desc: "Je vends semences, engrais, matériel agricole", icon: "store-outline" },
  { id: "transporteur", label: "Transporteur", desc: "J'assure le transport et la livraison des produits", icon: "truck-outline" },
  { id: "restaurant", label: "Restaurant", desc: "Je m'approvisionne en produits frais", icon: "silverware-fork-knife" },
  { id: "supermarche", label: "Supermarché", desc: "Je m'approvisionne en gros pour la revente", icon: "cart-outline" },
  { id: "exportateur", label: "Exportateur", desc: "J'achète des produits pour l'exportation", icon: "airplane" },
  { id: "ong", label: "ONG", desc: "Organisation non gouvernementale intervenant dans le secteur", icon: "hand-heart-outline" },
  { id: "institution_financiere", label: "Institution financière", desc: "Banque, microfinance ou fonds d'investissement agricole", icon: "bank-outline" },
  { id: "consommateur", label: "Consommateur", desc: "Je cherche des produits agricoles pour un usage personnel", icon: "basket-outline" },
];
function homeTabForRole(roleId) {
  if (roleId === "admin") return "demandes";
  if (roleId === "financier") return "finances";
  if (roleId === "transporteur") return "livraisons";
  if (roleId === "ong" || roleId === "institution_financiere") return "profil";
  if (canPublish(roleId)) return "fournisseur";
  return "acheteur";
}
function canPublish(roleId) {
  return ["agriculteur", "cooperative", "pme_agricole", "transformateur", "fournisseur"].includes(roleId);
}
function canRequest(roleId) {
  return ["restaurant", "supermarche", "exportateur", "consommateur"].includes(roleId);
}
function isOverseerRole(roleId) {
  return roleId === "ong" || roleId === "institution_financiere";
}
function isAdminRole(roleId) {
  return roleId === "admin";
}
function isFinancierRole(roleId) {
  return roleId === "financier";
}
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}
function VideoEmbed({ url }) {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 10, overflow: "hidden", marginTop: 8 }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Vidéo de formation"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
const KNOWLEDGE_ARTICLES = [
  { id: 1, cat: "Conseils", title: "Bien conserver le manioc après récolte", body: "Séchez les tubercules à l'ombre avant stockage et évitez l'humidité pour limiter la pourriture.", icon: "book-open-variant" },
  { id: 2, cat: "Météo", title: "Saison des pluies : ce qu'il faut anticiper", body: "Planifiez vos semis 2 à 3 semaines avant le pic des pluies pour maximiser la levée des jeunes plants.", icon: "weather-partly-rainy" },
  { id: 3, cat: "Maladies", title: "Reconnaître la mosaïque du manioc", body: "Feuilles marbrées jaune-vert et déformées : isolez les plants touchés et privilégiez des boutures saines.", icon: "leaf-off" },
  { id: 4, cat: "Conseils", title: "Rotation des cultures : pourquoi et comment", body: "Alterner légumineuses et céréales restaure la fertilité du sol et réduit naturellement les parasites.", icon: "book-open-variant" },
  { id: 5, cat: "Formation", title: "Calculer son prix de vente juste", body: "Additionnez coûts de production, transport et une marge raisonnable avant de fixer votre prix au marché.", icon: "school-outline" },
  { id: 6, cat: "Maladies", title: "Lutter contre la chenille légionnaire du maïs", body: "Inspectez les jeunes pousses chaque semaine ; les attaques précoces sont les plus faciles à limiter.", icon: "leaf-off" },
];
function Spinner({ color = C.leaf, size = 28 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <Loader size={size} color={color} />
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
function WaxBand() {
  return (
    <div style={{ height: 8, display: "flex", flexDirection: "row" }}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} style={{ flex: 1, backgroundColor: [C.gold, C.laterite, C.leaf][i % 3] }} />
      ))}
    </div>
  );
}
function Chip({ active, onPress, children }) {
  return (
    <button onClick={onPress} style={cx(styles.chip, active && styles.chipActive)}>
      <span style={cx(styles.chipText, active && styles.chipTextActive)}>{children}</span>
    </button>
  );
}
function ProductCard({ p, onOpen, myCity }) {
  const d = myCity ? distanceKm(REGION_COORDS[myCity], REGION_COORDS[p.region]) : null;
  return (
    <button onClick={() => onOpen(p)} style={styles.card}>
      <div style={cx(styles.cardThumb, { overflow: "hidden" })}>
        {p.imageUrl ? (
          <img src={p.imageUrl} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span style={{ fontSize: 26 }}>{p.emoji}</span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={styles.cardTitle}>{p.name}</div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 2, marginBottom: 6 }}>
          <MapPin size={11} color={C.inkSoft} />
          <span style={styles.cardSub}> {p.region} · {p.seller}{d !== null ? ` · ${d} km` : ""}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <span style={styles.cardPrice}>{p.price}</span>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Star size={12} color={C.gold} filled />
            <span style={styles.cardRating}> {p.rating}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
function BottomNav({ tab, setTab, role }) {
  const items = [
    ...(canPublish(role) ? [{ id: "fournisseur", label: "Fournisseur", Icon: Store }] : []),
    ...(canRequest(role) && !canPublish(role) ? [{ id: "acheteur", label: "Acheteur", Icon: ShoppingBag }] : []),
    { id: "connaissances", label: "Conseils", Icon: BookOpen },
    ...(role === "transporteur" ? [{ id: "livraisons", label: "Livraisons", Icon: Truck }] : []),
    ...(isAdminRole(role) ? [{ id: "demandes", label: "Demandes", Icon: MessageCircle }] : []),
    ...(isAdminRole(role) ? [{ id: "moderation", label: "Modération", Icon: CheckCircle }] : []),
    ...(isAdminRole(role) ? [{ id: "contenus", label: "Contenus", Icon: BookOpen }] : []),
    ...(isFinancierRole(role) ? [{ id: "finances", label: "Finances", Icon: Banknote }] : []),
    { id: "contact", label: "Contact", Icon: Phone },
    { id: "profil", label: "Profil", Icon: UserIcon },
  ];
  return (
    <div style={styles.bottomNav}>
      {items.map((it) => {
        const active = tab === it.id;
        const IconC = it.Icon;
        return (
          <button key={it.id} onClick={() => setTab(it.id)} style={styles.navItem}>
            <IconC size={19} color={active ? C.leaf : "#9AA79C"} strokeWidth={active ? 2.4 : 2} />
            <span style={{ fontSize: 10, color: active ? C.leaf : "#9AA79C", fontWeight: active ? "700" : "500" }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
// Convertit un numéro de téléphone en "e-mail" technique interne — Firebase exige un
// e-mail pour ce mode de connexion, mais la personne ne voit et ne tape jamais que
// son numéro de téléphone. Deux numéros écrits différemment (espaces, +243...)
// doivent donner le même compte, d'où le nettoyage (garder uniquement les chiffres).
function phoneToInternalEmail(phone) {
  let digits = phone.replace(/\D/g, "");
  // En RDC, "0812345678" et "+243812345678" sont le même numéro — sans cette
  // normalisation, ils créeraient deux comptes différents par erreur.
  if (digits.startsWith("0")) digits = "243" + digits.slice(1);
  return digits + "@afa-app.local";
}
function AuthScreen() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rccm, setRccm] = useState("");
  const [ville, setVille] = useState("");
  const [province, setProvince] = useState("");
  const [recoveryPin, setRecoveryPin] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!phone.trim() || !password) { setError("Renseignez un numéro de téléphone et un mot de passe."); return; }
    if (mode === "signup" && !name.trim()) { setError("Renseignez votre nom."); return; }
    if (mode === "signup" && !role) { setError("Choisissez votre profil (touchez une des cases ci-dessus)."); return; }
    if (mode === "signup" && !/^\d{4}$/.test(recoveryPin)) { setError("Le code de récupération doit être 4 chiffres."); return; }
    setBusy(true);
    const internalEmail = phoneToInternalEmail(phone);
    try {
      if (mode === "signup") {
        const cred = await auth.createUserWithEmailAndPassword(internalEmail, password);
        await cred.user.updateProfile({ displayName: name.trim() });
        await db.collection("users").doc(cred.user.uid).set({
          name: name.trim(), role: role.id, phone: phone.trim(),
          rccm: rccm.trim(), ville: ville.trim(), province: province.trim(),
          recoveryPin: recoveryPin.trim(),
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      } else {
        await auth.signInWithEmailAndPassword(internalEmail, password);
      }
    } catch (err) {
      const messages = {
        "auth/email-already-in-use": "Ce numéro de téléphone est déjà utilisé — essayez de vous connecter.",
        "auth/invalid-email": "Numéro de téléphone invalide.",
        "auth/weak-password": "Le mot de passe doit contenir au moins 6 caractères.",
        "auth/invalid-credential": "Numéro de téléphone ou mot de passe incorrect.",
        "auth/user-not-found": "Aucun compte avec ce numéro de téléphone.",
        "auth/wrong-password": "Mot de passe incorrect.",
      };
      setError(messages[err.code] || "Une erreur est survenue. Réessayez.");
    }
    setBusy(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, backgroundColor: C.forest, height: "100%", overflowY: "auto" }}>
      <div style={{ padding: 24, paddingTop: 40, maxWidth: 440, margin: "0 auto", width: "100%" }}>
        <div style={styles.brandTitle}>Act for<br />Agriculture</div>
        <div style={styles.brandSubtitle}>
          {mode === "signup" ? "Créez votre compte pour rejoindre le marché." : "Connectez-vous pour continuer."}
        </div>
      </div>
      <WaxBand />
      <form onSubmit={submit} style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, maxWidth: 440, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <button type="button" onClick={() => setMode("login")} style={cx(styles.segment, mode === "login" && styles.segmentActive)}>
            <span style={cx(styles.segmentText, mode === "login" && styles.segmentTextActive)}>Connexion</span>
          </button>
          <button type="button" onClick={() => setMode("signup")} style={cx(styles.segment, mode === "signup" && styles.segmentActive)}>
            <span style={cx(styles.segmentText, mode === "signup" && styles.segmentTextActive)}>Inscription</span>
          </button>
        </div>
        {mode === "signup" && (
          <React.Fragment>
            <input
              value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom complet ou nom de votre structure"
              style={styles.authInput}
            />
            <input
              value={rccm} onChange={(e) => setRccm(e.target.value)} placeholder="Numéro RCCM (si vous en avez un)"
              style={styles.authInput}
            />
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <input
                value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville"
                style={cx(styles.authInput, { flex: 1 })}
              />
              <input
                value={province} onChange={(e) => setProvince(e.target.value)} placeholder="Province"
                style={cx(styles.authInput, { flex: 1 })}
              />
            </div>
            <input
              value={recoveryPin} onChange={(e) => setRecoveryPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="Code de récupération à 4 chiffres" type="tel" maxLength={4}
              style={styles.authInput}
            />
            <div style={{ fontSize: 11, color: "#BFD8C6", marginTop: -6 }}>
              À retenir précieusement : si vous oubliez votre mot de passe, ce code permettra à l'équipe AFA de vérifier que c'est bien vous avant de vous aider.
            </div>
            <span style={styles.authLabel}>Vous êtes :</span>
            <div style={styles.roleGroupLabel}>🌾 VENDEURS — je produis ou fournis</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ROLES.filter((r) => canPublish(r.id)).map((r) => (
                <button
                  type="button" key={r.id} onClick={() => setRole(r)}
                  style={cx(styles.roleCard, (role && role.id) === r.id && { borderColor: C.leafBright, backgroundColor: "rgba(79,174,110,0.15)" })}
                >
                  <div style={styles.roleIconWrap}>
                    <DataIcon name={r.icon} size={20} />
                  </div>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div style={styles.roleLabel}>{r.label}</div>
                    <div style={styles.roleDesc}>{r.desc}</div>
                  </div>
                  {(role && role.id) === r.id && <CheckCircle size={18} color={C.leafBright} />}
                </button>
              ))}
            </div>
            <div style={cx(styles.roleGroupLabel, { marginTop: 10 })}>🛒 ACHETEURS — je cherche des produits</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ROLES.filter((r) => !canPublish(r.id) && !isOverseerRole(r.id) && r.id !== "transporteur").map((r) => (
                <button
                  type="button" key={r.id} onClick={() => setRole(r)}
                  style={cx(styles.roleCard, (role && role.id) === r.id && { borderColor: C.leafBright, backgroundColor: "rgba(79,174,110,0.15)" })}
                >
                  <div style={styles.roleIconWrap}>
                    <DataIcon name={r.icon} size={20} />
                  </div>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div style={styles.roleLabel}>{r.label}</div>
                    <div style={styles.roleDesc}>{r.desc}</div>
                  </div>
                  {(role && role.id) === r.id && <CheckCircle size={18} color={C.leafBright} />}
                </button>
              ))}
            </div>
            <div style={cx(styles.roleGroupLabel, { marginTop: 10 })}>🚚 AUTRES SERVICES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ROLES.filter((r) => isOverseerRole(r.id) || r.id === "transporteur").map((r) => (
                <button
                  type="button" key={r.id} onClick={() => setRole(r)}
                  style={cx(styles.roleCard, (role && role.id) === r.id && { borderColor: C.leafBright, backgroundColor: "rgba(79,174,110,0.15)" })}
                >
                  <div style={styles.roleIconWrap}>
                    <DataIcon name={r.icon} size={20} />
                  </div>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <div style={styles.roleLabel}>{r.label}</div>
                    <div style={styles.roleDesc}>{r.desc}</div>
                  </div>
                  {(role && role.id) === r.id && <CheckCircle size={18} color={C.leafBright} />}
                </button>
              ))}
            </div>
          </React.Fragment>
        )}
        <input
          value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Numéro de téléphone" type="tel" autoCapitalize="none"
          style={styles.authInput}
        />
        <input
          value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" type="password"
          style={styles.authInput}
        />
        {!!error && <span style={styles.authError}>{error}</span>}
        <button
          type="submit"
          disabled={busy || (mode === "signup" && !role)}
          style={cx(styles.publishBtn, { opacity: (busy || (mode === "signup" && !role)) ? 0.5 : 1 })}
        >
          <span style={styles.publishBtnText}>
            {busy ? "Veuillez patienter..." : mode === "signup" && !role ? "Choisissez un profil ci-dessus" : mode === "signup" ? "Créer mon compte" : "Se connecter"}
          </span>
        </button>
      </form>
    </div>
  );
}
function ServiceAccountSection({ title, accounts, icon, description }) {
  if (accounts.length === 0) return null;
  return (
    <React.Fragment>
      <div style={styles.countLabel}>{title}</div>
      {accounts.map((a) => (
        <div key={a.uid} style={styles.vendorCard}>
          <div style={styles.threadAvatar}><DataIcon name={icon} size={18} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={styles.cardTitle}>{a.name}</div>
            <div style={styles.cardSub}>{description}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
function MarcheScreen({ products, onOpen, myCity, setMyCity }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const [region, setRegion] = useState("Toutes régions");
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState("produits");
  const [sortByDistance, setSortByDistance] = useState(false);
  const [showCityPicker, setShowCityPicker] = useState(false);
  const [serviceAccounts, setServiceAccounts] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("users")
      .where("role", "in", ["transporteur", "ong", "institution_financiere"])
      .onSnapshot((snapshot) => {
        setServiceAccounts(snapshot.docs.map((d) => ({ uid: d.id, ...d.data() })));
      }, (error) => console.warn("Comptes de service indisponibles :", error.message));
    return unsubscribe;
  }, []);
  const transporteurs = serviceAccounts.filter((a) => a.role === "transporteur");
  const ongs = serviceAccounts.filter((a) => a.role === "ong");
  const institutions = serviceAccounts.filter((a) => a.role === "institution_financiere");
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = cat === "all" || p.cat === cat;
      const matchRegion = region === "Toutes régions" || p.region === region;
      return matchQ && matchCat && matchRegion;
    });
    if (sortByDistance && myCity) {
      list = [...list].sort(
        (a, b) => distanceKm(REGION_COORDS[myCity], REGION_COORDS[a.region]) - distanceKm(REGION_COORDS[myCity], REGION_COORDS[b.region])
      );
    }
    return list;
  }, [products, search, cat, region, sortByDistance, myCity]);
  const vendors = useMemo(() => {
    const map = {};
    products
      .filter((p) => p.cat === "intrants" || p.cat === "materiel")
      .forEach((p) => {
        if (!map[p.seller]) map[p.seller] = { seller: p.seller, region: p.region, items: [], rating: p.rating };
        map[p.seller].items.push(p.name);
      });
    return Object.values(map);
  }, [products]);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.headerBlock}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <span style={styles.headerTitle}>AFA Marché</span>
          <button onClick={() => setShowCityPicker(true)} style={{ display: "flex", flexDirection: "row", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}>
            <MapPin size={13} color="#BFD8C6" />
            <span style={styles.headerLoc}> {myCity || "Choisir ma ville"}</span>
            <ChevronDown size={13} color="#BFD8C6" />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 8, marginTop: 12 }}>
          <button onClick={() => setView("produits")} style={cx(styles.segment, view === "produits" && styles.segmentActive)}>
            <span style={cx(styles.segmentText, view === "produits" && styles.segmentTextActive)}>Produits</span>
          </button>
          <button onClick={() => setView("annuaire")} style={cx(styles.segment, view === "annuaire" && styles.segmentActive)}>
            <span style={cx(styles.segmentText, view === "annuaire" && styles.segmentTextActive)}>Annuaire</span>
          </button>
        </div>
        {view === "produits" && (
          <React.Fragment>
            <div style={{ display: "flex", flexDirection: "row", gap: 8, marginTop: 12 }}>
              <div style={styles.searchBox}>
                <Search size={16} color="#BFD8C6" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un produit..."
                  style={styles.searchInput}
                />
              </div>
              <button
                onClick={() => setShowFilters((s) => !s)}
                style={cx(styles.filterBtn, showFilters && { backgroundColor: C.gold })}
              >
                <SlidersHorizontal size={16} color={showFilters ? C.forest : "#BFD8C6"} />
              </button>
            </div>
            {showFilters && (
              <React.Fragment>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                  {["Toutes régions", ...REGIONS].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      style={cx(styles.regionChip, region === r && { backgroundColor: C.gold })}
                    >
                      <span style={{ color: region === r ? C.forest : "#BFD8C6", fontWeight: "600", fontSize: 11.5 }}>{r}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => (myCity ? setSortByDistance((s) => !s) : setShowCityPicker(true))}
                  style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginTop: 10, background: "none", border: "none", cursor: "pointer" }}
                >
                  {sortByDistance ? <CheckSquare size={14} color="#BFD8C6" /> : <Square size={14} color="#BFD8C6" />}
                  <span style={{ color: "#BFD8C6", fontSize: 12 }}>Trier par proximité{myCity ? ` (depuis ${myCity})` : ""}</span>
                </button>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      {view === "produits" ? (
        <React.Fragment>
          <div style={{ paddingTop: 12, paddingBottom: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", paddingLeft: 16, paddingRight: 16, gap: 8 }}>
              <Chip active={cat === "all"} onPress={() => setCat("all")}>Tout</Chip>
              {CATEGORIES.map((c) => (
                <Chip key={c.id} active={cat === c.id} onPress={() => setCat(c.id)}>{c.label}</Chip>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", paddingLeft: 16, paddingRight: 16, paddingBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={styles.countLabel}>{filtered.length} annonce{filtered.length !== 1 ? "s" : ""}</span>
            {filtered.length === 0 && (
              <span style={styles.emptyText}>Aucun produit ne correspond. Essayez une autre recherche ou région.</span>
            )}
            {filtered.map((p) => <ProductCard key={p.id} p={p} onOpen={onOpen} myCity={myCity} />)}
          </div>
        </React.Fragment>
      ) : (
        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <ServiceAccountSection
            title="TRANSPORTEURS" accounts={transporteurs} icon="truck-outline"
            description="Livraison et transport de produits agricoles"
          />
          <ServiceAccountSection
            title="ONG" accounts={ongs} icon="hand-heart-outline"
            description="Organisation non gouvernementale du secteur agricole"
          />
          <ServiceAccountSection
            title="INSTITUTIONS FINANCIÈRES" accounts={institutions} icon="bank-outline"
            description="Banque, microfinance ou fonds d'investissement agricole"
          />
          <span style={styles.countLabel}>FOURNISSEURS & BOUTIQUES</span>
          {vendors.length === 0 ? (
            <span style={styles.emptyText}>Aucun fournisseur pour l'instant.</span>
          ) : (
            vendors.map((v) => (
              <div key={v.seller} style={styles.vendorCard}>
                <div style={styles.threadAvatar}><span style={{ fontWeight: "700", color: C.forest }}>{v.seller.charAt(0)}</span></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={styles.cardTitle}>{v.seller}</div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 2 }}>
                    <MapPin size={11} color={C.inkSoft} />
                    <span style={styles.cardSub}> {v.region} · {v.items.length} produit{v.items.length > 1 ? "s" : ""}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v.items.join(", ")}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {showCityPicker && (
        <div style={styles.modalOverlay} onClick={() => setShowCityPicker(false)}>
          <div style={styles.cityPickerBox} onClick={(e) => e.stopPropagation()}>
            <div style={styles.sectionLabel}>Ma ville (pour la distance)</div>
            {REGIONS.map((r) => (
              <button key={r} onClick={() => { setMyCity(r); setShowCityPicker(false); }} style={styles.cityRow}>
                <span style={{ fontSize: 14, color: C.ink }}>{r}</span>
                {myCity === r && <Check size={16} color={C.leaf} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
const PAYMENT_METHODS = [
  { id: "orange", label: "Orange Money" },
  { id: "airtel", label: "Airtel Money" },
  { id: "mpesa", label: "M-Pesa" },
];
function RequestSheet({ product, visible, onClose, onSubmit }) {
  const [quantity, setQuantity] = useState("");
  const [neededDate, setNeededDate] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentPhone, setPaymentPhone] = useState("");
  const [step, setStep] = useState("form");
  const confirm = () => {
    if (!quantity.trim() || !deliveryLocation.trim() || !paymentMethod || !paymentPhone.trim()) return;
    onSubmit({
      quantity: quantity.trim(), neededDate: neededDate.trim(), deliveryLocation: deliveryLocation.trim(),
      notes: notes.trim(), paymentMethod, paymentPhone: paymentPhone.trim(),
    });
    setStep("done");
  };
  const reset = () => {
    setStep("form"); setQuantity(""); setNeededDate(""); setDeliveryLocation(""); setNotes("");
    setPaymentMethod(""); setPaymentPhone("");
    onClose();
  };
  if (!product || !visible) return null;
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.orderSheet}>
        {step === "form" ? (
          <React.Fragment>
            <div style={styles.sectionLabel}>Faire une demande : {product.name}</div>
            <div style={{ fontSize: 12, color: C.inkSoft, marginTop: -4, marginBottom: 4 }}>
              Votre demande est envoyée à l'équipe AFA, pas directement au vendeur. Nous revenons vers vous avec un devis (quantité disponible, date, prix, conditions).
            </div>
            <div style={cx(styles.formLabel, { marginTop: 10 })}>Quantité souhaitée</div>
            <input style={styles.input} placeholder="Ex : 3 sacs de 50kg" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <div style={cx(styles.formLabel, { marginTop: 12 })}>Date souhaitée</div>
            <input style={styles.input} placeholder="Ex : avant le 15 septembre" value={neededDate} onChange={(e) => setNeededDate(e.target.value)} />
            <div style={cx(styles.formLabel, { marginTop: 12 })}>Lieu de livraison</div>
            <input style={styles.input} placeholder="Ex : Kinshasa, commune de Limete" value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)} />
            <div style={cx(styles.formLabel, { marginTop: 12 })}>Précisions (optionnel)</div>
            <textarea style={cx(styles.input, { resize: "vertical", minHeight: 60 })} placeholder="Toute autre information utile..." value={notes} onChange={(e) => setNotes(e.target.value)} />
            <div style={cx(styles.formLabel, { marginTop: 12 })}>Paiement par Mobile Money</div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {PAYMENT_METHODS.map((m) => (
                <Chip key={m.id} active={paymentMethod === m.id} onPress={() => setPaymentMethod(m.id)}>{m.label}</Chip>
              ))}
            </div>
            <input style={cx(styles.input, { marginTop: 8 })} placeholder="Numéro Mobile Money (ex : 08X XXX XXXX)" value={paymentPhone} onChange={(e) => setPaymentPhone(e.target.value)} />
            <div style={{ fontSize: 11, color: C.inkSoft, fontStyle: "italic" }}>
              Aucun débit automatique — ce numéro sert à l'équipe AFA pour organiser l'encaissement une fois le devis confirmé.
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: 14 }}>
              <button onClick={reset} style={styles.cancelBtn}><span style={{ color: C.inkSoft, fontWeight: "600" }}>Annuler</span></button>
              <button
                onClick={confirm}
                disabled={!quantity.trim() || !deliveryLocation.trim() || !paymentMethod || !paymentPhone.trim()}
                style={cx(styles.publishBtn, { flex: 1, opacity: (quantity.trim() && deliveryLocation.trim() && paymentMethod && paymentPhone.trim()) ? 1 : 0.5 })}
              >
                <span style={styles.publishBtnText}>Envoyer la demande</span>
              </button>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 10 }}>
            <CheckCircle size={40} color={C.leaf} />
            <div style={{ fontWeight: "800", fontSize: 16, color: C.ink, marginTop: 10 }}>Demande envoyée</div>
            <div style={{ color: C.inkSoft, fontSize: 12.5, textAlign: "center", marginTop: 6 }}>
              L'équipe AFA va vérifier la disponibilité et revenir vers vous avec un devis, généralement sous 30 à 60 minutes.
            </div>
            <button onClick={reset} style={cx(styles.publishBtn, { marginTop: 16, alignSelf: "stretch" })}>
              <span style={styles.publishBtnText}>Fermer</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
function ProductDetail({ product, visible, onClose, onSendRequest, currentUser, currentRole, onEditProduct, onDeleteProduct }) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  if (!product || !visible) return null;
  const isMine = product.seller === currentUser;
  return (
    <div style={styles.fullScreenModal}>
      <div style={styles.detailHeader}>
        <button onClick={onClose} style={styles.backBtn}>
          <ChevronLeft size={18} color={C.ink} />
        </button>
        <span style={styles.detailHeaderTitle}>Détail du produit</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18 }}>
        <div style={styles.detailHero}>
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, marginBottom: 8 }} />
          ) : (
            <span style={{ fontSize: 56 }}>{product.emoji}</span>
          )}
          <div style={styles.detailName}>{product.name}</div>
          <div style={styles.detailUnit}>{product.unit}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: 12 }}>
          <div style={styles.priceBox}>
            <div style={styles.priceLabel}>Prix</div>
            <div style={styles.priceValue}>{product.price}</div>
          </div>
          <div style={styles.ratingBox}>
            <div style={styles.ratingLabel}>Note vendeur</div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 4 }}>
              <Star size={14} color={C.gold} filled />
              <span style={styles.ratingValue}> {product.rating}</span>
            </div>
          </div>
        </div>
        <div style={styles.sectionLabel}>Vendeur</div>
        <div style={styles.sellerCard}>
          <div style={styles.sellerAvatar}>
            <span style={{ color: "#fff", fontWeight: "700" }}>{product.seller.charAt(0)}</span>
          </div>
          <div>
            <div style={styles.sellerName}>{product.seller}</div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <MapPin size={11} color={C.inkSoft} />
              <span style={styles.sellerRegion}> {product.region}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={cx(styles.detailFooter, { display: "flex", flexDirection: "row", gap: 10 })}>
        {isMine ? (
          <React.Fragment>
            <button onClick={() => setEditOpen(true)} style={cx(styles.publishBtn, { flex: 1 })}>
              <span style={styles.publishBtnText}>Modifier</span>
            </button>
            <button onClick={() => { onDeleteProduct(product.id); onClose(); }} style={cx(styles.deleteBtn, { flex: 1 })}>
              <span style={styles.publishBtnText}>Supprimer</span>
            </button>
          </React.Fragment>
        ) : (
          canRequest(currentRole) && (
            <button onClick={() => setRequestOpen(true)} style={cx(styles.publishBtn, { flex: 1 })}>
              <span style={styles.publishBtnText}>Faire une demande</span>
            </button>
          )
        )}
      </div>
      <RequestSheet
        product={product}
        visible={requestOpen}
        onClose={() => setRequestOpen(false)}
        onSubmit={(details) => onSendRequest(product, details)}
      />
      <EditProductModal
        product={editOpen ? product : null}
        visible={editOpen}
        onClose={() => { setEditOpen(false); onClose(); }}
        onSave={onEditProduct}
        onDelete={(id) => { onDeleteProduct(id); onClose(); }}
      />
    </div>
  );
}
function EditProductModal({ product, visible, onClose, onSave, onDelete }) {
  const [form, setForm] = useState({ name: "", cat: "vivrier", region: REGIONS[0], price: "", unit: "", capacity: "" });
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  useEffect(() => {
    if (product) {
      setForm({ name: product.name, cat: product.cat, region: product.region, price: product.price, unit: product.unit, capacity: product.capacity || "" });
      setConfirmingDelete(false);
    }
  }, [product && product.id]);
  if (!product || !visible) return null;
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const save = () => {
    if (!form.name || !form.price) return;
    onSave(product.id, form);
    onClose();
  };
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.orderSheet}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <span style={styles.sectionLabel}>Modifier l'annonce</span>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><XIcon size={20} color={C.inkSoft} /></button>
        </div>
        <div style={{ maxHeight: 420, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <div style={styles.formLabel}>Nom du produit</div>
            <input style={styles.input} value={form.name} onChange={(e) => set("name", e.target.value)} />
          </div>
          <div>
            <div style={styles.formLabel}>Catégorie</div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {CATEGORIES.map((c) => (
                <Chip key={c.id} active={form.cat === c.id} onPress={() => set("cat", c.id)}>{c.label}</Chip>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={styles.formLabel}>Prix</div>
              <input style={styles.input} value={form.price} onChange={(e) => set("price", e.target.value)} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={styles.formLabel}>Quantité</div>
              <input style={styles.input} value={form.unit} onChange={(e) => set("unit", e.target.value)} />
            </div>
          </div>
          <div>
            <div style={styles.formLabel}>Région</div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {REGIONS.map((r) => (
                <Chip key={r} active={form.region === r} onPress={() => set("region", r)}>{r}</Chip>
              ))}
            </div>
          </div>
          <div>
            <div style={styles.formLabel}>Capacité de livraison (optionnel)</div>
            <input style={styles.input} placeholder="Ex : jusqu'à 2 tonnes/semaine" value={form.capacity} onChange={(e) => set("capacity", e.target.value)} />
          </div>
        </div>
        {confirmingDelete ? (
          <div style={{ marginTop: 14 }}>
            <div style={{ color: C.laterite, fontSize: 12.5, marginBottom: 10, textAlign: "center" }}>
              Supprimer définitivement cette annonce ?
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <button onClick={() => setConfirmingDelete(false)} style={styles.cancelBtn}>
                <span style={{ color: C.inkSoft, fontWeight: "600" }}>Annuler</span>
              </button>
              <button onClick={() => { onDelete(product.id); onClose(); }} style={cx(styles.deleteBtn, { flex: 1 })}>
                <span style={styles.publishBtnText}>Confirmer la suppression</span>
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: 14 }}>
            <button onClick={() => setConfirmingDelete(true)} style={cx(styles.deleteBtn, { flex: 1 })}>
              <span style={styles.publishBtnText}>Supprimer</span>
            </button>
            <button onClick={save} style={cx(styles.publishBtn, { flex: 1 })}>
              <span style={styles.publishBtnText}>Enregistrer</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
function PublishForm({ onPublish, currentUser, sellerPaymentMethod, sellerPaymentPhone }) {
  const [form, setForm] = useState({ name: "", cat: "vivrier", region: REGIONS[0], price: "", unit: "", capacity: "" });
  const [done, setDone] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputId = "photo-input-" + currentUser;
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const pickPhoto = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const submit = async () => {
    if (!form.name || !form.price) return;
    setUploadError("");
    let imageUrl = "";
    if (photoFile) {
      setUploading(true);
      try {
        const ref = storage.ref("products/" + Date.now() + "_" + photoFile.name);
        await ref.put(photoFile);
        imageUrl = await ref.getDownloadURL();
      } catch (error) {
        console.warn("Échec de l'upload de la photo :", error.message);
        setUploadError("La photo n'a pas pu être envoyée (annonce publiée sans photo). Vérifiez que Firebase Storage est activé.");
      }
      setUploading(false);
    }
    onPublish({
      id: Date.now(), name: form.name, cat: form.cat, region: form.region, seller: currentUser,
      price: form.price, unit: form.unit || "quantité à négocier", capacity: form.capacity,
      sellerPaymentMethod: sellerPaymentMethod || "", sellerPaymentPhone: sellerPaymentPhone || "",
      imageUrl, rating: 5.0, emoji: "🌿",
    });
    setDone(true);
    setTimeout(() => setDone(false), 1800);
    setForm({ name: "", cat: "vivrier", region: REGIONS[0], price: "", unit: "", capacity: "" });
    setPhotoFile(null);
    setPhotoPreview(null);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={cx(styles.sectionLabel, { marginTop: 4 })}>Publier une nouvelle annonce</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <label htmlFor={fileInputId} style={cx(styles.photoBox, { cursor: "pointer", overflow: "hidden" })}>
          {photoPreview ? (
            <img src={photoPreview} alt="Aperçu" style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10 }} />
          ) : (
            <React.Fragment>
              <CameraIcon size={22} color={C.inkSoft} />
              <span style={{ color: C.inkSoft, fontSize: 12, marginTop: 6 }}>Prendre une photo ou en choisir une</span>
            </React.Fragment>
          )}
        </label>
        <input
          id={fileInputId} type="file" accept="image/*" onChange={pickPhoto}
          style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        />
        {!!uploadError && <span style={styles.authError}>{uploadError}</span>}
        <div>
          <div style={styles.formLabel}>Nom du produit</div>
          <input style={styles.input} placeholder="Ex : Bananes plantain" value={form.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <div style={styles.formLabel}>Catégorie</div>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {CATEGORIES.map((c) => (
              <Chip key={c.id} active={form.cat === c.id} onPress={() => set("cat", c.id)}>{c.label}</Chip>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={styles.formLabel}>Prix</div>
            <input style={styles.input} placeholder="Ex : 5 000 FC / kg" value={form.price} onChange={(e) => set("price", e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={styles.formLabel}>Quantité</div>
            <input style={styles.input} placeholder="Ex : sac 50kg" value={form.unit} onChange={(e) => set("unit", e.target.value)} />
          </div>
        </div>
        <div>
          <div style={styles.formLabel}>Région</div>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {REGIONS.map((r) => (
              <Chip key={r} active={form.region === r} onPress={() => set("region", r)}>{r}</Chip>
            ))}
          </div>
        </div>
        <div>
          <div style={styles.formLabel}>Capacité de livraison (optionnel)</div>
          <input style={styles.input} placeholder="Ex : jusqu'à 2 tonnes/semaine, livraison Kinshasa uniquement" value={form.capacity} onChange={(e) => set("capacity", e.target.value)} />
        </div>
      </div>
      {done ? (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 12 }}>
          <Check size={18} color={C.leaf} />
          <span style={{ color: C.leaf, fontWeight: "700", marginLeft: 8 }}>Annonce publiée !</span>
        </div>
      ) : (
        <button onClick={submit} disabled={uploading} style={cx(styles.publishBtn, { marginTop: 14, opacity: uploading ? 0.6 : 1 })}>
          <span style={styles.publishBtnText}>{uploading ? "Envoi de la photo..." : "Publier l'annonce"}</span>
        </button>
      )}
    </div>
  );
}
const PRODUCT_STATUS_LABELS = {
  en_attente: "En attente de validation",
  approuve: "Visible sur le marché",
  refusee: "Refusée par l'équipe",
};
function EspaceFournisseurScreen({ myProducts, currentUser, sellerPaymentMethod, sellerPaymentPhone, onPublish, onEditProduct, onDeleteProduct }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const missingPayment = !sellerPaymentMethod || !sellerPaymentPhone;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Espace Fournisseur</span>
        <div style={styles.formHeaderSub}>Vos produits, vos capacités, vos annonces</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        {missingPayment && (
          <div style={cx(styles.simNote, { color: C.laterite, fontStyle: "normal", fontWeight: "600" })}>
            Renseignez votre numéro Mobile Money dans l'onglet Profil pour pouvoir être payé une fois une commande confirmée.
          </div>
        )}
        <div style={styles.sectionLabel}>Mes annonces</div>
        {myProducts.length === 0 ? (
          <span style={styles.emptyText}>Vous n'avez encore rien publié.</span>
        ) : (
          myProducts.map((p) => (
            <div key={p.id} style={styles.myProductRow}>
              <span style={{ fontSize: 22, marginRight: 10 }}>{p.emoji}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.cardTitle}>{p.name}</div>
                <div style={styles.cardSub}>{p.price}{p.capacity ? ` · ${p.capacity}` : ""}</div>
                <div style={cx(styles.cardSub, { marginTop: 2, fontWeight: "700", color: p.status === "approuve" ? C.leaf : p.status === "refusee" ? C.laterite : C.gold })}>
                  {PRODUCT_STATUS_LABELS[p.status] || "En attente de validation"}
                </div>
              </div>
              <button onClick={() => setEditingProduct(p)} style={styles.iconBtn}>
                <Edit2 size={15} color={C.leaf} />
              </button>
              <button onClick={() => onDeleteProduct(p.id)} style={styles.iconBtn}>
                <Trash2 size={15} color={C.laterite} />
              </button>
            </div>
          ))
        )}
        <PublishForm onPublish={onPublish} currentUser={currentUser} sellerPaymentMethod={sellerPaymentMethod} sellerPaymentPhone={sellerPaymentPhone} />
      </div>
      <EditProductModal
        product={editingProduct}
        visible={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        onSave={onEditProduct}
        onDelete={onDeleteProduct}
      />
    </div>
  );
}
function EspaceAcheteurScreen({ products, onOpen, myCity, setMyCity, myRequests, onConfirmOrder }) {
  const [view, setView] = useState("parcourir");
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <button onClick={() => setView("parcourir")} style={cx(styles.segment, view === "parcourir" && styles.segmentActive, { backgroundColor: view === "parcourir" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, view === "parcourir" && styles.segmentTextActive, { color: view === "parcourir" ? C.forest : C.inkSoft })}>Parcourir</span>
          </button>
          <button onClick={() => setView("demandes")} style={cx(styles.segment, view === "demandes" && styles.segmentActive, { backgroundColor: view === "demandes" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, view === "demandes" && styles.segmentTextActive, { color: view === "demandes" ? C.forest : C.inkSoft })}>Mes demandes</span>
          </button>
        </div>
      </div>
      {view === "parcourir" ? (
        <MarcheScreen products={products} onOpen={onOpen} myCity={myCity} setMyCity={setMyCity} />
      ) : (
        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {myRequests.length === 0 ? (
            <span style={styles.emptyText}>Aucune demande envoyée pour l'instant.</span>
          ) : (
            myRequests.map((r) => (
              <div key={r.id} style={styles.myProductRow}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={styles.profileRowLabel}>{r.productName} — {r.quantity}</div>
                  <div style={cx(styles.profileRowValue, { fontWeight: "700", color: r.status === "nouvelle" ? C.laterite : C.leaf })}>
                    {REQUEST_STATUS_LABELS[r.status] || r.status}
                  </div>
                  {r.status === "devis_envoye" && r.quote && (
                    <React.Fragment>
                      <div style={cx(styles.profileRowValue, { marginTop: 4 })}>
                        Devis : {r.quote.price} · {r.quote.availableQuantity} · livraison {r.quote.deliveryDate || "—"}
                      </div>
                      {!!r.quote.conditions && (
                        <div style={cx(styles.profileRowValue, { fontStyle: "italic" })}>{r.quote.conditions}</div>
                      )}
                      <div style={{ display: "flex", flexDirection: "row", gap: 8, marginTop: 8 }}>
                        <button onClick={() => onConfirmOrder(r.id, "refusee")} style={cx(styles.deleteBtn, { flex: 1, padding: "9px 0" })}>
                          <span style={cx(styles.publishBtnText, { fontSize: 12.5 })}>Annuler</span>
                        </button>
                        <button onClick={() => onConfirmOrder(r.id, "confirmee")} style={cx(styles.publishBtn, { flex: 1, padding: "9px 0" })}>
                          <span style={cx(styles.publishBtnText, { fontSize: 12.5 })}>Confirmer ma commande</span>
                        </button>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
const AFA_CONTACTS = [
  { label: "WhatsApp / Appel", value: "+243 XX XXX XXXX", icon: "cellphone" },
  { label: "E-mail", value: "contact@afa-rdc.cd", icon: "mail" },
];
function ContactScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Contact</span>
        <div style={styles.formHeaderSub}>Une question, un problème ? Contactez l'équipe AFA</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        {AFA_CONTACTS.map((c, i) => (
          <div key={i} style={styles.sellerCard}>
            <div style={styles.sellerAvatar}>
              {c.icon === "mail" ? <Mail size={18} color="#fff" /> : <Phone size={18} color="#fff" />}
            </div>
            <div>
              <div style={styles.sellerName}>{c.label}</div>
              <div style={styles.sellerRegion}>{c.value}</div>
            </div>
          </div>
        ))}
        <div style={styles.simNote}>
          Pour toute question sur une demande en cours, précisez le nom du produit et la date de votre demande — ça accélère le traitement.
        </div>
      </div>
    </div>
  );
}
function DiagnosticIAScreen() {
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pickPhoto = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
    setDiagnosis("");
    setError("");
  };

  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const diagnose = async () => {
    if (!photoFile) return;
    setLoading(true);
    setError("");
    setDiagnosis("");
    try {
      if (!window.diagnosePlant) throw new Error("non initialisé");
      const base64 = await fileToBase64(photoFile);
      const text = await window.diagnosePlant(base64, photoFile.type || "image/jpeg");
      setDiagnosis(text);
    } catch (err) {
      console.warn("Échec du diagnostic IA :", err.message);
      setError("Le diagnostic n'a pas pu être réalisé pour l'instant (fonctionnalité peut-être pas encore activée par l'équipe AFA). Réessayez plus tard, ou demandez conseil directement à l'équipe.");
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontSize: 12, color: C.inkSoft }}>
          Prenez en photo une feuille ou un plant qui semble malade — l'IA donne un premier avis, à confirmer si besoin auprès d'un agronome.
        </div>
        <label htmlFor="diagnostic-photo-input" style={cx(styles.photoBox, { cursor: "pointer", overflow: "hidden" })}>
          {photoPreview ? (
            <img src={photoPreview} alt="Aperçu" style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10 }} />
          ) : (
            <React.Fragment>
              <CameraIcon size={22} color={C.inkSoft} />
              <span style={{ color: C.inkSoft, fontSize: 12, marginTop: 6 }}>Prendre une photo de la plante</span>
            </React.Fragment>
          )}
        </label>
        <input
          id="diagnostic-photo-input" type="file" accept="image/*" onChange={pickPhoto}
          style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        />
        <button onClick={diagnose} disabled={!photoFile || loading} style={cx(styles.publishBtn, { opacity: (!photoFile || loading) ? 0.5 : 1 })}>
          <span style={styles.publishBtnText}>{loading ? "Analyse en cours..." : "Diagnostiquer"}</span>
        </button>
        {!!error && <span style={styles.authError}>{error}</span>}
        {!!diagnosis && (
          <div style={styles.articleCard}>
            <div style={styles.articleIcon}><DataIcon name="leaf-off" size={20} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={styles.articleCat}>DIAGNOSTIC IA</div>
              <div style={styles.articleBody}>{diagnosis}</div>
            </div>
          </div>
        )}
        <div style={styles.simNote}>
          Diagnostic généré automatiquement, il peut se tromper — en cas de doute, consultez un agronome ou l'équipe AFA (onglet Contact).
        </div>
      </div>
    </div>
  );
}
function ConnaissancesScreen() {
  const [filter, setFilter] = useState("Tout");
  const [view, setView] = useState("articles");
  const [articles, setArticles] = useState(KNOWLEDGE_ARTICLES);
  const cats = ["Tout", "Conseils", "Météo", "Maladies", "Formation"];
  useEffect(() => {
    const unsubscribe = db.collection("articles").orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setArticles(snapshot.empty ? KNOWLEDGE_ARTICLES : snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      }, (error) => {
        console.warn("Articles indisponibles, affichage des exemples :", error.message);
        setArticles(KNOWLEDGE_ARTICLES);
      });
    return unsubscribe;
  }, []);
  const list = filter === "Tout" ? articles : articles.filter((a) => a.cat === filter);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Centre de connaissances</span>
        <div style={styles.formHeaderSub}>Conseils pratiques, météo et bonnes pratiques agricoles</div>
      </div>
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <button onClick={() => setView("articles")} style={cx(styles.segment, { backgroundColor: view === "articles" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, { color: view === "articles" ? C.forest : C.inkSoft })}>Articles</span>
          </button>
          <button onClick={() => setView("diagnostic")} style={cx(styles.segment, { backgroundColor: view === "diagnostic" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, { color: view === "diagnostic" ? C.forest : C.inkSoft })}>Diagnostic IA</span>
          </button>
        </div>
      </div>
      {view === "diagnostic" ? (
        <DiagnosticIAScreen />
      ) : (
        <React.Fragment>
      <div style={{ paddingTop: 12, paddingBottom: 12 }}>
        <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", paddingLeft: 16, paddingRight: 16, gap: 8 }}>
          {cats.map((c) => <Chip key={c} active={filter === c} onPress={() => setFilter(c)}>{c}</Chip>)}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {list.length === 0 && <span style={styles.emptyText}>Rien dans cette catégorie pour l'instant.</span>}
        {list.map((a) => (
          <div key={a.id} style={styles.articleCard}>
            <div style={styles.articleIcon}><DataIcon name={a.icon || "book-open-variant"} size={20} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={styles.articleCat}>{(a.cat || "").toUpperCase()}</div>
              <div style={styles.cardTitle}>{a.title}</div>
              <div style={styles.articleBody}>{a.body}</div>
              {!!a.videoUrl && <VideoEmbed url={a.videoUrl} />}
            </div>
          </div>
        ))}
      </div>
      </React.Fragment>
      )}
    </div>
  );
}
function ModerationScreen({ pendingProducts, onApprove, onReject }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Modération</span>
        <div style={styles.formHeaderSub}>Validez les annonces avant qu'elles soient visibles par les acheteurs</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {pendingProducts.length === 0 ? (
          <span style={styles.emptyText}>Aucune annonce en attente pour l'instant.</span>
        ) : (
          pendingProducts.map((p) => (
            <div key={p.id} style={styles.card}>
              <div style={cx(styles.cardThumb, { overflow: "hidden" })}>
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontSize: 26 }}>{p.emoji}</span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.cardTitle}>{p.name}</div>
                <div style={styles.cardSub}>{p.seller} · {p.region}</div>
                <div style={cx(styles.cardSub, { marginTop: 2 })}>{p.price}{p.unit ? ` · ${p.unit}` : ""}</div>
                <div style={{ display: "flex", flexDirection: "row", gap: 8, marginTop: 8 }}>
                  <button onClick={() => onReject(p.id)} style={cx(styles.deleteBtn, { flex: 1, padding: "9px 0" })}>
                    <span style={cx(styles.publishBtnText, { fontSize: 12.5 })}>Refuser</span>
                  </button>
                  <button onClick={() => onApprove(p.id)} style={cx(styles.publishBtn, { flex: 1, padding: "9px 0" })}>
                    <span style={cx(styles.publishBtnText, { fontSize: 12.5 })}>Valider</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
function ContenusScreen({ articles, onPublish, onDelete }) {
  const [form, setForm] = useState({ title: "", cat: "Conseils", body: "", videoUrl: "" });
  const [done, setDone] = useState(false);
  const cats = ["Conseils", "Météo", "Maladies", "Formation"];
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = () => {
    if (!form.title.trim() || !form.body.trim()) return;
    onPublish({ title: form.title.trim(), cat: form.cat, body: form.body.trim(), videoUrl: form.videoUrl.trim(), icon: "book-open-variant" });
    setDone(true);
    setTimeout(() => setDone(false), 1800);
    setForm({ title: "", cat: "Conseils", body: "", videoUrl: "" });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Contenus (Centre de connaissances)</span>
        <div style={styles.formHeaderSub}>Publier un conseil, une info météo ou une vidéo de formation</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={styles.formLabel}>Titre</div>
          <input style={styles.input} placeholder="Ex : Bien conserver le manioc après récolte" value={form.title} onChange={(e) => set("title", e.target.value)} />
        </div>
        <div>
          <div style={styles.formLabel}>Catégorie</div>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            {cats.map((c) => (
              <Chip key={c} active={form.cat === c} onPress={() => set("cat", c)}>{c}</Chip>
            ))}
          </div>
        </div>
        <div>
          <div style={styles.formLabel}>Texte</div>
          <textarea style={cx(styles.input, { resize: "vertical", minHeight: 80 })} placeholder="Le conseil ou la description de la vidéo..." value={form.body} onChange={(e) => set("body", e.target.value)} />
        </div>
        <div>
          <div style={styles.formLabel}>Lien vidéo YouTube (optionnel)</div>
          <input style={styles.input} placeholder="Ex : https://www.youtube.com/watch?v=..." value={form.videoUrl} onChange={(e) => set("videoUrl", e.target.value)} />
          <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 4 }}>
            Collez le lien complet de la vidéo YouTube (recommandé : 3 à 5 minutes maximum, en non répertorié si vous ne voulez pas qu'elle soit publique sur YouTube).
          </div>
        </div>
        {done ? (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 12 }}>
            <Check size={18} color={C.leaf} />
            <span style={{ color: C.leaf, fontWeight: "700", marginLeft: 8 }}>Contenu publié !</span>
          </div>
        ) : (
          <button onClick={submit} style={styles.publishBtn}>
            <span style={styles.publishBtnText}>Publier</span>
          </button>
        )}
        <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Contenus publiés</div>
        {articles.length === 0 ? (
          <span style={styles.emptyText}>Rien publié pour l'instant.</span>
        ) : (
          articles.map((a) => (
            <div key={a.id} style={styles.myProductRow}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.cardTitle}>{a.title}</div>
                <div style={styles.cardSub}>{a.cat}{a.videoUrl ? " · avec vidéo" : ""}</div>
              </div>
              {a.id && (
                <button onClick={() => onDelete(a.id)} style={styles.iconBtn}>
                  <Trash2 size={15} color={C.laterite} />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
function LivraisonsScreen({ myDeliveries, onMarkDelivered }) {
  const pending = myDeliveries.filter((r) => !r.deliveredAt);
  const delivered = myDeliveries.filter((r) => !!r.deliveredAt);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Livraisons</span>
        <div style={styles.formHeaderSub}>Vos missions assignées par l'équipe AFA</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={styles.sectionLabel}>À livrer</div>
        {pending.length === 0 ? (
          <span style={styles.emptyText}>Aucune livraison assignée pour l'instant.</span>
        ) : (
          pending.map((r) => (
            <div key={r.id} style={styles.card}>
              <div style={styles.cardThumb}><Truck size={24} color={C.leaf} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.cardTitle}>{r.productName} — {r.quantity}</div>
                <div style={styles.cardSub}>Prendre chez {r.sellerName} · livrer à {r.deliveryLocation}</div>
                <div style={cx(styles.cardSub, { marginTop: 2 })}>Pour {r.buyerName}</div>
                <button onClick={() => onMarkDelivered(r.id)} style={cx(styles.publishBtn, { marginTop: 8, padding: "9px 0" })}>
                  <span style={cx(styles.publishBtnText, { fontSize: 12.5 })}>Marquer comme livrée</span>
                </button>
              </div>
            </div>
          ))
        )}
        <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Livrées</div>
        {delivered.length === 0 ? (
          <span style={styles.emptyText}>Aucune livraison terminée pour l'instant.</span>
        ) : (
          delivered.map((r) => (
            <div key={r.id} style={styles.profileRow}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.profileRowLabel}>{r.productName} — {r.buyerName}</div>
                <div style={cx(styles.profileRowValue, { color: C.leaf, fontWeight: "700" })}>Livrée</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
function formatTime(ts) {
  if (!ts || !ts.toDate) return "";
  const d = ts.toDate();
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  return sameDay
    ? d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}
const REQUEST_STATUS_LABELS = {
  nouvelle: "Nouvelle demande",
  devis_envoye: "Devis envoyé",
  confirmee: "Confirmée",
  refusee: "Refusée",
};
function RequestDetailModal({ request, visible, onClose, onSendQuote, onSetStatus, onAssignTransporter, transporters, readOnly }) {
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [conditions, setConditions] = useState("");
  const [pickingTransporter, setPickingTransporter] = useState(false);
  useEffect(() => {
    if (request && request.quote) {
      setAvailableQuantity(request.quote.availableQuantity || "");
      setPrice(request.quote.price || "");
      setDeliveryDate(request.quote.deliveryDate || "");
      setConditions(request.quote.conditions || "");
    } else {
      setAvailableQuantity(""); setPrice(""); setDeliveryDate(""); setConditions("");
    }
  }, [request && request.id]);
  if (!request || !visible) return null;
  const send = () => {
    if (!availableQuantity.trim() || !price.trim()) return;
    onSendQuote(request.id, { availableQuantity: availableQuantity.trim(), price: price.trim(), deliveryDate: deliveryDate.trim(), conditions: conditions.trim() });
    onClose();
  };
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.orderSheet}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <span style={styles.sectionLabel}>Demande de {request.buyerName}</span>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><XIcon size={20} color={C.inkSoft} /></button>
        </div>
        <div style={{ maxHeight: 420, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Produit</span>
            <span style={styles.profileRowValue}>{request.productName}</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Fournisseur pressenti</span>
            <span style={styles.profileRowValue}>{request.sellerName}</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Quantité souhaitée</span>
            <span style={styles.profileRowValue}>{request.quantity}</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Date souhaitée</span>
            <span style={styles.profileRowValue}>{request.neededDate || "—"}</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Lieu de livraison</span>
            <span style={styles.profileRowValue}>{request.deliveryLocation}</span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Mobile Money acheteur (encaissement)</span>
            <span style={styles.profileRowValue}>
              {(PAYMENT_METHODS.find((m) => m.id === request.paymentMethod) || {}).label || request.paymentMethod || "—"}
              {request.paymentPhone ? ` · ${request.paymentPhone}` : ""}
            </span>
          </div>
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Mobile Money vendeur (reversement)</span>
            <span style={styles.profileRowValue}>
              {request.sellerPaymentPhone
                ? `${(PAYMENT_METHODS.find((m) => m.id === request.sellerPaymentMethod) || {}).label || request.sellerPaymentMethod} · ${request.sellerPaymentPhone}`
                : "Non renseigné par le vendeur"}
            </span>
          </div>
          {!!request.notes && (
            <div style={{ fontSize: 12.5, color: C.inkSoft, fontStyle: "italic" }}>{request.notes}</div>
          )}
          {request.quote && (
            <React.Fragment>
              <div style={cx(styles.sectionLabel, { marginTop: 4 })}>Devis envoyé</div>
              <div style={styles.profileRow}>
                <span style={styles.profileRowLabel}>Prix</span>
                <span style={styles.profileRowValue}>{request.quote.price}</span>
              </div>
              <div style={styles.profileRow}>
                <span style={styles.profileRowLabel}>Quantité disponible</span>
                <span style={styles.profileRowValue}>{request.quote.availableQuantity}</span>
              </div>
              <div style={styles.profileRow}>
                <span style={styles.profileRowLabel}>Date de livraison</span>
                <span style={styles.profileRowValue}>{request.quote.deliveryDate || "—"}</span>
              </div>
            </React.Fragment>
          )}
          {request.status === "confirmee" && (
            <React.Fragment>
              <div style={cx(styles.sectionLabel, { marginTop: 4 })}>Livraison</div>
              {request.deliveryTransporterName ? (
                <div style={styles.profileRow}>
                  <span style={styles.profileRowLabel}>Transporteur assigné</span>
                  <span style={styles.profileRowValue}>
                    {request.deliveryTransporterName}{request.deliveryTransporterPhone ? ` · ${request.deliveryTransporterPhone}` : ""}
                    {request.deliveredAt ? " · Livré" : " · En attente"}
                  </span>
                </div>
              ) : (
                <span style={styles.emptyText}>Aucun transporteur assigné pour l'instant.</span>
              )}
              {!readOnly && (
                pickingTransporter ? (
                  <React.Fragment>
                    {(transporters || []).length === 0 && (
                      <span style={styles.emptyText}>Aucun transporteur n'a encore de compte avec un numéro enregistré.</span>
                    )}
                    {(transporters || []).map((t) => (
                      <button
                        key={t.uid}
                        onClick={() => { onAssignTransporter(request.id, t); setPickingTransporter(false); }}
                        style={styles.vendorCard}
                      >
                        <div style={styles.threadAvatar}><Truck size={18} color={C.forest} /></div>
                        <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                          <div style={styles.cardTitle}>{t.name}</div>
                          <div style={styles.cardSub}>{t.contactPhone || "Numéro non renseigné"}</div>
                        </div>
                      </button>
                    ))}
                    <button onClick={() => setPickingTransporter(false)} style={styles.cancelBtn}>
                      <span style={{ color: C.inkSoft, fontWeight: "600" }}>Annuler</span>
                    </button>
                  </React.Fragment>
                ) : (
                  <button onClick={() => setPickingTransporter(true)} style={styles.publishBtn}>
                    <span style={styles.publishBtnText}>{request.deliveryTransporterName ? "Changer de transporteur" : "Assigner un transporteur"}</span>
                  </button>
                )
              )}
            </React.Fragment>
          )}
          {!readOnly && (
            <React.Fragment>
              <div style={cx(styles.sectionLabel, { marginTop: 4 })}>Réponse / devis</div>
              <div>
                <div style={styles.formLabel}>Quantité disponible</div>
                <input style={styles.input} placeholder="Ex : 3 sacs de 50kg" value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)} />
              </div>
              <div>
                <div style={styles.formLabel}>Prix proposé</div>
                <input style={styles.input} placeholder="Ex : 45 000 FC" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div>
                <div style={styles.formLabel}>Date de livraison proposée</div>
                <input style={styles.input} placeholder="Ex : 18 septembre" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
              </div>
              <div>
                <div style={styles.formLabel}>Conditions (optionnel)</div>
                <textarea style={cx(styles.input, { resize: "vertical", minHeight: 50 })} value={conditions} onChange={(e) => setConditions(e.target.value)} />
              </div>
            </React.Fragment>
          )}
        </div>
        {readOnly ? (
          <div style={cx(styles.simNote, { marginTop: 8 })}>
            Statut actuel : {REQUEST_STATUS_LABELS[request.status] || request.status} (lecture seule)
          </div>
        ) : (
          <React.Fragment>
            <button onClick={send} disabled={!availableQuantity.trim() || !price.trim()} style={cx(styles.publishBtn, { marginTop: 14, opacity: (availableQuantity.trim() && price.trim()) ? 1 : 0.5 })}>
              <span style={styles.publishBtnText}>Envoyer le devis</span>
            </button>
            <div style={cx(styles.sectionLabel, { marginTop: 12 })}>Statut de la demande</div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <button
                onClick={() => { onSetStatus(request.id, "refusee"); onClose(); }}
                style={cx(styles.deleteBtn, { flex: 1, opacity: request.status === "refusee" ? 0.5 : 1 })}
                disabled={request.status === "refusee"}
              >
                <span style={styles.publishBtnText}>Refuser</span>
              </button>
              <button
                onClick={() => { onSetStatus(request.id, "confirmee"); onClose(); }}
                style={cx(styles.publishBtn, { flex: 1, opacity: request.status === "confirmee" ? 0.5 : 1 })}
                disabled={request.status === "confirmee"}
              >
                <span style={styles.publishBtnText}>Confirmer</span>
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
function RequestsScreen({ requests, onSendQuote, onSetStatus, onAssignTransporter, transporters }) {
  const [openRequest, setOpenRequest] = useState(null);
  const [filter, setFilter] = useState("Toutes");
  const filters = ["Toutes", "nouvelle", "devis_envoye", "confirmee", "refusee"];
  const list = filter === "Toutes" ? requests : requests.filter((r) => r.status === filter);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Demandes (équipe AFA)</span>
        <div style={styles.formHeaderSub}>Traitez les demandes des acheteurs et envoyez un devis</div>
      </div>
      <div style={{ paddingTop: 12, paddingBottom: 12 }}>
        <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", paddingLeft: 16, paddingRight: 16, gap: 8 }}>
          {filters.map((f) => (
            <Chip key={f} active={filter === f} onPress={() => setFilter(f)}>{f === "Toutes" ? "Toutes" : REQUEST_STATUS_LABELS[f]}</Chip>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {list.length === 0 && <span style={styles.emptyText}>Aucune demande dans cette catégorie.</span>}
        {list.map((r) => (
          <button key={r.id} onClick={() => setOpenRequest(r)} style={styles.card}>
            <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
              <div style={styles.cardTitle}>{r.productName} — {r.quantity}</div>
              <div style={styles.cardSub}>De {r.buyerName} · {formatTime(r.createdAt)}</div>
              <div style={cx(styles.cardSub, { marginTop: 2, fontWeight: "700", color: r.status === "nouvelle" ? C.laterite : C.leaf })}>
                {REQUEST_STATUS_LABELS[r.status] || r.status}
              </div>
            </div>
          </button>
        ))}
      </div>
      <RequestDetailModal
        request={openRequest}
        visible={!!openRequest}
        onClose={() => setOpenRequest(null)}
        onSendQuote={onSendQuote}
        onSetStatus={onSetStatus}
        onAssignTransporter={onAssignTransporter}
        transporters={transporters}
      />
    </div>
  );
}
function paymentLabel(id) {
  return (PAYMENT_METHODS.find((m) => m.id === id) || {}).label || id || "—";
}
// Extrait un montant numérique et sa devise depuis un texte libre saisi par l'équipe
// (ex : "45 000 FC", "3 500 FC / L", "850 $"). Approximatif par nature — les prix ne
// sont pas des nombres structurés, juste du texte, donc cette lecture reste indicative.
function parseAmount(text) {
  if (!text) return null;
  const match = String(text).match(/[\d\s]+(?:[.,]\d+)?/);
  if (!match) return null;
  const cleaned = match[0].replace(/\s/g, "").replace(",", ".");
  const value = parseFloat(cleaned);
  if (isNaN(value)) return null;
  const currency = /\$/.test(text) ? "$" : "FC";
  return { value, currency };
}
function sumAmounts(items, getText) {
  const totals = {};
  for (const item of items) {
    const parsed = parseAmount(getText(item));
    if (!parsed) continue;
    totals[parsed.currency] = (totals[parsed.currency] || 0) + parsed.value;
  }
  return totals;
}
function formatTotals(totals) {
  const keys = Object.keys(totals);
  if (keys.length === 0) return ["—"];
  // Chaque devise est retournée séparément — jamais additionnée avec une autre.
  return keys.map((k) => `${totals[k].toLocaleString("fr-FR")} ${k}`);
}
function downloadCsv(filename, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const csv = rows.map((row) => row.map(esc).join(",")).join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function FinancesScreen({ requests }) {
  const [view, setView] = useState("resume");
  const [openRequest, setOpenRequest] = useState(null);
  const [filter, setFilter] = useState("Toutes");
  const confirmed = requests.filter((r) => r.status === "confirmee" && r.quote);
  const pending = requests.filter((r) => r.status === "devis_envoye");
  const totalConfirmed = sumAmounts(confirmed, (r) => r.quote.price);
  const totalPending = sumAmounts(pending, (r) => r.quote && r.quote.price);
  const filters = ["Toutes", "nouvelle", "devis_envoye", "confirmee", "refusee"];
  const filteredAll = filter === "Toutes" ? requests : requests.filter((r) => r.status === filter);
  const downloadReport = () => {
    const rows = [
      ["Statut", "Produit", "Acheteur", "Mobile Money acheteur", "Fournisseur pressenti", "Mobile Money vendeur", "Quantité", "Prix devis", "Date livraison", "Lieu de livraison"],
      ...confirmed.map((r) => [
        "Confirmée", r.productName, r.buyerName, `${paymentLabel(r.paymentMethod)} ${r.paymentPhone || ""}`.trim(),
        r.sellerName, r.sellerPaymentPhone ? `${paymentLabel(r.sellerPaymentMethod)} ${r.sellerPaymentPhone}` : "Non renseigné",
        r.quantity, r.quote ? r.quote.price : "", r.quote ? r.quote.deliveryDate : "", r.deliveryLocation,
      ]),
      ...pending.map((r) => [
        "Devis envoyé", r.productName, r.buyerName, `${paymentLabel(r.paymentMethod)} ${r.paymentPhone || ""}`.trim(),
        r.sellerName, r.sellerPaymentPhone ? `${paymentLabel(r.sellerPaymentMethod)} ${r.sellerPaymentPhone}` : "Non renseigné",
        r.quantity, r.quote ? r.quote.price : "", r.quote ? r.quote.deliveryDate : "", r.deliveryLocation,
      ]),
      [],
      ...formatTotals(totalConfirmed).map((line) => ["TOTAL CONFIRMÉ", line, "", "", "", "", "", "", "", ""]),
      ...formatTotals(totalPending).map((line) => ["TOTAL EN ATTENTE", line, "", "", "", "", "", "", "", ""]),
    ];
    const today = new Date().toISOString().slice(0, 10);
    downloadCsv(`afa-rapport-${today}.csv`, rows);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.formHeader}>
        <span style={styles.headerTitle}>Finances</span>
        <div style={styles.formHeaderSub}>Suivi des transactions confirmées et des devis en cours</div>
      </div>
      <div style={{ padding: "12px 16px 0" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <button onClick={() => setView("resume")} style={cx(styles.segment, view === "resume" && styles.segmentActive, { backgroundColor: view === "resume" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, view === "resume" && styles.segmentTextActive, { color: view === "resume" ? C.forest : C.inkSoft })}>Résumé</span>
          </button>
          <button onClick={() => setView("toutes")} style={cx(styles.segment, view === "toutes" && styles.segmentActive, { backgroundColor: view === "toutes" ? C.leafBright : C.card, border: "1px solid " + C.line })}>
            <span style={cx(styles.segmentText, view === "toutes" && styles.segmentTextActive, { color: view === "toutes" ? C.forest : C.inkSoft })}>Toutes les demandes</span>
          </button>
        </div>
      </div>
      {view === "toutes" ? (
        <React.Fragment>
          <div style={{ paddingTop: 12, paddingBottom: 12 }}>
            <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", paddingLeft: 16, paddingRight: 16, gap: 8 }}>
              {filters.map((f) => (
                <Chip key={f} active={filter === f} onPress={() => setFilter(f)}>{f === "Toutes" ? "Toutes" : REQUEST_STATUS_LABELS[f]}</Chip>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {filteredAll.length === 0 && <span style={styles.emptyText}>Aucune demande dans cette catégorie.</span>}
            {filteredAll.map((r) => (
              <button key={r.id} onClick={() => setOpenRequest(r)} style={styles.card}>
                <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                  <div style={styles.cardTitle}>{r.productName} — {r.quantity}</div>
                  <div style={styles.cardSub}>De {r.buyerName} · {formatTime(r.createdAt)}</div>
                  <div style={cx(styles.cardSub, { marginTop: 2, fontWeight: "700", color: r.status === "nouvelle" ? C.laterite : C.leaf })}>
                    {REQUEST_STATUS_LABELS[r.status] || r.status}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <RequestDetailModal request={openRequest} visible={!!openRequest} onClose={() => setOpenRequest(null)} readOnly />
        </React.Fragment>
      ) : (
      <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div style={styles.statBox}>
            <div style={styles.statValue}>{confirmed.length}</div>
            <div style={styles.statLabel}>Transactions confirmées</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statValue}>{pending.length}</div>
            <div style={styles.statLabel}>Devis en attente</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div style={cx(styles.statBox, { backgroundColor: C.forest })}>
            {formatTotals(totalConfirmed).map((line, i) => (
              <div key={i} style={cx(styles.statValue, { color: "#fff", fontSize: 15 })}>{line}</div>
            ))}
            <div style={cx(styles.statLabel, { color: "#BFD8C6" })}>Total confirmé</div>
          </div>
          <div style={styles.statBox}>
            {formatTotals(totalPending).map((line, i) => (
              <div key={i} style={cx(styles.statValue, { fontSize: 15 })}>{line}</div>
            ))}
            <div style={styles.statLabel}>Total en attente</div>
          </div>
        </div>
        <button onClick={downloadReport} style={styles.publishBtn}>
          <span style={styles.publishBtnText}>Télécharger le rapport (CSV)</span>
        </button>
        <div style={styles.simNote}>
          Le total est calculé automatiquement en lisant le premier nombre trouvé dans chaque prix (ex. "45 000 FC" → 45 000). Vérifiez toujours le rapport CSV pour les détails exacts — un prix mal formulé ou une devise mélangée peut fausser la somme. Le rapport CSV s'ouvre dans Excel, Google Sheets ou LibreOffice Calc.
        </div>
        <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Transactions confirmées</div>
        {confirmed.length === 0 ? (
          <span style={styles.emptyText}>Aucune transaction confirmée pour l'instant.</span>
        ) : (
          confirmed.map((r) => (
            <div key={r.id} style={styles.profileRow}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.profileRowLabel}>{r.productName} — {r.buyerName}</div>
                <div style={styles.profileRowValue}>{r.quote.price} · livraison {r.quote.deliveryDate || "—"}</div>
                <div style={cx(styles.profileRowValue, { marginTop: 2 })}>Encaisser : {paymentLabel(r.paymentMethod)}{r.paymentPhone ? ` · ${r.paymentPhone}` : ""}</div>
                <div style={cx(styles.profileRowValue, { marginTop: 2 })}>Reverser à {r.sellerName} : {r.sellerPaymentPhone ? `${paymentLabel(r.sellerPaymentMethod)} · ${r.sellerPaymentPhone}` : "non renseigné"}</div>
              </div>
            </div>
          ))
        )}
        <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Devis en attente de confirmation</div>
        {pending.length === 0 ? (
          <span style={styles.emptyText}>Aucun devis en attente.</span>
        ) : (
          pending.map((r) => (
            <div key={r.id} style={styles.profileRow}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.profileRowLabel}>{r.productName} — {r.buyerName}</div>
                <div style={styles.profileRowValue}>{r.quote ? r.quote.price : "—"}</div>
                <div style={cx(styles.profileRowValue, { marginTop: 2 })}>{paymentLabel(r.paymentMethod)}{r.paymentPhone ? ` · ${r.paymentPhone}` : ""}</div>
              </div>
            </div>
          ))
        )}
      </div>
      )}
    </div>
  );
}
function PaymentInfoEditor({ paymentMethod, paymentPhone, onSave }) {
  const [method, setMethod] = useState(paymentMethod || "");
  const [phone, setPhone] = useState(paymentPhone || "");
  const [saved, setSaved] = useState(false);
  const save = () => {
    if (!method || !phone.trim()) return;
    onSave({ paymentMethod: method, paymentPhone: phone.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  return (
    <React.Fragment>
      <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Recevoir mes paiements (Mobile Money)</div>
      <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: -6, marginBottom: 2 }}>
        L'équipe AFA utilise ce numéro pour vous reverser l'argent une fois une commande confirmée.
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {PAYMENT_METHODS.map((m) => (
          <Chip key={m.id} active={method === m.id} onPress={() => setMethod(m.id)}>{m.label}</Chip>
        ))}
      </div>
      <input style={styles.input} placeholder="Numéro Mobile Money" value={phone} onChange={(e) => setPhone(e.target.value)} />
      {saved ? (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <Check size={16} color={C.leaf} />
          <span style={{ color: C.leaf, fontWeight: "700", marginLeft: 6, fontSize: 13 }}>Enregistré</span>
        </div>
      ) : (
        <button onClick={save} disabled={!method || !phone.trim()} style={cx(styles.publishBtn, { opacity: (method && phone.trim()) ? 1 : 0.5 })}>
          <span style={styles.publishBtnText}>Enregistrer</span>
        </button>
      )}
    </React.Fragment>
  );
}
function ContactPhoneEditor({ contactPhone, onSave }) {
  const [phone, setPhone] = useState(contactPhone || "");
  const [saved, setSaved] = useState(false);
  const save = () => {
    if (!phone.trim()) return;
    onSave({ contactPhone: phone.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  return (
    <React.Fragment>
      <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Mon numéro de contact</div>
      <div style={{ fontSize: 11.5, color: C.inkSoft, marginTop: -6, marginBottom: 2 }}>
        L'équipe AFA utilise ce numéro pour vous assigner une livraison.
      </div>
      <input style={styles.input} placeholder="Ex : +243 XX XXX XXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
      {saved ? (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <Check size={16} color={C.leaf} />
          <span style={{ color: C.leaf, fontWeight: "700", marginLeft: 6, fontSize: 13 }}>Enregistré</span>
        </div>
      ) : (
        <button onClick={save} disabled={!phone.trim()} style={cx(styles.publishBtn, { opacity: phone.trim() ? 1 : 0.5 })}>
          <span style={styles.publishBtnText}>Enregistrer</span>
        </button>
      )}
    </React.Fragment>
  );
}
function ChangePasswordEditor() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const save = async () => {
    setError("");
    if (!current || next.length < 6) { setError("Le nouveau mot de passe doit contenir au moins 6 caractères."); return; }
    try {
      const user = auth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, current);
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(next);
      setCurrent("");
      setNext("");
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
    } catch (err) {
      setError(err.code === "auth/wrong-password" || err.code === "auth/invalid-credential" ? "Mot de passe actuel incorrect." : "Une erreur est survenue.");
    }
  };
  return (
    <React.Fragment>
      <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Changer mon mot de passe</div>
      <input style={styles.input} placeholder="Mot de passe actuel" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} />
      <input style={cx(styles.input, { marginTop: 8 })} placeholder="Nouveau mot de passe (6 caractères min.)" type="password" value={next} onChange={(e) => setNext(e.target.value)} />
      {!!error && <span style={styles.authError}>{error}</span>}
      {saved ? (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <Check size={16} color={C.leaf} />
          <span style={{ color: C.leaf, fontWeight: "700", marginLeft: 6, fontSize: 13 }}>Mot de passe changé</span>
        </div>
      ) : (
        <button onClick={save} disabled={!current || next.length < 6} style={cx(styles.publishBtn, { marginTop: 8, opacity: (!current || next.length < 6) ? 0.5 : 1 })}>
          <span style={styles.publishBtnText}>Enregistrer le nouveau mot de passe</span>
        </button>
      )}
    </React.Fragment>
  );
}
function ProfilScreen({ profile, products, myProducts = [], myRequests, onSavePaymentInfo, onSaveContactPhone }) {
  const roleInfo = ROLES.find((r) => r.id === profile.role);
  const teamLabel = isAdminRole(profile.role) ? "Équipe AFA — Admin" : isFinancierRole(profile.role) ? "Équipe AFA — Financier" : null;
  const displayLabel = roleInfo ? roleInfo.label : (teamLabel || "Profil");
  const displayIcon = roleInfo ? roleInfo.icon : "account";
  const overseer = isOverseerRole(profile.role);
  const distinctSellers = new Set(products.map((p) => p.seller)).size;
  const byCategory = CATEGORIES.map((c) => ({
    ...c,
    count: products.filter((p) => p.cat === c.id).length,
  }));
  const logout = () => auth.signOut();
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={styles.profileHero}>
        <div style={styles.profileAvatar}>
          <DataIcon name={displayIcon} size={28} />
        </div>
        <div style={styles.profileName}>{profile.name}</div>
        <div style={styles.profileRole}>{displayLabel} · {profile.phone}</div>
        {!!(profile.ville || profile.province) && (
          <div style={cx(styles.profileRole, { marginTop: 2 })}>
            {[profile.ville, profile.province].filter(Boolean).join(", ")}
          </div>
        )}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        {overseer ? (
          <React.Fragment>
            <div style={styles.sectionLabel}>Vue d'ensemble du marché</div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <div style={styles.statBox}>
                <div style={styles.statValue}>{products.length}</div>
                <div style={styles.statLabel}>Annonces actives</div>
              </div>
              <div style={styles.statBox}>
                <div style={styles.statValue}>{distinctSellers}</div>
                <div style={styles.statLabel}>Vendeurs actifs</div>
              </div>
              <div style={styles.statBox}>
                <div style={styles.statValue}>—</div>
                <div style={styles.statLabel}>Demandes totales</div>
              </div>
            </div>
            <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Répartition par catégorie</div>
            {byCategory.map((c) => (
              <div key={c.id} style={styles.profileRow}>
                <span style={styles.profileRowLabel}>{c.label}</span>
                <span style={styles.profileRowValue}>{c.count} annonce{c.count !== 1 ? "s" : ""}</span>
              </div>
            ))}
            <div style={styles.simNote}>
              Vue de suivi — ce profil n'achète ni ne publie d'annonces sur le marché.
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={styles.sectionLabel}>Résumé</div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              {canPublish(profile.role) && (
                <div style={styles.statBox}>
                  <div style={styles.statValue}>{myProducts.length}</div>
                  <div style={styles.statLabel}>Annonces publiées</div>
                </div>
              )}
              {canRequest(profile.role) && (
                <div style={styles.statBox}>
                  <div style={styles.statValue}>{myRequests.length}</div>
                  <div style={styles.statLabel}>Mes demandes</div>
                </div>
              )}
              <div style={styles.statBox}>
                <div style={styles.statValue}>4.8 ★</div>
                <div style={styles.statLabel}>Note moyenne</div>
              </div>
            </div>
            <div style={styles.simNote}>
              {canPublish(profile.role)
                ? "Retrouvez vos annonces et vos demandes dans l'onglet Espace Fournisseur."
                : "Retrouvez le détail de vos demandes dans l'onglet Espace Acheteur."}
            </div>
          </React.Fragment>
        )}
        {canPublish(profile.role) && (
          <PaymentInfoEditor
            paymentMethod={profile.paymentMethod}
            paymentPhone={profile.paymentPhone}
            onSave={onSavePaymentInfo}
          />
        )}
        {profile.role === "transporteur" && (
          <ContactPhoneEditor
            contactPhone={profile.contactPhone}
            onSave={onSaveContactPhone}
          />
        )}
        <div style={cx(styles.sectionLabel, { marginTop: 8 })}>Compte</div>
        {!!profile.rccm && (
          <div style={styles.profileRow}>
            <span style={styles.profileRowLabel}>Numéro RCCM</span>
            <span style={styles.profileRowValue}>{profile.rccm}</span>
          </div>
        )}
        {[
          ["Paiement", "Mobile Money (Orange, Airtel, M-Pesa)"],
          ["Livraison", "Coordonnée par l'équipe AFA"],
          ["Prix du marché", "Bientôt disponible"],
        ].map((row, i) => (
          <div key={i} style={styles.profileRow}>
            <span style={styles.profileRowLabel}>{row[0]}</span>
            <span style={styles.profileRowValue}>{row[1]}</span>
          </div>
        ))}
        <ChangePasswordEditor />
        <button onClick={logout} style={styles.changeRoleBtn}>
          <span style={styles.changeRoleText}>Se déconnecter</span>
        </button>
      </div>
    </div>
  );
}
function App() {
  const [authUser, setAuthUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [tab, setTab] = useState("acheteur");
  const [products, setProducts] = useState(SEED_PRODUCTS);
  const [myProducts, setMyProducts] = useState([]);
  const [pendingProducts, setPendingProducts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [articles, setArticles] = useState(KNOWLEDGE_ARTICLES);
  const [transporters, setTransporters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openProduct, setOpenProduct] = useState(null);
  const [myCity, setMyCity] = useState("Kinshasa");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setAuthUser(user);
      if (user) {
        try {
          const snap = await db.collection("users").doc(user.uid).get();
          let loadedProfile;
          if (snap.exists) {
            loadedProfile = snap.data();
          } else {
            // Filet de sécurité : on retrouve le numéro à partir de l'e-mail technique interne
            const phoneGuess = (user.email || "").split("@")[0];
            loadedProfile = { name: user.displayName || "Utilisateur", role: "consommateur", phone: phoneGuess };
          }
          setProfile(loadedProfile);
          setTab(homeTabForRole(loadedProfile.role));
        } catch (error) {
          console.warn("Profil indisponible :", error.message);
        }
      } else {
        setProfile(null);
      }
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = db.collection("products").where("status", "==", "approuve")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => ((b.createdAt && b.createdAt.toMillis && b.createdAt.toMillis()) || 0) - ((a.createdAt && a.createdAt.toMillis && a.createdAt.toMillis()) || 0));
        setProducts(snapshot.empty ? SEED_PRODUCTS : list);
        setLoading(false);
      }, (error) => {
        console.warn("Firestore indisponible, affichage des exemples :", error.message);
        setProducts(SEED_PRODUCTS);
        setLoading(false);
      });
    return unsubscribe;
  }, []);
  // Ses propres annonces (tous statuts confondus) — un vendeur doit voir les siennes
  // même en attente de validation, contrairement au marché public.
  useEffect(() => {
    if (!authUser || !profile || !canPublish(profile.role)) { setMyProducts([]); return; }
    const unsubscribe = db.collection("products").where("sellerUid", "==", authUser.uid)
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => ((b.createdAt && b.createdAt.toMillis && b.createdAt.toMillis()) || 0) - ((a.createdAt && a.createdAt.toMillis && a.createdAt.toMillis()) || 0));
        setMyProducts(list);
      }, (error) => console.warn("Mes annonces indisponibles :", error.message));
    return unsubscribe;
  }, [authUser, profile && profile.role]);
  // File de modération — seul l'admin la voit.
  useEffect(() => {
    if (!profile || !isAdminRole(profile.role)) { setPendingProducts([]); return; }
    const unsubscribe = db.collection("products").where("status", "==", "en_attente")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => ((a.createdAt && a.createdAt.toMillis && a.createdAt.toMillis()) || 0) - ((b.createdAt && b.createdAt.toMillis && b.createdAt.toMillis()) || 0));
        setPendingProducts(list);
      }, (error) => console.warn("File de modération indisponible :", error.message));
    return unsubscribe;
  }, [profile && profile.role]);
  useEffect(() => {
    const unsubscribe = db.collection("articles").orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setArticles(snapshot.empty ? KNOWLEDGE_ARTICLES : snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      }, (error) => {
        console.warn("Articles indisponibles, affichage des exemples :", error.message);
        setArticles(KNOWLEDGE_ARTICLES);
      });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (!authUser || !profile) { setRequests([]); return; }
    let query;
    if (isAdminRole(profile.role) || isFinancierRole(profile.role)) {
      query = db.collection("requests").orderBy("createdAt", "desc");
    } else if (canRequest(profile.role)) {
      query = db.collection("requests").where("buyerUid", "==", authUser.uid);
    } else if (profile.role === "transporteur") {
      query = db.collection("requests").where("deliveryTransporterUid", "==", authUser.uid);
    } else {
      setRequests([]);
      return;
    }
    const unsubscribe = query.onSnapshot(
      (snapshot) => setRequests(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (error) => console.warn("Demandes indisponibles :", error.message)
    );
    return unsubscribe;
  }, [authUser, profile && profile.role]);
  useEffect(() => {
    if (!profile || !isAdminRole(profile.role)) { setTransporters([]); return; }
    const unsubscribe = db.collection("users").where("role", "==", "transporteur")
      .onSnapshot(
        (snapshot) => setTransporters(snapshot.docs.map((d) => ({ uid: d.id, ...d.data() }))),
        (error) => console.warn("Transporteurs indisponibles :", error.message)
      );
    return unsubscribe;
  }, [profile && profile.role]);
  const publish = async (p) => {
    try {
      await db.collection("products").add({ ...p, sellerUid: authUser.uid, status: "en_attente", createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    } catch (error) {
      console.warn("Échec de la publication :", error.message);
    }
  };
  const updateProduct = async (id, fields) => {
    try {
      // Toute modification par le vendeur repasse l'annonce en attente de validation —
      // évite qu'un vendeur change le contenu après coup sans nouvelle relecture.
      await db.collection("products").doc(id).update({ ...fields, status: "en_attente" });
    } catch (error) {
      console.warn("Échec de la modification :", error.message);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await db.collection("products").doc(id).delete();
    } catch (error) {
      console.warn("Échec de la suppression :", error.message);
    }
  };
  const approveProduct = async (id) => {
    try {
      await db.collection("products").doc(id).update({ status: "approuve" });
    } catch (error) {
      console.warn("Échec de la validation :", error.message);
    }
  };
  const rejectProduct = async (id) => {
    try {
      await db.collection("products").doc(id).update({ status: "refusee" });
    } catch (error) {
      console.warn("Échec du refus :", error.message);
    }
  };
  const sendRequest = async (product, details) => {
    try {
      await db.collection("requests").add({
        productId: product.id || null,
        productName: product.name,
        sellerName: product.seller,
        sellerPaymentMethod: product.sellerPaymentMethod || "",
        sellerPaymentPhone: product.sellerPaymentPhone || "",
        buyerName: profile && profile.name,
        buyerUid: authUser.uid,
        quantity: details.quantity,
        neededDate: details.neededDate,
        deliveryLocation: details.deliveryLocation,
        notes: details.notes,
        paymentMethod: details.paymentMethod,
        paymentPhone: details.paymentPhone,
        status: "nouvelle",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.warn("Échec de l'envoi de la demande :", error.message);
    }
  };
  const savePaymentInfo = async (fields) => {
    try {
      await db.collection("users").doc(authUser.uid).update(fields);
      setProfile((p) => ({ ...p, ...fields }));
    } catch (error) {
      console.warn("Échec de l'enregistrement des coordonnées de paiement :", error.message);
    }
  };
  const saveContactPhone = async (fields) => {
    try {
      await db.collection("users").doc(authUser.uid).update(fields);
      setProfile((p) => ({ ...p, ...fields }));
    } catch (error) {
      console.warn("Échec de l'enregistrement du numéro de contact :", error.message);
    }
  };
  const assignTransporter = async (requestId, transporter) => {
    try {
      await db.collection("requests").doc(requestId).update({
        deliveryTransporterUid: transporter.uid,
        deliveryTransporterName: transporter.name,
        deliveryTransporterPhone: transporter.contactPhone || "",
        deliveredAt: null,
      });
    } catch (error) {
      console.warn("Échec de l'assignation du transporteur :", error.message);
    }
  };
  const markDelivered = async (requestId) => {
    try {
      await db.collection("requests").doc(requestId).update({
        deliveredAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.warn("Échec de la mise à jour de la livraison :", error.message);
    }
  };
  const publishArticle = async (article) => {
    try {
      await db.collection("articles").add({ ...article, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    } catch (error) {
      console.warn("Échec de la publication du contenu :", error.message);
    }
  };
  const deleteArticle = async (id) => {
    try {
      await db.collection("articles").doc(id).delete();
    } catch (error) {
      console.warn("Échec de la suppression du contenu :", error.message);
    }
  };
  const sendQuote = async (requestId, quote) => {
    try {
      await db.collection("requests").doc(requestId).update({
        quote,
        status: "devis_envoye",
      });
    } catch (error) {
      console.warn("Échec de l'envoi du devis :", error.message);
    }
  };
  const setRequestStatus = async (requestId, status) => {
    try {
      await db.collection("requests").doc(requestId).update({ status });
    } catch (error) {
      console.warn("Échec de la mise à jour du statut :", error.message);
    }
  };
  if (authLoading) {
    return (
      <div style={{ display: "flex", flex: 1, minHeight: "100vh", backgroundColor: C.forest, alignItems: "center", justifyContent: "center" }}>
        <Spinner color={C.leafBright} size={36} />
      </div>
    );
  }
  return (
    <div style={styles.phoneShell}>
      <div style={styles.phoneFrame}>
        {!authUser || !profile ? (
          <AuthScreen />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ flex: 1, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
              {tab === "fournisseur" && canPublish(profile.role) && (
                <EspaceFournisseurScreen myProducts={myProducts} currentUser={profile.name} sellerPaymentMethod={profile.paymentMethod} sellerPaymentPhone={profile.paymentPhone} onPublish={publish} onEditProduct={updateProduct} onDeleteProduct={deleteProduct} />
              )}
              {tab === "acheteur" && canRequest(profile.role) && !canPublish(profile.role) && (
                loading ? <Spinner /> : (
                  <EspaceAcheteurScreen products={products} onOpen={setOpenProduct} myCity={myCity} setMyCity={setMyCity} myRequests={requests} onConfirmOrder={setRequestStatus} />
                )
              )}
              {tab === "connaissances" && <ConnaissancesScreen />}
              {tab === "livraisons" && <LivraisonsScreen myDeliveries={requests} onMarkDelivered={markDelivered} />}
              {tab === "demandes" && isAdminRole(profile.role) && (
                <RequestsScreen requests={requests} onSendQuote={sendQuote} onSetStatus={setRequestStatus} onAssignTransporter={assignTransporter} transporters={transporters} />
              )}
              {tab === "moderation" && isAdminRole(profile.role) && (
                <ModerationScreen pendingProducts={pendingProducts} onApprove={approveProduct} onReject={rejectProduct} />
              )}
              {tab === "contenus" && isAdminRole(profile.role) && (
                <ContenusScreen articles={articles} onPublish={publishArticle} onDelete={deleteArticle} />
              )}
              {tab === "finances" && isFinancierRole(profile.role) && (
                <FinancesScreen requests={requests} />
              )}
              {tab === "contact" && <ContactScreen />}
              {tab === "profil" && (
                <ProfilScreen profile={profile} products={products} myProducts={myProducts} myRequests={requests} onSavePaymentInfo={savePaymentInfo} onSaveContactPhone={saveContactPhone} />
              )}
            </div>
            <BottomNav tab={tab} setTab={setTab} role={profile.role} />
            <ProductDetail
              product={openProduct}
              visible={!!openProduct}
              onClose={() => setOpenProduct(null)}
              onSendRequest={sendRequest}
              currentUser={profile.name}
              currentRole={profile.role}
              onEditProduct={updateProduct}
              onDeleteProduct={deleteProduct}
            />
          </div>
        )}
      </div>
    </div>
  );
}
const styles = {
  phoneShell: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#EDEAD8", padding: 24, boxSizing: "border-box" },
  phoneFrame: { width: 400, height: 820, backgroundColor: C.cream, borderRadius: 32, border: "10px solid #111", boxShadow: "0 30px 60px rgba(0,0,0,0.25)", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" },
  brandTitle: { fontFamily: "Sora, sans-serif", fontSize: 26, fontWeight: 800, color: C.cream, lineHeight: "32px" },
  brandSubtitle: { color: "#BFD8C6", fontSize: 13.5, marginTop: 10, lineHeight: "19px" },
  authInput: { border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "10px 12px", fontSize: 13.5, color: "#fff", backgroundColor: "rgba(255,255,255,0.08)" },
  authLabel: { fontWeight: 700, fontSize: 12, color: "#BFD8C6", marginTop: 4 },
  roleGroupLabel: { fontWeight: 800, fontSize: 12.5, color: C.gold, letterSpacing: 0.3, marginBottom: 2 },
  authError: { color: "#FF8B70", fontSize: 12.5 },
  roleCard: { display: "flex", flexDirection: "row", alignItems: "center", gap: 14, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14, cursor: "pointer" },
  roleIconWrap: { width: 42, height: 42, borderRadius: 10, backgroundColor: C.leafBright, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  roleLabel: { fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" },
  roleDesc: { fontSize: 12, color: "#BFD8C6", marginTop: 2 },
  headerBlock: { backgroundColor: C.forest, padding: 16, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerTitle: { fontFamily: "Sora, sans-serif", fontSize: 18, fontWeight: 800, color: "#fff" },
  headerLoc: { color: "#BFD8C6", fontSize: 12 },
  searchBox: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "9px 12px" },
  searchInput: { color: "#fff", fontSize: 13, flex: 1, background: "none", border: "none", minWidth: 0 },
  filterBtn: { backgroundColor: "rgba(255,255,255,0.1)", border: "none", borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  regionChip: { backgroundColor: "rgba(255,255,255,0.1)", border: "none", borderRadius: 999, padding: "5px 10px" },
  segment: { flex: 1, backgroundColor: "rgba(255,255,255,0.08)", border: "none", borderRadius: 10, padding: "8px 0", display: "flex", alignItems: "center", justifyContent: "center" },
  segmentActive: { backgroundColor: C.leafBright },
  segmentText: { color: "#BFD8C6", fontWeight: 600, fontSize: 12 },
  segmentTextActive: { color: C.forest },
  chip: { border: "1px solid " + C.line, backgroundColor: C.card, borderRadius: 999, padding: "7px 14px", whiteSpace: "nowrap", flexShrink: 0 },
  chipActive: { borderColor: C.forest, backgroundColor: C.forest },
  chipText: { color: C.inkSoft, fontWeight: 600, fontSize: 13 },
  chipTextActive: { color: C.cream },
  countLabel: { fontSize: 12, color: C.inkSoft, fontWeight: 600 },
  emptyText: { display: "block", textAlign: "center", padding: 40, color: C.inkSoft, fontSize: 13 },
  card: { display: "flex", flexDirection: "row", gap: 12, backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 12, textAlign: "left" },
  vendorCard: { display: "flex", flexDirection: "row", gap: 12, alignItems: "center", backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 12 },
  smallContactBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: C.leaf, border: "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardThumb: { width: 56, height: 56, borderRadius: 10, backgroundColor: C.cream, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  cardTitle: { fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 14.5, color: C.ink },
  cardSub: { fontSize: 12.5, color: C.inkSoft },
  cardPrice: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 13, color: C.laterite },
  cardRating: { fontSize: 12, color: C.inkSoft },
  bottomNav: { display: "flex", flexDirection: "row", borderTop: "1px solid " + C.line, backgroundColor: C.card, padding: "8px 0", flexShrink: 0 },
  navItem: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none" },
  fullScreenModal: { position: "absolute", inset: 0, backgroundColor: C.cream, zIndex: 20, display: "flex", flexDirection: "column" },
  detailHeader: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10, padding: 16, flexShrink: 0 },
  backBtn: { backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 10, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center" },
  detailHeaderTitle: { fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 15, color: C.ink },
  detailHero: { backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 18, padding: 22, display: "flex", flexDirection: "column", alignItems: "center" },
  detailName: { fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 19, color: C.ink, marginTop: 6 },
  detailUnit: { fontSize: 12.5, color: C.inkSoft, marginTop: 4 },
  priceBox: { flex: 1, backgroundColor: C.forest, borderRadius: 14, padding: 14 },
  priceLabel: { fontSize: 11, color: "#BFD8C6" },
  priceValue: { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: 15, color: C.gold, marginTop: 2 },
  ratingBox: { flex: 1, backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 14 },
  ratingLabel: { fontSize: 11, color: C.inkSoft },
  ratingValue: { fontWeight: 700, fontSize: 14, color: C.ink },
  sectionLabel: { fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: 13, color: C.ink, marginTop: 16, marginBottom: 8 },
  sellerCard: { display: "flex", flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 14 },
  sellerAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: C.leaf, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  sellerName: { fontWeight: 700, fontSize: 13.5, color: C.ink },
  sellerRegion: { fontSize: 11.5, color: C.inkSoft },
  detailFooter: { padding: 16, borderTop: "1px solid " + C.line, backgroundColor: C.card, flexShrink: 0 },
  contactBtn: { backgroundColor: C.laterite, border: "none", borderRadius: 12, padding: "13px 0", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
  contactBtnText: { color: "#fff", fontWeight: 700, fontSize: 13 },
  formHeader: { backgroundColor: C.forest, padding: 16, flexShrink: 0 },
  formHeaderSub: { fontSize: 12.5, color: "#BFD8C6", marginTop: 3 },
  photoBox: { border: "1.5px dashed " + C.line, borderRadius: 14, padding: "22px 0", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: C.card, cursor: "pointer" },
  formLabel: { fontWeight: 700, fontSize: 12, color: C.inkSoft, marginBottom: 6 },
  input: { width: "100%", border: "1px solid " + C.line, borderRadius: 10, padding: "10px 12px", fontSize: 13.5, color: C.ink, backgroundColor: C.card, boxSizing: "border-box" },
  publishBtn: { backgroundColor: C.leaf, border: "none", borderRadius: 12, padding: "13px 0", display: "flex", alignItems: "center", justifyContent: "center" },
  publishBtnText: { color: "#fff", fontWeight: 700, fontSize: 14 },
  deleteBtn: { backgroundColor: C.laterite, border: "none", borderRadius: 12, padding: "13px 0", display: "flex", alignItems: "center", justifyContent: "center" },
  myProductRow: { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 12, padding: 10 },
  iconBtn: { width: 32, height: 32, borderRadius: 8, backgroundColor: C.cream, border: "none", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 8, flexShrink: 0 },
  articleCard: { display: "flex", flexDirection: "row", gap: 12, backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 14 },
  articleIcon: { width: 40, height: 40, borderRadius: 10, backgroundColor: C.cream, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  articleCat: { fontSize: 10, fontWeight: 700, color: C.leaf, letterSpacing: 0.5, marginBottom: 2 },
  articleBody: { fontSize: 12, color: C.inkSoft, marginTop: 4, lineHeight: "17px" },
  threadRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: 12, padding: "13px 18px", borderBottom: "1px solid " + C.line, background: "none", border: "none", width: "100%", boxSizing: "border-box", textAlign: "left" },
  threadAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: C.gold, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  threadName: { fontWeight: 700, fontSize: 13.5, color: C.ink },
  threadTime: { fontSize: 11, color: C.inkSoft },
  threadLast: { fontSize: 12.5, color: C.inkSoft },
  profileHero: { backgroundColor: C.forest, padding: "28px 18px", display: "flex", flexDirection: "column", alignItems: "center", borderBottomLeftRadius: 24, borderBottomRightRadius: 24, flexShrink: 0 },
  profileAvatar: { width: 66, height: 66, borderRadius: 33, backgroundColor: C.leafBright, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  profileName: { fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 17, color: "#fff" },
  profileRole: { fontSize: 12.5, color: "#BFD8C6", marginTop: 2 },
  profileRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 12, padding: "13px 14px" },
  profileRowLabel: { fontWeight: 600, fontSize: 13.5, color: C.ink },
  profileRowValue: { fontSize: 12, color: C.inkSoft },
  changeRoleBtn: { marginTop: 8, backgroundColor: "transparent", border: "1px solid " + C.laterite, borderRadius: 12, padding: "12px 0" },
  changeRoleText: { color: C.laterite, fontWeight: 700, fontSize: 13 },
  statBox: { flex: 1, backgroundColor: C.card, border: "1px solid " + C.line, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", alignItems: "center" },
  statValue: { fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: C.forest },
  statLabel: { fontSize: 10.5, color: C.inkSoft, textAlign: "center", marginTop: 3 },
  simNote: { display: "block", fontSize: 11, color: C.inkSoft, fontStyle: "italic", marginTop: 8, lineHeight: "15px" },
  modalOverlay: { position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 30 },
  cityPickerBox: { backgroundColor: C.cream, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 },
  cityRow: { width: "100%", boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid " + C.line, background: "none", border: "none", borderBottomStyle: "solid" },
  orderSheet: { backgroundColor: C.cream, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: "85%", display: "flex", flexDirection: "column" },
  cancelBtn: { padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none" },
  bubble: { maxWidth: "78%", borderRadius: 14, padding: "9px 13px" },
  bubbleMine: { alignSelf: "flex-end", backgroundColor: C.leaf, borderBottomRightRadius: 4 },
  bubbleTheirs: { alignSelf: "flex-start", backgroundColor: C.card, border: "1px solid " + C.line, borderBottomLeftRadius: 4 },
  bubbleTextMine: { color: "#fff", fontSize: 13.5 },
  bubbleTextTheirs: { color: C.ink, fontSize: 13.5 },
  chatInputRow: { display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 8, padding: 12, borderTop: "1px solid " + C.line, backgroundColor: C.card, flexShrink: 0 },
  chatInput: { flex: 1, border: "1px solid " + C.line, borderRadius: 18, padding: "10px 14px", fontSize: 13.5, color: C.ink, maxHeight: 100, backgroundColor: C.cream, resize: "none", fontFamily: "Karla, sans-serif" },
  sendBtn: { backgroundColor: C.leaf, border: "none", borderRadius: 18, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
