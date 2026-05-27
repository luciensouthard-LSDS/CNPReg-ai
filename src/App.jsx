import { useState, useRef, useEffect } from "react";

const TOPICS = [
  "Meal Pattern Requirements",
  "Income Eligibility & Certification",
  "Verification Procedures",
  "Procurement Standards (2 CFR 200)",
  "Civil Rights Compliance",
  "Administrative Reviews",
  "Professional Standards",
  "Community Eligibility Provision",
  "CACFP Meal Patterns",
  "Summer Food Service Program",
  "Direct Certification",
  "USDA Foods / Commodity Programs",
];

const SAMPLE_QS = [
  "What are the NSLP meal pattern requirements under 7 CFR 210?",
  "Explain CEP eligibility and how ISP is calculated",
  "What triggers an administrative review?",
  "CACFP infant meal pattern requirements",
];

const DISCLAIMER_TEXT = `CNPReg AI is an artificial intelligence tool designed to assist state agency administrators with USDA Child Nutrition Program regulatory questions. As with all AI systems, responses may contain errors, omissions, or outdated information. This tool does not constitute legal advice and should not be used as the sole basis for compliance or programmatic decisions. Always verify responses against official USDA FNS regulations (Code of Federal Regulations), published policy memoranda, and current USDA FNS guidance before taking action. LS Digital Solutions, LLC is not affiliated with, endorsed by, or acting on behalf of the United States Department of Agriculture or the Food and Nutrition Service.`;

// ── TEXT LOGO COMPONENT ──────────────────────────────────────────────────────
function LSLogo({ variant = "nav" }) {
  const sizes = {
    nav:     { ls: 22, ds: 11, llc: 9 },
    gate:    { ls: 20, ds: 10, llc: 8 },
    sidebar: { ls: 18, ds: 9,  llc: 8 },
    footer:  { ls: 16, ds: 9,  llc: 8 },
  };
  const sz = sizes[variant] || sizes.nav;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, letterSpacing: 0.3 }}>
      <div style={{
        width: sz.ls + 8, height: sz.ls + 8,
        background: "#0077b6",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ls, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>LS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: sz.ds, fontWeight: 700, color: "#ffffff", letterSpacing: 2, textTransform: "uppercase" }}>Digital Solutions</span>
        <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: sz.llc, color: "#6b8fa8", letterSpacing: 1.5, textTransform: "uppercase" }}>Child Nutrition Program Technology Specialist</span>
      </div>
    </div>
  );
}



// ── BRAND TOKENS ─────────────────────────────────────────────────────────────
const N   = "#001e3c";
const N2  = "#002a52";
const N3  = "#001428";
const A   = "#0077b6";
const AL  = "#4db8e8";
const AP  = "#e6f4fb";
const W   = "#ffffff";
const OF  = "#f4f7fa";
const BD  = "#ccd9e6";
const TM  = "#3a5570";
const TL  = "#6b8fa8";
const WN  = "#b45309";
const WB  = "#fffbeb";
const WBD = "#fde68a";

