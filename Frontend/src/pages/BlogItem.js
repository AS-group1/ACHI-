// src/pages/BlogItem.js
import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import ImageWebp from "../components/ImageWebp"
import SEO from "../components/SEO"

const ENTITY_DEFINITION =
  "ACHI Scaffolding is an industrial and construction scaffolding contractor and equipment provider delivering access systems, shoring, and scaffolding solutions for restoration, infrastructure, and complex building projects."

const BlogItem = () => {
  const location = useLocation()
  const base = process.env.PUBLIC_URL || ""
  const postId = location.pathname.replace("/blog-post-", "")

  const postConfig = useMemo(() => {
    const map = {
      "1": {
        seoTitle: "The Evolution of Scaffolding in Lebanon | ACHI Blog",
        seoDescription:
          "Explore the history and evolution of scaffolding practices in Lebanon, from traditional methods to modern safety standards.",
        canonical: "https://achi-scaffolding.github.io/blog-post-1",
        h1: "The Evolution of Scaffolding in Lebanon: A Historical Perspective",
        image: `${base}/assets/blog/blog1.png`,
        imageAlt: "Historic scaffolding illustration for Lebanon blog article",
      },
      "2": {
        seoTitle: "Safety First: Scaffolding Installation Best Practices | ACHI Blog",
        seoDescription:
          "Learn essential safety practices and best practices for scaffolding installation and maintenance in construction projects.",
        canonical: "https://achi-scaffolding.github.io/blog-post-2",
        h1: "Scaffolding Safety Standards: Ensuring Construction Site Security in Lebanon",
        image: `${base}/assets/blog/blog2.png`,
        imageAlt: "Scaffolding safety standards blog article image",
      },
      "3": {
        seoTitle: "Choosing the Right Scaffolding System | ACHI Blog",
        seoDescription:
          "A comprehensive guide to selecting the appropriate scaffolding system for different types of construction and renovation projects.",
        canonical: "https://achi-scaffolding.github.io/blog-post-3",
        h1: "Innovative Scaffolding Solutions for Lebanon's Unique Architectural Challenges",
        image: `${base}/assets/blog/blog3.png`,
        imageAlt: "Innovative scaffolding solutions blog article image",
      },
    }

    return (
      map[postId] || {
        seoTitle: "Blog Post | ACHI Scaffolding",
        seoDescription: "Read the latest insights from ACHI Scaffolding.",
        canonical: `https://achi-scaffolding.github.io/blog-post-${postId}`,
        h1: "Blog Article",
        image: `${base}/assets/blog/blog1.png`,
        imageAlt: "ACHI Scaffolding blog article image",
      }
    )
  }, [postId, base])

  return (
    <main className="w-full">
      <SEO title={postConfig.seoTitle} description={postConfig.seoDescription} canonical={postConfig.canonical} />

      {/* Visually hidden SEO foundation (safe + not intrusive) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <p>{ENTITY_DEFINITION}</p>
        <nav aria-label="Internal links">
          <a href={`${base}/products`}>View Scaffolding Products</a>
          <a href={`${base}/projects`}>Explore Project Experience</a>
          <a href={`${base}/contact`}>Request Scaffolding Information or Technical Support</a>
          <a href={`${base}/blog`}>Scaffolding Systems, Safety, and Technical Insights</a>
        </nav>
      </div>

      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-[20px] md:px-[80px] py-[90px] md:py-[0] flex flex-col justify-center bg-[#28509E]">
          <div className="font-[Rajdhani] text-[20px] tracking-[3px] font-[700] text-white mb-[12px]">BLOG</div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-[Rajdhani] text-white font-[700] uppercase 
                       text-[28px] md:text-[42px] 
                       leading-[1.15] mb-[12px] max-w-[650px]"
          >
            {postConfig.h1}
          </motion.h1>

          <p className="text-white/90 font-['Open_Sans'] text-[14px] md:text-[15px] leading-[1.8] max-w-[650px]">
            {postConfig.seoDescription}
          </p>
        </div>

        <div className="w-full md:w-1/2 h-[280px] md:h-[420px]">
          <ImageWebp
            srcWebp={postConfig.image}
            src={postConfig.image}
            alt={postConfig.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="w-full bg-[#f5f7fa] py-[70px]">
        <div className="w-[92%] max-w-[1250px] mx-auto">
          <article className="w-full">
            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Introduction
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              Lebanon&apos;s rich history and architectural heritage have significantly influenced the development of
              scaffolding practices in the country. From ancient construction techniques to modern-day engineering
              marvels, the evolution of scaffolding in Lebanon mirrors the nation&apos;s journey through time.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Ancient Foundations
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              The roots of scaffolding in Lebanon trace back to ancient civilizations. Early structures, such as the
              Phoenician cities and Roman ruins, offer glimpses into the rudimentary yet innovative scaffolding methods
              used for monumental constructions. These historic sites stand as a testament to the ingenuity of early
              builders and the fundamental role of scaffolding in their endeavors.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Medieval Innovations
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              During the medieval period, Lebanon saw the rise of innovative architectural styles that demanded more
              sophisticated scaffolding solutions. The influence of Islamic architecture and the construction of
              landmarks like the Beiteddine Palace and the Byblos Castle marked a pivotal phase in scaffolding
              techniques, showcasing advancements in design and construction methods.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Colonial Influences
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              Lebanon&apos;s history of colonization by various empires also left its mark on the country&apos;s
              construction practices. The introduction of European building methods and materials during the Ottoman
              and French mandates brought new technologies, influencing scaffolding approaches and laying the groundwork
              for modern construction methodologies.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Contemporary Advancements
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              In recent decades, Lebanon has witnessed a surge in construction and infrastructure development,
              necessitating more refined scaffolding systems. The adaptation of global standards and the incorporation
              of cutting-edge technology have transformed scaffolding practices, ensuring safety, efficiency, and
              adaptability to the diverse architectural landscape of the country.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              The Role of Scaffolding Today
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] mb-[36px] max-w-[980px]">
              In the present era, scaffolding stands as an indispensable component of Lebanon&apos;s construction
              industry. From the towering skyscrapers of Beirut to the restoration of ancient sites, scaffolding plays a
              pivotal role in ensuring the structural integrity of buildings while accommodating the intricacies of
              Lebanon&apos;s varied architectural designs.
            </p>

            <h2 className="font-[Rajdhani] text-[#103781] text-[28px] md:text-[32px] font-[700] mb-[12px]">
              Conclusion
            </h2>
            <p className="font-['Open_Sans'] text-[#2a2a2a] text-[15px] md:text-[16px] leading-[1.9] max-w-[980px]">
              The evolution of scaffolding in Lebanon reflects a dynamic journey marked by innovation, adaptation, and
              the fusion of traditional craftsmanship with modern engineering. Understanding this evolution is crucial
              in appreciating the significance of scaffolding in Lebanon&apos;s construction landscape and its role in
              shaping the nation&apos;s architectural identity.
            </p>
          </article>

          <div className="w-full flex justify-center mt-[50px]">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center
                         w-[220px] h-[46px]
                         rounded-[12px] bg-[#214f9b] text-white
                         font-[Rajdhani] font-[700] text-[16px]
                         hover:bg-[#28509E] transition"
              aria-label="Back to blog articles list"
            >
              Other Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#214f9b] py-[70px] text-white" aria-label="Newsletter subscription">
        <div className="w-[92%] max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[24px]">
          <h2 className="font-[Rajdhani] text-[32px] md:text-[42px] font-[700] uppercase leading-[1.2] text-center lg:text-left">
            Subscribe to our <br /> Newsletter
          </h2>

          <form
            className="flex flex-col md:flex-row items-center gap-[16px] w-full lg:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletterEmail" className="sr-only">
              Email address
            </label>
            <input
              id="newsletterEmail"
              type="email"
              autoComplete="email"
              className="w-full md:w-[380px] px-[18px] py-[14px] rounded-[10px] border border-white/40 bg-transparent text-white text-[15px] outline-none"
              placeholder="Email"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-[34px] py-[14px] bg-[#ff8a00] rounded-[10px] text-white font-[Rajdhani] font-[700] text-[15px] uppercase transition hover:bg-[#e77a00] w-full md:w-auto"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default BlogItem
