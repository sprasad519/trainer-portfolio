# Portfolio - Usage & Customization Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Opens: http://localhost:5173

### 3. Build for Production

```bash
npm run build
```

Output folder: `dist/`

---

## 📸 Required Files

### Profile Photo

**File**: `public/profile-photo.png`

- **Recommended size**: 400x400px or larger
- **Format**: JPG or PNG
- **What it shows**: Professional headshot with good lighting

### MCT Logo

**File**: `public/mct-logo.png`

- **Size**: Square, any size (will be scaled)
- **Location**: Appears in navbar + as floating badge on profile

### MCT Footer Logo

**File**: `public/mct-footer.png`

- **Size**: Rectangular or square
- **Location**: Footer, centered

### Certification Badges

**Folder**: `public/badges/`

**Required badges:**

- `Azure AI Engineer Associate.png`
- `Azure Fundamentals.png`
- `Azure AI Fundamentals.png`
- `MCSD App Builder.png`
- `MCSA Web Applications.png`
- `Programming in HTML5 with JavaScript and CSS3.png`
- `MTA  Introduction to Programming Using Python.png`

---

## ✏️ Customization Guide

### Change Contact Information

**Email**:
Find and replace `sprasadg519@gmail.com` with your email

- Appears in: Navbar, Hero CTAs, Footer CTAs

**LinkedIn**:
Find and replace `https://www.linkedin.com/in/sivaprasadg` with your profile

- Appears in: Hero CTA, Footer CTA

### Customize Skills

**Location**: `src/App.jsx` → Expertise Section

```jsx
<SkillGroup
  title="Core Languages"
  items={["C#", "JavaScript", "Python", "TypeScript"]}
/>
```

Change the `items` array to modify skills.

### Update Projects

**Location**: `src/App.jsx` → Projects Section

```jsx
<ProjectCard
  title="Project Name"
  description="Brief description of what the project does"
  tags={["React", "Tailwind CSS"]}
  link="https://github.com/yourusername/repo"
/>
```

### Modify Certifications

**Featured MCT**:

- Location: `src/App.jsx` → Certifications Section
- Credly badge ID can be changed in the `data-share-badge-id` attribute

**Azure Certifications**:

- Update badge filenames in the array
- Update certificate names

**Additional Certifications**:

- Add or remove from the array
- Match badge filenames exactly

---

## 🎨 Design Customization

### Change Colors

**Location**: `src/index.css`

Currently using pure grayscale. To add a color:

```css
/* Add in @layer base or @layer components */
--primary-color: #your-color;
```

### Modify Font

**Location**: `src/index.css`

```css
html {
  font-family: "Your Font", system-ui, -apple-system, ...;
}
```

### Adjust Animations

**Location**: `src/App.jsx` → Each component

```jsx
// Scroll trigger margin (triggers earlier/later)
margin: "-50px"  // Change this value

// Animation duration
duration: 0.5  // Change to 0.3 (faster) or 0.8 (slower)

// Hover effects
whileHover={{ y: -6 }}  // Change y value for more/less lift
```

### Modify Spacing

**Location**: `src/App.jsx` → className="px-4 sm:px-6 lg:px-8 py-20"

```
py-20  = vertical padding (80px)
px-4   = horizontal padding mobile (16px)
sm:px-6 = horizontal padding tablet (24px)
lg:px-8 = horizontal padding desktop (32px)
```

---

## 🌐 Deployment

### Azure Static Web Apps (Recommended)

1. Push code to GitHub
2. Go to Azure Portal
3. Create Static Web App
4. Connect your GitHub repo
5. Build settings:
   - App location: `/`
   - Build output: `dist/`
   - Build preset: React

### Other Options

- **Vercel**: Connect GitHub repo, auto-deploys
- **Netlify**: Connect GitHub repo, auto-deploys
- **GitHub Pages**: Free hosting, requires setup

---

