/* @ds-bundle: {"format":4,"namespace":"NuumericDesignSystem_358bec","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7959298198a3","components/core/Button.jsx":"f1581b57db90","components/core/Card.jsx":"e58d1f1b77dc","components/core/Input.jsx":"c9741d2c3a8e","components/core/Select.jsx":"6c243c9b42a7","components/core/Textarea.jsx":"2c8d3a6208c0","ui_kits/marketing-site/AboutScreen.jsx":"d3af5bcdb4e2","ui_kits/marketing-site/App.jsx":"4a7ae94f794c","ui_kits/marketing-site/ContactScreen.jsx":"528f221edb8d","ui_kits/marketing-site/Footer.jsx":"487fba969521","ui_kits/marketing-site/Header.jsx":"5c98d9b13f22","ui_kits/marketing-site/HomeScreen.jsx":"5a4c3c81334f","ui_kits/marketing-site/ServicesScreen.jsx":"e52ee0d84b16"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NuumericDesignSystem_358bec = window.NuumericDesignSystem_358bec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)'
  },
  brand: {
    background: 'var(--brand-tint)',
    color: 'var(--brand-strong)'
  },
  success: {
    background: 'var(--success-bg)',
    color: 'var(--success)'
  },
  warning: {
    background: 'var(--warning-bg)',
    color: 'var(--warning)'
  },
  danger: {
    background: 'var(--danger-bg)',
    color: 'var(--danger)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      letterSpacing: 'var(--tracking-wide)',
      ...tones[tone]
    }
  }, children);
}
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--ink-50)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1,
      padding: 0
    }
  }, '×'));
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--text-sm)',
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '10px 18px',
    fontSize: 'var(--text-base)',
    radius: 'var(--radius-md)'
  },
  lg: {
    padding: '13px 24px',
    fontSize: 'var(--text-md)',
    radius: 'var(--radius-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent'
  },
  'primary-hover': {
    background: 'var(--green-600)'
  },
  secondary: {
    background: 'var(--surface-page)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)'
  },
  'secondary-hover': {
    background: 'var(--ink-50)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  'ghost-hover': {
    background: 'var(--brand-tint)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: '1px solid transparent'
  },
  'danger-hover': {
    background: '#a83232'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = sizes[size];
  const v = variants[variant];
  const vh = variants[variant + '-hover'] || {};
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: s.padding,
    fontSize: s.fontSize,
    borderRadius: s.radius,
    transition: 'background var(--duration-base) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
    transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
    opacity: disabled ? 0.5 : 1,
    outline: 'none',
    ...v,
    ...(hover && !disabled ? vh : {})
  };
  return React.createElement('button', {
    type,
    disabled,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
    },
    onClick: disabled ? undefined : onClick
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = '24px',
  hoverable = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--duration-base) var(--ease-standard)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--text-primary)',
  background: 'var(--surface-page)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 14px',
  outline: 'none',
  transition: 'border-color var(--duration-base) var(--ease-standard),box-shadow var(--duration-base) var(--ease-standard)',
  width: '100%',
  boxSizing: 'border-box'
};
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled,
  required
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && ' *'), React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      borderColor: error ? 'var(--danger)' : focus ? 'var(--brand)' : 'var(--border-default)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  required
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && ' *'), React.createElement('select', {
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid ' + (focus ? 'var(--brand)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value || o
  }, o.label || o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && ' *'), React.createElement('textarea', {
    placeholder,
    value,
    onChange,
    rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--surface-page)',
      border: '1px solid ' + (focus ? 'var(--brand)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/AboutScreen.jsx
try { (() => {
const ico = name => React.createElement('img', {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  style: {
    width: 22,
    height: 22,
    filter: 'invert(41%) sepia(64%) saturate(682%) hue-rotate(72deg) brightness(95%)'
  }
});
const steps = [['Tell us what you need', 'A short call to understand your books, tools, and timeline.'], ['We build your plan', 'A dedicated bookkeeper is matched to your business and systems.'], ['We get to work', 'Monthly close, payroll runs, and filings — you get clear reporting, not surprises.']];
function AboutScreen({
  setPage
}) {
  return React.createElement(React.Fragment, null, React.createElement('section', {
    style: {
      padding: '72px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, 'About Nuumeric'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: 18,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, 'Nuumeric provides US-based, one-time and recurring bookkeeping, payroll, and tax services for individuals and small-to-medium businesses across the country. We act as your back office, so you can stay focused on the business itself.'), React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--brand-tint)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      marginTop: 20
    }
  }, ico('map-pin'), React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--brand-strong)'
    }
  }, 'Texas-registered business · team members across the U.S.'))), React.createElement('div', {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 32
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      marginBottom: 16
    }
  }, 'What to expect'), steps.map((s, i) => React.createElement('div', {
    key: s[0],
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: i < steps.length - 1 ? 20 : 0
    }
  }, React.createElement('div', {
    style: {
      width: 28,
      height: 28,
      flexShrink: 0,
      borderRadius: '50%',
      background: 'var(--brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--text-sm)',
      fontWeight: 700
    }
  }, i + 1), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      marginBottom: 2
    }
  }, s[0]), React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, s[1])))))), React.createElement('section', {
    style: {
      background: 'var(--surface-sunken)',
      padding: '64px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      margin: '0 0 24px'
    }
  }, 'Customer testimonials'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [1, 2, 3].map(n => React.createElement('div', {
    key: n,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      fontStyle: 'italic',
      lineHeight: 'var(--leading-normal)'
    }
  }, '"[Testimonial placeholder — replace with a real client quote.]"'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, '— Placeholder client')))))), React.createElement('section', {
    style: {
      padding: '64px 32px',
      textAlign: 'center'
    }
  }, React.createElement('button', {
    onClick: () => setPage('contact'),
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 28px',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Get your free consultation')));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/App.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('home');
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, React.createElement(Header, {
    page,
    setPage
  }), page === 'home' && React.createElement(HomeScreen, {
    setPage
  }), page === 'services' && React.createElement(ServicesScreen, {
    setPage
  }), page === 'about' && React.createElement(AboutScreen, {
    setPage
  }), page === 'contact' && React.createElement(ContactScreen, null), React.createElement(Footer, {
    setPage
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactScreen.jsx
try { (() => {
const ico = name => React.createElement('img', {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  style: {
    width: 20,
    height: 20,
    filter: 'invert(41%) sepia(64%) saturate(682%) hue-rotate(72deg) brightness(95%)'
  }
});
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const field = {
    padding: '11px 14px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-default)',
    fontSize: 'var(--text-sm)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
  return React.createElement(React.Fragment, null, React.createElement('section', {
    style: {
      padding: '72px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56
    }
  }, React.createElement('div', null, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, 'Get in touch'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: 16,
      maxWidth: 420
    }
  }, 'Contact us for expert virtual bookkeeping services tailored to small businesses. We reply within one business day.'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 32
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, ico('phone'), React.createElement('a', {
    href: 'tel:19363375446',
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, 'Call or text: 1 (936) 337-5446')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, ico('map-pin'), React.createElement('span', {
    style: {
      color: 'var(--text-primary)'
    }
  }, 'Registered in Texas · team distributed across the U.S.')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, ico('clock'), React.createElement('span', {
    style: {
      color: 'var(--text-primary)'
    }
  }, 'Mon–Fri, 9am–6pm CT'))), React.createElement('div', {
    style: {
      marginTop: 32,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      height: 220
    }
  }, React.createElement('iframe', {
    title: 'Nuumeric office location',
    src: 'https://www.google.com/maps?q=Texas&output=embed',
    style: {
      border: 0,
      width: '100%',
      height: '100%'
    },
    loading: 'lazy'
  }))), React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-md)',
      alignSelf: 'start'
    }
  }, sent ? React.createElement('div', {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, ico('circle-check'), React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      marginTop: 12
    }
  }, 'Thanks — we got it.'), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)',
      marginTop: 6
    }
  }, 'A bookkeeper will reach out within one business day.')) : React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement('input', {
    required: true,
    placeholder: 'First name',
    style: field
  }), React.createElement('input', {
    required: true,
    placeholder: 'Last name',
    style: field
  })), React.createElement('input', {
    required: true,
    type: 'email',
    placeholder: 'Email',
    style: field
  }), React.createElement('input', {
    required: true,
    type: 'tel',
    placeholder: 'Mobile',
    style: field
  }), React.createElement('select', {
    style: field
  }, ['Bookkeeping', 'Payroll & HR', 'Tax preparation', 'Additional services', 'Not sure yet'].map(o => React.createElement('option', {
    key: o
  }, o))), React.createElement('textarea', {
    rows: 4,
    placeholder: 'Anything else we should know?',
    style: {
      ...field,
      resize: 'vertical'
    }
  }), React.createElement('label', {
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-tertiary)',
      alignItems: 'flex-start'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    required: true,
    style: {
      marginTop: 2
    }
  }), 'You are agreeing to receive customer care related text messages from Nuumeric Inc. Message frequency may vary. Reply STOP to opt out.'), React.createElement('button', {
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Send message'), React.createElement('div', {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, 'Submits directly to Zoho CRM')))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
function Footer({
  setPage
}) {
  const col = (title, items) => React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginBottom: 14
    }
  }, title), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(([label, id]) => React.createElement('a', {
    key: label,
    onClick: () => id && setPage(id),
    style: {
      cursor: 'pointer',
      color: 'var(--ink-200)',
      fontSize: 'var(--text-sm)',
      textDecoration: 'none'
    }
  }, label))));
  const [email, setEmail] = React.useState('');
  return React.createElement('footer', {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--ink-100)',
      padding: '64px 32px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
      gap: 40,
      paddingBottom: 40,
      borderBottom: '1px solid var(--ink-700)'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, React.createElement('img', {
    src: '../../assets/logo-mark.png',
    style: {
      height: 30
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: '#fff'
    }
  }, 'NUUMERIC')), React.createElement('p', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-300)',
      maxWidth: 280,
      lineHeight: 'var(--leading-normal)'
    }
  }, 'US-based bookkeeping, payroll, and tax preparation for small and mid-sized businesses. Texas-registered, serving clients nationwide.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 16
    }
  }, ['LinkedIn', 'Instagram', 'Facebook', 'WhatsApp'].map(s => React.createElement('a', {
    key: s,
    href: '#',
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      textDecoration: 'none',
      border: '1px solid var(--ink-600)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, s)))), col('Services', [['Bookkeeping', 'services'], ['Payroll & HR', 'services'], ['Tax preparation', 'services'], ['Additional services', 'services']]), col('Company', [['About us', 'about'], ['What to expect', 'about'], ['Testimonials', 'about'], ['Contact', 'contact']]), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginBottom: 14
    }
  }, 'Get monthly insights'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-300)',
      marginBottom: 12
    }
  }, 'Bookkeeping and tax tips — no spam, unsubscribe anytime.'), React.createElement('form', {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 8
    }
  }, React.createElement('input', {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: 'you@company.com',
    style: {
      flex: 1,
      minWidth: 0,
      padding: '9px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--ink-600)',
      background: 'var(--ink-800)',
      color: '#fff',
      fontSize: 'var(--text-sm)',
      outline: 'none'
    }
  }), React.createElement('button', {
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '9px 16px',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, 'Sign up')), React.createElement('div', {
    style: {
      fontSize: '11px',
      color: 'var(--ink-500)',
      marginTop: 8
    }
  }, 'Powered by Zoho Campaigns'))), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-400)'
    }
  }, React.createElement('span', null, '© 2026 Nuumeric Inc. Texas-registered business.'), React.createElement('span', null, 'Privacy Policy · Terms & Conditions'))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
function Header({
  page,
  setPage
}) {
  const [open, setOpen] = React.useState(false);
  const links = [['home', 'Home'], ['services', 'Services'], ['about', 'About'], ['contact', 'Contact']];
  return React.createElement('header', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    },
    onClick: () => setPage('home')
  }, React.createElement('img', {
    src: '../../assets/logo-mark.png',
    style: {
      height: 34
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, 'NUUMERIC')), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map(([id, label]) => React.createElement('a', {
    key: id,
    onClick: () => setPage(id),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: page === id ? 'var(--brand-strong)' : 'var(--text-primary)',
      textDecoration: 'none',
      borderBottom: page === id ? '2px solid var(--brand)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, label)), React.createElement('a', {
    href: '#',
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, 'Sign in'), React.createElement('button', {
    onClick: () => setPage('contact'),
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '10px 20px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, 'Free consultation'))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
const ico = (name, color) => React.createElement('img', {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  style: {
    width: 22,
    height: 22,
    filter: color === 'white' ? 'invert(1)' : color === 'brand' ? 'invert(41%) sepia(64%) saturate(682%) hue-rotate(72deg) brightness(95%)' : 'none'
  }
});
const services = [{
  icon: 'book-open-check',
  title: 'Bookkeeping',
  copy: 'Monthly reconciliation, categorized transactions, and reports you can actually read.'
}, {
  icon: 'banknote',
  title: 'Payroll & HR',
  copy: 'Payroll run, filed and funded on time, plus the HR paperwork that comes with it.'
}, {
  icon: 'file-check-2',
  title: 'Tax Preparation',
  copy: 'Business and personal returns prepared by people who already know your books.'
}, {
  icon: 'layers',
  title: 'Additional Services',
  copy: 'Invoicing, AR/AP, financial reporting, and Zoho/QuickBooks/Xero setup and support.'
}];
function HomeScreen({
  setPage
}) {
  const [form, setForm] = React.useState({
    first: '',
    last: '',
    email: '',
    mobile: '',
    service: 'Bookkeeping'
  });
  return React.createElement(React.Fragment, null, React.createElement('section', {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: '96px 32px 80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid var(--ink-600)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      marginBottom: 24
    }
  }, ico('map-pin', 'white'), 'Texas-registered · US-based team'), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, 'Bookkeeping, payroll, and taxes — handled.'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-200)',
      lineHeight: 'var(--leading-relaxed)',
      marginTop: 20,
      maxWidth: 520
    }
  }, 'A dedicated US-based team runs your back office so you can spend your time driving revenue, not chasing receipts.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, React.createElement('button', {
    onClick: () => setPage('contact'),
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 26px',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Get your free consultation'), React.createElement('button', {
    onClick: () => setPage('services'),
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid var(--ink-500)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 26px',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Browse services')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, ['QuickBooks ProAdvisor', 'Xero Advisor Certified', 'Zoho Authorized Partner', 'Gusto Payroll Partner'].map(t => React.createElement('span', {
    key: t,
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)',
      border: '1px solid var(--ink-700)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px'
    }
  }, t)))), React.createElement('div', {
    style: {
      background: 'var(--ink-800)',
      border: '1px solid var(--ink-700)',
      borderRadius: 'var(--radius-lg)',
      padding: 28
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      marginBottom: 4
    }
  }, 'Talk to a bookkeeper'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-300)',
      marginBottom: 20
    }
  }, 'No obligation. We reply within one business day.'), React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      setPage('contact');
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement('input', {
    placeholder: 'First name',
    style: fieldDark
  }), React.createElement('input', {
    placeholder: 'Last name',
    style: fieldDark
  })), React.createElement('input', {
    placeholder: 'Work email',
    type: 'email',
    style: fieldDark
  }), React.createElement('input', {
    placeholder: 'Mobile number',
    type: 'tel',
    style: fieldDark
  }), React.createElement('select', {
    style: fieldDark
  }, ['Bookkeeping', 'Payroll & HR', 'Tax preparation', 'Something else'].map(o => React.createElement('option', {
    key: o
  }, o))), React.createElement('button', {
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '12px',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer',
      marginTop: 4
    }
  }, 'Request consultation')), React.createElement('div', {
    style: {
      fontSize: '11px',
      color: 'var(--ink-500)',
      marginTop: 10
    }
  }, 'Submits directly to Zoho CRM')))), React.createElement('section', {
    style: {
      padding: '80px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 48px'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, 'Everything your back office needs'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, 'Pick a service to start with, or hand us the whole back office.')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, services.map(s => React.createElement('div', {
    key: s.title,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('div', {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, ico(s.icon, 'brand')), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      marginBottom: 8
    }
  }, s.title), React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, s.copy), React.createElement('a', {
    onClick: () => setPage('services'),
    style: {
      display: 'inline-block',
      marginTop: 14,
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-link)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, 'Learn more →'))))), React.createElement('section', {
    style: {
      background: 'var(--surface-sunken)',
      padding: '72px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      margin: 0
    }
  }, 'What clients say'), React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      marginTop: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-relaxed)',
      fontStyle: 'italic'
    }
  }, '"[Client quote placeholder — swap in a real testimonial before launch.]"'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, '— Placeholder, Small Business Owner'))), React.createElement('div', null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      margin: 0
    }
  }, 'Who we work with'), React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 20
    }
  }, ['Medical & professional firms', 'Wholesale distributors', 'Auto repair & body shops', 'Restaurants', 'B2B services', 'Online retail', 'Holding companies', 'Manufacturers'].map(t => React.createElement('span', {
    key: t,
    style: {
      fontSize: 'var(--text-sm)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      color: 'var(--text-primary)'
    }
  }, t)))))), React.createElement('section', {
    style: {
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      margin: 0
    }
  }, 'Ready to hand off the busywork?'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      marginTop: 12
    }
  }, 'Call, text, or fill out the form — a bookkeeper responds within one business day.'), React.createElement('button', {
    onClick: () => setPage('contact'),
    style: {
      marginTop: 24,
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 28px',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Get your free consultation')));
}
const fieldDark = {
  padding: '10px 12px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--ink-600)',
  background: 'var(--ink-900)',
  color: '#fff',
  fontSize: 'var(--text-sm)',
  outline: 'none',
  flex: 1,
  width: '100%',
  boxSizing: 'border-box'
};
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesScreen.jsx
try { (() => {
const ico = name => React.createElement('img', {
  src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
  style: {
    width: 20,
    height: 20,
    filter: 'invert(41%) sepia(64%) saturate(682%) hue-rotate(72deg) brightness(95%)'
  }
});
const groups = [{
  icon: 'book-open-check',
  title: 'Bookkeeping',
  items: ['Bank & credit card reconciliation', 'Categorized transactions, monthly close', 'Financial reporting (P&L, balance sheet, cash flow)', 'Clean-up & catch-up bookkeeping']
}, {
  icon: 'banknote',
  title: 'Payroll & HR',
  items: ['Payroll processing (Gusto, SurePayroll)', 'Tax filings & funding, on schedule', 'New-hire paperwork & onboarding support', 'Time-off tracking coordination']
}, {
  icon: 'file-check-2',
  title: 'Tax Preparation',
  items: ['Business return preparation', 'Personal return preparation', 'Quarterly estimated tax planning', 'Sales tax filing support']
}, {
  icon: 'layers',
  title: 'Additional Services',
  items: ['Customer invoicing & AR follow-up', 'Accounts payable & bill pay', 'Zoho Books / Zoho One setup & support', 'QuickBooks & Xero migrations']
}];
const certs = ['Zoho Authorized Partner', 'Zoho CRM Support', 'Zoho Sites Support', 'Xero Advisor Certified', 'QuickBooks Certified ProAdvisor', 'Gusto Payroll Partner', 'SurePayroll Accountant'];
function ServicesScreen({
  setPage
}) {
  return React.createElement(React.Fragment, null, React.createElement('section', {
    style: {
      padding: '72px 32px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, 'Services'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      marginTop: 14,
      maxWidth: 640
    }
  }, 'Start with one service, or hand off the entire back office. Every engagement is staffed by a US-based team and scales up or down as your business changes.')), React.createElement('section', {
    style: {
      padding: '0 32px 72px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, groups.map(g => React.createElement('div', {
    key: g.title,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, React.createElement('div', {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, ico(g.icon)), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)'
    }
  }, g.title)), React.createElement('ul', {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, g.items.map(i => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, ico('check'), React.createElement('span', null, i))))))), React.createElement('section', {
    style: {
      background: 'var(--surface-sunken)',
      padding: '64px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      margin: '0 0 24px'
    }
  }, 'Certifications & partnerships'), React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, certs.map(c => React.createElement('span', {
    key: c,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--brand-strong)',
      background: 'var(--brand-tint)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px'
    }
  }, c))))), React.createElement('section', {
    style: {
      padding: '64px 32px',
      textAlign: 'center'
    }
  }, React.createElement('button', {
    onClick: () => setPage('contact'),
    style: {
      background: 'var(--brand)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 28px',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, 'Get your free consultation')));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