export default function App() {
  const [screen, setScreen]   = useState("landing");
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const userMsg    = { role: "user", content: text };
    const newHistory = [...history, userMsg];
    setMessages(m => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: `You are CNPReg AI, a free regulatory intelligence tool developed by LS Digital Solutions, LLC for state agency administrators of USDA Child Nutrition Programs.

REGULATORY KNOWLEDGE BASE — OFFICIAL CFR TEXT
The following contains official regulatory text from the Federal Register, current as of April 13, 2026. Use this as your PRIMARY source for all answers. Cite specific section numbers precisely.


======================================================================
7 CFR PART 210 — NSLP — National School Lunch Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 210—NATIONAL SCHOOL LUNCH PROGRAM

Authority: 42 U.S.C. 1751-1760, 1779.

Source: 53 FR 29147, Aug. 2, 1988, unless otherwise noted.

Subpart A—General

§ 210.1 General purpose and scope.

(a) *Purpose of the program. *Section 2 of the National School Lunch Act (42 U.S.C. 1751), states: “It is declared to be the policy of Congress, as a measure of national security, to safeguard the health and well-being of the Nation's children and to encourage the domestic consumption of nutritious agricultural commodities and other food, by assisting the States, through grants-in-aid and other means, in providing an adequate supply of food and other facilities for the establishment, maintenance, operation, and expansion of nonprofit school lunch programs.” Pursuant to this act, the Department provides States with general and special cash assistance and donations of foods acquired by the Department to be used to assist schools in serving nutritious lunches to children each school day. In furtherance of Program objectives, participating schools shall serve lunches that are nutritionally adequate, as set forth in these regulations, and shall to the extent practicable, ensure that participating children gain a full understanding of the relationship between proper eating and good health.

(b) *Scope of the regulations. *This part sets forth the requirements for participation in the National School Lunch and Commodity School Programs. It specifies Program responsibilities of State and local officials in the areas of program administration, preparation and service of nutritious lunches, the sale of competitive foods, payment of funds, use of program funds, program monitoring, and reporting and recordkeeping requirements.

*[53 FR 29147, Aug. 2, 1988, as amended at 78 FR 39090, June 28, 2013]*

§ 210.2 Definitions.

For the purposes of this part:

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the National School Lunch Act, as amended.

*Afterschool** care **program** *means a program providing organized child care services to enrolled school-age children afterschool hours for the purpose of care and supervision of children. Those programs must be distinct from any extracurricular programs organized primarily for scholastic, cultural or athletic purposes.

*Applicable credits *shall have the meaning established in 2 CFR part 200 and USDA implementing regulations 2 CFR parts 400 and 415.

*Attendance factor *means a percentage developed no less than once each school year which accounts for the difference between enrollment and attendance. The attendance factor may be developed by the school food authority, subject to State agency approval, or may be developed by the State agency. In the absence of a local or State attendance factor, the school food authority will use an attendance factor developed FNS. When taking the attendance factor into consideration, school food authorities will assume that all children eligible for free and reduced price lunches attend school at the same rate as the general school population.

*Average Daily Participation *means the average number of children, by eligibility category, participating in the Program each operating day. These numbers are obtained by dividing:

(1) The total number of free lunches claimed during a reporting period by the number of operating days in the same period;

(2) The total number of reduced price lunches claimed during a reporting period by the number of operating days in the same period; and

(3) The total number of paid lunches claimed during a reporting period by the number of operating days in the same period.

*Child *means:

(1) A student of high school grade or under as determined by the State educational agency, who is enrolled in an educational unit of high school grade or under as described in paragraphs (1) and (2) of the definition of “School” in this section, including students with a disability who participate in a school program established for persons with disabilities;

(2) A person under 21 chronological years of age who is enrolled in an institution or center as described in paragraph (3) of the definition of “School” in this section; or

(3) For afterschool care programs, persons aged 18 and under at the start of the school year, and persons of any age with a disability who participate in a school program established for persons with disabilities.

*Child with a disability *means any child who has a physical or mental impairment that substantially limits one or more major life activities of such individual, has a record of such an impairment, or has been regarded as having such an impairment.

*Commodity School Program *means the Program under which participating schools operate a nonprofit lunch program in accordance with this part and receive donated food assistance in lieu of general cash assistance. Schools participating in the Commodity School Program will also receive special cash and donated food assistance in accordance with § 210.4(c).

*Contractor *means a commercial enterprise, public or nonprofit private organization or individual that enters into a contract with a school food authority.

*Cost reimbursable contract *means a contract that provides for payment of incurred costs to the extent prescribed in the contract, with or without a fixed fee.

*Days *means calendar days unless otherwise specified.

*Department *means the United States Department of Agriculture.

*Distributing agency *means a State agency which enters into an agreement with the Department for the distribution to schools of donated foods pursuant to part 250 of this chapter.

*Donated foods *means food commodities donated by the Department for use in nonprofit lunch programs.

*Fiscal year *means a period of 12 calendar months beginning October 1 of any year and ending with September 30 of the following year.

*Fixed fee *means an agreed upon amount that is fixed at the inception of the contract. In a cost reimbursable contract, the fixed fee includes the contractor's direct and indirect administrative costs and profit allocable to the contract.

*Fixed-price contract *means a contract that charges a fixed cost per meal, or a fixed cost for a certain time period. Fixed-price contracts may include an economic price adjustment tied to a standard index.

*FNS *means the Food and Nutrition Service, United States Department of Agriculture.

*FNSRO *means the appropriate Regional Office of the Food and Nutrition Service of the Department.

*Food **item** *means a specific food offered within a food component.

*Food service management company *means a commercial enterprise or a nonprofit organization which is or may be contracted with by the school food authority to manage any aspect of the school food service.

*Free lunch *means a lunch served under the Program to a child from a household eligible for such benefits under part 245 of this chapter and for which neither the child nor any member of the household pays or is required to work.

*Local educational agency *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs schools, and

educational service agencies and consortia of those agencies, as well as the State educational agency in a State or territory in which the State educational agency is the sole educational agency for all public or private nonprofit schools.

*Lunch *means a meal service that meets the meal requirements in § 210.10 for lunches.

*Meal **component** *means one of the food groups which comprise reimbursable meals. The meal components are: fruits, vegetables, grains, meats/meat alternates, and fluid milk.

*National School Lunch Program *means the Program under which participating schools operate a nonprofit lunch program in accordance with this part. General and special cash assistance and donated food assistance are made available to schools in accordance with this part.

*Net cash resources *means all monies, as determined in accordance with the State agency's established accounting system, that are available to or have accrued to a school food authority's nonprofit school food service at any given time, less cash payable. Such monies may include, but are not limited to, cash on hand, cash receivable, earnings on investments, cash on deposit and the value of stocks, bonds or other negotiable securities.

*Nonprofit *means, when applied to schools or institutions eligible for the Program, exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1986.

*Nonprofit school food service *means all food service operations conducted by the school food authority principally for the benefit of schoolchildren, all of the revenue from which is used solely for the operation or improvement of such food services.

*Nonprofit school food service account *means the restricted account in which all of the revenue from all food service operations conducted by the school food authority principally for the benefit of school children is retained and used only for the operation or improvement of the nonprofit school food service. This account will include, as appropriate, non-Federal funds used to support paid lunches as provided in § 210.14(e), and proceeds from nonprogram foods as provided in § 210.14(f).

*OIG *means the Office of the Inspector General of the Department.

*Paid lunch *means a lunch served to children who are either not certified for or elect not to receive the free or reduced price benefits offered under part 245 of this chapter. The Department subsidizes each paid lunch with both general cash assistance and donated foods. The prices for paid lunches in a school food authority must be determined in accordance with § 210.14(e).

*Point of Service *means that point in the food service operation where a determination can accurately be made that a reimbursable free, reduced price, or paid lunch has been served to an eligible child.

*Program *means the National School Lunch Program and the Commodity School Program.

*Reduced price lunch *means a lunch served under the Program:

(1) To a child from a household eligible for such benefits under part 245 of this chapter;

(2) For which the price is less than the school food authority designated full price of the lunch and which does not exceed the maximum allowable reduced price specified under part 245 of this chapter; and

(3) For which neither the child nor any member of the household is required to work.

*Reimbursement *means Federal cash assistance including advances paid or payable to participating schools for lunches meeting the requirements of § 210.10 and served to eligible children.

*Revenue, *when applied to nonprofit school food service, means all monies received by or accruing to the nonprofit school food service in accordance with the State agency's established accounting system including, but not limited to, children's payments, earnings on investments, other local revenues, State revenues, and Federal cash reimbursements.

*School *means:

(1) An educational unit of high school grade or under, recognized as part of the educational system in the State and operating under public or nonprofit private ownership in a single building or complex of buildings;

(2) Any public or nonprofit private classes of preprimary grade when they are conducted in the aforementioned schools; or

(3) Any public or nonprofit private residential child care institution, or distinct part of such institution, which operates principally for the care of children, and, if private, is licensed to provide residential child care services under the appropriate licensing code by the State or a subordinate level of government, except for residential summer camps which participate in the Summer Food Service Program for Children, Job Corps centers funded by the Department of Labor, and private foster homes.

*School food authority *means the governing body which is responsible for the administration of one or more schools; and has the legal authority to operate the Program therein or be otherwise approved by FNS to operate the Program.

*School nutrition program directors *are those individuals directly responsible for the management of the day-to-day operations of school food service for all participating schools under the jurisdiction of the school food authority.

*School nutrition program managers *are those individuals directly responsible for the management of the day-to-day operations of school food service for a participating school(s).

*School nutrition program staff *are those individuals, without managerial responsibilities, involved in day-to-day operations of school food service for a participating school(s).

*School week *means the period of time used to determine compliance with the meal requirements in § 210.10. The period will be a normal school week of five consecutive days; however, to accommodate shortened weeks resulting from holidays and other scheduling needs, the period must be a minimum of three consecutive days and a maximum of seven consecutive days. Weeks in which school lunches are offered less than three times must be combined with either the previous or the coming week.

*School year *means a period of 12 calendar months beginning July 1 of any year and ending June 30 of the following year.

*Seamless Summer Option *means the meal service alternative authorized by Section 13(a)(8) of the Richard B. Russell National School Lunch Act, 42 U.S.C. 1761(a)(8), under which public or nonprofit school food authorities participating in the National School Lunch Program or School Breakfast Program offer meals at no cost to children during the traditional summer vacation periods and, for year-round schools, vacation periods longer than 10 school days.

*Secretary *means the Secretary of Agriculture.

*State *means any of the 50 States, District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, and, as applicable, American Samoa and the Commonwealth of the Northern Marianas.

*[53 FR 29147, Aug. 2, 1988]*

§ 210.3 Administration.

*State agency *means:

(1) The State educational agency;

(2) Any other agency of the State which has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer the Program in schools, as specified in § 210.3(b) of this chapter; or

(3) The FNSRO, where the FNSRO administers the Program as specified in § 210.3(c) of this chapter.

*State educational agency *means, as the State legislature may determine,

(1) The chief State school officer (such as the State Superintendent of Public Instruction, Commissioner of Education, or similar officer), or

(2) A board of education controlling the State department of education.

*State licensed healthcare professional *means an individual who is authorized to write medical prescriptions under State law. This may include, but is not limited to, a licensed physician, nurse practitioner, or physician's assistant, depending on State law.

*Tofu *means a soybean-derived food, made by a process in which soybeans are soaked, ground, mixed with water, heated, filtered, coagulated, and formed into cakes. Basic ingredients are whole soybeans, one or more food-grade coagulants (typically a salt or an acid), and water. Tofu products must conform to FNS guidance to count toward the meats/meat alternates component.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

*Whole grain-rich *is the term designated by FNS to indicate that the grain content of a product is between 50 and 100 percent whole grain with any remaining grains being enriched.

*Whole grains *means grains that consist of the intact, ground, cracked, or flaked grain seed whose principal anatomical components—the starchy endosperm, germ and bran—are present in the same relative proportions as they exist in the intact grain seed.

*Yogurt *means commercially prepared coagulated milk products obtained by the fermentation of specific bacteria, that meet milk fat or milk solid requirements and to which flavoring foods or ingredients may be added. These products are covered by the Food and Drug Administration's Definition and Standard of Identity for yogurt, 21 CFR 131.200, and low-fat yogurt and non-fat yogurt covered as a standardized food under 21 CFR 130.10.

(a) *FNS. *FNS will act on behalf of the Department in the administration of the Program.

Editorial Note: For FEDERAL REGISTER citations affecting § 210.2, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(b) *States. *Within the States, the responsibility for the administration of the Program in schools, as defined in § 210.2, shall be in the State educational agency. If the State educational agency is unable to administer the Program in public or private nonprofit residential child care institutions or nonprofit private schools, then Program administration for such schools may be assumed by FNSRO as provided in paragraph (c) of this section, or such other agency of the State as has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer such schools. Each State agency desiring to administer the Program shall enter into a written agreement with the Department for the administration of the Program in accordance with the applicable requirements of this part; parts 235 and 245 of this chapter; parts 15, 15a, and 15b of this title, and 2 CFR part 200; USDA implementing regulations 2 CFR part 400 and part 415; and FNS instructions.

(c) *FNSRO. *The FNSRO will administer the Program in nonprofit private schools or public or nonprofit private residential child care institutions if the State agency is prohibited by law from disbursing Federal funds paid to such schools. In addition, the FNSRO will continue to administer the Program in those States in which nonprofit private schools or public or nonprofit private residential child care institutions have been under continuous FNS administration since October 1, 1980, unless the administration of the Program in such schools is assumed by the State. The FNSRO will, in each State in which it administers the Program, assume all responsibilities of a State agency as set forth in this part and part 245 of this chapter as appropriate. References in this part to “State agency” include FNSRO, as applicable, when it is the agency administering the Program.

(d) *School food authorities. *The school food authority shall be responsible for the administration of the Program in schools. State agencies shall ensure that school food authorities administer the Program in accordance with the applicable requirements of this part; part 245 of this chapter; parts 15, 15a, and 15b, and 3016 or 3019, as applicable, of this title and 2 CFR part 200; USDA implementing regulations 2 CFR part 400 and part 415 and FNS instructions.

(e) *Authority to waive statute and regulations.*

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State agency or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2)

(i) A State agency may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(ii) A State agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(3)

*[53 FR 29147, Aug. 2, 1988, as amended at 71 FR 39515, July 13, 2006; 81 FR 66489, Sept. 28, 2016; 87 FR 57354, Sept. 19, 2022; 89 FR 32063, Apr. 25, 2024]*

Subpart B—Reimbursement Process for States and School Food Authorities

§ 210.4 Cash and donated food assistance to States.

(i) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part. Any waiver request submitted by an eligible service provider must be submitted to the State agency for review. A State agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

(ii) If a State agency concurs with a request from an eligible service provider, the State agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request. By forwarding the request to the FNSRO, the State agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(iii) If the State agency denies the request, the State agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State agency's receipt of the request. The State agency response is final and may not be appealed to FNS.

(a) *General. *To the extent funds are available, FNS will make cash assistance available in accordance with the provisions of this section to each State agency for lunches and afterschool snacks served to children under the National School Lunch and Commodity School Programs. To the extent donated foods are available, FNS will provide donated food assistance to distributing agencies for each lunch served in accordance with the provisions of this part and part 250 of this chapter.

(b) *Assistance for the National School Lunch Program. *The Secretary will make cash and/or donated food assistance available to each State agency and distributing agency, as appropriate, administering the National School Lunch Program, as follows:

(1) Cash assistance will be made available to each State agency administering the National School Lunch Program as follows:

(i) *General: *Cash assistance payments are composed of a general cash assistance payment and a performance-based cash assistance payment, authorized under section 4 of the Act, and a special cash assistance payment, authorized under section 11 of the Act. General cash assistance is provided to each State agency for all lunches served to children in accordance with the provisions of the National School Lunch Program. Performance-based cash assistance is provided to each State agency for lunches served in accordance with § 210.7(d). Special cash assistance is provided to each State agency for lunches served under the National School Lunch Program to children determined eligible for free or reduced price lunches in accordance with part 245 of this chapter.

(ii) *Cash assistance for lunches. *The total general cash assistance paid to each State for any fiscal year shall not exceed the lesser of amounts reported to FNS as reimbursed to school food authorities in accordance with § 210.5(d)(3) or the total calculated by multiplying the number of lunches reported in accordance with § 210.5(d)(1) for each month of service during the fiscal year, by the applicable national average payment rate prescribed by FNS. The total performance-based cash assistance paid to each State for any fiscal year shall not exceed the lesser of amounts reported to FNS as reimbursed to school food authorities in accordance with § 210.5(d)(3) or the total calculated by multiplying the number of lunches reported in accordance with § 210.5(d)(1) for each month of service during the fiscal year, by 6 cents for school year 2012-2013, adjusted annually thereafter as specified in paragraph (b)(1)(iii) of this section. The total special assistance paid to each State for any fiscal year shall not exceed the lesser of amounts reported to FNS as reimbursed to school food authorities in accordance with § 210.5(d)(3) or the total calculated by multiplying the number of free and reduced price lunches reported in accordance with § 210.5(d)(1) for each month of service during the fiscal year by the applicable national average payment rate prescribed by FNS.

(iii) *Annual adjustments. *In accordance with section 11 of the Act, FNS will prescribe annual adjustments to the per meal national average payment rate (general cash assistance), the performance-based cash assistance rate (performance-based cash assistance), and the special assistance national average payment rates (special cash assistance) which are effective on July 1 of each year. These adjustments, which reflect changes in the food away from home series of the Consumer Price Index for all Urban Consumers, are annually announced by Notice in July of each year in the FEDERAL REGISTER.

(iv) *Maximum per meal **rates**. *FNS will also establish maximum per meal rates of reimbursement within which a State may vary reimbursement rates to school food authorities. These maximum rates of reimbursement are established at the same time and announced in the same Notice as the national average payment rates.

(2) *Donated food assistance. *For each school year, FNS will provide distributing agencies with donated foods for lunches served under the National School Lunch Program as provided under part 250 of this chapter. The per lunch value of donated food assistance is adjusted by the Secretary annually to reflect changes as required under section 6 of the Act. These adjustments, which reflect changes in the Price Index for Foods Used in Schools and Institutions, are effective on July 1 of each year and are announced by Notice in the FEDERAL REGISTER in July of each year.

(3) *Cash assistance for afterschool snacks. *For those eligible schools (as defined in § 210.10(o)(1)) operating afterschool care programs and electing to serve afterschool snacks to enrolled children, funds will be made available to each State agency, each school year in an amount no less than the sum of the products obtained by multiplying:

(i) The number of afterschool snacks served in the afterschool care program within the State to children from families that do not satisfy the income standards for free and reduced price school meals by 2.75 cents;

(ii) The number of afterschool snacks served in the afterschool care program within the State to children from families that satisfy the income standard for free school meals by 30 cents; and

(iii) The number of afterschool snacks served in the afterschool care program within the State to children from families that satisfy the income standard for reduced price school meals by 15 cents.

*[53 FR 29147, Aug. 2, 1988, as amended at 58 FR 42487, Aug. 10, 1993; 60 FR 31207, June 13, 1995; 65 FR 26912, May 9, 2000; 77 FR 25034, Apr. 27, 2012; 89 FR 32063, Apr. 25, 2024]*


[Note: Additional sections of Part 210 exist beyond this extract]

======================================================================
7 CFR PART 215 — SMP — Special Milk Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 215—SPECIAL MILK PROGRAM FOR CHILDREN

Authority: 42 U.S.C. 1772 and 1779.

§ 215.1 General purpose and scope.

This part announces the policies and prescribes the general regulations with respect to the Special Milk Program for Children, under the Child Nutrition Act of 1966, as amended, and sets forth the general requirements for participation in the program. The Act reads in pertinent part as follows:

Section 3(a)(1) There is hereby authorized to be appropriated for the fiscal year ending June 30, 1970, and for each succeeding fiscal year such sums as may be necessary to enable the Secretary of Agriculture, under such rules and regulations as he may deem in the public interest, to encourage consumption of fluid milk by children in the United States in (A) nonprofit schools of high school grade and under, except as provided in paragraph (2), which do not participate in a meal service program authorized under this Act or the National School Lunch Act, and (B) nonprofit nursery schools, child care centers, settlement houses, summer camps, and similar nonprofit institutions devoted to the care and training of children, which do not participate in a meal service program authorized under this Act or the National School Lunch Act.

(2) The limitation imposed under paragraph (1)(A) for participation of nonprofit schools in the special milk program shall not apply to split-session kindergarten programs conducted in schools in which children do not have access to the meal service program operating in schools the children attend as authorized under this Act or the National School Lunch Act (42 U.S.C. 1751 *et seq.).*

(3) For the purposes of this section “United States” means the fifty States, Guam, the Commonwealth of Puerto Rico, the Virgin Islands, American Samoa, the Trust Territory of the Pacific Islands, and the District of Columbia.

(4) The Secretary shall administer the special milk program provided for by this section to the maximum extent practicable in the same manner as he administered the special milk program provided for by Pub. L. 89-642, as amended, during the fiscal year ending June 30, 1969.

(5) Any school or nonprofit child care institution which does not participate in a meal service program authorized under this Act or the National School Lunch Act shall receive the special milk program upon their request.

(6) Children who qualify for free lunches under guidelines established by the Secretary shall, at the option of the school involved (or of the local educational agency involved in the case of a public school) be eligible for free milk upon their request.

(7) For the fiscal year ending June 30, 1975, and for subsequent school years, the minimum rate of reimbursement for a half-pint of milk served in schools and other eligible institutions shall not be less than 5 cents per half-pint served to eligible children, and such minimum rate of reimbursement shall be adjusted on an annual basis each school year to reflect changes in the Producer Price Index for Fresh Processed Milk published by the Bureau of Labor Statistics of the Department of Labor.

(8) Such adjustment shall be computed to the nearest one-fourth cent.

(9) Notwithstanding any other provision of this section, in no event shall the minimum rate of reimbursement exceed the cost to the school or institution of milk served to children.

*[52 FR 7562, Mar. 12, 1987]*

§ 215.2 Definitions.

For the purpose of this part, the term:

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the Child Nutrition Act of 1966.

*Adults *means those persons not included under the definition of children.

*Applicable credits *shall have the meaning established in 2 CFR part 200 and USDA implementing regulations 2 CFR part 400 and part 415.

*Child and Adult Care Food Program *means the program authorized by section 17 of the National School Lunch Act, as amended.

*Child care institution *means any nonprofit nursery school, child care center, settlement house, summer camp, service institution participating in the Summer Food Program for Children pursuant to part 225 of this chapter, institution participating in the Child and Adult Care Food Program pursuant to part 226 of this chapter, or similar nonprofit institution devoted to the care and training of children. The term “child care institution” also includes a nonprofit agency to which such institution has delegated authority for the operation of a milk program in the institution. It does not include any institution falling within the definition of “School” of this section.

*Child *means

(1) A person under 19 chronological years of age in a Child care institution as defined in this section;

(2) A person under 21 chronological years of age attending a school as defined in paragraphs (3) and (4) of the definition of *School *in this section;

(3) A student of high school grade or under attending school as defined in paragraphs (1) and (2) of the definition of *School *in this section; or

(4) A student who is mentally or physically disabled as determined by the State and who is participating in a school program established for the mentally or physically disabled, of high school grade or under as determined by the State educational agency in paragraphs (1) and (2) of the definition of *School *in this section.

*CND *means the Child Nutrition Division of the Food and Nutrition Service of the Department.

*Contractor *means a commercial enterprise, public or nonprofit private organization or individual that enters into a contract with a school food authority.

*Cost of milk *means the net purchase price paid by the school or child care institution to the milk supplier for milk delivered to the school or child care institution. This shall not include any amount paid to the milk supplier for servicing, rental of or installment purchase of milk service equipment.

*Cost reimbursable contract *means a contract that provides for payment of incurred costs to the extent prescribed in the contract, with or without a fixed fee.

*Department *means the U.S. Department of Agriculture.

*Disclosure *means reveal or use individual children's program eligibility information obtained through the free milk eligibility process for a purpose other than for the purpose for which the information was obtained. The term refers to access, release, or transfer of personal data about children by means of print, tape, microfilm, microfiche, electronic communication or any other means.

*Family *means a group of related or nonrelated individuals, who are not residents of an institution or boarding house, but who are living as one economic unit.

*Fiscal year *means the period of 12 calendar months beginning October 1, 1977, and each October 1 of any calendar year thereafter and ending September 30 of the following calendar year.

*Fixed fee *means an agreed upon amount that is fixed at the inception of the contract. In a cost reimbursable contract, the fixed fee includes the contractor's direct and indirect administrative costs and profit allocable to the contract.

*FNS *means the Food and Nutrition Service of the U.S. Department of Agriculture.

*FNSRO *means Food and Nutrition Services Regional Offices, of the Food and Nutrition Service of the U.S. Department of Agriculture.

*Free milk *means milk for which neither the child nor any member of his family pays or is required to work in the school or child-care institution or in its food service.

*Local educational agency *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs schools, and educational service agencies and consortia of those agencies, as well as the State educational agency in a State or territory in which the State educational agency is the sole educational agency for all public or private nonprofit schools.

*Medicaid *means the State medical assistance program under title XIX of the Social Security Act (42 U.S.C. 1396 *et seq.).*

*Milk *means pasteurized fluid types of unflavored or flavored whole milk, lowfat milk, skim milk, or cultured buttermilk which meet State and local standards for such milk. In Alaska, Hawaii, American Samoa, Guam, Puerto Rico, the Trust Territory of the Pacific Islands, and the Virgin Islands, if a sufficient supply of such types of fluid milk cannot be obtained, *milk *shall include reconstituted or recombined milk. All milk should contain vitamins A and D at levels specified by the Food and Drug Administration and consistent with State and local standards for such milk.

*National School Lunch Program *means the program under which general cash-for-food assistance and special cash assistance are made available to schools pursuant to part 210 of this chapter.

*Needy children *means:

(1) Children who attend schools participating in the Program and who meet the School Food Authority's eligibility standards for free milk approved by the State agency, or FNSRO where applicable, under part 245 of this chapter; and

(2) Children who attend child-care institutions participating in the Program and who meet the eligibility standards for free milk approved by the State agency, or FNSRO where applicable, under § 215.13a of this part.

*Nonpricing** **program** *means a program which does not sell milk to children. This shall include any such program in which children are normally provided milk, along with food and other services, in a school or child-care institution financed by a tuition, boarding, camping or other fee, or by private donations or endowments.

*Nonprofit *means, when applied to schools or institutions eligible for the Program, exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1986.

*Nonprofit milk service *means milk service maintained by or on behalf of the school or child-care institution for the benefit of the children, all of the income from which is used solely for the operation or improvement of such milk service.

*Nonprofit school food service account *means the restricted account in which all of the revenue from the nonprofit milk service maintained for the benefit of children is retained and used only for the operation or improvement of the nonprofit milk service.

*OA *means the Office of Audit of the United States Department of Agriculture.

*OIG *means the Office of the Inspector General of the Department.

*Pricing program *means a program which sells milk to children. This shall include any such program in which maximum use is made of Program reimbursement payments in lowering, or reducing to “zero,” wherever possible, the price per half pint which children would normally pay for milk.

*Program *means the Special Milk Program for Children.

*Reimbursement *means financial assistance paid or payable to participating schools and chil

[Note: Additional sections of Part 215 exist beyond this extract]

======================================================================
7 CFR PART 220 — SBP — School Breakfast Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 220—SCHOOL BREAKFAST PROGRAM

Authority: 42 U.S.C. 1773, 1779, unless otherwise noted.

§ 220.1 General purpose and scope.

This part announces the policies and prescribes the regulations necessary to carry out the provisions of section 4 of the Child Nutrition Act of 1966, as amended, which authorizes payments to the States to assist them to initiate, maintain, or expand nonprofit breakfast programs in schools.

*[**Amdt**. 25, 41 FR 34758, Aug. 17, 1976]*

§ 220.2 Definitions.

For the purpose of this part the term:

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the Child Nutrition Act of 1966, as amended.

*Applicable credits *shall have the meaning established in 2 CFR part 200 and USDA implementing regulations 2 CFR parts 400 and 415.

*Breakfast *means a meal which meets the meal requirements set out in § 220.8, and which is served to a child in the morning hours. The meal must be served at or close to the beginning of the child's day at school.

*Child *means:

(1) A student of high school grade or under as determined by the State educational agency, who is enrolled in an educational unit of high school grade or under as described in paragraphs (1) and (2) of the definition of “School” in this section, including students with a disability who participate in a school program established for persons with disabilities; or

(2) A person under 21 chronological years of age who is enrolled in an institution or center as described in paragraph (3) of the definition of “School” in this section.

*Contractor *means a commercial enterprise, public or nonprofit private organization or individual that enters into a contract with a school food authority.

*Cost reimbursable contract *means a contract that provides for payment of incurred costs to the extent prescribed in the contract, with or without a fixed fee.

*Department *means the United States Department of Agriculture.

*Distributing Agency *means a State agency which enters into an agreement with the Department for the distribution to schools of donated foods pursuant to part 250 of this chapter.

*Fiscal year *means a period of 12 calendar months beginning on October 1 of any year and ending September 30 of the following year.

*Fixed fee *means an agreed upon amount that is fixed at the inception of the contract. In a cost reimbursable contract, the fixed fee includes the contractor's direct and indirect administrative costs and profit allocable to the contract.

*Fixed-price contract *means a contract that charges a fixed cost per meal, or a fixed cost for a certain time period. Fixed-price contracts may include an economic price adjustment tied to a standard index.

*FNS *means the Food and Nutrition Service, United States Department of Agriculture.

*FNSRO *means the appropriate Regional Office of the Food and Nutrition Service of the Department.

*Food item *means a specific food offered within a meal component.

*Free breakfast *means a breakfast served under the Program to a child from a household eligible for such benefits under part 245 of this chapter and for which neither the child nor any member of the household pays or is required to work.

*Infant cereal *means any iron fortified dry cereal especially formulated and generally recognized as cereal for infants that is routinely mixed with breast milk or iron-fortified infant formula prior to consumption.

*Infant formula *means any iron-fortified infant formula intended for dietary use solely as a food for normal healthy infants excluding those formulas specifically formulated for infants with inborn errors of metabolism or digestive or absorptive problems. Infant formula, as served, must be in liquid state at recommended dilution.

*Local educational agency *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs schools, and educational service agencies and consortia of those agencies, as well as the State educational agency in a State or territory in which the State educational agency is the sole educational agency for all public or private nonprofit schools.

*Meal **component** *means one of the food groups which comprise reimbursable meals. The meal components are: fruits, vegetables, grains, meats/meat alternates, and fluid milk.

*National School Lunch Program *means the Program authorized by the National School Lunch Act.

*Net cash resources *means all monies as determined in accordance with the State agency's established accounting system, that are available to or have accrued to a School Food Authority's nonprofit school food service at any given time, less cash payable. Such monies may include but are not limited to, cash on hand, cash receivable, earnings or investments, cash on deposit and the value of stocks, bonds or other negotiable securities.

*Nonprofit *means, when applied to schools or institutions eligible for the Program, exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1986.

*Nonprofit school food service *means all food service operations conducted by the school food authority principally for the benefit of school children, all of the revenue from which is used solely for the operation or improvement of such food service.

*Nonprofit school food service account *means the restricted account in which all of the revenue from all food service operations conducted by the school food authority principally for the benefit of school children is retained and used only for the operation or improvement of the nonprofit school food service.

*OIG *means the Office of the Inspector General of the Department.

*Program *means the School Breakfast Program.

*Reduced price breakfast *means a breakfast served under the Program:

(1) To a child from a household eligible for such benefits under part 245 of this chapter;

(2) For which the price is less than the school food authority designated full price of the breakfast and which does not exceed the maximum allowable reduced price specified under part 245 of this chapter; and

(3) For which neither the child nor any member of the household is required to work.

*Reimbursement *means Federal cash assistance including advances paid or payable to participating schools for breakfasts meeting the requirements of § 220.8 served to eligible children.

*Revenue *when applied to nonprofit school food service means all monies received by or accruing to the nonprofit school food service in accordance with the State agency's established accounting system including, but not limited to, children's payments, earnings on investments, other local revenues, State revenues, and Federal cash reimbursements.

*School *means:

(1) An educational unit of high school grade or under, recognized as part of the educational system in the State and operating under public or nonprofit private ownership in a single building or complex of buildings;

(2) Any public or nonprofit private classes of preprimary grade when they are conducted in the aforementioned schools; or

(3) Any public or nonprofit private residential child care institution, or distinct part of such institution, which operates principally for the care of children, and, if private, is licensed to provide residential child care services under the appropriate licensing code by the State or a subordinate level of government, except for residential summer camps which participate in the Summer Food Service Program for Children, Job Corps centers funded by the Department of Labor, and private foster homes.

*School Breakfast Program *means the program authorized by section 4 of the Child Nutrition Act of 1966.

*School in severe need *means a school determined to be eligible for rates of reimbursement in excess of the prescribed National Average Payment Factors, based upon the criteria set forth in § 220.9(d).

*School food authority *means the governing body which is responsible for the administration of one or more schools; and has legal authority to operate the Program therein *or *be otherwise approved by FNS to operate the Program.

*School week *means the period of time used to determine compliance with the meal requirements in § 220.8. The period must be a normal school week of five consecutive days; however, to accommodate shortened weeks resulting from holidays and other scheduling needs, the period must be a minimum of three consecutive days and a maximum of seven consecutive days. Weeks in which school breakfasts are offered less than three times must be combined with either the previous or the coming week.

*Seamless Summer Option *means the meal service alternative authorized by Section 13(a)(8) of the Richard B. Russell National School Lunch Act, 42 U.S.C. 1761(a)(8), under which public or nonprofit school food authorities participating in the National School Lunch Program or School Breakfast Program offer meals at no cost to children during the traditional summer vacation periods and, for year-round schools, vacation periods longer than 10 school days.

*Secretary *means the Secretary of Agriculture.

*State *means any of the 50 States, District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, and, as applicable, American Samoa and the Commonwealth of the Northern Marianas.

*State agency *means:

(1) The State educational agency;

(2) Such other agency of the State as has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer the Program in schools as specified in § 210.3(b) of this chapter; or

(3) The FNSRO, where the FNSRO administers the Program as specified in § 210.3(c) of this chapter.

*State educational agency *means, as the State legislature may determine:

(1) The chief State school officer (such as the State Superintendent of Public Instruction, Commissioner of Education, or similar officer), or

(2) A board of education controlling the State department of education.

*Tofu *means a soybean-derived food, made by a process in which soybeans are soaked, ground, mixed with water, heated, filtered, coagulated, and formed into cakes. Basic ingredients are whole soybeans, one or more food-grade coagulants (typically a salt or an acid), and water. Tofu products must conform to FNS guidance to count toward the meats/meat alternates component.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

*Whole grain-rich *is the term designated by FNS to indicate that the grain content of a product is between 50 and 100 percent whole grain with any remaining grains being enriched.

*Whole grains *means grains that consist of the intact, ground, cracked, or flaked grain seed whose principal anatomical components—the starchy endosperm, germ and bran—are present in the same relative proportions as they exist in the intact grain seed.

*[**Amdt**. 25, 41 FR 34758, Aug. 17, 1976]*

§ 220.3 Administration.

*Yogurt *means commercially prepared coagulated milk products obtained by the fermentation of specific bacteria, that meet milk fat or milk solid requirements and to which flavoring foods or ingredients may be added. These products are covered by the Food and Drug Administration's Definition and Standard of Identity for yogurt, 21 CFR 131.200, and low-fat yogurt and non-fat yogurt covered as a standardized food under 21 CFR 130.10.

(a) Within the Department, FNS shall act on behalf of the Department in the administration of the Program covered by this part.

(b) Within the States, responsibility for the administration of the Program in schools as described in paragraphs (1) and (2) of the definition of *School *in § 220.2 shall be in the State educational agency, except that FNSRO shall administer the Program with respect to nonprofit private schools and adding in their place the words “as described in paragraph (1) of the definition of *School *in § 220.2 in any State wherein the State educational agency is not permitted by law to disburse Federal funds paid to it under the Program; *Provided, however, *That FNSRO shall also administer the Program in all other nonprofit private schools which have been under continuous FNS administration since October 1, 1980, unless the administration of such private schools is assumed by a State agency.

(c) Within the States, responsibility for the administration of the Program in schools, as described in paragraph (3) of the definition of *School *in § 220.2, shall be in the State educational agency, or if the State educational agency cannot administer the Program in such schools, such other agency of the State as has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer the Program in such schools: *Provided, however, *That FNSRO shall administer the Program in such schools if the State agency is not permitted by law to disburse Federal funds paid to it under the Program to such schools; and *Provided, further, *That FNSRO shall also administer the Program in all other such schools which have been under continuous FNS administration since October 1, 1980, unless the administration of such schools is assumed by a State agency.

(d) References in this part to “FNSRO where applicable” are to FNSRO as the agency administering the Program.

(e) Each State agency desiring to take part in any of the programs shall enter into a written agreement with the Department for the administration of the Program in the State in accordance with the provisions of this part, 7 CFR parts 235, 245, 15, 15a, 15b and, as applicable, 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 subparts B and D and USDA implementing regulations 2 CFR part 400 and part 415 and FNS Instructions. Such agreement shall cover the operation of the Program during the period specified therein and may be extended at the option of the Department.

(f) *Authority to waive **statute** and regulations.*

Editorial Note: For FEDERAL REGISTER citations affecting § 220.2, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(Sec. 804, 816 and 817, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1756, 1759, 1771 and 1785); 44 U.S.C. 3506)

*[**Amdt**. 25, 41 FR 34759, Aug. 17, 1976, as amended at 47 FR 745, Jan. 7, 1982; **Amdt**. 42, 47 FR 14133, Apr. 2, 1982; **Amdt**. 56, 54 FR 2990, Jan. 23, 1989; 71 FR 39517, July 13, 2006; 72 FR 63792, Nov. 13, 2007; 81 FR 66491, Sept. 28, 2016; 87 FR 57354, Sept. 19, 2022; 89 FR 32080, Apr. 25, 2024]*

§ 220.4 Payment of funds to States and FNSROs.

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State agency or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2)

(i) A State agency may submit a request for a waiver under paragraph (f)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(ii) A State agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(3)

(i) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part. Any waiver request submitted by an eligible service provider must be submitted to the State agency for review. A State agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

(ii) If a State agency concurs with a request from an eligible service provider, the State agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request. By forwarding the request to the FNSRO, the State agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(iii) If the State agency denies the request, the State agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State agency's receipt of the request. The State agency response is final and may not be appealed to FNS.

(a) To the extent funds are available, the Secretary shall make breakfast assistance payments to each State agency for breakfasts served to children under the Program. Subject to § 220.13(b)(2), the total of these payments for each State for any fiscal year shall be limited to the total amount of reimbursement payable to eligible schools within the State under this part for the fiscal year.

(Secs. 801, 803, 812; Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1759(a), 1773, 1758); Pub. L. 97-370, 96 Stat. 1806)

*[38 FR 35554, Dec. 28, 1973, as amended at 40 FR 30923, July 24, 1975; 46 FR 51367, Oct. 20, 1981; 48 FR 20896, May 10, 1983; **Amdt**. 49, 49 FR 18987, May 4, 1984]*

§ 220.5 Method of payment to States.

Funds to be paid to any State for the School Breakfast Program shall be made available by means of Letters of Credit issued by FNS in favor of the State agency. The State agency shall:

*[**Amdt**. 25, 41 FR 34759, Aug. 17, 1976]*


[Note: Additional sections of Part 220 exist beyond this extract]

======================================================================
7 CFR PART 225 — SFSP — Summer Food Service Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 225—SUMMER FOOD SERVICE PROGRAM

Authority: Secs. 9, 13 and 14, Richard B. Russell National School Lunch Act, as amended (42 U.S.C. 1758, 1761

and 1762a).

Source: 54 FR 18208, Apr. 27, 1989, unless otherwise noted.

Subpart A—General

§ 225.1 General purpose and scope.

This part establishes the regulations under which the Secretary will administer a Summer Food Service Program. Section 13 of the Act authorizes the Secretary to assist States through grants-in-aid to conduct nonprofit food service programs for children during the summer months and at other approved times. The primary purpose of the Program is to provide food service to children from needy areas during periods when area schools are closed for vacation.

§ 225.2 Definitions.

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the National School Lunch Act, as amended.

*Administrative costs *means costs incurred by a sponsor related to planning, organizing, and managing a food service under the Program, and excluding interest costs and operating costs.

*Adult *means, for the purposes of the collection of the last four digits of social security numbers as a condition of eligibility for Program meals, any individual 21 years of age or older.

*Advance payments *means financial assistance made available to a sponsor for its operating costs and/or administrative costs prior to the end of the month in which such costs will be incurred.

*Areas in which poor economic conditions exist *means:

(1) The attendance area of a school in which at least 50 percent of the enrolled children have been determined eligible for free or reduced-price school meals under the National School Lunch Program and the School Breakfast Program;

(2) A geographic area where, based on the most recent census data available or information provided from a department of welfare or zoning commission, at least 50 percent of the children residing in that area are eligible for free or reduced-price school meals under the National School Lunch Program and the School Breakfast Program;

(3) A geographic area where a site demonstrates, based on other approved sources, that at least 50 percent of the children enrolled at the site are eligible for free or reduced-price school meals under the National School Lunch Program and the School Breakfast Program; or

(4) A closed enrolled site in which at least 50 percent of the enrolled children at the site are eligible for free or reduced-price school meals under the National School Lunch Program and the School Breakfast Program, as determined by approval of applications in accordance with § 225.15(f).

*Camps *means residential summer camps and nonresidential day camps which offer a regularly scheduled food service as part of an organized program for enrolled children. Nonresidential camp sites shall offer a continuous schedule of organized cultural or recreational programs for enrolled children between meal services.

*Children *means:

(1) Persons 18 years of age and under; and

(2) Persons over 18 years of age who are determined by a State educational agency or a local public educational agency of a State to be mentally or physically disabled and who participate in a public or nonprofit private school program established for the mentally or physically disabled.

*Children's Health Insurance Program (CHIP) *means the State medical assistance program under title XXI of the Social Security Act (42 U.S.C. 1397aa *et seq.).*

*Closed enrolled site *means a site which is open only to enrolled children, as opposed to the community at large, and in which at least 50 percent of the enrolled children at the site are eligible for free or reduced-price school meals under the National School Lunch Program and the School Breakfast Program, as determined by approval of applications in accordance with § 225.15(f), or on the basis of documentation that the site meets paragraph (1), (2), or (3) of the definition of “Areas in which poor economic conditions exist” as provided in this section.

*Conditional non-congregate site *means a site which qualifies for Program participation because it conducts a non-congregate meal service for eligible children in an area that does not meet the definition of “areas in which poor economic conditions exist” and is not a “Camp,” as defined in this section.

*Congregate meal service *means a food service at which meals that are provided to children are consumed on site in a supervised setting.

*Continuous school calendar *means a situation in which all or part of the student body of a school is

(a) on a vacation for periods of 15 continuous school days or more during the period October through April and

(b) in attendance at regularly scheduled classes during most of the period May through September.

*Costs of obtaining food *means costs related to obtaining food for consumption by children. Such costs may include, in addition to the purchase price of agricultural commodities and other food, the cost of processing, distributing, transporting, storing, or handling any food purchased for, or donated to, the Program.

*Current income *means income, as defined in § 225.15(f)(4)(vi), received during the month prior to application for free meals. If such income does not accurately reflect the household's annual income, income must be based on the projected annual household income. If the prior year's income provides an accurate reflection of the household's current annual income, the prior year may be used as a base for the projected annual income.

*Department *means the U.S. Department of Agriculture.

*Disclosure *means reveal or use individual children's program eligibility information obtained through the free and reduced price meal eligibility process for a purpose other than for the purpose for which the information was obtained. The term refers to access, release, or transfer of personal data about children by means of print, tape, microfilm, microfiche, electronic communication or any other means.

*Documentation *means:

(1) The completion of the following information on a free meal application:

(i) Names of all household members;

(ii) Income received by each household member, identified by source of income (such as earnings, wages, welfare, pensions, support payments, unemployment compensation, social security and other cash income);

(iii) The signature of an adult household member; and

(iv) The last four digits of the Social Security number of the adult household member who signs the application, or an indication that the adult does not possess a Social Security number; or

(2) For a child who is a member of a household receiving SNAP, FDPIR, or TANF benefits, “documentation” means completion of only the following information on a free meal application:

(i) The name(s) and appropriate SNAP, FDPIR, or TANF case number(s) for the child(ren); and

(ii) The signature of an adult member of the household.

*Excess funds *means the difference between any advance funding and reimbursement funding, when advance funds received by a sponsor are greater than the reimbursement amount earned by a sponsor.

*Experienced site *means a site which, as determined by the State agency, has successfully participated in the Program in the prior year.

*Experienced sponsor *means a sponsor which, as determined by the State agency, has successfully participated in the Program in the prior year.

*Family *means a group of related or nonrelated individuals who are not residents of an institution or boarding house but who are living as one economic unit.

*FDPIR household *means any individual or group of individuals which is currently certified to receive assistance as a household under the Food Distribution Program on Indian Reservations.

*Fiscal year *means the period beginning October 1 of any calendar year and ending September 30 of the following calendar year.

*FNS *means the Food and Nutrition Service of the Department.

*FNSRO *means the appropriate FNS Regional Office.

*Food service management company *means any commercial enterprise or nonprofit organization with which a sponsor may contract for preparing unitized meals, with or without milk, for use in the Program, or for managing a sponsor's food service operations in accordance with the limitations set forth in § 225.15. Food service management companies may be:

(a) Public agencies or entities;

(b) private, nonprofit organizations; or

(c) private, for-profit companies.

*Foster child *means a child who is formally placed by a court or a State child welfare agency, as defined in § 245.2 of this chapter.

*Good standing *means the status of a program operator that meets its Program responsibilities, is current with its financial obligations, and, if applicable, has fully implemented all corrective actions within the required period of time.

*Household *means “family,” as defined in this section.

*Income accruing to the program *means all funds used by a sponsor in its food service program, including but not limited to all monies, other than program payments, received from Federal, State and local governments, from food sales to adults, and from any other source including cash donations or grants. Income accruing to the Program will be deducted from combined operating and administrative costs.

*Income standards *means the family-size and income standards prescribed annually by the Secretary for determining eligibility for reduced price meals under the National School Lunch Program and the School Breakfast Program.

*Meals *means food which is served to children at a food service site and which meets the nutritional requirements set out in this part.

*Medicaid *means the State medical assistance program under title XIX of the Social Security Act (42 U.S.C. 1396 *et seq.).*

*Milk *means whole milk, lowfat milk, skim milk, and buttermilk. All milk must be fluid and pasteurized and must meet State and local standards for the appropriate type of milk. Milk served may be flavored or unflavored. In Alaska, Hawaii, American Samoa, Guam, Puerto Rico, the Trust Territory of the Pacific Islands, the Northern Mariana Islands, and the Virgin Islands of the United States, if a sufficient supply of such types of fluid milk cannot be obtained, reconstituted or recombined milk may be used. All milk should contain Vitamins A and D at the levels specified by the Food and Drug Administration and at levels consistent with State and local standards for such milk.

*Needy children *means children from families whose incomes are equal to or below the Secretary's published Child Nutrition Programs: Income Eligibility Guidelines.

*Net cash resources *means all monies, as determined in accordance with the State agency's established accounting system that are available to or have accrued to a sponsor's nonprofit food service at any given time, less cash payable. Such monies may include, but are not limited to, cash on hand, cash receivable, earnings on investments, cash on deposit and the value of stocks, bonds, or other negotiable securities.

*New site *means a site which did not participate in the Program in the prior year, an experienced site that is proposing to operate a non-congregate meal service for the first time, or, as determined by the State agency, a site which has experienced significant staff turnover from the prior year.

*New sponsor *means a sponsor which did not participate in the Program in the prior year, or, as determined by the State agency, a sponsor which has experienced significant staff turnover from the prior year.

*Non-congregate meal service *means a food service at which meals are provided for children to consume all of the components off site. Non-congregate meal service must only be operated at sites designated as “Rural” with no “Congregate meal service,” as determined in § 225.6(h)(3) and (4).

*Nonprofit food service *means all food service operations conducted by the sponsor principally for the benefit of children, all of the revenue from which is used solely for the operation or improvement of such food services.

*Nonprofit food service account *means the restricted account in which all of the revenue from all food service operations conducted by the sponsor principally for the benefit of children is retained and used only for the operation or improvement of the nonprofit food service. This account must include, as appropriate, non-Federal funds used to support program operations, and proceeds from non-program foods.

*NYSP *means the National Youth Sports Program administered by the National Collegiate Athletic Association.

*NYSP feeding site *means a site at which all of the children receiving Program meals are enrolled in the NYSP and which qualifies for Program participation on the basis of documentation that the site meets the definition of “areas in which poor economic conditions exist” as provided in this section.

*OIG *means the Office of the Inspector General of the Department.

*Open site *means a site at which meals are made available to all children in the area and which is located in an area in which at least 50 percent of the children are from households that would be eligible for free or reduced price school meals under the National School Lunch Program and the School Breakfast Program, as determined in accordance with paragraph (1), (2), or (3) of the definition of “Areas in which poor economic conditions exist.”

*Operating costs *means the cost of operating a food service under the Program:

(1) Including the:

(i) Cost of obtaining food;

(ii) Labor directly involved in the preparation and service of food;

(iii) Cost of nonfood supplies;

(iv) Rental and use allowances for equipment and space; and

(v) Cost of transporting children in rural areas to feeding sites in rural areas;

(vi) Cost of delivering non-congregate meals in rural areas; but

(2) Excluding:

(i) The cost of the purchase of land, acquisition or construction of buildings;

(ii) Alteration of existing buildings;

(iii) Interest costs;

(iv) The value of in-kind donations; and

(v) Administrative costs.

*Private nonprofit *means tax exempt under section 501(a) of the Internal Revenue Code of 1986, as amended.

*Private nonprofit organization *means an organization (other than private nonprofit residential camps, school food authorities, or colleges or universities participating in the NYSP) that:

(a) Exercises full control and authority over the operation of the Program at all sites under the sponsorship of the organization;

(b) Provides ongoing year-round activities for children or families;

(c) Demonstrates that the organization has adequate management and the fiscal capacity to operate the Program;

(d) Is an organization described in section 501(c) of the Internal Revenue Code of 1986 and exempt from taxation under 501(a) of that Code; and

(e) Meets applicable State and local health, safety, and sanitation standards.

*Program *means the Summer Food Service Program for Children authorized by Section 13 of the Act.

*Program funds *means Federal financial assistance made available to State agencies for the purpose of making Program payments.

*Program payments *means financial assistance in the form of start-up payments, advance payments, or reimbursement paid to sponsors for operating and administrative costs.

*Restricted open site *means a site which is initially open to broad community participation, but at which the sponsor restricts or limits attendance for reasons of security, safety or control. Site eligibility for a restricted open site shall be documented in accordance with paragraph (1), (2), or (3) of the definition of “Areas in which poor economic conditions exist.”

*Rural *means:

(1) Any area in a county which is not a part of a Metropolitan Statistical Area based on the Office of Management and Budget's Delineations of Metropolitan Statistical Areas;

(2) Any area in a county classified as a non-metropolitan area based on USDA Economic Research Service's Rural-Urban Continuum Codes and Urban Influence Codes;

(3) Any census tract classified as a non-metropolitan area based on USDA Economic Research Service's Rural-Urban Commuting Area codes;

(4) Any area of a Metropolitan Statistical Area which is not part of a Census Bureau-defined urban area;

(5) Any area of a State which is not part of an urban area as determined by the Secretary;

(6) Any subsequent substitution or update of the aforementioned classification schemes that Federal governing bodies create; or

(7) Any “pocket” within a Metropolitan Statistical Area which, at the option of the State agency and with FNSRO approval, is determined to be rural in character based on other data sources.

*School food authority *means the governing body which is responsible for the administration of one or more schools and which has the legal authority to operate a lunch program in those schools. In addition, for the purpose of determining the applicability of food service management company registration and bid procedure requirements, “school food authority” also means any college or university which participates in the Program.

*Secretary *means the Secretary of Agriculture.

*Self-preparation site *means a site that prepares the majority of meals that will be served at its site or receives meals that are prepared at its sponsor's central kitchen. The site does not contract with a food service management company for unitized meals, with or without milk, or for management services.

*Self-preparation sponsor *means a sponsor which prepares the meals that will be served at its site(s) and does not contract with a food service management company for unitized meals, with or without milk, or for management services.

*Session *means a specified period of time during which an enrolled group of children attend camp.

*Site *means the place where a child receives a program meal. A site may be the indoor or outdoor location where congregate meals are served, a stop on a delivery route of a mobile congregate meal service, or the distribution location or route for a non-congregate meal service. However, a child's residence is not considered a non-congregate meal site for Program monitoring purposes.

*Site supervisor *means the individual who has been trained by the sponsor and is responsible for all administrative and management activities at the site, including, but not limited to: maintaining documentation of meal deliveries, ensuring that all meals served are safe, and maintaining accurate point of service meal counts. Except for non-congregate meal service sites using delivery services, the individual is on site for the duration of the food service.

*SNAP household *means any individual or group of individuals which is currently certified to receive assistance as a household from SNAP, the Supplemental Nutrition Assistance Program, as defined in § 245.2 of this chapter.

*Special account *means an account which a State agency may require a vended sponsor to establish with the State agency or with a Federally insured bank. Operating costs payable to the sponsor by the State agency are deposited in the account and disbursement of monies from the account must be authorized by both the sponsor and the food service management company.

*Sponsor *means a public or private nonprofit school food authority, a public or private nonprofit residential summer camp, a unit of local, municipal, county or State government, a public or private nonprofit college or university currently participating in the NYSP, or a private nonprofit organization which develops a special summer or other school vacation program providing food service similar to that made available to children during the school year under the National School Lunch and School Breakfast Programs and which is approved to participate in the Program. Sponsors are referred to in the Act as “service institutions”.

*Start-up payments *means financial assistance made available to a sponsor for administrative costs to enable it to effectively plan a summer food service, and to establish effective management procedures for such a service. These payments shall be deducted from subsequent administrative cost payments.

*State *means any of the 50 States, the District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands of the United States, Guam, American Samoa, the Trust Territory of the Pacific Islands, and the Northern Mariana Islands.

*State agency *means the State educational agency or an alternate agency that has been designated by the Governor or other appropriate executive or legislative authority of the State and which has been approved by the Department to administer the Program within the State, or, in States where FNS administers the Program, FNSRO.

*TANF *means the State funded program under part A of title IV of the Social Security Act that the Secretary determines complies with standards established by the Secretary that ensure that the standards under the State program are comparable to or more restrictive than those in effect on June 1, 1995. This program is commonly referred to as Temporary Assistance for Needy Families, although States may refer to the program by another name.

*[54 FR 18208, Apr. 27, 1989, as amended at 54 FR 27153, June 28, 1989; 55 FR 13466, Apr. 10, 1990; 61 FR 25553, May 22, 1996; 64 FR 72483, Dec. 28, 1999; 64 FR 72895, Dec. 29, 1999; 66 FR 2202, Jan. 11, 2001; 71 FR 39518, July 13, 2006; 72 FR 10895, Mar. 12, 2007; 76 FR 22798, Apr. 25, 2011; 78 FR 13449, Feb. 28, 2013; 81 FR 66492, Sept. 28, 2016; 83 FR 25357, June 1, 2018; 87 FR 57355, Sept. 19, 2022; 87 FR 79213, Dec. 27, 2022; 88 FR 57849, Aug. 23, 2023; 88 FR 90347, Dec. 29, 2023]*

*Termination for convenience *means:

(1) Termination of a State agency's participation in the Program in whole, or in part, when FNS and the State agency agree that the continuation of the Program would not produce beneficial results commensurate with the further expenditure of funds; or

(2) Termination of a permanent operating agreement by a State agency or sponsor due to considerations unrelated to either party's performance of Program responsibilities under the agreement.

*Unaffiliated site *means a site that is legally distinct from the sponsor.

*Unanticipated school closure *means any period from October through April (or any time of the year in an area with a continuous school calendar) during which children who are not in school due to a natural disaster, building repair, court order, labor-management disputes, or, when approved by the State agency, similar cause, may be served meals at non-school sites through the Summer Food Service Program.

*Unit of local, municipal, county or State government *means an entity which is so recognized by the State constitution or State laws, such as the State administrative procedures act, tax laws, or other applicable State laws which delineate authority for government responsibility in the State.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

*Unused reimbursement *means the difference between the amount of reimbursement earned and received a

[Note: Additional sections of Part 225 exist beyond this extract]

======================================================================
7 CFR PART 226 — CACFP — Child and Adult Care Food Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 226—CHILD AND ADULT CARE FOOD PROGRAM

Authority: Secs. 9, 11, 14, 16, and 17, Richard B. Russell National School Lunch Act, as amended (42 U.S.C. 1758,

1759a, 1762a, 1765 and 1766).

Source: 47 FR 36527, Aug. 20, 1982, unless otherwise noted.

Subpart A—General

§ 226.1 General purpose and scope.

This part announces the regulations under which the Secretary of Agriculture will carry out the Child and Adult Care Food Program. Section 17 of the Richard B. Russell National School Lunch Act, as amended, authorizes assistance to States through grants-in-aid and other means to initiate, maintain, and expand nonprofit food service programs for children and adult participants in non-residential institutions which provide care. The Program is intended to provide aid to child and adult participants and family or group day care homes for provision of nutritious foods that contribute to the wellness, healthy growth, and development of young children, and the health and wellness of older adults and chronically impaired persons.

*[81 FR 24377, Apr. 25, 2016]*

§ 226.2 Definitions.

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the National School Lunch Act, as amended.

*Administrative costs *means costs incurred by an institution related to planning, organizing, and managing a food service under the Program, and allowed by the State agency financial management instruction. These administrative costs may include administrative expenses associated with outreach and recruitment of unlicensed family or group day care homes and the allowable licensing-related expenses of such homes.

*Administrative review *means the fair hearing provided upon request to:

(a) An institution that has been given notice by the State agency of any action or proposed action that will affect their participation or reimbursement under the Program, in accordance with § 226.6(k);

Editorial Note: Nomenclature changes to part 226 appear at 70 FR 43261, July 27, 2005.

(b) A principal or individual responsible for an institution's serious deficiency after the responsible principal or responsible individual has been given a notice of intent to disqualify them from the Program; and

(c) A day care home that has been given a notice of proposed termination for cause.

*Administrative review official *means the independent and impartial official who conducts the administrative review held in accordance with § 226.6(k).

*Adult *means, for the purposes of the collection of the last four digits of social security numbers as a condition of eligibility for free or reduced-price meals, any individual 21 years of age or older.

*Adult day care center *means any public or private nonprofit organization or any for-profit center (as defined in this section) which

(a) is licensed or approved by Federal, State or local authorities to provide nonresidential adult day care services to functionally impaired adults (as defined in this section) or persons 60 years of age or older in a group setting outside their homes or a group living arrangement on a less than 24-hour basis and

(b) provides for such care and services directly or under arrangements made by the agency or organization whereby the agency or organization maintains professional management responsibility for all such services. Such centers shall provide a structured, comprehensive program that provides a variety of health, social and related support services to enrolled adult participants through an individual plan of care.

*Adult day care facility *means a licensed or approved adult day care center under the auspices of a sponsoring organization.

*Adult participant *means a person enrolled in an adult day care center who is functionally impaired (as defined in this section) or 60 years of age or older.

*Advanced payments *means financial assistance made available to an institution for its Program costs prior to the month in which such costs will be incurred.

*At-risk afterschool care center *means a public or private nonprofit organization that is participating or is eligible to participate in the CACFP as an institution or as a sponsored facility and that provides nonresidential child care to children after school through an approved afterschool care program located in an eligible area. However, an *Emergency shelter, *as defined in this section, may participate as an at-risk afterschool care center without regard to location.

*At-risk afterschool meal *means a meal that meets the requirements described in § 226.20(b)(6) and/or (c)(1), (c)(2), or (c)(3), that is reimbursed at the appropriate free rate and is served by an *At-risk afterschool care center *as defined in this section, which is located in a State designated by law or selected by the Secretary as directed by law.

*At-risk afterschool snack *means a snack that meets the requirements described in § 226.20(b)(6) and/or (c)(4) that is reimbursed at the free rate for snacks and is served by an *At-risk afterschool care center *as defined in this section.

*CACFP **child care** standards *means the Child and Adult Care Food Program child care standards developed by the Department for alternate approval of child care centers, and day care homes by the State agency under the provisions of § 226.6(d)(3) and (4).

*Center *means a child care center, at-risk afterschool care center, an adult day care center, an emergency shelter, or an outside-school-hours care center.

*Child care center *means any public or private nonprofit institution or facility (except day care homes), or any for-profit center, as defined in this section, that is licensed or approved to provide nonresidential child care services to enrolled children, primarily of preschool age, including but not limited to day care centers, settlement houses, neighborhood centers, Head Start centers and organizations providing day care services for children with disabilities. Child care centers may participate in the Program as independent centers or under the auspices of a sponsoring organization.

*Child care** facility *means a licensed or approved child care center, at-risk afterschool care center, day care home, emergency shelter, or outside-school-hours care center under the auspices of a sponsoring organization.

*Children *means:

(a) Persons age 12 and under;

(b) Persons age 15 and under who are children of migrant workers;

(c) *Persons with disabilities *as defined in this section;

(d) For emergency shelters, persons age 18 and under; and

(e) For at-risk afterschool care centers, persons age 18 and under at the start of the school year.

*Claiming percentage *means the ratio of the number of enrolled participants in an institution in each reimbursement category (free, reduced-price or paid) to the total of enrolled participants in the institution. In the case of an outside-school-hours care center that is not required to collect enrollment forms from each participating child, a claiming percentage is the ratio of the number of children in each reimbursement category (free, reduced-price or paid) to the total number of children participating in the program in that center.

*Current income *means income received during the month prior to application for free or reduced-price meals. If such income does not accurately reflect the household's annual income, income shall be based on the projected annual household income. If the prior year's income provides an accurate reflection of the household's current annual income, the prior year may be used as a base for the projected annual income.

*Day care home *means an organized nonresidential child care program for children enrolled in a private home, licensed or approved as a family or group day care home and under the auspices of a sponsoring organization.

*Days *means calendar days unless otherwise specified.

*Department *means the U.S. Department of Agriculture.

*Disclosure *means reveal or use individual children's program eligibility information obtained through the free and reduced price meal eligibility process for a purpose other than for the purpose for which the information was obtained. The term refers to access, release, or transfer of personal data about children by means of print, tape, microfilm, microfiche, electronic communication or any other means.

*Disqualified *means the status of an institution, a responsible principal or responsible individual, or a day care home that is ineligible for participation.

*Documentation *means:

(a) The completion of the following information on a free and reduced-price application:

(1) Names of all household members;

(2) Income received by each household member, identified by source of income (such as earnings, wages, welfare, pensions, support payments, unemployment compensation, social security and other cash income);

(3) The signature of an adult household member; and

(4) The last four digits of the social security number of the adult household member who signs the application, or an indication that the adult does not possess a social security number; or

(b) For a child who is a member of a SNAP or FDPIR household or who is a TANF recipient, “documentation” means the completion of only the following information on a free and reduced price application:

(1) The name(s) and appropriate SNAP, FDPIR or TANF case number(s) for the child(ren); and

(2) The signature of an adult member of the household; or

(c) For a child in a tier II day care home who is a member of a household participating in a Federally or State supported child care or other benefit program with an income eligibility limit that does not exceed the eligibility standard for free or reduced price meals:

(1) The name(s), appropriate case number(s) (if the program utilizes case numbers), and name(s) of the qualifying program(s) for the child(ren), and the signature of an adult member of the household; or

(2) If the sponsoring organization or day care home possesses it, official evidence of the household's participation in a qualifying program (submission of a free and reduced price application by the household is not required in this case); or

(d) For an adult participant who is a member of a SNAP or FDPIR household or is an SSI or Medicaid participant, as defined in this section, “documentation” means the completion of only the following information on a free and reduced price application:

(1) The name(s) and appropriate SNAP or FDPIR case number(s) for the participant(s) or the adult participant's SSI or Medicaid identification number, as defined in this section; and

(2) The signature of an adult member of the household; or

(e) For a child who is a Head Start participant, the Head Start statement of income eligibility issued upon initial enrollment in the Head Start Program or, if such statement is unavailable, other documentation from Head Start officials that the child's family meets the Head Start Program's low-income criteria.

*Eligible area *means:

(a) For the purpose of determining the eligibility of at-risk afterschool care centers, the attendance area of a school in which at least 50 percent of the enrolled children are certified eligible for free or reduced-price school meals; or

(b) For the purpose of determining the tiering status of day care homes, the attendance area of a school in which at least 50 percent of the enrolled children are certified eligible for free or reduced-price meals, or the area based on the most recent census data in which at least 50 percent of the children residing in the area are members of households that meet the income standards for free or reduced-price meals.

*Emergency shelter *means a public or private nonprofit organization or its site that provides temporary shelter and food services to homeless children, including a residential child care institution (RCCI) that serves a distinct group of homeless children who are not enrolled in the RCCI's regular program.

*Enrolled child *means a child whose parent or guardian has submitted to an institution a signed document which indicates that the child is enrolled for child care. In addition, for the purposes of calculations made by sponsoring organizations of family day care homes in accordance with §§ 226.13(d)(3)(ii) and 226.13(d)(3)(iii), “enrolled child” (or “child in attendance”) means a child whose parent or guardian has submitted a signed document which indicates that the child is enrolled for child care; who is present in the day care home for the purpose of child care; and who has eaten at least one meal during the claiming period. For at-risk afterschool care centers, outside-school-hours care centers, or emergency shelters, the term “enrolled child” or “enrolled participant” does not apply.

*Enrolled participant *means an “Enrolled child” (as defined in this section) or “Adult participant” (as defined in this section).

*Expansion payments *means financial assistance made available to a sponsoring organization for its administrative expenses associated with expanding a food service program to day care homes located in low-income or rural areas. These expansion payments may include administrative expenses associated with outreach and recruitment of unlicensed family or group day care homes and the allowable licensing-related expenses of such homes.

*Facility *means a sponsored center or a day care home.

*Family *means, in the case of children, a group of related or nonrelated individuals, who are not residents of an institution or boarding house, but who are living as one economic unit or, in the case of adult participants, the adult participant, and if residing with the adult participant, the spouse and dependent(s) of the adult participant.

*FDPIR household *means any individual or group of individuals which is currently certified to receive assistance as a household under the Food Distribution Program on Indian Reservations.

*Fiscal Year *means a period of 12 calendar months beginning October 1 of any year and ending with September 30 of the following year.

*FNS *means the Food and Nutrition Service of the Department.

*FNSRO *means the appropriate Regional Office of the Food and Nutrition Service.

*Food service equipment assistance *means Federal financial assistance formerly made available to State agencies to assist institutions in the purchase or rental of equipment to enable institutions to establish, maintain or expand food service under the Program.

*Food service management company *means an organization other than a public or private nonprofit school, with which an institution may contract for preparing and, unless otherwise provided for, delivering meals, with or without milk for use in the Program.

*For-profit center *means a child care center, outside-school-hours care center, or adult day care center providing nonresidential care to adults or children that does not qualify for tax-exempt status under the Internal Revenue Code of 1986. For-profit centers serving adults must meet the criteria described in paragraph (a) of this definition. For-profit centers serving children must meet the criteria described in paragraphs (b)(1) or (b)(2) of this definition, except that children who only participate in the at-risk afterschool snack and/or meal component of the Program must not be considered in determining the percentages under paragraphs (b)(1) or (b)(2) of this definition.

(a) A for-profit center serving adults must meet the definition of *Adult day care center *as defined in this section and, during the calendar month preceding initial application or reapplication, the center receives compensation from amounts granted to the States under title XIX or title XX and twenty-five percent of the adults enrolled in care are beneficiaries of title XIX, title XX, or a combination of titles XIX and XX of the Social Security Act.

(b) A for-profit center serving children must meet the definition of *Child care** center *or *Outside-school-hours care center *as defined in this section and one of the following conditions during the calendar month preceding initial application or reapplication:

(1) Twenty-five percent of the children in care (enrolled or licensed capacity, whichever is less) are eligible for free or reduced-price meals; or

(2) Twenty-five percent of the children in care (enrolled or licensed capacity, whichever is less) receive benefits from title XX of the Social Security Act and the center receives compensation from amounts granted to the States under title XX.

*Foster child *means a child who is formally placed by a court or a State child welfare agency, as defined in § 245.2 of this chapter.

*Free **meal** *means a meal served under the Program to:

(a) A participant from a family which meets the income standards for free school meals, or

(b) A foster child, or

(c) A child who is automatically eligible for free meals by virtue of SNAP, FDPIR, or TANF benefits, or

(d) A child who is a Head Start participant, or

(e) A child who is receiving temporary housing and meal services from an approved emergency shelter, or

(f) A child participating in an approved at-risk afterschool care program, or

(g) An adult participant who is automatically eligible for free meals by virtue of SNAP or FDPIR benefits, or

(h) An adult who is an SSI or Medicaid participant.

*Functionally impaired adult *means chronically impaired disabled persons 18 years of age or older, including persons with neurological and organic brain dysfunction, with physical or mental impairments to the extent that their capacity for independence and their ability to carry out activities of daily living is markedly limited. Activities of daily living include, but are not limited to, adaptive activities such as cleaning, shopping, cooking, taking public transportation, maintaining a residence, caring appropriately for

one's grooming or hygiene, using a telephone, or using a post office. Marked limitations refer to the severity of impairment, and not the number of limited activities, and occur when the degree of limitation is such as to seriously interfere with the ability to function independently.

*Group living arrangement *means residential communities which may or may not be subsidized by federal, State or local funds but which are private residences housing an individual or a group of individuals who are primarily responsible for their own care and who maintain a presence in the community but who may receive on-site monitoring.

*Head Start participant *means a child currently receiving assistance under a Federally-funded Head Start Program who is categorically eligible for free meals in the CACFP by virtue of meeting Head Start's low-income criteria.

*Household *means “family”, as defined in § 226.2 (“Family”).

*Household contact *means a contact made by a sponsoring organization or a State agency to an adult member of a household with a child in a family day care home or a child care center in order to verify the attendance and enrollment of the child and the specific meal service(s) which the child routinely receives while in care.

*Income standards *means the family-size and income standards prescribed annually by the Secretary for determining eligibility for free and reduced-price meals under the National School Lunch Program and the School Breakfast Program.

*Income to the program *means any funds used in an institution's food service program, including, but not limited to all monies, other than Program payments, received from other Federal, State, intermediate, or local government sources; participant's payments for meals and food service fees; income from any food sales to adults; and other income, including cash donations or grants from organizations or individuals.

*Independent center *means a child care center, at-risk afterschool care center, emergency shelter, outside-school-hours care center or adult day care center which enters into an agreement with the State agency to assume final administrative and financial responsibility for Program operations.

*Independent governing board of directors *means, in the case of a nonprofit organization, or in the case of a for-profit institution required to have a board of directors, a governing board which meets regularly and has the authority to hire and fire the institution's executive director.

*Infant cereal *means any iron-fortified dry cereal specially formulated for and generally recognized as cereal for infants that is routinely mixed with breast milk or iron-fortified infant formula prior to consumption.

*Infant formula *means any iron-fortified formula intended for dietary use solely as a food for normal, healthy infants; excluding those formulas specifically formulated for infants with inborn errors of metabolism or digestive or absorptive problems. Infant formula, as served, must be in liquid state at recommended dilution.

*Institution *means a sponsoring organization, child care center, at-risk afterschool care center, outside-school-hours care center, emergency shelter or adult day care center which enters into an agreement with the State agency to assume final administrative and financial responsibility for Program operations.

*Internal controls *means the policies, procedures, and organizational structure of an institution designed to reasonably assure that:

(a) The Program achieves its intended result;

(b) Program resources are used in a manner that protects against fraud, abuse, and mismanagement and in accordance with law, regulations, and guidance; and

(c) Timely and reliable Program information is obtained, maintained, reported, and used for decision-making.

*Key Element Reporting System *(KERS) means a comprehensive national system for reporting critical key element performance data on the operation of the program in institutions.

*Low-income area *means a geographical area in which at least 50 percent of the children are eligible for free or reduced price school meals under the National School Lunch Program and the School Breakfast Program, as determined in accordance with paragraphs (b) and (c), definition of tier I day care home.

*Meal component *meals means one of the food groups which comprise reimbursable meals. The meal components are: fruits, vegetables, grains, meats/meat alternates, and fluid milk.

*Meals *means food which is served to enrolled participants at an institution, child care facility or adult day care facility and which meets the nutritional requirements set forth in this part. However, children participating in at-risk afterschool care centers, emergency shelters, or outside-schools-hours care centers do not have to be enrolled.

*Medicaid *means *Title XIX *of the Social Security Act.

*Medicaid participant *means an adult participant who receives assistance under title XIX of the Social Security Act, the Grant to States for Medical Assistance Programs—Medicaid.

*Milk *means pasteurized fluid types of unflavored or flavored whole milk, lowfat milk, skim milk, or cultured buttermilk which meet State and local standards for such milk, except that, in the meal pattern for infants (0 to 1 year of age), milk means breast milk or iron-fortified infant formula. In Alaska, Hawaii, American Samoa, Guam, Puerto Rico, the Trust Territory of the Pacific Islands, the Northern Mariana Islands, and the Virgin Islands if a sufficient supply of such types of fluid milk cannot be obtained, “milk” shall include reconstituted or recombined milk. All milk should contain vitamins A and D at levels specified by the Food and Drug Administration and be consistent with State and local standards for such milk.

*National disqualified list *means the list, maintained by the Department, of institutions, responsible principals and responsible individuals, and day care homes disqualified from participation in the Program.

*New institution *means a sponsoring organization or an independent center making an application to participate in the Program or applying to participate in the Program after a lapse in participation.

*Nonpricing** program *means an institution, child care facility, or adult day care facility in which there is no separate identifiable charge made for meals served to participants.

*Nonprofit food service *means all food service operations conducted by the institution principally for the benefit of enrolled participants, from which all of the Program reimbursement funds are used solely for the operations or improvement of such food service.

*Nonresidential *means that the same participants are not maintained in care for more than 24 hours on a regular basis.

*Notice *means a letter sent by certified mail, return receipt (or the equivalent private delivery service), by facsimile, or by email, that describes an action proposed or taken by a State agency or FNS with regard to an institution's Program reimbursement or participation. Notice also means a letter sent by certified mail, return receipt (or the equivalent private delivery service), by facsimile, or by email, that describes an action

proposed or taken by a sponsoring organization with regard to a day care home's participation. The notice must specify the action being proposed or taken and the basis for the action, and is considered to be received by the institution or day care home when it is delivered, sent by facsimile, or sent by email. If the notice is undeliverable, it is considered to be received by the institution, responsible principal or responsible individual, or day care home five days after being sent to the addressee's last known mailing address, facsimile number, or email address.

*OIG *means the Office of the Inspector General of the Department.

*Operating costs *means expenses incurred by an institution in serving meals to participants under the Program, and allowed by the State agency financial management instruction.

*Outside-school-hours care center *means a public or private nonprofit institution or facility (except day care homes), or a *For-profit center *as defined in this section, that is licensed or approved in accordance with § 226.6(d)(1) to provide organized nonresidential child care services to children during hours outside of school. Outside-school-hours care centers may participate in the Program as independent centers or under the auspices of a sponsoring organization.

*Participants *means “Children” or “Adult participants” as defined in this section.

*Participating **institution** *means a sponsoring organization or an independent center, including a renewing institution, that holds a current agreement with the State agency to operate the Program.

*Personal property *means property of any kind except real property. It may be tangible—having physical existence—or intangible—having no physical existence such as patents, inventions, and copyrights.

*Persons with disabilities *means persons of any age who have a physical or mental impairment that substantially limits one or more major life activities, have a record of such an impairment, or have been regarded as having such an impairment, and who are enrolled in an institution or child care facility serving a majority of persons who are age 18 and under.

*Pricing program *means an institution, child care facility, or adult day care facility in which a separate identifiable charge is made for meals served to participants.

*Principal *means any individual who holds a management position within, or is an officer of, an institution or a sponsored cente

[Note: Additional sections of Part 226 exist beyond this extract]

======================================================================
7 CFR PART 227 — NET — Nutrition Education and Training
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 227—NUTRITION EDUCATION AND TRAINING PROGRAM

Authority: Sec. 15, Pub. L. 95-166, 91 Stat. 1340 (42 U.S.C. 1788), unless otherwise noted.

Source: 44 FR 28282, May 15, 1979, unless otherwise noted.

Subpart A—General

§ 227.1 General purpose and scope.

The purpose of these regulations is to implement section 19 of the Child Nutrition Act (added by Pub. L. 95-166, effective November 10, 1977) which authorizes the Secretary to formulate and carry out a nutrition information and education program through a system of grants to State agencies to provide for (a) the nutritional training of educational and foodservice personnel, (b) the foodservice management training of school foodservice personnel, and (c) the conduct of nutrition education activities in schools and child care institutions. To the maximum extent possible, the Program shall fully utilize the child nutrition programs as a learning experience.

§ 227.2 Definitions.

(a) *Administrative costs *means costs allowable under Federal Management Circular 74-4, other than program costs, incurred by a State agency for overall administrative and supervisory purposes, including, but not limited to, costs of financial management, data processing, recordkeeping and reporting, personnel management, and supervising the State Coordinator.

(b) *Child Care Food Program *means the program authorized by section 17 of the National School Lunch Act, as amended.

(c) *Child Nutrition Programs *means any or all of the following: National School Lunch Program, School Breakfast Program, Child Care Food Program.

(d) *Commodity** only school *means a school which has entered into an agreement under § 210.15a(b) of this subchapter to receive commodities donated under part 250 of this chapter for a nonprofit lunch program.

(e) *Department *means the U.S. Department of Agriculture.

(f) *Federal fiscal year *means a period of 12 calendar months beginning October 1 of any calendar year and ending September 30 of the following calendar year.

(g) *FNS *means the Food and Nutrition Service of the Department.

(h) *FNSRO *means the appropriate Regional Office of the Food and Nutrition Service of the Department.

(i) *Institution *means any licensed, nonschool, public or private nonprofit organization providing day care services where children are not maintained in permanent residence, including but not limited to day care centers, settlement houses, after school recreation centers, neighborhood centers, Head Start centers, and organizations providing day care services for handicapped children and includes a sponsoring organization under the Child Care Food Program regulations.

(j) *National School Lunch Program *means the lunch program authorized by the National School Lunch Act.

(k) *Needs assessment *means a systematic process for delineating the scope, extent (quantity), reach and success of any current nutrition education activities, including those relating to:

(1) Methods and materials available inside and outside the classroom;

(2) Training of teachers in the principles of nutrition and in nutrition education strategies, methods, and techniques;

(3) Training of school foodservice personnel in the principles and practices of foodservice management; and

(4) Compilation of existing data concerning factors impacting on nutrition education and training such as statistics on child health and competency levels achieved by foodservice personnel.

(l) *Program costs *means costs, other than administrative costs, incurred in connection with any or all of the following:

(1) The State Coordinator's salary, and related support personnel costs, including fringe benefits and travel expenses;

(2) Applying for assessment and planning funds;

(3) The conduct of the needs assessment;

(4) The development of the State Plan; and

(5) The implementation of the approved State Plan, including related support services.

(m) *Program *means the Nutrition Education and Training Program authorized by section 19 of the Child Nutrition Act of 1966, as amended.

(n) *School *means:

(1) An educational unit of high school grade or under operating under public or nonprofit private ownership in a single building or complex of buildings. The term “high school grade or under” includes classes of preprimary grade when they are conducted in a school having classes of primary or higher grade, or when they are recognized as a part of the educational system in the State, regardless of whether such preprimary grade classes are conducted in a school having classes of primary or higher grade.

(2) With the exception of residential summer camps which participate in the Summer Food Service Program for Children and private foster homes, any distinct part of a public or nonprofit private institution or any public or nonprofit private child care institution, which

(i) maintains children in residence,

(ii) operates principally for the care of children and

(iii) if private, is licensed to provide residential child care services under the appropriate licensing code by the State or a subordinate level of government. The term “child care institution” includes, but is not limited to: Homes for the mentally retarded, the emotionally disturbed, the physically handicapped, and unmarried mothers and their infants; group homes; halfway houses; orphanages; temporary shelters for abused children and for runaway children; long term care facilities of chronically ill children; and juvenile detention centers.

(3) With respect to the Commonwealth of Puerto Rico, non-profit child care centers certified as such by the Governor of Puerto Rico.

(o) *School Breakfast Program *means the program authorized by section 4 of the Child Nutrition Act of 1966, as amended.

(p) *Foodservice personnel *means those individuals responsible for planning, preparing, serving and otherwise operating foodservice programs funded by USDA grants as provided for in the National School Lunch Act and the Child Nutrition Act of 1966.

(q) *State *means any of the 50 States, the District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, American Samoa, the Trust Territory of the Pacific Islands, and the Northern Mariana Islands.

(r) *State agency *means the State educational agency.

§ 227.3 Administration.

§ 227.4 Application and agreement.

After the initial fiscal year of participation each State agency desiring to take part in the Program shall enter into a written agreement with the Department for the administration of the Program in accordance with the provisions of this part. The State agency shall execute Form FNS-74, which shall constitute the written agreement.

*(Approved by the Office of Management and Budget under control number 0584-0062)*

(44 U.S.C. 3506)

*[44 FR 28282, May 15, 1979, as amended at 47 FR 746, Jan. 2, 1982]*


[Note: Additional sections of Part 227 exist beyond this extract]

======================================================================
7 CFR PART 235 — SAE — State Administrative Expense Funds
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 235—STATE ADMINISTRATIVE EXPENSE FUNDS

Authority: Secs. 7 and 10 of the Child Nutrition Act of 1966, 80 Stat. 888, 889, as amended (42 U.S.C. 1776,

1779).

Source: 41 FR 32405, Aug. 3, 1976, unless otherwise noted.

§ 235.1 General purpose and scope.

This part announces the policies and prescribes the regulations necessary to carry out the provisions of section 7 of the Child Nutrition Act of 1966, as amended. It prescribes the methods for making payments of funds to State agencies for use for administrative expenses incurred in supervising and giving technical assistance in connection with activities undertaken by them under the National School Lunch Program (7 CFR part 210), the Special Milk Program (7 CFR part 215), the School Breakfast Program (7 CFR part 220), the Child and Adult Care Food Program (7 CFR part 226) and the Food Distribution Program (7 CFR part 250).

(Sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776))

*[44 FR 51185, Aug. 31, 1979, as amended by **Amdt**. 17, 55 FR 1378, Jan. 16, 1990; 60 FR 15461, Mar. 24, 1995]*

§ 235.2 Definitions.

For the purpose of this part, the term:

*2 CFR part 200, *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by OMB. The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F). (NOTE: Pre-Federal Award Requirements and Contents of Federal Awards (subpart C) does not apply to the National School Lunch Program).

*Act *means the Child Nutrition Act of 1966, as amended.

*CND *means the Child Nutrition Division of the Food and Nutrition Service of the U.S. Department of Agriculture.

*Department *means the U.S. Department of Agriculture.

*Distributing agency *means a State agency which enters into an agreement with the Department for the distribution of donated foods pursuant to part 250 of this title.

*FNS *means the Food and Nutrition Service of the U.S. Department of Agriculture.

*FNSRO *means the appropriate Food and Nutrition Service Regional Office of the Food and Nutrition Service of the U.S. Department of Agriculture.

*Fiscal year *means a period of 12 calendar months beginning October 1, 1976, and October 1 of each calendar year thereafter and ending with September 30 of the following calendar year.

*Institution *means a child or adult care center or a sponsoring organization as defined in part 226 of this chapter.

*Large school food authority *means, in any State:

(1) All school food authorities that participate in the National School Lunch Program (7 CFR part 210) and have enrollments of 40,000 children or more each; or

(2) If there are less than two school food authorities with enrollments of 40,000 or more, the two largest school food authorities that participate in the National School Lunch Program (7 CFR part 210) and have enrollments of 2,000 children or more each.

*Nonprofit *means exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1986.

*OIG *means the Office of the Inspector General of the Department.

*SAE *means federally provided State administrative expense funds for State agencies under this part.

*School *means the term as defined in §§ 210.2, 215.2, and 220.2 of this chapter, as applicable.

*School Food Authority *means the governing body which is responsible for the administration of one or more schools and which has the legal authority to operate a breakfast or a lunch program therein. The term “School Food Authority” also includes a nonprofit agency or organization to which such governing body has delegated authority to operate the lunch or breakfast program in schools under its jurisdiction, provided the governing body retains the responsibility to comply with breakfast or lunch program regulations.

*Secretary *means the Secretary of Agriculture.

*State *means any of the 50 States, District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, and, as applicable, American Samoa and the Commonwealth of the Northern Marianas.

(Sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776); sec. 205, Pub. L. 96-499, The Omnibus Reconciliation Act of 1980, 94 Stat. 2599; secs. 807 and 808, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1772, 1784, 1760); Pub. L. 79-396, 60 Stat. 231 (42 U.S.C. 1751); Pub. L. 89-642, 80 Stat. 885-890 (42 U.S.C. 1773); Pub. L. 91-248, 84 Stat. 207 (42 U.S.C. 1759)

*[41 FR 32405, Aug. 3, 1976, as amended at 44 FR 48957, Aug. 21, 1979; 44 FR 51185, Aug. 31, 1979; **Amdt**. 9, 48 FR 19355, Apr. 29, 1983; **Amdt**. 14, 51 FR 27151, July 30, 1986; 54 FR 2991, Jan. 23, 1989; **Amdt**. 17, 55 FR 1378, Jan. 16, 1990; 60 FR 15461, Mar. 24, 1995; 64 FR 50743, Sept. 20, 1999; 71 FR 39519, July 13, 2006; 72 FR 63792, Nov. 13, 2007; 81 FR 50194, July 29, 2016; 81 FR 66494, Sept. 28, 2016]*

§ 235.3 Administration.

(Sec. 14, Pub. L. 95-166, 91 Stat. 1338 (42 U.S.C. 1776); sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776))

*[41 FR 32405, Aug. 3, 1976, as amended at 44 FR 48957, Aug. 21, 1979; **Amdt**. 14, 51 FR 27151, July 30, 1986; 71 FR 39519, July 13, 2006; 81 FR 66493, Sept. 28, 2016]*

*State agency *means

(1) the State educational agency or

(2) such other agency of the State as has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer programs under part 210, 215, 220, 226 or 250 of this title. Unless otherwise indicated, “State agency” shall also mean *Distributing agency *as defined in this section,, when such agency is receiving funds directly from FNS under this part.

*State educational agency *means, as the State legislature may determine:

(1) The chief State school officer (such as the State Superintendent of Public Instruction, Commissioner of Education, or similar officer), or

(2) a board of education controlling the State department of education.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

(a) Within the Department, FNS shall act on behalf of the Department in the administration of the program for payment to States of State administrative expense funds covered by this part. Within FNS, CND shall be responsible for administration of the program.

(b) Each State agency desiring to receive payments under this part shall enter into a written agreement with the Department for the administration of the child nutrition programs in accordance with the applicable requirements of this part, 7 CFR parts 210, 215, 220, 225, 226, 245, 15, 15a, 15b, and 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415. Each agreement shall cover the operation of the Program during the period specified therein and may be extended at the option of the Department.


[Note: Additional sections of Part 235 exist beyond this extract]

======================================================================
7 CFR PART 240 — Cash in Lieu of Donated Foods
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 240—CASH IN LIEU OF DONATED FOODS

Authority: 42 U.S.C. 612c note, 1751, 1755, 1762a, 1765, 1766, 1779.

Source: 47 FR 15982, Apr. 13, 1982, unless otherwise noted.

§ 240.1 General purpose and scope.

(a) Each school year the Department programs agricultural commodities and other foods to States for delivery to program and commodity schools, nonresidential child care institutions, and service institutions pursuant to the regulations governing the donation of foods for use in the United States, its territories and possessions and areas under its jurisdiction (7 CFR part 250).

(b) Section 6(b) of the Act requires that not later than June 1 of each school year, the Secretary shall make an estimate of the value of the agricultural commodities and other foods that will be delivered during that school year for use in lunch programs by schools participating in the National School Lunch Program (7 CFR part 210). If this estimate is less than the total level of assistance authorized under section 6(e) of the Act the Secretary shall pay to the State administering agency not later than July 1 of that school year, an amount of funds equal to the difference between the value of donated foods as then programmed for that school year and the total level of assistance authorized under such section.

(c) Section 6(e)(1) of the Act requires:

(1) That for each school year, the total commodity assistance, or cash in lieu thereof, available to each State for the National School Lunch Program shall be the amount obtained by multiplying the national average value of donated foods, described in paragraph (c)(2) of this section, by the number of lunches served in that State in the preceding school year; and

(2) That the national average value of foods donated to schools participating in the National School Lunch Program, or cash payments made in lieu thereof, shall be 11 cents, adjusted on July 1, 1982, and each July 1 thereafter to reflect changes in the Price Index for Food Used in Schools and Institutions. Section 6(e)(1) further requires that not less than 75 percent of the assistance under that section shall be in the form of donated foods for the National School Lunch Program. After the end of each school year, FNS shall reconcile the number of lunches served by schools in each State with the number served in the preceding school year and, based on such reconciliation, shall increase or reduce subsequent commodity assistance or cash in lieu thereof provided to each State.

(d) Section 12(g) of the Act provides that whoever embezzles, willfully misapplies, steals, or obtains by fraud any funds, assets, or property that are the subject of a grant or other form of assistance under this Act or the Child Nutrition Act of 1966, whether received directly or indirectly from the United States Department of Agriculture, or whoever receives, conceals, or retains such funds, assets, or property to his use or gain, knowing such funds, assets, or property have been embezzled, willfully misapplied, stolen, or obtained by fraud shall, if such funds, assets, or property are of the value of $100 or more, be fined not more than $10,000 or imprisoned not more than five years, or both, or, if such funds, assets, or property are of a value of less than $100, shall be fined not more than $1,000 or imprisoned for not more than one year, or both.

(e) Section 14(f) of the Act provides that the value of foods donated to States for use in commodity schools for any school year shall be the sum of the national average value of donated foods established under section 6(e) of the Act and the national average payment established under section 4 of the Act. Section 14(f) also provides that such schools shall be eligible to receive up to five cents of such value in cash for processing and handling expenses related to the use of the donated foods.

(f) Sections 17(h)(1) (B) and (C) of the Act provide that the value of commodities, or cash in lieu thereof, donated to States for use in nonresidential child or adult care institutions participating in the Child and Adult Care Food Program (7 CFR part 226) for any school year shall be, at a minimum, the amount obtained by multiplying the number of lunches and suppers served during the preceding school year by the rate established for lunches for that school year under section 6(e) of the Act. At the end of each school year, FNS shall reconcile the number of lunches and suppers served in participating institutions in each State during such school year with the number of lunches and suppers served in the preceding school year and, based on such reconciliation, shall increase or reduce subsequent commodity assistance or cash in lieu of commodities provided to each State.

(g) Section 16 of the Act provides that a State which has phased out its food distribution facilities prior to June 30, 1974, may elect to receive cash payments in lieu of donated foods for the purposes of the applicable child nutrition programs—i.e., the National School Lunch Program, the Summer Food Service Program for Children (7 CFR part 225) and the Child Care Food Program.

(h) These regulations prescribe the methods for determination of the amount of payments, the manner of disbursement and the requirements for accountability for funds when these respective statutory authorities require the Department to make cash payments in lieu of donating agricultural commodities and other foods.

*[47 FR 15982, Apr. 13, 1982, as amended at 52 FR 7267, Mar. 10, 1987; 58 FR 39120, July 22, 1993]*


[Note: Additional sections of Part 240 exist beyond this extract]

======================================================================
7 CFR PART 245 — Eligibility — Free and Reduced Price Meals
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 245—DETERMINING ELIGIBILITY FOR FREE AND REDUCED PRICE MEALS AND FREE MILK IN SCHOOLS

Authority: 42 U.S.C. 1752, 1758, 1759a, 1772, 1773, and 1779.

§ 245.1 General purpose and scope.

(a) This part established the responsibilities of State agencies, Food and Nutrition Service Regional Offices, school food authorities or local educational agencies, as defined in § 245.2, as applicable in providing free and reduced price meals and free milk in the National School Lunch Program (7 CFR part 210), the

(Sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758))

*[**Amdt**. 6, 39 FR 30337, Aug. 22, 1974, as amended by **Amdt**. 10, 41 FR 28783, July 13, 1976; 47 FR 31852, July 23, 1982; 72 FR 63792, Nov. 13, 2007]*

§ 245.2 Definitions.

School Breakfast Program (7 CFR part 220), the Special Milk Program for Children (7 CFR part 215), and commodity schools. Section 9 of the National School Lunch Act, as amended, and sections 3 and 4 of the Child Nutrition Act of 1966, as amended, require schools participating in any of the programs and commodity schools to make available, as applicable, free and reduced price lunches, breakfasts, and at the option of the School Food Authority for schools participating only in the Special Milk Program free milk to eligible children.

(b) This part sets forth the responsibilities under these Acts of State agencies, the Food and Nutrition Service Regional Offices, school food authorities or local educational agencies, as applicable, with respect to the establishment of income guidelines, determination of eligibility of children for free and reduced price meals, and for free milk and assurance that there is no physical segregation of, or other discrimination against, or overt identification of children unable to pay the full price for meals or milk.

*Adult *means any individual 21 years of age or older.

*Categorically eligible *means considered income eligible for free meals or free milk, as applicable, based on documentation that a child is a member of a *Family, as defined in this section, and one or more children in *that family are receiving assistance under *SNAP, FDPIR *or the *TANF *program, as defined in this section. A *Foster child, Homeless child, a Migrant child, a Head Start child *and a *Runaway child, as defined in this *section, are also categorically eligible. Categorical eligibility and automatic eligibility may be used synonymously.

*Commodity school *means a school which does not participate in the National School Lunch Program under part 210 of this chapter, but which enters into an agreement as provided in § 210.15a(b) to receive commodities donated under part 250 of this chapter for a nonprofit lunch program.

*Current income *means income, as defined in § 245.6(a), received during the month prior to application. If such income does not accurately reflect the household's annual rate of income, income shall be based on the projected annual household income. If the prior year's income provides an accurate reflection of the household's current annual income, the prior year may be used as a base for the projected annual rate of income.

*Direct certification *means determining a child is eligible for free meals or free milk, as applicable, based on documentation obtained directly from the appropriate State or local agency or individuals authorized to certify that the child is a member of a household receiving assistance under *SNAP, as defined in this *section; is a member of a household receiving assistance under *FDPIR *or under the *TANF *program, as defined in this section; a *Foster child, Homeless child, a Migrant child, *a *Head Start child *and a *Runaway child, as defined in this section.*

*Disclosure *means reveal or use individual children's program eligibility information obtained through the free and reduced price meal or free milk eligibility process for a purpose other than for the purpose for which the information was obtained. The term refers to access, release, or transfer of personal data about children by means of print, tape, microfilm, microfiche, electronic communication or any other means.

*Documentation *means:

(1) The completion of a free and reduced price school meal or free milk application which includes:

(i) For households applying on the basis of income and household size, names of all household members; income received by each household member, identified by source of the income (such as earnings, wages, welfare, pensions, support payments, unemployment compensation, and social security and other cash income); the signature of an adult household member; and the last four digits of the social security number of the adult household member who signs the application or an indication that the adult does not possess a social security number; or

(ii) For a child who is receiving assistance under *SNAP, FDPIR *or *TANF, as defined in this section, *the child's name and appropriate SNAP or TANF case number or FDPIR case number or other FDPIR identifier and signature of an adult household member.

(2) In lieu of completion of the free and reduced price meal application:

(i) Information obtained from the State or local agency responsible for administering *SNAP, FDPIR *or *TANF, as defined in this section. Documentation for these programs includes the name of *the child; a statement certifying that the child is a member of a household receiving assistance under *SNAP, FDPIR *or *TANF, as defined in this section; information in sufficient detail to match *the child attending school in the local educational agency with the name of a child who is a member of one of the applicable programs as defined in this section; the signature of the official from the applicable program who is authorized to provide such documentation on behalf of that program and the date that the official signed the certification statement;

(ii) A letter or other document provided to the household by the agency administering *FDPIR *or the *TANF *program, as defined in this section or by the court, entity, or official authorized to administer an eligible program for a *Foster child, *a *Homeless child, *a *Migrant child, *a *Head Start child, *or a *Runaway child *as defined in this section.

(iii) Information from the local educational agency, such as enrollment information or information from applications submitted for free or reduced price meals, or from SNAP, FDPIR or TANF program officials that indicate there are children in a *Family, *as defined in this section, who were not documented as receiving assistance under SNAP, FDPIR or TANF, in order to extend categorical eligibility to such children as found in § 245.6(b)(7). Documentation for these *purposes is the information discussed in paragraph (2)(**i**) of this definition, *plus a written statement by a local educational agency official briefly explaining how the presence of additional children in the family was determined.

(iv) Information obtained from an official responsible for determining if a child is a *Foster** child, *a *Homeless child, *a *Migrant child, *a *Head Start child, *or a *Runaway child, *as defined in the section. Documentation for these children includes the name of the child; a statement certifying that the child has been determined eligible for that program or is enrolled in the Head Start Program; information in sufficient detail to match the child attending school in the local educational agency with the name of a child who has been determined eligible for that program or is enrolled in an eligible Head Start Program; the signature of the official from the program who is authorized to provide such documentation on behalf of that program and the date that the official signed the certification statement. Documentation may also be a list of children, a computer match, or a court document that includes this information.

(v) When a signature is impracticable to obtain, such as in a computer match, the local educational agency shall have a method to ensure that a responsible official can attest to the accuracy of the information provided.

*Family *means a group of related or nonrelated individuals, who are not residents of an institution or boarding house, but who are living as one economic unit.

*FDPIR *means the food distribution program for households on Indian reservations operated under part 253 of this title.

*FNS *means the Food and Nutrition Service, United States Department of Agriculture.

*FNSRO where applicable *means the appropriate Food and Nutrition Service Regional Office when that agency administers the National School Lunch Program, School Breakfast Program or Special Milk Program with respect to nonprofit private schools.

*Foster child *means a child who is formally placed by a court or an agency that administers a State plan under parts B or E of title IV of the Social Security Act (42 U.S.C. 621 *et seq.). It does not include a child in an *informal arrangement that may exist outside of State or court based systems.

*Free **meal** *means a meal for which neither the child nor any member of his family pays or is required to work in the school or in the school's food service.

*Free milk *means milk served under the regulations governing the Special Milk Program and for which neither the child nor any member of his family pays or is required to work in the school or in the school's food service.

*Head Start child *means a child enrolled as a participant in a Head Start program authorized under the Head Start Act (42 U.S.C. 9831 *et seq.)*

*Homeless child *means a child identified as lacking a fixed, regular and adequate nighttime residence, as specified under section 725(a) of the McKinney-Vento Homeless Assistance Act (42 U.S.C. 11434a(2)) by the local educational agency liaison, director of a homeless shelter or other individual identified by FNS.

*Household *means “family” as defined in this section.

*Household application *means an application for free and reduced price meal or milk benefits, submitted by a household for a child or children who attend school(s) in the same local educational agency.

*Income eligibility guidelines *means the family-size income levels prescribed annually by the Secretary for use by States in establishing eligibility for free and reduced price meals and for free milk.

*Local educational agency *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs schools, and educational service agencies and consortia of those agencies, as well as the State educational agency in a State or territory in which the State educational agency is the sole educational agency for all public or private nonprofit schools.

*Meal *means a lunch or meal supplement or a breakfast which meets the applicable requirements prescribed in §§ 210.10, 210.15a, and 220.8 of this chapter.

*Medicaid *means the State medical assistance program under title XIX of the Social Security Act (42 U.S.C. 1396 *et seq.).*

*Migrant child *means a child identified as meeting the definition of migrant in section 1309 of the Elementary and Secondary Education Act of 1965 (20 U.S.C. 6399) by the State or local Migrant Education Program coordinator or the local educational liaison, or other individual identified by FNS.

*Milk *means pasteurized fluid types of unflavored or flavored whole milk, lowfat milk, skim milk, or cultured buttermilk which meet State and local standards for such milk except that, in the meal pattern for infants (0 to 1 year of age) milk means unflavored types of whole fluid milk or an equivalent quantity of reconstituted evaporated milk which meet such standards. In Alaska, Hawaii, American Samoa, Guam, Puerto Rico, the Trust Territory of the Pacific Islands, and the Virgin Islands, if a sufficient supply of such types of fluid milk cannot be obtained, “milk” shall include reconstituted or recombined milk. All milk should contain vitamins A and D at levels specified by the Food and Drug Administration and consistent with State and local standards for such milk.

*Nonprofit *means exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1986.

*Operating day *means a day that reimbursable meals are offered to eligible students under the National School Lunch Program or School Breakfast Program.

*Reduced price **meal** *means a meal which meets all of the following criteria:

(1) The price shall be less than the full price of the meal;

(2) the price shall not exceed 40 cents for a lunch and 30 cents for a breakfast; and

(3) neither the child nor any member of his family shall be required to supply an equivalent value in work for the school or the school's food service.

*Runaway child *means a child identified as a runaway receiving assistance under a program under the Runaway and Homeless Youth Act (42 U.S.C. 5701 *et seq.) by the local educational liaison, or other individual in *accordance with guidance issued by FNS.

*Service institution *shall have the meaning ascribed to it in part 225 of this chapter.

*School, school food authority, *and other terms and abbreviations used in this part shall have the meanings ascribed to them in part 210 of this chapter.

*SNAP *means the Supplemental Nutrition Assistance Program established under the Food and Nutrition Act of 2008 (7 U.S.C. 2011 *et. seq.) and operated under *parts 271 and 283 of this chapter.

*SNAP household *means any individual or group of individuals currently certified to receive assistance as a household from *SNAP.*

*Special Assistance Certification and Reimbursement Alternatives *means the three optional alternatives for free and reduced price meal application and claiming procedures in the National School Lunch Program and School Breakfast Program which are available to those School Food Authorities with schools in which at least 80 percent of the enrolled children are eligible for free or reduced price meals, or schools which are currently, or who will be serving all children free meals.

*State Children's Health Insurance Program (SCHIP) *means the State medical assistance program under title XXI of the Social Security Act (42 U.S.C. 1397aa *et seq.).*

(Secs. 801, 803, 812; Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1759(a), 1773, 1758))

§ 245.3 Eligibility standards and criteria.

*TANF *means the State funded program under part A of title IV of the Social Security Act that the Secretary determines complies with standards established by the Secretary that ensure that the standards under the State program are comparable to or more restrictive than those in effect on June 1, 1995. This program is commonly referred to as Temporary Assistance for Needy Families, although States may refer to the program by another name.

*Verification *means confirmation of eligibility for free or reduced price benefits under the National School Lunch Program or School Breakfast Program. Verification shall include confirmation of income eligibility and, at State or local discretion, may also include confirmation of any other information required in the application which is defined as *Documentation *in § 245.2. Such verification may be accomplished by examining information provided by the household such as wage stubs, or by other means as specified in § 245.6a(a)(7). If a SNAP or TANF case number or a FDPIR case number or other identifier is provided for a child, verification for such child shall only include confirmation that the child is a member of a household receiving SNAP, TANF or FDPIR benefits. Verification may also be completed through direct contact with one or more of the public agencies as specified in § 245.6a(g).

(a) Each State agency, or FNSRO where applicable, shall by July 1 of each year announce family-size income standards to be used by local educational agencies, as defined in § 245.2, under the jurisdiction of such State agency, or FNSRO where applicable, in making eligibility determinations for free or reduced price meals and for free milk. Such family size income standards for free and reduced price meals and for free milk shall be in accordance with Income Eligibility Guidelines published by the Department by notice in the FEDERAL REGISTER.

(b) Each participating local educational agency and all participating schools under its jurisdiction must adhere to the eligibility criteria specified in this part. Local educational agencies must include these eligibility criteria in their policy statement as required under § 245.10 and it must be publicly announced in accordance with the provisions of § 245.5. Additionally, each State agency, or FNSRO where applicable, must require that local educational agencies accept as income eligible for free meals and free milk, children who are categorically eligible for those benefits based on documentation of eligibility, as specified in § 245.6 (b).

(c) Each School Food Authority shall serve free and reduced price meals or free milk in the respective programs to children eligible under its eligibility criteria. When a child is not a member of a family (as defined in § 245.2), the child shall be considered a family of one. In any school which participates in more than one of the child nutrition programs, eligibility shall be applied uniformly so that eligible children receive the same benefits in each program. If a child transfers from one school to another school under the jurisdiction of the same School Food Authority, his eligibility for free or reduced price meals or for free milk, if previously established, shall be transferred to, and honored by, the receiving school if it participates in the National School Lunch Program, School Breakfast Program, Special Milk Program and the School Food Authority has elected to provide free milk, or is a commodity-only school.

Editorial Note: For FEDERAL REGISTER citations affecting § 245.2, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(Sec. 8, Pub. L. 95-627, 92 Stat. 3623 (42 U.S.C. 1758); sec. 5, Pub. L. 95-627, 92 Stat. 3619 (42 U.S.C. 1772); 42 U.S.C. 1785, 1766, 1772, 1773(e), sec. 203, Pub. L. 96-499, 94 Stat. 2599; secs. 807 and 808, Pub. L. 97-35, 95 Stat. 521-535, 42 U.S.C. 1772, 1784, 1760; sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758))

*[**Amdt**. 8, 40 FR 57207, Dec. 8, 1975; 40 FR 58281, Dec. 16, 1975, as amended by **Amdt**. 10, 41 FR 28783, July 13, 1976; **Amdt**. 13, 44 FR 33049, June 8, 1979; 47 FR 31852, July 23, 1982; 72 FR 63793, Nov. 13, 2007; 76 FR 22800, Apr. 25, 2011]*

§ 245.4 Exceptions for Puerto Rico and the Virgin Islands.

Because the State agencies of Puerto Rico and the Virgin Islands provide free meals or milk to all children in schools under their jurisdiction, regardless of the economic need of the child's family, they are not required to make individual eligibility determinations or publicly announce eligibility criteria. Instead, such State agencies may use a statistical survey to determine the number of children eligible for free or reduced price meals and milk on which a percentage factor for the withdrawal of special cash assistance funds will be developed subject to the following conditions:

(Sec. 9, Pub. L. 95-166, 91 Stat 1336 (42 U.S.C. 1759a); secs. 807 and 808, Pub. L. 97-35, 95 Stat. 521-535, 42 U.S.C. 1772, 1784, 1760; 44 U.S.C. 3506)

*[**Amdt**. 18, 45 FR 52771, Aug. 8, 1980, as amended at 46 FR 51366, Oct. 20, 1981; 47 FR 746, Jan. 7, 1982]*

§ 245.5 Public announcement of the eligibility criteria.

(a) State agencies shall conduct a statistical survey once every three years in accordance with the standards provided by FNS;

(b) State agencies shall submit the survey design to FNS for approval before proceeding with the survey;

(c) State agencies shall conduct the survey and develop the factor for withdrawal between July 1 and December 31 of the first school year of the three-year period;

(d) State agencies shall submit the results of the survey and the factor for fund withdrawal to FNS for approval before any reimbursement may be received under that factor;

(e) State agencies shall keep all material relating to the conduct of the survey and determination of the factor for fund withdrawal in accordance with the record retention requirements in § 210.8(e)(14) of this chapter;

(f) Until the results of the triennial statistical survey are available, the factor for fund withdrawal will be based on the most recently established percentages. The Department shall make retroactive adjustments to the States' Letter of Credit, if appropriate, for the year of the survey;

(g) If any school in these States wishes to charge a student for meals, the State agency, School Food Authority and school shall comply with all the applicable provisions of this part and parts 210, 215 and 220 of this chapter.

(a) After the State agency, or FNSRO where applicable, notifies the local educational agency (as defined in § 245.2) that its criteria for determining the eligibility of children for free and reduced price meals and for free milk have been approved, the local educational agency (as defined in § 245.2) shall publicly announce such criteria: *Provided however, *that no such public announcement shall be required for boarding schools, residential child care institutions (see § 210.2 of this chapter, definition of *Schools), or *a school which includes food service fees in its tuition, where all attending children are provided the same

meals or milk. Such announcements shall be made at the beginning of each school year or, if notice of approval is given thereafter, within 10 days after the notice is received. The public announcement of such criteria, as a minimum, shall include the following:

(1) Except as provided in § 245.6(b), a letter or notice and application distributed on or about the beginning of each school year, to the parents of all children in attendance at school. The letter or notice shall contain the following information:

(i) In schools participating in a meal service program, the eligibility criteria for *reduced price *benefits with an explanation that households with incomes less than or equal to the reduced price criteria would be eligible for either free or reduced price meals, or in schools participating in the free milk option, the eligibility criteria for *free *milk benefits;

(ii) How a household may make application for free or reduced price meals or for free milk for its children;

(iii) An explanation that an application for free or reduced price benefits cannot be approved unless it contains complete information as described in paragraph (1)(i) of the definition of *Documentation *in § 245.2;

(iv) An explanation that households with children who are members of currently certified SNAP, FDPIR or TANF households may submit applications for these children with the abbreviated information described in paragraph (2)(ii) of the definition of *Documentation *in § 245.2;

(v) An explanation that the information on the application may be verified at any time during the school year;

(vi) How a household may apply for benefits at any time during the school year as circumstances change

[Note: Additional sections of Part 245 exist beyond this extract]

======================================================================
7 CFR PART 292 — Summer EBT Program
Source: Federal Register (current as of April 13, 2026)
======================================================================

PART 292—SUMMER ELECTRONIC BENEFITS TRANSFER PROGRAM

Authority: 42 U.S.C. 1762.

Source: 88 FR 90355, Dec. 29, 2023, unless otherwise noted.

Subpart A—General

§ 292.1 General purpose and scope.

§ 292.2 Definitions.

(a) This part establishes the regulations under which the Secretary will administer the Summer Electronic Benefits Transfer (Summer EBT) Program. Section 13A of the Richard B. Russell National School Lunch Act authorizes the Secretary to establish a Program under which States, and Indian Tribal Organizations (ITOs) that administer the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC), electing to participate in the Summer EBT Program must, beginning in Summer 2024 and annually thereafter, issue to each eligible household Summer EBT benefits.

(b) This program was established for the purpose of providing nutrition assistance during the summer months for each eligible child, to ensure continued access to food when school is not in session for the summer.

*2 CFR part 200 *means the Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards published by the Office of Management and Budget (OMB). The part reference covers applicable: Acronyms and Definitions (subpart A), General Provisions (subpart B), Post Federal Award Requirements (subpart D), Cost Principles (subpart E), and Audit Requirements (subpart F).

*Act *means the Richard B. Russell National School Lunch Act, as amended.

*Acquisition *means obtaining supplies or services through a purchase or lease, regardless of whether the supplies or services are already in existence or must be developed, created, or evaluated.

*Administrative costs *means costs incurred by a Summer EBT agency, LEA, or local agencies operating in a formal agreement with a Summer EBT agency related to planning, organizing, and managing a Summer EBT Program.

Editorial Note: Nomenclature changes to subchapter C appear by Amdt. 381, 65 FR 64586, Oct. 30, 2000.

*Adult *means, for the purposes of completing an application for eligibility for Program benefits, any individual 18 years of age or older.

*Advance Planning Document for project planning *or *Planning APD (APD *or *PAPD) *means a brief written plan of action that requests Federal financial participation to accomplish the planning activities necessary for a Summer EBT agency to determine the need for, feasibility of, projected costs and benefits of an IS equipment or services acquisition, plan the acquisition of IS equipment and/or services, and to acquire information necessary to prepare an Implementation APD.

*Advance Planning Document Update (APDU) *means a document submitted annually (Annual APDU) by the Summer EBT agency to report the status of project activities and expenditures in relation to the approved Planning APD or Implementation APD; or on an as needed basis (As Needed APDU) to request funding approval for project continuation when significant project changes occur or are anticipated.

*Cash-Value Benefit (CVB) *means a type of benefit that is a fixed-dollar amount used to obtain supplemental foods by participants served by an ITO Summer EBT agency for the purposes of the Summer EBT Program.

*Categorically eligible *means considered income eligible for Summer EBT, as applicable, based on documentation that a child is a member of a *household, *as defined in this section, and one or more children in that household are receiving assistance under *SNAP, TANF, *or *FDPIR, *or another means tested program, as approved by the Secretary. A *foster child, homeless child, *a *migrant** child, *a *Head Start child *and a *runaway child, *as defined in § 245.2 of this chapter, are also categorically eligible. Categorical eligibility and automatic eligibility may be used synonymously.

*Commercial Off-the-Shelf (COTS) *means proprietary software products that are ready-made and available for sale to the general public at established catalog or market prices in which the software vendor is not positioned as the sole implementer or integrator of the product.

*Continuous school calendar *means a situation in which all or part of the student body of a school is:

(1) On a vacation for periods of 15 continuous school days or more during the period October through April; and

(2) In attendance at regularly scheduled classes during most of the period May through September.

*Current income *means income received during the month prior to application for Summer EBT benefits. If such income does not accurately reflect the household's annual income, income must be based on the projected annual household income. If the prior year's income provides an accurate reflection of the household's current annual income, the prior year may be used as a base for the projected annual income.

*Department *means the U.S. Department of Agriculture.

*Direct verification *means the process of verifying household income or categorical eligibility by matching against data sources or other records without the need to contact households for documentation.

*Disclosure *means reveal or use individual children's program eligibility information obtained through the Summer EBT eligibility process for a purpose other than for the purpose for which the information was obtained. The term refers to access, release, or transfer of personal data about children by means of print, tape, microfilm, microfiche, electronic communication or any other means.

*Dual participation *means a child simultaneously receiving benefits from more than one State or ITO-administered Summer EBT Program, or simultaneously receiving multiple allotments from the same State or ITO-administered Summer EBT Program.

*Electronic Benefit Transfer (EBT) account *means a set of records containing demographic, card, benefit, transaction, and balance data for an individual household within the EBT system that is maintained and managed by a Summer EBT agency or its contractor as part of the client case record.

*Electronic Benefit Transfer (EBT) card *means a method to access EBT benefits issued to a household member or authorized representative through the EBT system by a benefit issuer. This method may include an on-line magnetic stripe card, an off-line smart card, a chip card, a contactless digital wallet with a stored card, or any other similar benefit access technology approved by USDA.

*Electronic Benefit Transfer (EBT) contractor or vendor *means an entity that is selected to perform EBT-related services for the Summer EBT agency.

*Electronic Benefit Transfer (EBT) system *means an electronic payments system under which benefits are issued from and stored in a central databank, maintained and managed by a Summer EBT agency or its contractor, and uses electronic funds transfer technology for the delivery and control of food and other public assistance benefits.

*Eligible child *means a child who meets the requirements to receive Summer EBT benefits as provided in §§ 292.5 and 292.6.

*Eligible household *means a household that includes at least one eligible child.

*Enhancement *means modifications which change the functions of software and hardware beyond their original purposes, not just to correct errors or deficiencies which may have been present in the software or hardware, or to improve the operational performance of the software or hardware. Software enhancements that substantially increase risk or cost or functionality will require submission of an IAPD or an As Needed IAPDU.

*Enrolled students *means students who are enrolled in and attending schools participating in the NSLP/SBP and who have access to a meal service (breakfast or lunch) on a regular basis.

*Expungement *means the removal of Summer-EBT benefits from the EBT account to which they were issued, typically by an EBT processor on behalf of a Summer EBT agency.

*FDPIR *means the food distribution program for households on Indian reservations operated under 7 CFR part 253, and the food distribution program for Indian households in Oklahoma under 7 CFR part 254.

*FNS *means the Food and Nutrition Service, United States Department of Agriculture.

*FNSRO *means an FNS Regional Office.

*Firm, *as used in this part:

(1) Means:

(i) A retail food store that is authorized to accept or redeem Summer EBT benefits;

(ii) A retail food store that is not authorized to accept or redeem Summer EBT benefits; or

(iii) An entity that does not meet the definition of a retail food store in § 271.2 of this chapter.

(2) For purposes of the regulations in this part the terms firm, entity, retailer, and store may be used interchangeably.

*Food instrument, *as applicable to ITO Summer EBT agencies, means the definition set forth in WIC regulations at § 246.2 of this chapter.

*Household *means a group of related or nonrelated individuals, who are not residents of an institution or boarding house, but who are living as one economic unit.

*Implementation Advance Planning Document *or *Implementation APD (IAPD) *means a written plan of action requesting Federal financial participation (FFP) to acquire and implement Electronic Benefit Transaction services. The Implementation APD includes the general design, development, testing, and implementation *phases of the project during its initiation. Once the Summer EBT process becomes more routine (e.g., *after its initial implementation), the IAPD will be streamlined to include one the following documents as outlined in this section and in FNS Handbook 901:

(1) Transmittal letter.

(2) Cost Allocation Plan.

(3) Pre-conversion outlays (where applicable).

(4) Brief schedule of events and payments, and budget.

*Income eligibility guidelines *means the household-size and income standards prescribed annually by the Secretary for determining income eligibility for reduced price meals under the National School Lunch Program and the School Breakfast Program.

*Indian Tribal Organization (ITO) *means an Indian Tribe, band, or group recognized by the Department of the Interior or an intertribal council or group which is an authorized representative of Indian Tribes, bands or groups recognized by the Department of the Interior and which has an ongoing relationship with such Tribes, bands or groups. For the purposes of the Summer EBT Program, this definition only includes those Indian Tribal Organizations which administer the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC Program) established under section 17 of the Child Nutrition Act of 1966 (42 U.S.C. 1786). For the purposes of the Summer EBT Program, an administering Indian Tribal Organization is also referred to as a “Summer EBT agency”.

*Information System (IS) *means a combination of hardware and software, data and telecommunications that performs specific functions to support the Summer EBT agency, or other Federal, State, or local organization.

*Instructional year *means the period from July 1 of the prior year through one day prior to the summer operational period.

*ITO Service Area *means the geographic area served by an ITO Summer EBT agency.

*Local Education Agency (LEA) *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs s

[Note: Additional sections of Part 292 exist beyond this extract]



======================================================================
7 CFR PART 245 — COMMUNITY ELIGIBILITY PROVISION (§ 245.9(f)) — CRITICAL
Source: Federal Register (current as of April 13, 2026)
======================================================================

§ 245.9(f) Community Eligibility Provision — Key Requirements:

(iv) *Establish a Provision 2 base year. *Schools may convert to Provision 2 using the procedures contained in paragraphs (c)(2)(ii) or (c)(2)(iii) of this section.

(f) *Community eligibility. *The community eligibility provision is an alternative reimbursement option for eligible high poverty local educational agencies. Each CEP cycle lasts up to four years before the LEA or school is required to recalculate their reimbursement rate. LEAs and schools have the option to recalculate sooner, if desired. A local educational agency may elect this provision for all of its schools, a group of schools, or an individual school. Participating local educational agencies must offer free breakfasts and lunches for the length of their CEP cycle, not to exceed four successive years, to all children attending participating schools and receive meal reimbursement based on claiming percentages, as described in paragraph (f)(4)(v) of this section.

(1) *Definitions. *For the purposes of this paragraph,

(i) *Enrolled students *means students who are enrolled in and attending schools participating in the community eligibility provision and who have access to at least one meal service (breakfast or lunch) daily.

(ii) *Identified students *means students with access to at least one meal service who are not subject to verification as prescribed in § 245.6a(c)(2). Identified students are students approved for free meals based on documentation of their receipt of benefits from SNAP, TANF, the Food Distribution Program on Indian Reservations, or Medicaid where applicable (where approved by USDA to conduct matching with Medicaid data to identify children eligible for free meals). The term identified students also includes homeless children, migrant children, runaway children, or Head Start children (approved for free school meals without application and not subject to verification), as these terms are defined in § 245.2. In addition, the term includes foster children certified for free meals through means other than an application for free and reduced price school meals. The term does not include students who are categorically eligible based on submission of an application for free and reduced price school meals.

(iii) *Identified student percentage *means a percentage determined by dividing the number of identified students as of a specified period of time by the number of enrolled students as defined in paragraph (f)(1)(i) of this section as of the same period of time and multiplying the quotient by 100. The identified student percentage may be determined by an individual participating school, a group of participating schools in the local educational agency, or in the aggregate for the entire local educational agency if all schools participate, following procedures established in FNS guidance.

(2) *Implementation. *A local educational agency may elect the community eligibility provision for all schools, a group of schools, or an individual school. Community eligibility may be implemented for one or more 4-year cycles.

(3) *Eligibility criteria. *To be eligible to participate in the community eligibility provision, a local educational agency (except a residential child care institution, as defined under the definition of “School” in § 210.2), group of schools, or school must meet the eligibility criteria set forth in this paragraph.

(i) *Minimum identified student percentage. *A local educational agency, group of schools, or school must have an identified student percentage of at least 25 percent, as of April 1 of the school year prior to participating in the community eligibility provision, unless otherwise specified by FNS. Individual schools participating in a group may have less than 25 percent identified students, provided that the average identified student percentage for the group is at least 25 percent.

(ii) *Lunch and **breakfast program** participation. *A local educational agency, group of schools, or school must participate in the Na

CRITICAL REGULATORY CORRECTIONS — ALWAYS USE THESE VALUES:
- Community Eligibility Provision (CEP): The ISP threshold for eligibility is 25% (NOT 40%). The 40% figure was the old threshold prior to the Healthy, Hunger-Free Kids Act updates. Per 7 CFR § 245.9, schools/LEAs with an Identified Student Percentage (ISP) of 25% or greater are eligible to elect CEP.
- Always use 25% as the CEP ISP eligibility threshold in all responses.

RESPONSE STANDARDS:
- Answer directly from the regulatory text above whenever possible
- Always cite exact CFR sections (e.g., 7 CFR § 210.10(c)(2))
- When the answer is in the text above, quote or closely paraphrase it
- Flag when state agency discretion applies or policy varies by state
- Note if a question falls outside the regulatory text provided
- Never guess on compliance matters — if uncertain, say so explicitly
- Structure responses clearly with regulatory citations in bold

End every response with:
"⚠️ Verify all guidance against official USDA FNS sources before making compliance decisions."`,
          messages: newHistory,
        }),
      });

      const data  = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text
        || `Error: ${data.error?.message || data.error?.type || JSON.stringify(data)}`;

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages(m => [...m, { from: "ai", text: reply }]);
    } catch {
      setMessages(m => [...m, { from: "ai", text: "⚠️ Connection error. Please try again." }]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function handleSend() {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  }

  // ── DISCLAIMER GATE ────────────────────────────────────────────────────────
  if (screen === "chat" && !accepted) return (
    <>
      <GlobalCSS />
      <div style={S.gate}>
        <div style={S.gateCard}>
          <div style={S.gateHeader}>
            <LSLogo variant="gate" />
          </div>
          <div style={S.gateBody}>
            <div style={S.gateProduct}>
              <span style={S.productName}>CNPReg</span>
              <span style={S.productAI}>AI</span>
              <span style={S.productSub}>Child Nutrition Program Regulatory Intelligence</span>
            </div>
            <div style={S.disclaimerBox}>
              <div style={S.disclaimerTitle}>⚠️ Important — Please Read Before Proceeding</div>
              <p style={S.disclaimerText}>{DISCLAIMER_TEXT}</p>
            </div>
            <p style={S.acknowledgeText}>
              By clicking below, you acknowledge that AI responses may contain errors and agree
              to verify all regulatory guidance against official USDA FNS sources before making
              compliance or programmatic decisions.
            </p>
            <button style={S.gateBtn} onClick={() => setAccepted(true)}>
              I Understand — Open CNPReg AI →
            </button>
            <button style={S.gateBack} onClick={() => setScreen("landing")}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // ── LANDING ────────────────────────────────────────────────────────────────
  if (screen === "landing") return (
    <>
      <GlobalCSS />
      <div style={S.landing}>

        {/* NAV */}
        <nav style={S.nav}>
          <LSLogo variant="nav" />
          <div style={S.navRight}>
            <span style={S.freePill}>FREE TOOL</span>
            <button style={S.navLink} onClick={() => setShowModal(true)}>Disclaimer</button>
          </div>
        </nav>

        {/* HERO */}
        <div style={S.hero}>
          <div style={S.heroGrid} />
          <div style={S.heroInner}>
            <div style={S.heroBadge}>
              <span style={S.heroDot} />
              CHILD NUTRITION PROGRAMS · REGULATORY INTELLIGENCE
            </div>
            <h1 style={S.heroH1}>
              <span style={{ color: W }}>CNPReg</span>
              <span style={{ color: AL }}>AI</span>
            </h1>
            <p style={S.heroTagline}>
              Instant regulatory answers for state agency<br />
              Child Nutrition Program administrators.
            </p>
            <p style={S.heroSub}>
              Grounded in official Federal Register regulatory text across 10 CFR parts —
              cited, precise, and completely free.
            </p>
            <div style={S.heroCtas}>
              <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>
                Start Asking Questions →
              </button>

            </div>
            <div style={S.heroChecks}>
              {["No account required", "No subscription", "No cost — ever", "No data sold"].map(t => (
                <span key={t} style={S.heroCheck}>
                  <span style={{ color: AL, fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={S.heroPanel}>
            <div style={S.panelLabel}>SAMPLE QUERIES</div>
            {SAMPLE_QS.map((q, i) => (
              <div key={i} style={S.panelQ} onClick={() => setScreen("chat")}>
                <span style={{ color: A, fontWeight: 700, flexShrink: 0 }}>›</span>
                <span>{q}</span>
              </div>
            ))}
            <div style={{ margin: "18px 0", borderTop: `1px solid ${N2}` }} />
            <div style={S.panelLabel}>REGULATORY COVERAGE</div>
            {[
              "7 CFR Part 210 — NSLP",
              "7 CFR Part 215 — Special Milk Program",
              "7 CFR Part 220 — School Breakfast Program",
              "7 CFR Part 225 — Summer Food Service Program",
              "7 CFR Part 226 — CACFP",
              "7 CFR Part 227 — Nutrition Education",
              "7 CFR Part 235 — State Admin Expense",
              "7 CFR Part 240 — Cash in Lieu",
              "7 CFR Part 245 — Eligibility & Certification",
              "7 CFR Part 292 — Summer EBT",
              "Current as of April 13, 2026",
            ].map(l => (
              <div key={l} style={S.panelCovLine}>{l}</div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER STRIP */}
        <div style={S.warnStrip}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <span style={S.warnText}>
            <strong>AI Disclaimer:</strong> CNPReg AI may produce errors or omissions. Always
            verify regulatory guidance against official USDA FNS sources before making compliance
            decisions. Not legal advice.{" "}
            <button style={S.warnLink} onClick={() => setShowModal(true)}>
              Full disclaimer →
            </button>
          </span>
        </div>

        {/* HOW IT WORKS */}
        <div style={{ padding: "64px 0", background: W }}>
          <div style={S.inner}>
            <div style={S.eyebrow}>HOW IT WORKS</div>
            <h2 style={S.h2}>Built for precision. Designed for speed.</h2>
            <div style={S.cardGrid}>
              {[
                { n: "01", title: "Ask any regulatory question", body: "Type any question about meal patterns, eligibility, procurement, administrative reviews, civil rights, or program operations." },
                { n: "02", title: "Receive cited answers", body: "Responses reference exact CFR section numbers drawn directly from official Federal Register regulatory text — so you can trace every claim to its source." },
                { n: "03", title: "Verify before you act", body: "Use answers as a research accelerator. Always confirm against official USDA FNS regulations before making compliance decisions." },
              ].map(f => (
                <div key={f.n} style={S.featureCard}>
                  <div style={S.featureNum}>{f.n}</div>
                  <div style={S.featureTitle}>{f.title}</div>
                  <div style={S.featureBody}>{f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* FOOTER CTA */}
        <div style={{ background: N, padding: "56px 40px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(20px,3vw,30px)", color: W, marginBottom: 10 }}>
            Ready to get answers?
          </h2>
          <p style={{ color: "#8ab0c8", fontSize: 15, marginBottom: 28 }}>
            No login. No cost. Just regulatory intelligence.
          </p>
          <button style={S.ctaPrimary} onClick={() => setScreen("chat")}>
            Open CNPReg AI →
          </button>
        </div>

        {/* FOOTER */}
        <footer style={S.footer}>
          <LSLogo variant="footer" />
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <button style={S.footerLink} onClick={() => setShowModal(true)}>AI Disclaimer</button>
            {["·", "Not affiliated with USDA FNS", "·", "Not legal advice"].map((t, i) => (
              <span key={i} style={{ fontSize: 12, color: i % 2 === 0 ? N2 : TL }}>{t}</span>
            ))}
            <span style={{ fontSize: 12, color: N2 }}>·</span>
            <a href="https://www.LSDigitalSolutions.com" target="_blank" rel="noopener noreferrer" 
               style={{ fontSize: 12, color: TL, textDecoration: "none" }}>
              © 2026 LS Digital Solutions, LLC
            </a>
          </div>
        </footer>
      </div>

      {showModal && (
        <DisclaimerModal
          onClose={() => setShowModal(false)}
          onAccept={() => { setShowModal(false); setScreen("chat"); }}
        />
      )}
    </>
  );

  // ── CHAT ──────────────────────────────────────────────────────────────────
  return (
    <>
      <GlobalCSS />
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}`}</style>
      <div style={S.app}>

        {/* SIDEBAR */}
        {sidebarOpen && (
          <aside style={S.sidebar}>
            <div style={S.sideHeader}>
              <LSLogo variant="sidebar" />
            </div>
            <div style={S.sideProduct}>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: W }}>CNPReg</span>
              <span style={{ fontFamily: "'Georgia',serif", fontSize: 20, fontWeight: 700, color: AL }}>AI</span>
              <div style={{ fontSize: 10, color: TL, letterSpacing: 1, marginTop: 3 }}>Regulatory Intelligence</div>
            </div>
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>QUICK TOPICS</div>
            {TOPICS.map(t => (
              <button key={t} className="side-btn"
                onClick={() => sendMessage(`Explain the key regulatory requirements for: ${t}`)}
                disabled={loading}>
                <span style={{ color: A, marginRight: 4 }}>›</span>{t}
              </button>
            ))}
            <div style={S.sideDivider} />
            <div style={S.sideLabel}>KNOWLEDGE BASE</div>
            {["7 CFR Parts 210 · 215 · 220 · 225", "7 CFR Parts 226 · 227 · 235 · 240", "7 CFR Parts 245 · 292", "Current as of Apr 2026"].map(l => (
              <div key={l} style={{ fontSize: 10.5, color: "#8ab0c8", padding: "2px 16px", fontFamily: "monospace" }}>{l}</div>
            ))}
            <button style={S.sideWarnBtn} onClick={() => setShowModal(true)}>
              ⚠️ View Disclaimer
            </button>
          </aside>
        )}

        {/* MAIN */}
        <div style={S.main}>

          {/* TOP BAR */}
          <div style={S.topbar}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <button style={S.menuBtn} onClick={() => setSidebarOpen(o => !o)}>
                <span style={S.menuLine} /><span style={S.menuLine} /><span style={S.menuLine} />
              </button>
              <div>
                <div style={{ fontFamily: "'Georgia',serif", fontSize: 18, fontWeight: 700, color: W, lineHeight: 1 }}>
                  CNPReg<span style={{ color: AL }}>AI</span>
                </div>
                <div style={{ fontSize: 11, color: TL, letterSpacing: 0.5 }}>
                  Child Nutrition · Regulatory Assistant
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button style={S.topWarnBtn} onClick={() => setShowModal(true)}>⚠️ Disclaimer</button>
              <button style={S.topHomeBtn} onClick={() => setScreen("landing")}>Home</button>
            </div>
          </div>

          {/* MESSAGES */}
          <div style={S.messages}>
            {messages.length === 0 && (
              <div style={S.empty}>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: N }}>CNPReg</span>
                  <span style={{ fontFamily: "'Georgia',serif", fontSize: 36, fontWeight: 700, color: A }}>AI</span>
                </div>
                <h2 style={{ fontFamily: "'Georgia',serif", fontSize: 20, color: N, marginBottom: 10 }}>
                  What regulatory question can I help with?
                </h2>
                <p style={{ fontSize: 14, color: TM, lineHeight: 1.7, marginBottom: 22 }}>
                  Type any USDA Child Nutrition Program regulatory question. Answers are drawn
                  directly from official Federal Register regulatory text, current as of April 2026.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
                  {SAMPLE_QS.map(q => (
                    <button key={q} className="prompt-chip" onClick={() => sendMessage(q)} disabled={loading}>{q}</button>
                  ))}
                </div>
                <div style={S.emptyWarn}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>⚠️</span>
                  <span style={{ fontSize: 12, color: "#78350f", lineHeight: 1.6 }}>
                    AI may make mistakes. Verify all guidance against official USDA FNS sources
                    before making compliance decisions.
                  </span>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start", gap: 4 }}>
                {msg.from === "ai" && (
                  <span style={S.msgLabel}>CNPReg AI · LS Digital Solutions, LLC</span>
                )}
                <div
                  style={msg.from === "user" ? S.userBubble : S.aiBubble}
                  dangerouslySetInnerHTML={{
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br/>"),
                  }}
                />
                {msg.from === "user" && (
                  <span style={{ ...S.msgLabel, textAlign: "right" }}>You</span>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <span style={S.msgLabel}>CNPReg AI · LS Digital Solutions, LLC</span>
                <div style={S.aiBubble}>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "2px 0" }}>
                    {[0, 0.15, 0.3].map((d, i) => (
                      <span key={i} style={{
                        width: 7, height: 7, background: AL, borderRadius: "50%",
                        display: "inline-block",
                        animation: `bounce 1s ${d}s infinite ease-in-out`,
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div style={S.inputArea}>
            <div style={S.inputWrap}>
              <textarea
                ref={inputRef}
                style={S.textarea}
                placeholder="Ask a Child Nutrition Program regulatory question…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
                }}
                rows={2}
                disabled={loading}
              />
              <button
                style={{
                  ...S.sendBtn,
                  background: input.trim() && !loading ? A : "#1a3a5c",
                  cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                }}
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                ↑
              </button>
            </div>
            <div style={S.inputMeta}>
              <span>⚠️ AI may make mistakes · Verify with official USDA FNS sources · Shift+Enter for new line</span>
              <span style={{ color: AL, fontWeight: 600 }}>CNPReg AI · LS Digital Solutions, LLC</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DisclaimerModal
          onClose={() => setShowModal(false)}
          onAccept={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ── DISCLAIMER MODAL ─────────────────────────────────────────────────────────
function DisclaimerModal({ onClose, onAccept }) {
  return (
    <>
      <GlobalCSS />
      <div style={S.overlay}>
        <div style={S.modal}>
          <div style={S.modalHeader}>
            <span style={{ fontFamily: "'Georgia',serif", fontSize: 18, color: W }}>⚠️ AI Disclaimer</span>
            <button style={{ background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 20 }} onClick={onClose}>✕</button>
          </div>
          <div style={{ padding: "28px 28px 24px" }}>
            <p style={{ fontSize: 13.5, color: TM, lineHeight: 1.85, marginBottom: 18 }}>{DISCLAIMER_TEXT}</p>
            <div style={{ background: WB, border: `1px solid ${WBD}`, padding: "12px 16px", fontSize: 13, color: "#78350f", lineHeight: 1.65, marginBottom: 22 }}>
              By using CNPReg AI, you acknowledge that AI responses may contain errors and agree to
              verify all regulatory guidance against official USDA FNS sources before making
              compliance or programmatic decisions.
            </div>
            <button style={{ ...S.ctaPrimary, width: "100%", padding: 13, fontSize: 14 }} onClick={onAccept}>
              I Understand
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── GLOBAL CSS ────────────────────────────────────────────────────────────────
function GlobalCSS() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; }
      body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #f4f7fa; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-thumb { background: #c0d4e8; border-radius: 3px; }
      button { font-family: inherit; }
      textarea { font-family: inherit; }

      .side-btn {
        display: block; width: 100%; text-align: left;
        background: transparent; border: none; border-left: 2px solid transparent;
        color: #b8cfe0; padding: 6px 16px; font-size: 11.5px;
        cursor: pointer; transition: all 0.15s; margin-bottom: 1px;
      }
      .side-btn:hover:not(:disabled) {
        background: #0077b6;
        color: #ffffff;
        border-left-color: #4db8e8;
      }
      .side-btn:disabled { opacity: 0.4; cursor: not-allowed; }

      .prompt-chip {
        background: #e6f4fb; border: 1px solid #b3d9ef; color: #001e3c;
        padding: 8px 14px; font-size: 13px; cursor: pointer; transition: background 0.15s;
      }
      .prompt-chip:hover:not(:disabled) { background: #b3d9ef; }
      .prompt-chip:disabled { opacity: 0.5; cursor: not-allowed; }
    `}</style>
  );
}

// ── STYLE OBJECTS ─────────────────────────────────────────────────────────────
const S = {
  // GATE
  gate: { background: N3, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 },
  gateCard: { background: N, maxWidth: 560, width: "100%", border: `1px solid ${N2}`, borderTop: `4px solid ${A}`, boxShadow: "0 24px 80px rgba(0,0,0,0.5)" },
  gateHeader: { background: N3, padding: "24px 28px", borderBottom: `1px solid ${N2}`, display: "flex", justifyContent: "center" },
  gateLogo: { height: 48, objectFit: "contain" },
  gateBody: { padding: "28px 32px 32px" },
  gateProduct: { display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 0, marginBottom: 22 },
  productName: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: W },
  productAI: { fontFamily: "'Georgia',serif", fontSize: 28, fontWeight: 700, color: AL },
  productSub: { width: "100%", fontSize: 12, color: TL, letterSpacing: 1, marginTop: 2 },
  disclaimerBox: { background: WB, border: `1px solid ${WBD}`, borderLeft: `4px solid ${WN}`, padding: "16px 18px", marginBottom: 18 },
  disclaimerTitle: { fontSize: 12, fontWeight: 700, color: WN, marginBottom: 8, letterSpacing: 0.5 },
  disclaimerText: { fontSize: 12.5, color: "#78350f", lineHeight: 1.8 },
  acknowledgeText: { fontSize: 12.5, color: TL, lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 },
  gateBtn: { width: "100%", padding: 14, fontSize: 15, fontWeight: 700, background: A, color: W, border: "none", cursor: "pointer", marginBottom: 10, letterSpacing: 0.3 },
  gateBack: { width: "100%", background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13, padding: 8 },

  // LANDING
  landing: { background: OF, minHeight: "100vh" },
  nav: { background: N, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px", height: 68, borderBottom: `3px solid ${A}`, position: "sticky", top: 0, zIndex: 50 },
  navLogo: { height: 40, objectFit: "contain" },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  freePill: { fontSize: 10, color: AL, border: `1px solid ${A}`, padding: "3px 10px", fontWeight: 700, letterSpacing: 1.5 },
  navLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },
  navCta: { background: A, color: W, border: "none", padding: "10px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 },

  hero: { background: N, display: "flex", alignItems: "stretch", minHeight: 480, position: "relative", overflow: "hidden" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${N2} 1px, transparent 1px), linear-gradient(90deg, ${N2} 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.3, pointerEvents: "none" },
  heroInner: { flex: 1, padding: "64px 48px 64px", position: "relative", zIndex: 1 },
  heroBadge: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: AL, fontWeight: 700, letterSpacing: 2, marginBottom: 24 },
  heroDot: { width: 6, height: 6, background: AL, borderRadius: "50%", display: "inline-block" },
  heroH1: { fontFamily: "'Georgia',serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 700, letterSpacing: -1, marginBottom: 16, display: "flex" },
  heroTagline: { fontSize: "clamp(17px,2vw,22px)", color: W, fontFamily: "'Georgia',serif", fontStyle: "italic", marginBottom: 14, lineHeight: 1.4 },
  heroSub: { fontSize: 15, color: "#8ab0c8", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 },
  ctaPrimary: { background: A, color: W, border: "none", padding: "13px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3, transition: "background 0.2s" },
  ctaSecondary: { background: "transparent", color: W, border: `1.5px solid rgba(255,255,255,0.25)`, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer" },
  heroChecks: { display: "flex", flexWrap: "wrap", gap: "8px 22px" },
  heroCheck: { fontSize: 13, color: "#8ab0c8", display: "flex", alignItems: "center", gap: 6 },

  heroPanel: { width: 280, background: "rgba(0,10,25,0.6)", borderLeft: `1px solid ${N2}`, padding: "40px 24px", position: "relative", zIndex: 1, flexShrink: 0 },
  panelLabel: { fontSize: 9, letterSpacing: 3, color: TL, fontWeight: 700, marginBottom: 14 },
  panelQ: { fontSize: 12.5, color: "#8ab0c8", padding: "10px 0", borderBottom: `1px solid rgba(255,255,255,0.05)`, cursor: "pointer", display: "flex", gap: 8, lineHeight: 1.5 },
  panelCovLine: { fontSize: 11, color: TL, fontFamily: "monospace", marginBottom: 5, lineHeight: 1.5 },

  warnStrip: { background: WB, borderBottom: `1px solid ${WBD}`, padding: "12px 40px", display: "flex", alignItems: "flex-start", gap: 10 },
  warnText: { fontSize: 13, color: "#78350f", lineHeight: 1.6 },
  warnLink: { background: "none", border: "none", color: WN, fontWeight: 700, cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" },

  inner: { maxWidth: 960, margin: "0 auto", padding: "0 40px" },
  eyebrow: { fontSize: 10, letterSpacing: 3, color: A, fontWeight: 700, marginBottom: 10 },
  h2: { fontFamily: "'Georgia',serif", fontSize: "clamp(22px,3vw,32px)", color: N, marginBottom: 36 },
  cardGrid: { display: "flex", gap: 20, flexWrap: "wrap" },
  featureCard: { flex: 1, minWidth: 220, border: `1px solid ${BD}`, borderTop: `4px solid ${A}`, padding: "26px 22px", background: OF },
  featureNum: { fontFamily: "monospace", fontSize: 28, color: BD, fontWeight: 700, marginBottom: 10, lineHeight: 1 },
  featureTitle: { fontFamily: "'Georgia',serif", fontSize: 17, color: N, marginBottom: 10 },
  featureBody: { fontSize: 13.5, color: TM, lineHeight: 1.7 },
  topicTag: { background: AP, border: `1px solid #b3d9ef`, color: N, padding: "7px 14px", fontSize: 13, fontWeight: 500 },

  footer: { background: N3, padding: "20px 40px", borderTop: `1px solid ${N2}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
  footerLink: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 12 },

  // CHAT
  app: { display: "flex", height: "100vh", overflow: "hidden", background: OF },
  sidebar: { width: 240, background: N, display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto", borderRight: `2px solid ${A}` },
  sideHeader: { background: N3, padding: 16, borderBottom: `1px solid ${N2}`, display: "flex", justifyContent: "center" },
  sideLogo: { height: 36, objectFit: "contain" },
  sideProduct: { padding: "14px 16px 10px", borderBottom: `1px solid rgba(255,255,255,0.06)` },
  sideDivider: { height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" },
  sideLabel: { fontSize: 9, letterSpacing: 2.5, color: AL, fontWeight: 700, padding: "8px 16px 4px" },
  sideWarnBtn: { margin: "10px 10px 14px", background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "8px 12px", fontSize: 11.5, cursor: "pointer", textAlign: "left" },

  main: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  topbar: { background: N, borderBottom: `2px solid ${A}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 58, flexShrink: 0 },
  menuBtn: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4 },
  menuLine: { display: "block", width: 20, height: 2, background: "#8ab0c8" },
  topWarnBtn: { background: "rgba(180,83,9,0.1)", border: "1px solid rgba(180,83,9,0.3)", color: "#f59e0b", padding: "5px 12px", fontSize: 12, cursor: "pointer" },
  topHomeBtn: { background: "none", border: "none", color: TL, cursor: "pointer", fontSize: 13 },

  messages: { flex: 1, overflowY: "auto", padding: "28px 32px 12px", display: "flex", flexDirection: "column", gap: 20 },
  empty: { margin: "auto", textAlign: "center", maxWidth: 580 },
  emptyWarn: { background: WB, border: `1px solid ${WBD}`, borderLeft: `4px solid ${WN}`, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 8, textAlign: "left" },

  msgLabel: { fontSize: 10.5, color: TL, letterSpacing: 0.3 },
  userBubble: { background: N, color: W, padding: "12px 18px", maxWidth: "68%", fontSize: 14, lineHeight: 1.65 },
  aiBubble: { background: W, border: `1px solid ${BD}`, borderLeft: `3px solid ${A}`, padding: "14px 18px", maxWidth: "82%", fontSize: 14, color: N, lineHeight: 1.85 },

  inputArea: { background: W, borderTop: `1px solid ${BD}`, padding: "14px 20px 16px" },
  inputWrap: { display: "flex", gap: 10, alignItems: "flex-end", background: OF, border: `1.5px solid ${BD}`, padding: "10px 14px" },
  textarea: { flex: 1, background: "transparent", border: "none", outline: "none", resize: "none", color: N, fontSize: 14, lineHeight: 1.6, maxHeight: 120, overflowY: "auto" },
  sendBtn: { border: "none", color: W, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "background 0.2s" },
  inputMeta: { display: "flex", justifyContent: "space-between", fontSize: 11, color: TL, marginTop: 8, flexWrap: "wrap", gap: 4 },

  // MODAL
  overlay: { position: "fixed", inset: 0, background: "rgba(0,10,25,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 },
  modal: { background: W, maxWidth: 560, width: "100%", border: `3px solid ${A}`, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" },
  modalHeader: { background: N, padding: "18px 24px", borderBottom: `3px solid ${A}`, display: "flex", justifyContent: "space-between", alignItems: "center" },
};