## 🔍 SEO & Meta Tags

**Location**: `index.html`

Update these meta tags:

```html
<meta name="description" content="Your professional portfolio description" />
<meta name="keywords" content="trainer, azure, react, microsoft" />
<meta property="og:title" content="Sivaprasad G - Portfolio" />
<meta property="og:description" content="Your portfolio description" />
```

---

## 🐛 Troubleshooting

### Images Not Showing

✅ Check file names match exactly (case-sensitive)
✅ Verify files are in `public/` folder
✅ Clear browser cache: Ctrl+Shift+Delete

### Animations Not Smooth

✅ Check browser performance (DevTools)
✅ Disable extensions that block scripts
✅ Try different browser

### Links Not Working

✅ Check email format: `mailto:email@example.com`
✅ Check URL format starts with `https://`
✅ Verify hash anchors match section IDs (#about, #expertise, etc.)

### Mobile Menu Not Closing

✅ Check `setMobileMenuOpen(false)` is called on link click
✅ Verify onClick handler is attached to each link

---

## 📱 Testing Responsive Design

### DevTools Breakpoints

- **Mobile**: 375px (small phone)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px (laptop)

### Test On Real Devices

- iPhone 12/13/14
- iPad Air
- Desktop monitor

---

## 🚀 Performance Optimization

### Current Performance

✅ No external fonts (system fonts only)
✅ SVG inline patterns (optimized)
✅ Lazy-loaded animations (scroll-triggered)
✅ Minimal dependencies

### Further Optimization

```bash
# Check bundle size
npm run build

# Analyze images
# Compress profile photo to < 200KB
# Use PNG for badges, JPEG for profile photo
```

---

## ♿ Accessibility Checklist

✅ Heading hierarchy (H1 → H2 → H3)
✅ Color contrast ratio (WCAG AA)
✅ ARIA labels on buttons
✅ Semantic HTML
✅ Keyboard navigation
✅ Mobile-friendly touch targets

---

## 📋 Pre-Launch Checklist

- [ ] Profile photo is professional and optimized
- [ ] All image files are in correct locations
- [ ] Email address is correct
- [ ] LinkedIn URL is correct and accessible
- [ ] All certification names match badge files
- [ ] Project links work and point to your repos
- [ ] Mobile menu works on phone
- [ ] All sections scroll smoothly
- [ ] No console errors in DevTools
- [ ] Page loads in < 3 seconds
- [ ] All fonts load correctly
- [ ] Animations are smooth (60fps)
- [ ] Contact links work (email, LinkedIn)
- [ ] Responsive on mobile, tablet, desktop

---

## 📞 Quick Support

### Common Questions

**Q: Can I change the design colors?**
A: Yes, edit `src/index.css` and update color values. Current design uses pure grayscale for premium minimal aesthetic.

**Q: How do I add a new section?**
A: Create a new `<Section>` component in `src/App.jsx` with `id="section-name"` and add to navbar links.

**Q: Can I use Google Fonts?**
A: Yes, but current system fonts load faster and look more professional.

**Q: How do I change the MCT badge?**
A: Update `public/mct-logo.png` and/or `public/mct-footer.png` files.

**Q: Can I add more projects?**
A: Yes, duplicate the `ProjectCard` component in the Projects section.

---

## 🎯 Design Philosophy

This portfolio follows these principles:

1. **Minimal**: Only essential content, no clutter
2. **Professional**: Apple-inspired aesthetic, subtle animations
3. **Accessible**: WCAG AA compliant, semantic HTML
4. **Fast**: System fonts, optimized images, lazy animations
5. **Responsive**: Mobile-first, works on all devices
6. **Trustworthy**: Clear credentials, honest design, ATS-friendly

**Goal**: Impress hiring managers in 10 seconds with professional, clean design.

---

## ✨ You're All Set!

Your portfolio is now ready to showcase your professional credentials and expertise.

Good luck! 🚀
