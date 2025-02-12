import { useEffect, useState } from "react";
import RQ from "../../assets/quoteR.png";
import LQ from "../../assets/quoteL.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Activities from '../Resuables/Activities';

import Nwa from "../../assets/lecturers/Ldeju.png";
import BookCover from "../../assets/mainDesktop/bookCover.png";
const Deju = () => {
	const [tab1, setTab1] = useState(false);
	const [tab2, setTab2] = useState(false);
	const [tab3, setTab3] = useState(false);

	const handleClick = (current) => {
		if (current === "ach") {
			setTab1(true);
			setTab2(false);
			setTab3(false);
		}

		if (current === "res") {
			setTab1(false);
			setTab2(true);
			setTab3(false);
		}
		if (current === "ex") {
			setTab1(false);
			setTab2(false);
			setTab3(true);
		}
	};
	useEffect(() => {
		// setTab1(true);
		setTab2(true);
		setTab3(false);
	}, []);
	return (
		<main>
			<section className="h-[600px] flex flex-col lg:flex-row mb-[80px]">
				<div className="flex-1">
					<img
						src={Nwa}
						alt="Dr Olabode P. ORELAJA"
						className="h-[320px] lg:h-[600px] w-[100%] object-cover"
					/>
				</div>
				<div className="flex-1 bg-[#072856]  h-[232px] lg:h-auto flex justify-center items-center px-[27px] lg:px-0 py-[17px] lg:py-0">
					<div className="lg:w-[525px] mx-auto lg:px-4">
						<div className="flex">
							<img src={LQ} alt="" className="w-[29px] lg:w-auto" />
						</div>
						<p className="text-white text-[12px] lg:text-[20px] leading-[150%] my-6 lg:my-[59px]">
            Dr. Akindeju holds Ph.D, MSc and BSc degrees in Urban and
						Regional Planning with research bias in Urban Morphology,
						Environmental (Natural) Systems, Spatial Analysis, Science of Cities
						and Information Technology.
						</p>
						<div className="flex justify-end">
							<img src={RQ} alt="" className="w-[29px] lg:w-auto" />
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-[1117px] mx-auto flex justify-between items-center mb-[40px] px-6 lg:px-0">
				<div className="text-[#090302]">
					<h5 className="text-[14px] lg:text-[20px] font-semibold">
						Dr. Folayele .O. AKINDEJU
					</h5>
				</div>
				<div className="flex justify-center gap-x-6 lg:px-0">
					<span className="bg-gray-200 p-2 rounded-md hover:animate-pulse">
						<a
							href="https://www.linkedin.com/in/oluyemi-akindeju-phd-0323067/"
							target="_blank"
							aria-label="Link to LinkedIn">
							<LinkedInIcon
								fontSize="medium"
								className="text-[#090302] hover:text-[#192C69]"
							/>
						</a>
					</span>
				</div>
			</section>
			<section className="max-w-[800px] mx-auto">
				<h3 className="text-center text-[24px] lg:text-[40px] font-bold text-[#011717] mb-6">
					Bio
				</h3>
				<div className="text-[12px] lg:text-[16px] leading-[150%] flex flex-col gap-6 px-6 lg:px-0">
					<p>
						Academic staff of the department of Urban and Regional Planning,
						University of Lagos. He holds Ph.D, MSc and BSc degrees in Urban and
						Regional Planning with research bias in Urban Morphology,
						Environmental (Natural) Systems, Spatial Analysis, Science of Cities
						and Information Technology. As a passionate professional deft in the
						field of urban planning with a knack for sustainable natural
						environments, he’s poised towards propagating researches, plans and
						policies that promote harmonious synergy between human developments
						and natural environments. With a strong analytical background and
						geospatial analysis proficiency, he constantly seeks to explore
						multidisciplinary and cross disciplinary (research) opportunities
						towards sustainability endeavours, having acquired 15 years cognate
						academic and professional experiences spanning different aspects of
						the urban planning discipline.
					</p>
					<p>
						With international research experience as a Graduate Research
						Affiliate at the Centre for Advanced Spatial Analysis (CASA),
						University College London, UCL, United Kingdom he’s been acquainted
						with research works on Urban Complexity Modelling, City Lifecycle
						and Well-being, Smart Cities, Programming and Spatial Analysis, and
						skilled in spatial analysis and multidisciplinary knowledge on urban
						sustainability issues.
					</p>
					<p>
						He’s currently the Lab. Manager, UNILAG-LISA, Laboratory for
						Interdisciplinary Statistical Analysis; and Cluster Manager, Spatial
						Data Infrastructure Cluster under the ARUA Centre of Excellence for
						Urbanization and Habitable Cities, UNILAG
					</p>
					<p>
						Oluyemi has attended both local and international conferences and
						has publications to his credit. He’s currently working on the
						Complexity of the African city dynamics, the emerging virtual space
						of the digital era and associated urbanism.
					</p>
				</div>
			</section>
			<section className="lg:px-4 bg-[#FAFAFA] py-[52px] my-[64px] lg:my-[80px]">
				<div>
					<h3 className="text-center text-[#011717] text-[24px] lg:text-[32px] font-[600] capitalize mb-[40px]">
						Articles and Research hubs
					</h3>
					<div className="max-w-[1112px] mx-auto">
						<div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-6 lg:gap-x-[24px]">
							<div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
								<img
									src={BookCover}
									alt=""
									className="absolute w-full h-full"
								/>
								<div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
									<p className="text-[#7C8A83] mb-[28px] text-[10px]">
										September 2021
									</p>
									<h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
										<a
											href="https://sciendo.com/article/10.2478/environ-2021-0017"
											target="_blank">
											Spatio-temporal land cover dynamics and emerging landscape
											patterns in western part of Lagos State, Nigeria
										</a>
									</h3>
								</div>
								<div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
									<article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
										<p>
											<a
												href="https://sciendo.com/article/10.2478/environ-2021-0017"
												target="_blank">
												View Publication
											</a>
										</p>
									</article>
								</div>
							</div>
							<div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
								<img
									src={BookCover}
									alt=""
									className="absolute w-full h-full"
								/>
								<div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
									<p className="text-[#7C8A83] mb-[28px] text-[10px]">
										August 2019
									</p>
									<h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
										<a
											href="https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9780429290626-19/sdgs-geospatial-information-perspective-nigeria-africa-muyiwa-agunbiade-olajide-oluwafemi-oluyemi-akindeju"
											target="_blank">
											SDGs and Geospatial Information Perspective From
											Nigeria-Africa
										</a>
									</h3>
								</div>
								<div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
									<article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
										<p>
											<a
												href="https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9780429290626-19/sdgs-geospatial-information-perspective-nigeria-africa-muyiwa-agunbiade-olajide-oluwafemi-oluyemi-akindeju"
												target="_blank">
												View Publication
											</a>
										</p>
									</article>
								</div>
							</div>
							{/* <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">
                    May 2013
                  </p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[16px]">
                    <a
                      href="https://journals.co.za/doi/abs/10.10520/EJC136878"
                      target="_blank"
                    >
                      Conceptualizing the liveable African city
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://doi.org/10.1080/23792949.2017.1399804"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div> */}
							{/* <div className="relative w-[162px] lg:w-[260px] h-[200px] lg:h-[360px] bg-[#b7b5b6] rounded-[2px] flex justify-center items-end">
                <img
                  src={BookCover}
                  alt=""
                  className="absolute w-full h-full"
                />
                <div className="absolute  top-10 lg:top-[74px] lg:max-w-[174px] lg:pl-[4px]">
                  <p className="text-[#7C8A83] mb-[28px] text-[10px]">2013</p>
                  <h3 className="w-[102px] lg:w-auto text-[#1B1B1B] font-bold text-[10px] lg:text-[15px] leading-[150%]">
                    <a
                      href="https://ir.unilag.edu.ng/handle/123456789/10137"
                      target="_blank"
                    >
                      Amoebic Urbanization in Nigerian Cities: The case of Lagos
                      and Ota
                    </a>
                  </h3>
                </div>
                <div className="w-full h-[40px] lg:h-[72px] bg-white py-2 lg:py-[18px] lg:px-5 z-10 opacity-[0.92]">
                  <article className="border-[#010A09] border-[2px] py-2 px-4 lg:px-6">
                    <p>
                      <a
                        href="https://ir.unilag.edu.ng/handle/123456789/10137"
                        target="_blank"
                      >
                        View Publication
                      </a>
                    </p>
                  </article>
                </div>
              </div> */}
						</div>
						<div className="mt-[24px] px-6 lg:px-0">
							<p className="mb-4">
								<a
									href="https://orcid.org/0000-0002-4375-7295"
									target="_blank"
									className="text-[#024B4B] hover:text-[#037171] underline">
									Orcid Link
								</a>
							</p>
							<p className="mb-4">
								<a
									href="https://scholar.google.com/citations?user=GKpHRE8AAAAJ&hl=en&oi=ao"
									target="_blank"
									className="text-[#024B4B] hover:text-[#037171] underline">
									Google Scholar Link
								</a>
							</p>
							<p className="mb-4">
								<a
									href="https://www.researchgate.net/profile/Oluyemi-Akindeju"
									target="_blank"
									className="text-[#024B4B] hover:text-[#037171] underline">
									ResearchGate Profile
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
      <section className="my-[80px] bg-white py-[104px] h-[700px] hidden lg:block">
        <div className="max-w-[1110px] mx-auto flex justify-between h-[400px]">
          <div className="max-w-[540px] info-box">
            {/* <h3
              className={
                tab1
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('ach')}
            >
              Achievements/Accolades/Awards/ Honours
            </h3> */}

            <h3
              className={
                tab2
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('res')}
            >
              Research Interests
            </h3>
            <h3
              className={
                tab3
                  ? 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10 opacity'
                  : 'text-[#ADABAB] font-[600] leading-[150%] text-[2rem] mb-10'
              }
              role="button"
              onClick={() => handleClick('ex')}
            >
              Extracurricular Activities
            </h3>
          </div>
          <div className="w-[400px] pr-[24px] h-[400px] accordion overflow-y-scroll">
            {/* <article className={tab1 ? 'tabs' : 'hidden'}>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  2010 - 2012
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Australian Postgraduate Awards
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Industry
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Overall Best graduating Student, Urban and Regional Planning
                  Department,
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Most consistent student from Part IV to V, Faculty of
                  Environmental Design and Management
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
              <div className="mb-10">
                <p className="text-[#ADABAB] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                  1991-1992
                </p>
                <h4 className="text-[#090302] text-[20px] leading-[150%]">
                  Overall best graduating student, Faculty of Environmental
                  Design and Management
                </h4>
                <p className="text-[#5B5756] text-[16px] leading-[150%]">
                  Obafemi Awolowo University, Ile-Ife.
                </p>
              </div>
            </article> */}
            <article className={tab2 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                <p>Science of Cities</p>
                <p>Urban Mophology</p>
                <p>Ecology and Environmental Sustainability</p>
              </div>
            </article>
            <article className={tab3 ? 'tabs' : 'hidden'}>
              <div className="flex flex-col gap-2 text-[#090302] text-[20px] leading-[150%]">
                  <Activities text="Lover of Nature" icon="nature" />
                  <Activities text="Culinary Adventures" icon="food" />
                  <Activities text="Sightseeing" icon="sight" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="lg:hidden px-6 lg:px-0">
        <div>
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Achievements/Accolades/Awards/ Honours
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article className="">
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    2010 - 2012
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Australian Postgraduate Awards
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    Industry
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    1991-1992
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Overall Best graduating Student, Urban and Regional Planning
                    Department,
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    Obafemi Awolowo University, Ile-Ife.
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#ADABAB] text-[12px] pb-2 mb-2 border-b-[#ADABAB] border-b-[1px] rounded-[2px]">
                    1991-1992
                  </p>
                  <h4 className="text-[#090302] text-[14px] leading-[150%]">
                    Most consistent student from Part IV to V, Faculty of
                    Environmental Design and Management
                  </h4>
                  <p className="text-[#5B5756] text-[12px] leading-[150%]">
                    Obafemi Awolowo University, Ile-Ife.
                  </p>
                </div>
              </article>
            </AccordionDetails>
          </Accordion> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Research Interests
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article className="">
                <div className="flex flex-col gap-2 text-[#090302] text-[14px] leading-[150%]">
                <p>Science of Cities</p>
                  <p>Urban Mophology</p>
                  <p>Ecology and Environmental Sustainability</p>
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3
                className="text-[#090302] font-[600] leading-[150%] text-[1rem]"
                role="button"
              >
                Extracurricular Activities
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <article className="">
                <div className="flex flex-col gap-2 text-[#090302] text-[14px] leading-[150%]">
                <Activities text="Lover of Nature" icon="nature" />
                  <Activities text="Culinary Adventures" icon="food" />
                  <Activities text="Sightseeing" icon="sight" />
                </div>
              </article>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
			<section className="my-[80px]">
				<div className="bg-[#FAFAFA] py-10 lg:py-20 lg:h-[346px] flex justify-center h-[252px]">
					<div className="text-center max-w-[546px] mx-auto px-[35px] lg:px-0">
						<h3 className="text-[#1B1B1B] font-bold text-[24px] lg:text-[40px]">
							Connect Now
						</h3>
						<p className="text-[12px] lg:text-[14px] text-[#1B1B1B] mb-10 lg:mb-[60px]">
							Have questions or need assistance? Reach out to our lecturer below
						</p>
						{/* <div className="flex gap-x-2 lg:gap-x-6 justify-center">
              <div className="bg-[#1B1B1B] rounded-[2px]  px-4 lg:px-6 py-2 flex items-center gap-x-2">
                <span className="lg:hidden">
                  <MarkunreadOutlinedIcon fontSize="small" htmlColor="white" />
                </span>
                <span className="hidden lg:block">
                  <MarkunreadOutlinedIcon htmlColor="white" />
                </span>
                <span className="text-[#FDFFFD] text-[12px] lg:text-[14px] underline hover:animate-pulse whitespace-nowrap">
                  <a href="mailto:magunbiade@unilag.edu.ng">Send an E-mail</a>
                </span>
              </div>
            </div> */}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Deju;
