import JsonLd from './JsonLd'

type FaqItem = { question: string; answer: string }

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FaqItem[]; title?: string }) {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-background-primary">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-10">{title}</h2>
        <div className="divide-y divide-border-subtle border-y border-border-subtle">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-accent-bright transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-text-secondary leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
