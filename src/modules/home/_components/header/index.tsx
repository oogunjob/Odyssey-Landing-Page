import { motion, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import SingleScreenshot from "./singleScreenshot";
import SVGWave from "./svg/wave";
import SVGBlob from "./svg/blob";

function Header() {
  const {
    googlePlayLink,
    appStoreLink,
    home: { header, partners },
  } = useContext(ConfigContext)!;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section id={header.id} className="relative pb-8 md:pb-4 min-h-screen">
      {/* Pirate-themed gradient background matching mobile app - Fixed for full coverage */}
      <div 
        className="fixed inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-600 to-orange-500 opacity-95 -z-20"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 70%, #F7931A 100%)'
        }}
      />
      
      <div className="relative max-w-screen-lg mx-auto py-4 px-4 md:py-16 min-h-screen">
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="flex flex-1 items-center md:items-start md:h-[300vh]">
            <div className="static top-40 flex flex-col prose justify-center py-8 md:sticky md:h-[548px] w-full">
              
              {/* Rewards with pirate theme - Fixed stacking for mobile */}
              <div className="flex flex-col gap-2 my-4 sm:flex-row sm:flex-wrap sm:justify-center">
                {header.rewards?.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center self-center h-8 md:h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-3 py-2 border border-white border-opacity-30 w-full sm:w-auto max-w-xs sm:max-w-none"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <span className="text-lg md:text-2xl mr-2">🏆</span>
                    <p className="text-xs md:text-sm text-white font-semibold whitespace-pre text-center m-0 flex-1">
                      {reward}
                    </p>
                    <span className="text-lg md:text-2xl ml-2">⚔️</span>
                  </motion.div>
                ))}
              </div>

              {/* Main headline with pirate flair - Responsive text sizing */}
              <motion.h2
                initial={{ opacity: 0, rotateZ: -10 }}
                animate={{ opacity: 1, rotateZ: 0 }}
                className="mt-0 mb-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  fontWeight: '800'
                }}
              >
                {header.headlineMark ? (
                  <>
                    {header.headline
                      .split(" ")
                      .slice(0, header.headlineMark[0])
                      .join(" ")}{" "}
                    <span className="inline-block relative">
                      <span>
                        {header.headline
                          .split(" ")
                          .slice(...header.headlineMark)
                          .join(" ")}
                      </span>
                      <motion.span
                        animate={{
                          width: "100%",
                          height: "100%",
                        }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="w-0 h-full top-0 left-0 z-[-1] absolute inline-block rounded-lg"
                        style={{
                          background: 'linear-gradient(90deg, rgba(247, 147, 26, 0.8) 0%, rgba(247, 147, 26, 0.4) 100%)'
                        }}
                      />
                    </span>{" "}
                    {header.headline
                      .split(" ")
                      .slice(header.headlineMark[1])
                      .join(" ")}
                  </>
                ) : (
                  header.headline
                )}
              </motion.h2>

              {/* Subtitle with pirate styling - Responsive text sizing */}
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ delay: 0.5, ease: "easeInOut" }}
                className="whitespace-pre-wrap text-left m-0 my-1 max-w-md text-sm sm:text-base md:text-lg md:max-w-lg text-white font-medium"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}
              >
                {header.subtitle}
              </motion.p>

              {/* App store buttons with enhanced styling - Responsive sizing */}
              <motion.ul
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="list-none flex flex-col sm:flex-row sm:gap-0 md:gap-5  m-0 p-0 items-center sm:items-start"
              >
                {googlePlayLink && (
                  <li className="m-0 p-0">
                    <motion.a 
                      href={googlePlayLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <img
                        className="h-12 sm:h-14 rounded-lg shadow-lg"
                        alt="google play logo"
                        src="/stores/google-play.svg"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                        }}
                      />
                    </motion.a>
                  </li>
                )}
                {appStoreLink && (
                  <li className="m-0 p-0">
                    <motion.a 
                      href={appStoreLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <img
                        className="h-12 sm:h-14 rounded-lg shadow-lg"
                        alt="app store logo"
                        src="/stores/app-store.svg"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                        }}
                      />
                    </motion.a>
                  </li>
                )}
              </motion.ul>

              {/* User avatars with pirate theme - Responsive sizing */}
              {header.usersDescription && (
                <div className="not-prose flex flex-col sm:flex-row items-center gap-2 my-3">
                  <ul className="avatar-group -space-x-3 sm:-space-x-4 flex">
                    {Array.from(Array(5)).map((_, index) => (
                      <motion.li
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="relative"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-orange-400 shadow-lg">
                          <img
                            src={`/avatars/${index + 1}.webp`}
                            alt={`app user ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Pirate hat emoji overlay for first avatar */}
                        {index === 0 && (
                          <span className="absolute -top-1 -right-1 text-xs">🏴‍☠️</span>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    className="text-xs sm:text-sm text-white font-medium text-center sm:text-left sm:ml-2"
                    initial={{ scale: 0, opacity: 0, y: "100%" }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <span className="mr-1">⚓</span>
                    {header.usersDescription}
                    <span className="ml-1">🏴‍☠️</span>
                  </motion.p>
                </div>
              )}

              {/* Additional pirate-themed CTA - Responsive sizing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-2xl border-2"
                style={{
                  backgroundColor: 'rgba(247, 147, 26, 0.2)',
                  borderColor: 'rgba(247, 147, 26, 0.5)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <p className="text-xs sm:text-sm text-white font-medium text-center m-0">
                  Learn Bitcoin - the greatest money ever created. Download now! 💰
                </p>
              </motion.div>
            </div>
          </div>

          {/* Phone mockup with enhanced styling - Responsive positioning */}
          <div className="min-h-[50vh] md:min-h-[300vh] z-10 mt-8 md:mt-0" ref={ref}>
            <div className="flex justify-center sticky top-20 sm:top-28 md:top-40">
              <SVGBlob
                scrollYProgress={scrollYProgress}
                className="-z-30 absolute hidden w-[800px] -top-20 -right-60 md:hidden xl:block opacity-30"
              />
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  mass: 0.4,
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="relative h-[400px] xs:h-[480px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[2rem] sm:rounded-[3rem]"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              >
                <div 
                  className="absolute top-2 left-2 sm:top-2.5 sm:left-3 w-[calc(100%-16px)] sm:w-[calc(100%-24px)] h-[calc(100%-12px)] sm:h-[calc(100%-16px)] rounded-[1rem] 2xs:rounded-[2rem] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
                  }}
                >
                  {header.screenshots.map((src, index) => (
                    <SingleScreenshot
                      key={src}
                      src={src}
                      scrollYProgress={scrollYProgress}
                      index={index}
                      totalCount={header.screenshots.length}
                    />
                  ))}
                </div>
                <img
                  src="/misc/iphone-frame.webp"
                  alt="iphone-frame"
                  className="relative z-10 h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced wave with pirate colors */}
      {partners && (
        <div className="absolute -bottom-1 left-0 right-0 -z-30">
          <SVGWave className="text-blue-900 opacity-80" />
        </div>
      )}

      {/* Floating pirate elements - Hide on mobile for better performance */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-6xl opacity-20 hidden lg:block -z-10"
      >
        ⚓
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-32 right-20 text-4xl opacity-20 hidden lg:block -z-10"
      >
        🏴‍☠️
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-20 text-5xl opacity-15 hidden lg:block -z-10"
      >
        🧭
      </motion.div>
    </section>
  );
}

export default Header;