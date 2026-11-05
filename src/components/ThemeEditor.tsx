type Props = {
  title: string;
  sections: string[];
  addLabel: string;
  savedLabel: string;
};

/**
 * Decorative mock of a Shopify theme editor. Sections slide in one by one
 * on load while the preview fills in alongside them: the hero's single
 * orchestrated animation.
 */
export function ThemeEditor({ title, sections, addLabel, savedLabel }: Props) {
  return (
    <div className="editor" aria-hidden="true">
      <div className="editor__bar">
        <span className="editor__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="editor__title">{title}</span>
        <span className="editor__saved">{savedLabel}</span>
      </div>

      <div className="editor__body">
        <ol className="editor__list">
          {sections.map((section, index) => (
            <li
              key={section}
              className="editor__item"
              style={{ "--i": index } as React.CSSProperties}
            >
              <span className="editor__grip" />
              {section}
            </li>
          ))}
          <li
            className="editor__item editor__item--add"
            style={{ "--i": sections.length } as React.CSSProperties}
          >
            + {addLabel}
          </li>
        </ol>

        <div className="editor__preview">
          <div className="pv pv--hero" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="pv__line pv__line--lg" />
            <span className="pv__line" />
            <span className="pv__button" />
          </div>
          <div className="pv pv--banner" style={{ "--i": 1 } as React.CSSProperties} />
          <div className="pv pv--grid" style={{ "--i": 2 } as React.CSSProperties}>
            <span />
            <span />
            <span />
          </div>
          <div className="pv pv--reviews" style={{ "--i": 3 } as React.CSSProperties}>
            <span className="pv__line" />
            <span className="pv__line pv__line--sm" />
          </div>
          <div className="pv pv--footer" style={{ "--i": 4 } as React.CSSProperties} />
        </div>
      </div>
    </div>
  );
}
