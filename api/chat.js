// Vercel Serverless Function — secure proxy for Gemini API
// Knowledge base and system instructions live here, never exposed to browser

const KB = `

======================================================================
7 CFR PART 210 — NSLP
Federal Register (current as of April 13, 2026)
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

§ 210.5 Payment process to States.

(4) *Annual adjustments for cash assistance for afterschool snacks. *The rates in paragraph (b)(3) of this section are the base rates established in August 1981 for the Child and Adult Care Food Program (CACFP). FNS will prescribe annual adjustments to these rates in the same Notice as the National Average Payment Rates for lunches. These adjustments will ensure that the reimbursement rates for afterschool snacks served under this part are the same as those implemented for afterschool snacks in the CACFP.

(c) *Assistance for the Commodity School Program. *FNS will make special cash assistance available to each State agency for lunches served in commodity schools in the same manner as special cash assistance is provided in the National School Lunch Program. Payment of such amounts to State agencies is subject to the reporting requirements contained in § 210.5(d). FNS will provide donated food assistance in accordance with part 250 of this chapter. Of the total value of donated food assistance to which it is entitled, the school food authority may elect to receive cash payments of up to 5 cents per lunch served in its commodity school(s) for donated foods processing and handling expenses. Such expenses include any expenses incurred by or on behalf of a commodity school for processing or other aspects of the preparation, delivery, and storage of donated foods. The school food authority may have all or part of these cash payments retained by the State agency for use on its behalf for processing and handling expenses by the State agency or it may authorize the State agency to transfer to the distributing agency all or any part of these payments for use on its behalf for these expenses. Payment of such amounts to State agencies is subject to the reporting requirements contained in § 210.5(d). The total value of donated food assistance is calculated on a school year basis by adding:

(1) The applicable national average payment rate (general cash assistance) prescribed by the Secretary for the period of July 1 through June 30 multiplied by the total number of lunches served during the school year under the Commodity School Program; and

(2) The national per lunch average value of donated foods prescribed by the Secretary for the period of July 1 through June 30 multiplied by the total number of lunches served during the school year under the Commodity School Program.

(a) *Grant award. *FNS will specify the terms and conditions of the State agency's grant in a grant award document and will generally make payments available by means of a Letter of Credit issued in favor of the State agency. The State agency shall obtain funds for reimbursement to participating school food authorities through procedures established by FNS in accordance with 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415. State agencies shall limit requests for funds to such times and amounts as will permit prompt payment of claims or authorized advances. The State agency shall disburse funds received from such requests without delay for the purpose for which drawn. FNS may, at its option, reimburse a State agency by Treasury Check. FNS will pay by Treasury Check with funds available in settlement of a valid claim if payment for that claim cannot be made within the grant closeout period specified in paragraph (d) of this section.

(b) *Cash-in-lieu of donated foods. *All Federal funds to be paid to any State in place of donated foods will be made available as provided in part 240 of this chapter.

*[53 FR 29147, Aug. 2, 1988, as amended at 54 FR 12580, Mar. 28, 1989; 56 FR 32939, July 17, 1991; 71 FR 39516, July 13, 2006; 77 FR 25034, Apr. 27, 2012; 79 FR 330, Jan. 3, 2014; 81 FR 50185, July 29, 2016; 81 FR 66488, Sept. 28, 2016; 88 FR 57844, Aug. 23, 2023]*

(c) *Recovery of funds. *FNS will recover any Federal funds made available to the State agency under this part which are in excess of obligations reported at the end of each fiscal year in accordance with the reconciliation procedures specified in paragraph (d) of this section. Such recoveries shall be reflected by a related adjustment in the State agency's Letter of Credit.

(d) *Substantiation and reconciliation process. *Each State agency shall maintain Program records as necessary to support the reimbursement payments made to school food authorities under §§ 210.7 and 210.8 and the reports submitted to FNS under this paragraph. The State agency shall ensure such records are retained for a period of 3 years or as otherwise specified in § 210.23(c).

(1) *Monthly report. *Each State agency shall submit a final Report of School Program Operations (FNS-10) to FNS for each month. The final reports shall be limited to claims submitted in accordance with § 210.8 of this part. For the month of October, the final report shall include the total number of children approved for free lunches, the total number of children approved for reduced price lunches, and the total number of children enrolled in participating public schools, private schools, and residential child care institutions, respectively, as of the last day of operation in October. The final reports shall be postmarked and/or submitted no later than 90 days following the last day of the month covered by the report. States shall not receive Program funds for any month for which the final report is not submitted within this time limit unless FNS grants an exception. Upward adjustments to a State's report shall not be made after 90 days from the month covered by the report unless authorized by FNS. Downward adjustments to a State's report shall always be made regardless of when it is determined that such adjustments are necessary. FNS authorization is not required for downward adjustments. Any adjustments to a State's report shall be reported to FNS in accordance with procedures established by FNS.

(2) *Quarterly report. *Each State agency administering the National School Lunch Program must submit to FNS a quarterly Financial Status Report (FNS-777) on the use of Program funds. Such reports must be postmarked and/or submitted no later than 30 days after the end of each fiscal year quarter.

(3) *End of year reports.*

(i) Each State agency must submit an annual report detailing the disbursement of performance-based cash assistance described in § 210.4(b)(1). The report must be submitted no later than 30 days after the end of each fiscal year. The report must include the total number of school food authorities in the State and the names of certified school food authorities. If all school food authorities in the State have been certified, the State agency is no longer required to submit the report.

(ii) Each State agency must submit a final Financial Status Report (FNS-777) for each fiscal year. This final fiscal year grant closeout report must be postmarked or submitted to FNS within 120 days after the end of each fiscal year or part thereof that the State agency administered the Program. Obligations must be reported only for the fiscal year in which they occur. FNS will not be responsible for reimbursing Program obligations reported later than 120 days after the close of the fiscal year in which they were incurred. Grant closeout procedures are to be carried out in accordance with 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415.

§ 210.6 Use of Federal funds.

*General. *State agencies shall use Federal funds made available under the Program to reimburse or make advance payments to school food authorities in connection with lunches and meal supplements served in accordance with the provisions of this part; *except that, *with the approval of FNS, any State agency may reserve an amount up to one percent of the funds earned in any fiscal year under this part for use in carrying out special developmental projects. Advance payments to school food authorities may be made at such times and in such amounts as are necessary to meet the current fiscal obligations. All Federal funds paid to any State in place of donated foods shall be used as provided in part 240 of this chapter.

*[53 FR 29147, Aug. 2, 1988, as amended at 58 FR 42487, Aug. 10, 1993]*

§ 210.7 Reimbursement for school food authorities.

(a) *General. *Reimbursement payments to finance nonprofit school food service operations will be made only to school food authorities operating under a written agreement with the State agency. Subject to the provisions of § 210.8(c), such payments may be made for lunches and afterschool snacks served in accordance with provisions of this part and part 245 of this chapter in the calendar month preceding the calendar month in which the agreement is executed. These reimbursement payments include general cash assistance for all lunches served to children under the National School Lunch Program and special cash assistance payments for free or reduced-price lunches served to children determined eligible for such benefits under the National School Lunch and Commodity School Programs. Reimbursement payments will also be made for afterschool snacks served to eligible children in afterschool care programs in accordance with the rates established in § 210.4(b)(3). Approval will be in accordance with part 245.

(b) *Assignment of rates. *At the beginning of each school year, State agencies shall establish the per meal rates of reimbursement for school food authorities participating in the Program. These rates of reimbursement may be assigned at levels based on financial need; *except that, *the rates are not to exceed the maximum rates of reimbursement established by the Secretary under § 210.4(b) and are to permit reimbursement for the total number of lunches in the State from funds available under § 210.4. Within each school food authority, the State agency shall assign the same rate of reimbursement from general cash assistance funds for all lunches served to children under the Program. Assigned rates of reimbursement may be changed at any time by the State agency, *provided that** *notice of any change is given to the school food authority. The total general and special cash assistance reimbursement paid to any school food authority for lunches served to children during the school year are not to exceed the sum of the products obtained by multiplying the total reported number of lunches, by type, served to eligible children during the school year by the applicable maximum per lunch reimbursements prescribed for the school year for each type of lunch.

(c) *Reimbursement limitations. *To be entitled to reimbursement under this part, each school food authority must ensure that Claims for Reimbursement are limited to the number of free, reduced price, and paid lunches and afterschool snacks that are served to children eligible for free, reduced price, and paid lunches and afterschool snacks, respectively, for each day of operation.

(1) *Lunch count system. *To ensure that the Claim for Reimbursement accurately reflects the number of lunches and afterschool snacks served to eligible children, the school food authority must, at a minimum:

(i) Correctly approve each child's eligibility for free and reduced price lunches and afterschool snacks based on the requirements prescribed under part 245 of this chapter;

(ii) Maintain a system to issue benefits and to update the eligibility of children approved for free or reduced price lunches and afterschool snacks. The system must:

(A) Accurately reflect eligibility status as well as changes in eligibility made after the initial approval process due to verification findings, transfers, reported changes in income or household size, etc.; and

(B) Make the appropriate changes in eligibility after the initial approval process on a timely basis so that the mechanism the school food authority uses to identify currently eligible children provides a current and accurate representation of eligible children. Changes in eligibility which result in increased benefit levels must be made as soon as possible but no later than 3 operating days of the date the school food authority makes the final decision on a child's eligibility status. Changes in eligibility which result in decreased benefit levels must be made as soon as possible but no later than 10 operating days of the date the school food authority makes the final decision on the child's eligibility status;

(iii) Base Claims for Reimbursement on lunch counts, taken daily at the point of service, which correctly identify the number of free, reduced price and paid lunches served to eligible children;

(iv) Correctly record, consolidate and report those lunch and afterschool snack counts on the Claim for Reimbursement; and

(v) Ensure that Claims for Reimbursement do not request payment for any excess lunches produced, as prohibited in *§ 210.10(a)(2), or non-Program lunches (i.e., *a la carte or adult lunches) or for more than one afterschool snack per child per day.

(2) *Point of service alternatives.*

(i) State agencies may authorize alternatives to the point of service lunch counts provided that such alternatives result in accurate, reliable counts of the number of free, reduced price and paid lunches served, respectively, for each serving day. State agencies are encouraged to issue guidance which clearly identifies acceptable point of service alternatives and instructions for proper implementation. School food authorities may select one of the State agency approved alternatives without prior approval.

(ii) In addition, on a case-by-case basis, State agencies may authorize school food authorities to use other alternatives to the point of service lunch count; provided that such alternatives result in an accurate and reliable lunch count system. Any request to use an alternative lunch counting method which has not been previously authorized under paragraph (2)(i) is to be submitted in writing to the State agency for approval. Such request shall provide detail sufficient for the State agency to assess whether the proposed alternative would provide an accurate and reliable count of the number of lunches, by type, served each day to eligible children. The details of each approved alternative shall be maintained on file at the State agency for review by FNS.

(d) *Performance-based cash assistance. *The State agency must provide performance-based cash assistance as authorized under § 210.4(b)(1) for lunches served in school food authorities certified by the State agency to be in compliance with meal pattern and nutrition requirements set forth in § 210.10 and, if the school food authority participates in the School Breakfast Program (part 220 of this chapter), § 220.8 of

*[53 FR 29147, Aug. 2, 1988, as amended at 54 FR 12581, Mar. 28, 1989; 56 FR 32939, July 17, 1991; 58 FR 42487, Aug. 10, 1993; 60 FR 31207, June 13, 1995; 65 FR 26912, May 9, 2000; 77 FR 25034, Apr. 27, 2012; 79 FR 330, Jan. 3, 2014; 81 FR 50185, July 29, 2016; 88 FR 57844, Aug. 23, 2023; 89 FR 32063, Apr. 25, 2024]*

§ 210.8 Claims for reimbursement.

this chapter, as applicable. State agencies must establish procedures to certify school food authorities for performance-based cash assistance in accordance with guidance established by FNS. Such procedures must ensure State agencies:

(1) Make certification procedures readily available to school food authorities and provide guidance necessary to facilitate the certification process.

(2) Require school food authorities to submit documentation to demonstrate compliance with meal pattern requirements set forth in § 210.10 and § 220.8 of this chapter, as applicable. Such documentation must reflect meal service at or about the time of certification.

(3) State agencies must review certification documentation submitted by the school food authority to ensure compliance with meal pattern requirements set forth in § 210.10, or § 220.8 of this chapter, as applicable. For certification purposes, State agencies should consider any school food authority compliant:

(i) If when evaluating daily and weekly range requirements for grains and meat/meat alternates, the certification documentation shows compliance with the daily and weekly minimums for these two components, regardless of whether the school food authority has exceeded the maximums for the same components.

(ii) If when evaluating the service of frozen fruit, the school food authority serves products that contain added sugar.

(4) Certification procedures must ensure that no performance-based cash assistance is provided to school food authorities for meals served prior to October 1, 2012.

(5) Within 60 calendar days of a certification submission or as otherwise authorized by FNS, review submitted materials and notify school food authorities of the certification determination, the date that performance-based cash assistance is effective, and consequences for non-compliance,

(6) Disburse performance-based cash assistance for all lunches served beginning with the start of certification provided that documentation reflects meal service in the calendar month the certification materials are submitted or, in the month preceding the calendar month of submission.

(e) *Reimbursements for **afterschool** snacks. *The State agency will reimburse the school food authority for afterschool snacks served in eligible schools (as defined in § 210.10(o)(1)) operating afterschool care programs under the National School Lunch Program (NSLP) in accordance with the rates established in § 210.4(b).

(a) *Internal controls. *The school food authority shall establish internal controls which ensure the accuracy of meal counts prior to the submission of the monthly Claim for Reimbursement. At a minimum, these internal controls shall include: an on-site review of the meal counting and claiming system employed by each school within the jurisdiction of the school food authority; comparisons of daily free, reduced price

and paid meal counts against data which will assist in the identification of meal counts in excess of the number of free, reduced price and paid meals served each day to children eligible for such meals; and a system for following up on those meal counts which suggest the likelihood of meal counting problems.

(1) *On-site reviews. *Every school year, each school food authority with more than one school shall perform no less than one on-site review of the counting and claiming system and the readily observable general areas of review cited under § 210.18(h), as prescribed by FNS for each school under its jurisdiction. The on-site review shall take place prior to February 1 of each school year. Further, if the review discloses problems with a school's meal counting or claiming procedures or general review areas, the school food authority shall: ensure that the school implements corrective action; and, within 45 days of the review, conducts a follow-up on-site review to determine that the corrective action resolved the problems. Each on-site review shall ensure that the school's claim is based on the counting system authorized by the State agency under § 210.7(c) of this part and that the counting system, as implemented, yields the actual number of reimbursable free, reduced price and paid meals, respectively, served for each day of operation.

(2) *School food authority claims **review** process. *Prior to the submission of a monthly Claim for Reimbursement, each school food authority shall review the lunch count data for each school under its jurisdiction to ensure the accuracy of the monthly Claim for Reimbursement. The objective of this review is to ensure that monthly claims include only the number of free, reduced price and paid lunches served on any day of operation to children currently eligible for such lunches.

(i) Any school food authority that was found by its most recent administrative review conducted in accordance with § 210.18, to have no meal counting and claiming violations may:

(A) Develop internal control procedures that ensure accurate meal counts. The school food authority shall submit any internal controls developed in accordance with this paragraph to the State agency for approval and, in the absence of specific disapproval from the State agency, shall implement such internal controls. The State agency shall establish procedures to promptly notify school food authorities of any modifications needed to their proposed internal controls or of denial of unacceptable submissions. If the State agency disapproves the proposed internal controls of any school food authority, it reserves the right to require the school food authority to comply with the provisions of paragraph (a)(3) of this section; or

(B) Comply with the requirements of paragraph (a)(3) of this section.

(ii) Any school food authority that was identified in the most recent administrative review conducted in accordance with § 210.18, or in any other oversight activity, as having meal counting and claiming violations shall comply with the requirements in paragraph (a)(3) of this section.

(3) *Edit checks.*

(i) The following procedure shall be followed for school food authorities identified in paragraph (a)(2)(ii) of this section, by other school food authorities at State agency option, or, at their own option, by school food authorities identified in paragraph (a)(2)(i) of this section: the school food authority shall compare each school's daily counts of free, reduced price and paid lunches against the product of the number of children in that school currently eligible for free, reduced price and paid lunches, respectively, times an attendance factor.

(ii) School food authorities that are identified in administrative reviews conducted in accordance with § 210.18 as not having meal counting and claiming violations and that are correctly complying with the procedures in paragraph (a)(3)(i) of this section have the option of developing internal controls in accordance with paragraph (a)(2)(i) of this section.

(4) *Follow-up activity. *The school food authority shall promptly follow-up through phone contact, on-site visits or other means when the internal controls used by schools in accordance with paragraph (a)(2)(i) of this section or the claims review process used by schools in accordance with paragraphs (a)(2)(ii) and (a)(3) of this section suggest the likelihood of lunch count problems. When problems or errors are identified, the lunch counts shall be corrected prior to submission of the monthly Claim for Reimbursement. Improvements to the lunch count system shall also be made to ensure that the lunch counting system consistently results in lunch counts of the actual number of reimbursable free, reduced price and paid lunches served for each day of operation.

(5) *Recordkeeping. *School food authorities shall maintain on file, each month's Claim for Reimbursement and all data used in the claims review process, by school. Records shall be retained as specified in § 210.23(c) of this part. School food authorities shall make this information available to the Department and the State agency upon request.

(b) *Monthly claims. *To be entitled to reimbursement under this part, each school food authority shall submit to the State agency, a monthly Claim for Reimbursement, as described in paragraph (c) of this section.

(1) *Submission timeframes. *A final Claim for Reimbursement shall be postmarked or submitted to the State agency not later than 60 days following the last day of the full month covered by the claim. State agencies may establish shorter deadlines at their discretion. Claims not postmarked and/or submitted within 60 days shall not be paid with Program funds unless otherwise authorized by FNS.

(2) *State agency claims **review** process. *The State agency shall review each school food authority's Claim for Reimbursement, on a monthly basis, in an effort to ensure that monthly claims are limited to the number of free and reduced price lunches served, by type, to eligible children.

(i) The State agency shall, at a minimum, compare the number of free and reduced price lunches claimed to the number of children approved for free and reduced price lunches enrolled in the school food authority for the month of October times the days of operation times the attendance factor employed by the school food authority in accordance with paragraph (a)(3) of this section or the internal controls used by schools in accordance with paragraph (a)(2)(i) of this section. At its discretion, the State agency may conduct this comparison against data which reflects the number of children approved for free and reduced price lunches for a more current month(s) as collected pursuant to paragraph (c)(2) of this section.

(ii) In lieu of conducting the claims review specified in paragraph (b)(2)(i) of this section, the State agency may conduct alternative analyses for those Claims for Reimbursement submitted by residential child care institutions. Such alternatives analyses shall meet the objective of ensuring that the monthly Claims for Reimbursement are limited to the numbers of free and reduced price lunches served, by type, to eligible children.

(3) *Follow-up activity. *The State agency shall promptly follow-up through phone contact, on-site visits, or other means when the claims review process suggests the likelihood of lunch count problems.

(4) *Corrective action. *The State agency shall promptly take corrective action with respect to any Claim for Reimbursement which includes more than the number of lunches served, by type, to eligible children. In taking corrective action, State agencies may make adjustments on claims filed within the

*[53 FR 29147, Aug. 2, 1988, as amended at 54 FR 12581, Mar. 28, 1989; 56 FR 32940, July 17, 1991; 58 FR 42487, Aug. 10, 1993; 60 FR 31207, June 13, 1995; 64 FR 50740, Sept. 20, 1999; 81 FR 50185, July 29, 2016; 89 FR 32064, Apr. 25, 2024]*

Subpart C—Requirements for School Food Authority Participation

60-day deadline if such adjustments are completed within 90 days of the last day of the claim month and are reflected in the final Report of School Program Operations (FNS-10) for the claim month required under § 210.5(d) of this part. Upward adjustments in Program funds claimed which are not reflected in the final FNS-10 for the claim month shall not be made unless authorized by FNS. Except that, upward adjustments for the current and prior fiscal years resulting from any review or audit may be made, at the discretion of the State agency. Downward adjustments in amounts claimed shall always be made, without FNS authorization, regardless of when it is determined that such adjustments are necessary.

(c) *Content of claim. *The Claim for Reimbursement must include data in sufficient detail to justify the reimbursement claimed and to enable the State agency to provide the Report of School Program Operations required under § 210.5(d). Such data must include, at a minimum, the number of free, reduced price, and paid lunches and afterschool snacks served to eligible children. The claim must be signed by a school food authority official.

(1) *Consolidated claim. *The State agency may authorize a school food authority to submit a consolidated Claim for Reimbursement for all schools under its jurisdiction, provided that, the data on each school's operations required in this section are maintained on file at the local office of the school food authority and the claim separates consolidated data for commodity schools from data for other schools. Unless otherwise approved by FNS, the Claim for Reimbursement for any month must include only lunches and afterschool snacks served in that month except if the first or last month of Program operations for any school year contains 10 operating days or less, such month may be combined with the Claim for Reimbursement for the appropriate adjacent month. However, Claims for Reimbursement may not combine operations occurring in two fiscal years. If a single State agency administers any combination of the Child Nutrition Programs, a school food authority will be able to use a common claim form with respect to claims for reimbursement for meals served under those programs.

(2) *October data. *For the month of October, the State agency must also obtain, either through the Claim for Reimbursement or other means, the total number of children approved for free lunches and afterschool snacks, the total number of children approved for reduced price lunches and afterschool snacks, and the total number of children enrolled in the school food authority as of the last day of operation in October. The school food authority must submit this data to the State agency no later than December 31 of each year. State agencies may establish shorter deadlines at their discretion. In addition, the State agency may require school food authorities to provide this data for a more current month if for use in the State agency claims review process.

(d) *Advance funds. *The State agency may advance funds available for the Program to a school food authority in an amount equal to the amount of reimbursement estimated to be needed for one month's operation. Following the receipt of claims, the State agency will make adjustments, as necessary, to ensure that the total amount of payments received by the school food authority for the fiscal year does not exceed an amount equal to the number of lunches and afterschool snacks by reimbursement type served to children times the respective payment rates assigned by the State in accordance with § 210.7(b). The State agency must recover advances of funds to any school food authority failing to comply with the 60-day claim submission requirements in paragraph (b) of this section.

§ 210.9 Agreement with State agency.

(a) *Application. *An official of a school food authority shall make written application to the State agency for any school in which it desires to operate the Program. Applications shall provide the State agency with sufficient information to determine eligibility. The school food authority shall also submit for approval a Free and Reduced Price Policy Statement in accordance with part 245 of this chapter.

(b) *Agreement. *Each school food authority approved to participate in the program shall enter into a written agreement with the State agency that may be amended as necessary. Nothing in the preceding sentence shall be construed to limit the ability of the State agency to suspend or terminate the agreement in accordance with § 210.25. If a single State agency administers any combination of the Child Nutrition Programs, that State agency shall provide each school food authority with a single agreement with respect to the operation of those programs. The agreement shall contain a statement to the effect that the “School Food Authority and participating schools under its jurisdiction, shall comply with all provisions of 7 CFR parts 210 and 245.” This agreement shall provide that each school food authority shall, with respect to participating schools under its jurisdiction:

(1) Maintain a nonprofit school food service and observe the requirements for and limitations on the use of nonprofit school food service revenues set forth in § 210.14 and the limitations on any competitive school food service as set forth in § 210.11;

(2) Limit its net cash resources to an amount that does not exceed 3 months average expenditures for its nonprofit school food service or such other amount as may be approved in accordance with § 210.19(a);

(3) Maintain a financial management system as prescribed under § 210.14(c);

(4) Comply with the requirements of the Department's regulations regarding financial management (2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415);

(5) Serve lunches, during the lunch period, which meet the minimum requirements prescribed in § 210.10;

(6) Price the lunch as a unit;

(7) Serve lunches free or at a reduced price to all children who are determined by the local educational agency to be eligible for such meals under 7 CFR part 245;

(8) Claim reimbursement at the assigned rates only for reimbursable free, reduced price and paid lunches served to eligible children in accordance with 7 CFR part 210. Agree that the school food authority official signing the claim shall be responsible for reviewing and analyzing meal counts to ensure accuracy as specified in § 210.8 governing claims for reimbursement. Acknowledge that failure to submit accurate claims will result in the recovery of an overclaim and may result in the withholding of payments, suspension or termination of the program as specified in § 210.25. Acknowledge that if failure to submit accurate claims reflects embezzlement, willful misapplication of funds, theft, or fraudulent activity, the penalties specified in § 210.26 shall apply;

(9) Count the number of free, reduced price and paid reimbursable meals served to eligible children at the point of service, or through another counting system if approved by the State agency;

(10) Submit Claims for Reimbursement in accordance with § 210.8;

(11) Comply with the requirements of the Department's regulations regarding nondiscrimination (7 CFR parts 15, 15a, 15b);

(12) Make no discrimination against any child because of his or her eligibility for free or reduced price meals in accordance with the approved Free and Reduced Price Policy Statement;

(13) Enter into an agreement to receive donated foods as required by 7 CFR part 250;

(14) Maintain, in the storage, preparation and service of food, proper sanitation and health standards in conformance with all applicable State and local laws and regulations, and comply with the food safety requirements of § 210.13;

(15) Accept and use, in as large quantities as may be efficiently utilized in its nonprofit school food service, such foods as may be offered as a donation by the Department;

(16) Maintain necessary facilities for storing, preparing and serving food;

(17) Upon request, make all accounts and records pertaining to its school food service available to the State agency and to FNS, for audit or review, at a reasonable time and place. Such records shall be retained for a period of 3 years after the date of the final Claim for Reimbursement for the fiscal year to which they pertain, except that if audit findings have not been resolved, the records shall be retained beyond the 3 year period as long as required for resolution of the issues raised by the audit;

(18) Maintain files of currently approved and denied free and reduced price certification documentation.

(19) Maintain direct certification documentation obtained directly from the appropriate State or local agency, or other appropriate individual, as specified by FNS, indicating that:

(i) A child in the *Family, *as defined in § 245.2 of this chapter, is receiving benefits from *SNAP, FDPIR *or *TANF, *as defined in § 245.2 of this chapter; if one child is receiving such benefits, all children in that family are considered to be directly certified;

(ii) The child is a homeless child as defined in § 245.2 of this chapter;

(iii) The child is a runaway child as defined in § 245.2 of this chapter;

(iv) The child is a migrant child as defined in § 245.2 of this chapter;

(v) The child is a Head Start child as defined in § 245.2 of this chapter; or

(vi) The child is a foster child as defined in § 245.2 of this chapter.

(20) Retain eligibility documentation submitted by families for a period of 3 years after the end of the fiscal year to which they pertain or as otherwise specified under paragraph (b)(17) of this section.

(21) No later than December 31 of each year, provide the State agency with a list of all schools under its jurisdiction in which 50 percent or more of enrolled children have been determined eligible for free or reduced price meals as of the last operating day the preceding October. The State agency may designate a month other than October for the collection of this information, in which case the list must be provided to the State agency within 60 calendar days following the end of the month designated by the State agency. In addition, each school food authority must provide, when available for the schools under its jurisdiction, and upon the request of a sponsoring organization of day care homes of the Child and Adult Care Food Program, information on the boundaries of the attendance areas for the schools identified as having 50 percent or more of enrolled children certified eligible for free or reduced price meals.

(c) *Afterschool care requirements. *Those school food authorities with eligible schools (as defined in § 210.10(o)(1)) that elect to serve afterschool snacks during afterschool care programs, must agree to:

*[53 FR 29147, Aug. 2, 1988]*

§ 210.10 Meal requirements for lunches and requirements for afterschool snacks.

(1) Serve afterschool snacks which meet the minimum requirements prescribed in § 210.10;

(2) Price the afterschool snack as a unit;

(3) Serve afterschool snacks free or at a reduced price to all children who are determined by the school food authority to be eligible for free or reduced price school meals under part 245 of this chapter;

(4) If charging for meals, the charge for a reduced price afterschool snack must not exceed 15 cents;

(5) Claim reimbursement at the assigned rates only for afterschool snacks served in accordance with the agreement;

(6) Claim reimbursement for no more than one afterschool snack per child per day;

(7) Review each afterschool care program two times a year; the first review must be made during the first four weeks that the school is in operation each school year, except that an afterschool care program operating year round must be reviewed during the first four weeks of its initial year of operation, once more during its first year of operation, and twice each school year thereafter; and

(8) Comply with all requirements of this part, except that, claims for reimbursement need not be based on “point of service” afterschool snack counts (as required by § 210.9(b)(9)).

(a) *General requirements *—

(1) *General nutrition requirements. *Schools must offer nutritious, well-balanced, and age-appropriate meals to all the children they serve to improve their diets and safeguard their health.

(i) *Requirements for lunch. *School lunches offered to children age 5 or older must meet, at a minimum, the meal requirements in paragraph (b) of this section. Schools must follow a food-based menu planning approach and produce enough food to offer each child the quantities specified in the meal pattern established in paragraph (c) of this section for each age/grade group served in the school. In addition, school lunches must meet the dietary specifications in paragraph (f) of this section. Schools offering lunches to children ages 1 through 4 and infants must meet the meal pattern requirements in paragraphs (p) and (q) of this section, as applicable. Schools must make plain potable water available and accessible without restriction to children at no charge in the place(s) where lunches are served during the meal service.

(ii) *Requirements for **afterschool** snacks. *Schools offering afterschool snacks in afterschool care programs must meet the meal pattern requirements in paragraph (o) of this section. Schools must plan and produce enough food to offer each child the minimum quantities under the meal pattern in paragraph (o) of this section.

(2) *Unit pricing. *Schools must price each meal as a unit. Schools need to consider participation trends in an effort to provide one reimbursable lunch and, if applicable, one reimbursable afterschool snack for each child every school day. If there are leftover meals, schools may offer them to the students but cannot get Federal reimbursement for them. Schools must identify, near or at the beginning of

Editorial Note: For FEDERAL REGISTER citations affecting § 210.9, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

the serving line(s), the food items that constitute the unit-priced reimbursable school meal(s). The price of a reimbursable lunch does not change if the student does not take a food item or requests smaller portions.

(3) *Production and menu records. *Schools or school food authorities, as applicable, must keep production and menu records for the meals they produce. These records must show how the meals offered contribute to the required meal components and food quantities for each age/grade group every day. Schools or school food authorities must maintain records of the latest nutritional analysis of the school menus conducted by the State agency. Information on maintaining production and menu records may be found in FNS guidance.

(b) *Meal requirements for school lunches. *School lunches for children ages 5 and older must reflect food and nutrition requirements specified by the Secretary. Compliance with these requirements is measured as follows:

(1) On a daily basis:

(i) Meals offered to each age/grade group must include the meal components and food quantities specified in the meal pattern in paragraph (c) of this section; and

(ii) The meal selected by each student must have the number of meal components required for a reimbursable meal and include at least one fruit or vegetable.

(2) Over a 5-day school week:

(i) Average calorie content of meals offered to each age/grade group must be within the minimum and maximum calorie levels specified in paragraph (f) of this section;

(ii) Average saturated fat content of the meals offered to each age/grade group must be less than 10 percent of total calories;

(iii) By July 1, 2027, average added sugars content of the meals offered to each age/grade group must be less than 10 percent of total calories; and

(iv) Average sodium content of the meals offered to each age/grade group must not exceed the maximum level specified in paragraph (f) of this section.

TABLE 1 TO PARAGRAPH (c) INTRODUCTORY TEXT—NATIONAL SCHOOL LUNCH

PROGRAM MEAL PATTERN

Meal components

Amount of food 1 per week (minimum per day)

Grades K-5 Grades 6-8 Grades 9-12

Fruits (cups) 2 21⁄2 (1⁄2) 21⁄2 (1⁄2) 5 (1)

Vegetables (cups) 2 33⁄4 (3⁄4) 33⁄4 (3⁄4) 5 (1)

Dark Green Subgroup 3 1⁄2 1⁄2

1⁄2

Red/Orange Subgroup 3 3⁄4 3⁄4 11⁄4

Beans, Peas, and Lentils Subgroup 3 1⁄2 1⁄2

1⁄2

Starchy Subgroup 3 1⁄2 1⁄2

1⁄2

Other Vegetables Subgroup 3 4 1⁄2 1⁄2

3⁄4

Additional Vegetables from Any Subgroup to Reach Total

1 1 11⁄2

Grains (oz. eq.) 5 8-9 (1) 8-10 (1) 10-12 (2)

Meats/Meat Alternates (oz. eq.) 6 8-10 (1) 9-10 (1) 10-12 (2)

Fluid Milk (cups) 7 5 (1) 5 (1) 5 (1)

DIETARY SPECIFICATIONS: DAILY AMOUNT BASED ON THE AVERAGE FOR A 5-DAY WEEK 8

Minimum-Maximum Calories (kcal) 550-650 600-700 750-850 *1 Food items included in each group and subgroup and amount equivalents. 2 Minimum creditable serving is 1⁄8 cup. **One quarter-cup** of dried fruit counts as 1⁄2 cup of fruit; 1 cup of leafy greens counts as 1⁄2 cup of vegetables. No more than half of the fruit or vegetable offerings may be in the form of juice. All juice must be 100 percent full-strength. 3 Larger amounts of these vegetables may be served. 4 This subgroup consists of “Other vegetables” as defined in paragraph (c)(2)(ii)(E) of this section. For the purposes of the NSLP, the “Other vegetables” requirement may be met with any additional amounts from the dark green, red/orange, and bean, peas, and lentils vegetable subgroups as defined in paragraph (c)(2)(ii) of this section. 5 Minimum creditable serving is 0.25 oz. eq. At least 80 percent of grains offered weekly (by ounce equivalents) must be whole **grain-rich** as defined in § 210.2 and the remaining grains items offered must be enriched. 6 Minimum creditable serving is 0.25 oz. eq. 7 Minimum creditable serving is 8 fluid ounces. All fluid milk must be fat-free (skim) or low-fat (1 percent fat or less) and must meet the requirements in paragraph (d) of this section. 8 By July 1, 2027, schools must meet the dietary specification for added sugars. **Schools must meet the sodium limits by the dates specified in this chart. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

(c) *Meal pattern for school lunches. *Schools must offer the meal components and quantities required in the lunch meal pattern established in the following table:

Meal components

Amount of food 1 per week (minimum per day)

Grades K-5 Grades 6-8 Grades 9-12

Saturated Fat (% of total calories) <10 <10 <10

Added Sugars (% of total calories) <10 <10 <10

Sodium Limit: In place through June 30, 2027 

Sodium Limit: Must be implemented by July 1, 2027 *1 Food items included in each group and subgroup and amount equivalents. 2 Minimum creditable serving is 1⁄8 cup. **One quarter-cup** of dried fruit counts as 1⁄2 cup of fruit; 1 cup of leafy greens counts as 1⁄2 cup of vegetables. No more than half of the fruit or vegetable offerings may be in the form of juice. All juice must be 100 percent full-strength. 3 Larger amounts of these vegetables may be served. 4 This subgroup consists of “Other vegetables” as defined in paragraph (c)(2)(ii)(E) of this section. For the purposes of the NSLP, the “Other vegetables” requirement may be met with any additional amounts from the dark green, red/orange, and bean, peas, and lentils vegetable subgroups as defined in paragraph (c)(2)(ii) of this section. 5 Minimum creditable serving is 0.25 oz. eq. At least 80 percent of grains offered weekly (by ounce equivalents) must be whole **grain-rich** as defined in § 210.2 and the remaining grains items offered must be enriched. 6 Minimum creditable serving is 0.25 oz. eq. 7 Minimum creditable serving is 8 fluid ounces. All fluid milk must be fat-free (skim) or low-fat (1 percent fat or less) and must meet the requirements in paragraph (d) of this section. 8 By July 1, 2027, schools must meet the dietary specification for added sugars. Schools must meet the sodium limits by the dates specified in this chart. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

(1) *Age/grade groups. *Schools must plan menus for students using the following age/grade groups: Grades K-5 (ages 5-10), grades 6-8 (ages 11-13), and grades 9-12 (ages 14-18). If an unusual grade configuration in a school prevents the use of these established age/grade groups, students in grades K-5 and grades 6-8 may be offered the same food quantities at lunch provided that the calorie and sodium standards for each age/grade group are met. No customization of the established age/ grade groups is allowed.

(2) *Meal components. *Schools must offer students in each age/grade group the meal components specified in this paragraph (c).

(i) *Fruits component. *Schools must offer fruits daily as part of the lunch menu. Fruits that are fresh, frozen, or dried, or canned in light syrup, water or fruit juice may be offered to meet the requirements of this paragraph (c)(2)(i). All fruits are credited based on their volume as served, except that 1⁄4 cup of dried fruit counts as 1⁄2 cup of fruit. Only pasteurized, full-strength fruit juice may be offered, and may be credited to meet no more than one-half of the fruits component.

(ii) *Vegetables component. *Schools must offer vegetables daily as part of the lunch menu. Fresh, frozen, or canned vegetables and dry beans, peas, and lentils may be offered to meet this requirement. All vegetables are credited based on their volume as served, except that 1 cup of leafy greens counts as 1⁄2 cup of vegetables and tomato paste and puree are credited based on calculated volume of the whole food equivalency. Pasteurized, full-strength vegetable juice may be offered to meet no more than one-half of the vegetables component. Vegetable offerings at lunch over the course of the week must include the following vegetable subgroups, as defined in this section in the quantities specified in the meal pattern in paragraph (c) of this section:

(A) *Dark green vegetables subgroup. *This subgroup includes vegetables such as bok choy, broccoli, collard greens, dark green leafy lettuce, kale, mesclun, mustard greens, romaine lettuce, spinach, turnip greens, and watercress;

(B) *Red/orange vegetables subgroup. *This subgroup includes vegetables such as acorn squash, butternut squash, carrots, pumpkin, tomatoes, tomato juice, and sweet potatoes;

(C) *Beans, peas, and lentils vegetable subgroup. *This subgroup includes vegetables such as black beans, black-eyed peas (mature, dry), garbanzo beans (chickpeas), kidney beans, lentils, navy beans pinto beans, soybeans, split peas, and white beans. Cooked dry beans, peas, and lentils may be counted as either a vegetable or as a meat alternate but not as both in the same dish. When offered toward the protein sources component, beans, peas, and lentils may count toward the weekly beans, peas, and lentils vegetable subgroup requirement, but may not count toward the daily or weekly vegetable component requirement;

(D) *Starchy vegetables subgroup. *This subgroup includes vegetables such as black-eyed peas (not dry), corn, cassava, green bananas, green peas, green lima beans, plantains, taro, water chestnuts, and white potatoes; and

(E) *Other vegetables subgroup. *This subgroup includes all other fresh, frozen, and canned vegetables, cooked or raw, such as artichokes, asparagus, avocados, bean sprouts, beets, Brussels sprouts, cabbage, cauliflower, celery, cucumbers, eggplant, green beans, green peppers, iceberg lettuce, mushrooms, okra, onions, parsnips, turnips, wax beans, and zucchini.

(iii) *Grains component. *Schools must offer grains daily as part of the lunch menu.

(A) *Whole grain-rich requirement. *Whole grain-rich is the term designated by FNS to indicate that the grain content of a product is between 50 and 100 percent whole grain with any remaining grains being enriched. At least 80 percent of grains offered at lunch weekly must, based on ounce equivalents, meet the whole grain-rich criteria as defined in § 210.2, and the remaining grain items offered must be enriched.

(B) *Breakfast cereals. *By July 1, 2025, breakfast cereals must contain no more than 6 grams of added sugars per dry ounce.

(C) *Desserts. *Schools may count up to two ounce equivalents of grain-based desserts per week toward meeting the grains requirement at lunch. Information on crediting grain-based desserts may be found in FNS guidance.

(D) *Daily and weekly servings. *The grains component is based on minimum daily servings plus total servings over a 5-day school week. Schools serving lunch 6 or 7 days per week must increase the weekly grains quantity by approximately 20 percent (1⁄5) for each additional day. When schools operate less than 5 days per week, they may decrease the weekly quantity by approximately 20 percent (1⁄5) for each day less than 5.

(iv) *Meats/meat alternates component. *Schools must offer meats/meat alternates daily as part of the lunch meal pattern. The quantity of the meat/meat alternate must be the edible portion as served. This component must be served in a main dish or in a main dish and only one other food item. Schools without daily choices in this component should not serve any one meat/ meat alternate or form of meat/meat alternate (for example, ground, diced, pieces) more than three times in the same week. If a portion size of this component does not meet the daily requirement for a particular age/grade group, schools may supplement it with another meat/ meat alternate to meet the full requirement. Schools may adjust the daily quantities of this component provided that a minimum of one ounce is offered daily to students in grades K-8 and a minimum of two ounces is offered daily to students in grades 9-12, and the total weekly requirement is met over a 5-day period. Information on crediting meats/meat alternates may be found in FNS guidance.

(A) *Enriched macaroni. *Enriched macaroni with fortified protein as defined in appendix A to this part may be used to meet part of the meats/meat alternates requirement when used as specified in appendix A to this part. An enriched macaroni product with fortified protein as defined in appendix A to this part may be used to meet part of the meats/meat alternates component or the grains component but may not meet both food components in the same lunch.

(B) *Nuts and seeds. *Nuts and seeds and their butters are allowed as a meat alternate. Acorns, chestnuts, and coconuts do not credit as meat alternates because of their low protein and iron content. Nut and seed meals or flours may credit only if they meet the requirements for Alternate Protein Products established in appendix A to this part.

(C) *Yogurt. *Yogurt may be offered to meet all or part of the meats/meat alternates component. Yogurt may be plain or flavored, unsweetened or sweetened. By July 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). Noncommercial and/or non-standardized yogurt products, such as frozen yogurt, drinkable yogurt products, homemade yogurt, yogurt flavored products, yogurt bars, yogurt covered fruits and/or nuts or similar products are not creditable. Four ounces (weight) or 1⁄2 cup (volume) of yogurt is one ounce equivalent of meats/meat alternates.

(D) *Tofu and soy products. *Commercial tofu and soy products may be offered to meet all or part of the meats/meat alternates component. Noncommercial and/or non-standardized tofu and soy products are not creditable.

(E) *Beans, peas, and lentils. *Cooked dry beans, peas, and lentils may be offered to meet all or part of the meats/meat alternates component. Beans, peas, and lentils are identified in this section and include foods such as black beans, garbanzo beans, lentils, kidney beans, mature lima beans, navy beans, pinto beans, and split peas. Cooked dry beans, peas, and lentils may be counted as either a vegetable or as a meat alternate but not as both in the

same dish. When offered as a meat alternate, beans, peas, and lentils may count toward the weekly beans, peas, and lentils vegetable subgroup requirement, but may not count toward the daily or weekly vegetable component requirements.

(F) *Other meat alternates. *Other meat alternates, such as cheese and eggs, may be used to meet all or part of the meats/meat alternates component.

(v) *Fluid milk component. *Fluid milk must be offered daily in accordance with paragraph (d) of this section.

(3) *Grain substitutions.*

(i) Schools in American Samoa, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands may serve any vegetable, including vegetables such as breadfruit, prairie turnips, plantains, sweet potatoes, and yams, to meet the grains component.

(ii) School food authorities and schools that are tribally operated, operated by the Bureau of Indian Education, and that serve primarily American Indian or Alaska Native children, may serve any vegetable, including vegetables such as breadfruit, prairie turnips, plantains, sweet potatoes, and yams, to meet the grains component.

(4) *Adjustments to school menus. *Schools must adjust future menu cycles to reflect production and how often food items are offered. Schools may need to change the foods offerings given students' selections and may need to modify recipes and other specifications to make sure that meal requirements are met.

(5) *Standardized recipes. *All schools must develop and follow standardized recipes. A standardized recipe is a recipe that was tested to provide an established yield and quantity using the same ingredients for both measurement and preparation methods. Standardized recipes developed by USDA/FNS are in the Child Nutrition Database. If a school has its own recipes, they may seek assistance from the State agency or school food authority to standardize the recipes. Schools must add any local recipes to their local databases. Additional information may be found in FNS guidance.

(6) *Processed foods. *The Child Nutrition Database includes a number of processed foods. Schools may use purchased processed foods that are not in the Child Nutrition Database. Schools or the State agency must add any locally purchased processed foods to their local database. The State agencies must obtain the levels of calories, saturated fat, added sugars, and sodium in the processed foods. Additional information may be found in FNS guidance.

(7) *Traditional Indigenous foods. *Traditional Indigenous foods may credit toward the required meal components. Information on food crediting may be found in FNS guidance. Schools are encouraged to serve traditional Indigenous foods as part of their lunch and afterschool snack service. Per the Agriculture Improvement Act of 2014, as amended (25 U.S.C. 1685(b)(5)) traditional foods means food that has traditionally been prepared and consumed by an American Indian tribe, including wild game meat; fish; seafood; marine mammals; plants; and berries.

(d) *Fluid milk requirements *—

(1) *Types of fluid milk.*

TABLE 2 TO PARAGRAPH (d)(2)(ii)—NUTRIENT REQUIREMENTS FOR FLUID MILK

SUBSTITUTES

Nutrient Per cup

(8 fl. oz.)

Calcium 276 mg.

Protein 8 g.

Vitamin A 150 mcg. retinol activity equivalents (RAE).

Vitamin D 2.5 mcg.

Magnesium 24 mg.

Phosphorus 222 mg.

Potassium 349 mg.

(i) Schools must offer students a variety (at least two different options) of fluid milk at lunch daily. All milk must be fat-free (skim) or low-fat (1 percent fat or less). Milk with higher fat content is not creditable. Low-fat or fat-free lactose-free and reduced-lactose fluid milk may also be offered.

(ii) All fluid milk served in the Program must be pasteurized fluid milk which meets State and local standards for such milk. All fluid milk must have vitamins A and D at levels specified by the Food and Drug Administration and must be consistent with State and local standards for such milk.

(iii) Milk varieties may be unflavored or flavored, provided that unflavored milk is offered at each meal service. By July 1, 2025, flavored milk must contain no more than 10 grams of added sugars per 8 fluid ounces, or for flavored milk sold as competitive food for middle and high schools, 15 grams of added sugars per 12 fluid ounces.

(2) *Fluid milk substitutes for non-disability reasons. *School food authorities may offer fluid milk substitutes to students with dietary needs that are not disabilities. For disability-related meal modifications, see paragraph (m) of this section.

(i) Prior to providing a fluid milk substitute for a non-disability reason, a school food authority must obtain a written request from the student's parent or guardian, a State licensed healthcare professional, or a registered dietitian that identifies the reason for the substitute. A school food authority choosing to offer fluid milk substitutes for a non-disability reason is not required to offer the specific fluid milk substitutes requested but may offer the fluid milk substitutes of its choice, provided the fluid milk substitutes offered meet the requirements of paragraph (d)(2)(ii) of this section. A school food authority must inform the State agency if any schools choose to offer fluid milk substitutes for non-disability reasons.

(ii) If a school food authority chooses to offer one or more fluid milk substitutes for non-disability reasons, the fluid milk substitutes must provide, at a minimum, the nutrients listed in the following table. Fluid milk substitutes must be fortified in accordance with fortification guidelines issued by the Food and Drug Administration.

Nutrient Per cup

(8 fl. oz.)

Riboflavin 0.44 mg.

Vitamin B-12 1.1 mcg.

(iii) Expenses incurred when providing fluid milk substitutes that exceed program reimbursements must be paid by the school food authority; costs may be paid from the nonprofit school food service account.

(iv) The fluid milk substitute approval must remain in effect until the student's parent or guardian, the State licensed healthcare professional, or the registered dietitian revokes the request in writing, or until the school food authority changes its fluid milk substitute policy.

(3) *Inadequate fluid milk supply. *If a school food authority cannot get a supply of fluid milk, it can still participate in the Program under the following conditions:

(i) If emergency conditions temporarily prevent a school food authority that normally has a supply of fluid milk from obtaining delivery of such milk, the State agency may allow the school food authority to serve meals during the emergency period with an alternate form of fluid milk or without fluid milk.

(ii) If a school food authority is unable to obtain a supply of any type of fluid milk on a continuing basis, the State agency may approve the service of meals without fluid milk if the school food authority uses an equivalent amount of canned milk or dry milk in the preparation of the meals. In Alaska, American Samoa, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands, if a sufficient supply of fluid milk cannot be obtained, “fluid milk” includes reconstituted or recombined fluid milk, or as otherwise allowed by FNS through a written exception.

(4) *Restrictions on the sale of fluid milk. *A school food authority participating in the Program, or a person approved by a school food authority participating in the Program, must not directly or indirectly restrict the sale or marketing of fluid milk (as identified in paragraph (d)(1) of this section) at any time or in any place on school premises or at any school-sponsored event.

(e) *Offer versus serve for grades K through 12. *School lunches must offer daily the five meal components specified in the meal pattern in paragraph (c) of this section. Under offer versus serve, students must be allowed to decline two components at lunch, *except that *the students must select at least 1/2 cup of either the fruit or vegetable component. Senior high schools (as defined by the State educational agency) must participate in offer versus serve. Schools below the senior high level may participate in offer versus serve at the discretion of the school food authority.

(f) *Dietary specifications *—

TABLE 3 TO PARAGRAPH (f)(1)—NATIONAL SCHOOL LUNCH PROGRAM CALORIE

RANGES

Grades K-5 Grades 6-8 Grades 9-12

Average Daily Minimum-Maximum Calories (kcal) 1 550-650 600-700 750-850 *1 The average daily calories must fall within the minimum and maximum levels. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

TABLE 4 TO PARAGRAPH (f)(4)—NATIONAL SCHOOL LUNCH PROGRAM SODIUM

LIMITS

Age/grade group

Sodium limit: in place through June 30, 2027

(mg)

Sodium limit: must be implemented by July 1, 2027

(mg)

Grades K-5 

Grades 6-8 

Grades 9-12 

(1) *Calories. *School lunches offered to each age/grade group must meet, on average over the school week, the minimum and maximum calorie levels specified in the following table:

(2) *Saturated fat. *School lunches offered to all age/grade groups must, on average over the school week, provide less than 10 percent of total calories from saturated fat.

(3) *Added sugars. *By July 1, 2027, school lunches offered to all age/grade groups must, on average over the school week, provide less than 10 percent of total calories from added sugars.

(4) *Sodium. *School lunches offered to each age/grade group must meet, on average over the school week, the sodium limits specified in the following table within the established deadlines:

(g) *Compliance assistance. *The State agency and school food authority must provide technical assistance and training to assist schools in planning lunches that meet the meal pattern in paragraph (c) of this section; the dietary specifications established in paragraph (f) of this section; and the meal pattern requirements in paragraphs (o) through (q) of this section, as applicable. Compliance assistance may be offered during trainings, onsite visits, and/or administrative reviews.

(h) *Monitoring dietary specifications. *When required by the Administrative Review process set forth in § 210.18, the State agency must conduct a weighted nutrient analysis to evaluate the average levels of calories, saturated fat, added sugars, and sodium of the lunches offered to students in grades K-12 during one week of the review period. The nutrient analysis must be conducted in accordance with the

procedures established in paragraph (i)(3) of this section. If the results of the nutrient analysis indicate that school lunches do not meet the specifications for calories, saturated fat, added sugars, and sodium specified in paragraph (f) of this section, the State agency or school food authority must provide technical assistance and require the reviewed school to take corrective action to meet the requirements.

(i) *Nutrient analyses of school meals *—

(1) *Conducting **the nutrient** analysis. *Any nutrient analysis, whether conducted by the State agency under § 210.18 or by the school food authority, must be performed in accordance with the procedures established in paragraph (i)(3) of this section. The purpose of the nutrient analysis is to determine the average levels of calories, saturated fat, added sugars, and sodium in the meals offered to each age grade group over a school week. The weighted nutrient analysis must be performed as required by FNS guidance.

(2) *Software elements *—

(i) *The Child Nutrition Database. *The nutrient analysis is based on the USDA Child Nutrition Database. This database is part of the software used to do a nutrient analysis. Software companies or others developing systems for schools may contact FNS for more information about the database.

(ii) *Software evaluation. *FNS or an FNS designee evaluates any nutrient analysis software before it may be used in schools. FNS or its designee determines if the software, as submitted, meets the minimum requirements. The approval of software does not mean that FNS or USDA endorses it. The software must be able to perform a weighted average analysis after the basic data is entered. The combined analysis of the lunch and breakfast programs is not allowed.

(3) *Nutrient analysis procedures *—

(i) *Weighted averages. *The nutrient analysis must include all foods offered as part of the reimbursable meals during one week within the review period. Foods items are included based on the portion sizes and serving amounts. They are also weighted based on their proportionate contribution to the meals offered. This means that food items offered more frequently are weighted more heavily than those not offered as frequently. The weighted nutrient analysis must be performed as required by FNS guidance.

(ii) *Analyzed nutrients. *The analysis determines the average levels of calories, saturated fat, added sugars, and sodium in the meals offered over a school week. It includes all food items offered by the reviewed school over a one-week period.

(4) *Comparing the results of the nutrient analysis. *Once the procedures in paragraph (i)(3) of this section are completed, State agencies must compare the results of the analysis to the calorie, saturated fat, added sugars, and sodium levels established in § 210.10 or § 220.8 of this chapter, as appropriate, for each age/grade group to evaluate the school's compliance with the dietary specifications.

(j) *Responsibility for monitoring meal requirements. *Compliance with the meal requirements in paragraph (b) of this section, including the dietary specifications, and paragraphs (o) through (q) of this section, as applicable, will be monitored by the State agency through administrative reviews authorized in § 210.18.

(k) *Menu choices at lunch *—

(1) *Availability of choices. *Schools may offer children a selection of nutritious foods within a reimbursable lunch to encourage the consumption of a variety of foods. Children who are eligible for free or reduced price lunches must be allowed to take any reimbursable lunch or any choices offered as part of a reimbursable lunch. Schools may establish different unit prices for each reimbursable lunch offered provided that the benefits made available to children eligible for free or reduced price lunches are not affected.

(2) *Opportunity to select. *Schools that choose to offer a variety of reimbursable lunches, or provide multiple serving lines, must make all required meal components available to all students, on every lunch line, in at least the minimum required amounts.

(l) *Requirements for lunch periods *—

(1) *Timing. *Schools must offer lunches meeting the requirements of this section during the period the school has designated as the lunch period. Schools must offer lunches between 10 a.m. and 2 p.m. Schools may request an exemption from these times from the State agency. With State agency approval, schools may serve lunches to children under age 5 over two service periods. Schools may divide quantities and food items offered each time any way they wish.

(2) *Adequate lunch periods. *FNS encourages schools to provide sufficient lunch periods that are long enough to give all students adequate time to be served and to eat their lunches.

(m) *Modifications and variations in reimbursable meals and afterschool snacks *—

(1) *Modifications for disability reasons. *School food authorities must make meal modifications, including substitutions in lunches and afterschool snacks, for children with a disability and whose disability restricts their diet. The modification requested must be related to the disability or limitations caused by the disability and must be offered at no additional cost to the child or household.

(i) In order to receive Federal reimbursement when a modified meal does not meet the meal pattern requirements specified in this section, the school food authority must obtain from the household a written medical statement signed by a State licensed healthcare professional. By July 1, 2025, school food authorities must also accept a medical statement signed by a registered dietitian. The medical statement must provide sufficient information about the child's dietary restrictions, such as foods to be omitted and recommended alternatives, if appropriate. Modified meals that meet the meal pattern requirements in this section are reimbursable with or without a medical statement.

(ii) School food authorities must ensure that parents, guardians, and children have notice of the procedure for requesting meal modifications for disabilities and the process for procedural safeguards related to meal modifications for disabilities. See §§ 15b.6(b) and 15b.25 of this title.

(iii) Expenses incurred when making meal modifications that exceed program reimbursement rates must be paid by the school food authority; costs may be paid from the nonprofit food service account.

(2) *Variations for non-disability reasons. *School food authorities should consider children's dietary preferences when planning and preparing meals and afterschool snacks. Any variations must be consistent with the meal pattern requirements specified under this section. Expenses incurred from meal pattern variations that exceed program reimbursement rates must be paid by the school food authority; costs may be paid from the nonprofit food service account.

(3) *Exceptions for natural disasters. *If there is a natural disaster or other catastrophe, FNS may temporarily allow school food authorities to serve meals for reimbursement that do not meet the requirements in this section.

(n) *Nutrition disclosure. *To the extent that school food authorities identify foods in a menu, or on the serving line or through other communications with program participants, school food authorities must identify products or dishes containing more than 30 parts fully hydrated alternate protein products (as specified in appendix A of this part) to less than 70 parts beef, pork, poultry or seafood on an uncooked basis, in a manner which does not characterize the product or dish solely as beef, pork, poultry or seafood. Additionally, FNS encourages schools to inform the students, parents, and the public about efforts they are making to meet the meal requirements for school lunches.

(o) *Afterschool snacks. *Eligible schools operating afterschool care programs may be reimbursed for one afterschool snack served to a child (as defined in § 210.2) per day.

(1) *Eligible schools *means schools that:

(i) Operate the National School Lunch Program; and

(ii) Sponsor afterschool care programs as defined in § 210.2.

(2) *Afterschool snack requirements for K-12 children *—

(i) *Afterschool snacks served to K through 12 children. *Schools serving afterschool snacks to K-12 children must serve the meal components and quantities required in the snack meal pattern established for the Child and Adult Care Food Program, under § 226.20 of this chapter. In addition, schools serving afterschool snacks to K-12 children must comply with the requirements set forth in paragraphs (a), (c)(3) and (4), (d)(2) through (4), (g), and (m) of this section, as applicable, and § 226.20(d) of this chapter.

TABLE 5 TO PARAGRAPH (o)(2)(ii)—AFTERSCHOOL SNACK MEAL PATTERN FOR

K-12 CHILDREN

[AGES 6-18] [SELECT TWO OF THE FIVE COMPONENTS FOR A REIMBURSABLE SNACK]

Meal components 1 Minimum quantities 2

Fluid milk 3 8 fluid ounces.

Meats/meat alternates 4 1 ounce equivalent.

Vegetables 5 3⁄4 cup.

Fruits 5 3⁄4 cup.

Grains 6 1 ounce equivalent. *1 Must serve two of the five components for a reimbursable afterschool snack. Only one of the two components may be a beverage. 2 May **need** to serve larger portions to children ages 13 through 18 to meet their nutritional needs. 3 Must be fat-free (skim) or low-fat (1 percent fat or less). Milk may be unflavored or flavored. 4 Alternate protein products must meet the requirements in appendix A to part 226 of this chapter. Yogurt must contain no more than 12 grams of added **sugars** per 6 ounces (2 grams of added **sugars** per ounce). Information on crediting meats/meat alternates may be found in FNS guidance. 5 Juice must be pasteurized, full-strength juice. No more than half of the weekly fruit or vegetable offerings may be in the form of juice. 6 At least 80 percent of grains offered weekly (by ounce equivalents) must be whole grain-rich, as defined in § 210.2, and the remaining grains items offered must be enriched. Grain-based desserts may not be used to meet the grains requirement. Breakfast cereal must have no more than 6 grams of added **sugars** per dry ounce. Information on crediting grain items may be found in FNS guidance.*

(ii) *Afterschool snack meal pattern table for K through 12 children. *Through June 30, 2025, afterschool snacks must either follow the requirements outlined in the following table or must contain two different components from the following four: fluid milk, meats/meat alternates, vegetable or fruit, and/or grains. By July 1, 2025, the minimum amounts of meal components to be served at afterschool snack are as follows:

(3) *Afterschool snack requirements for preschoolers *—

(i) *Afterschool snacks served to preschoolers. *Schools serving afterschool snacks to preschoolers must serve the food components and quantities required in the snack meal pattern established for the Child and Adult Care Food Program, under § 226.20 of this chapter. In addition, schools serving afterschool snacks to preschoolers must comply with the requirements set forth in paragraphs (a), (c)(3) and (4), (d)(2) through (4), (g), and (m) of this section, as applicable, and § 226.20(d) of this chapter.

TABLE 5 TO PARAGRAPH (o)(3)(ii)—AFTERSCHOOL SNACK MEAL PATTERN FOR

PRESCHOOLERS

[SELECT TWO OF THE FIVE COMPONENTS FOR A REIMBURSABLE SNACK]

Meal components 1 Minimum quantities

Ages 1-2 Ages 3-5

Fluid milk 2 4 fluid ounces 4 fluid ounces.

Meats/meat alternates 3 1⁄2 ounce equivalent 1⁄2 ounce equivalent.

Vegetables 4 1⁄2 cup 1⁄2 cup.

Fruits 4 1⁄2 cup 1⁄2 cup.

Grains 5 1⁄2 ounce equivalent 1⁄2 ounce equivalent. *1 Must serve two of the five components for a reimbursable afterschool snack. Only one of the two components may be a beverage. 2 Must be unflavored whole milk for children age one. Must be unflavored low-fat (1 percent) or unflavored fat-free (skim) milk for children two through five years old. 3 Alternate protein products must meet the requirements in appendix A to part 226 of this chapter. Through September 30, 2025, yogurt must contain no more than 23 grams of total sugars per 6 ounces. By October 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). Information on crediting meats/meat alternates may be found in FNS guidance. 4 Pasteurized full-strength juice may only be offered to meet the vegetable or fruit requirement **at** one meal, including **snack**, per day. 5 At least one serving per day, across all eating occasions, must be whole **grain-rich**. Grain-based desserts do not count toward meeting the grains requirement. Through September 30, 2025, breakfast cereals must contain no more than 6 grams of total sugars **per dry ounce. By October 1, 2025, breakfast cereals must contain no more than 6 grams of added **sugars** per dry ounce.*

(ii) *Preschooler **afterschool** snack meal pattern table. *The minimum amounts of food components to be served at afterschool snack are as follows:

(4) *Afterschool snack requirements for infants *—

(i) *Afterschool snacks served to infants. *Schools serving afterschool snacks to infants ages birth through 11 months must serve the meal components and quantities required in the snack meal pattern established for the Child and Adult Care Food Program, under § 226.20 of this chapter. In addition, schools serving afterschool snacks to infants must comply with the requirements set forth in paragraphs (a), (c)(3) and (4), (g), and (m) of this section, as applicable, and § 226.20(d) of this chapter.

TABLE 6 TO PARAGRAPH (o)(4)(II)—INFANT AFTERSCHOOL SNACK MEAL PATTERN

Birth through 5 months 6 through 11 months

4-6 fluid ounces of breast milk 1 or formula 2

2-4 fluid ounces breast milk 1 or formula; 2 and

0-1⁄2 ounce equivalent bread; 3 4 or

0-1⁄4 ounce equivalent crackers; 3 4 or

0-1⁄2 ounce equivalent infant cereal; 2 4 or

0-1⁄4 ounce equivalent ready-to-eat breakfast cereal; 3 4 5

6 and

0-2 tablespoons vegetable or fruit, or a combination of both.6 7

*1 Breast milk or formula, or portions of both, must be served; however, it is recommended that breast milk be served from birth through 11 months. For some breastfed infants who regularly consume less than the minimum amount of breast milk per feeding, a serving of less than the minimum amount of breast milk may be offered, with additional breast milk offered **at a later time** if the infant will consume more. 2 Infant **formula** and dry infant cereal must be iron-fortified. 3 A serving of grains must be whole grain-rich, enriched meal, enriched flour, bran, or germ. 4 Information on crediting grain items may be found in FNS guidance. 5 Through September 30, 2025, breakfast cereals must contain no more than 6 **grams of total sugars per dry ounce. By October 1, 2025, breakfast cereals must contain no more than 6 grams of added **sugars** per dry ounce. 6 A serving of this component is required when the infant is developmentally ready to accept it. 7 Fruit and vegetable juices must not be served.*

(ii) *Infant **afterschool** snack meal pattern table. *The minimum amounts of meal components to be served at snack are as follows:

(5) *Monitoring afterschool snacks. *Compliance with the requirements of this paragraph (o)(5) is monitored by the State agency as part of the Administrative Review conducted under § 210.18. If snacks offered do not meet the requirements of this paragraph, the State agency or school food authority must provide technical assistance and require corrective action and when applicable, must take fiscal action, as authorized in §§ 210.18(l) and 210.19(c).

(p) *Lunch requirements for preschoolers *—

(1) *Lunches served to preschoolers. *Schools serving lunches to preschoolers under the National School Lunch Program must serve the meal components and quantities required in the lunch meal pattern established for the Child and Adult Care Food Program, under § 226.20(a), (c)(2), and (d) of this chapter. In addition, schools serving lunches to this age group must comply with the requirements set forth in paragraphs (a), (c)(3) and (4), (d)(2) through (4), (g), and (k) through (m) of this section.

TABLE 7 TO PARAGRAPH (p)(2)—PRESCHOOL LUNCH MEAL PATTERN

[SELECT THE APPROPRIATE COMPONENTS FOR A REIMBURSABLE MEAL]

Meal components and food items 1 Minimum quantities

Ages 1-2 Ages 3-5

Fluid milk 4 fluid ounces 2 6 fluid ounces 3.

Meats/meat alternates 4 1 ounce equivalent 11⁄2 ounce equivalents.

Vegetables 5 1⁄8 cup 1⁄4 cup.

Fruits 5 1⁄8 cup 1⁄4 cup.

Grains 6 1⁄2 ounce equivalent 1⁄2 ounce equivalent. *1 Must serve all five components for a reimbursable meal. 2 Must serve unflavored whole milk to children age 1. 3 Must serve unflavored milk to children 2 through 5 years old. The milk must be fat-free, skim, low-fat, or **1 percent or less. 4 Alternate protein products must meet the requirements in appendix A to part 226 of this chapter. Through September 30, 2025, yogurt must contain no more than 23 grams of total sugars per 6 ounces. By October 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). Information on crediting meats/meat alternates may be found in FNS guidance. 5 Juice must be pasteurized. Full-strength juice may only be offered to meet the vegetable or fruit requirement at one meal or **snack,** per day. Vegetables may be offered to meet the entire fruits requirement. When two vegetables are served at lunch or supper, two different kinds of vegetables must be served. 6 Must serve at least one whole grain-rich serving, across all eating occasions, per day. Grain-based desserts may not be offered to meet the grains requirement. Through September 30, 2025, breakfast cereals must contain no more than 6 grams of total sugars per dry ounce. By October 1, 2025, breakfast cereal must have no more than 6 grams of added sugars per dry ounce. Information on crediting grain items may be found in FNS guidance.*

(2) *Preschooler lunch meal pattern table. *The minimum amounts of meal components to be served at lunch are as follows:

(q) *Lunch requirements for infants *—

(1) *Lunches served to infants. *Schools serving lunches to infants ages birth through 11 months under the National School Lunch Program must serve the meal components and quantities required in the lunch meal pattern established for the Child and Adult Care Food Program, under § 226.20(a), (b), and (d) of this chapter. In addition, schools serving lunches to infants must comply with the requirements set forth in paragraphs (a), (c)(3) and (4), (g), (l), and (m) of this section.

TABLE 8 TO PARAGRAPH (q)(2)—INFANT LUNCH MEAL PATTERN

Birth through 5 months 6 through 11 months

4-6 fluid ounces breast milk 1 or formula 2

6-8 fluid ounces breast milk 1 or formula; 2 and 0- 1⁄2 ounce equivalent infant cereal; 2 3 or

0-4 tablespoons meat, fish, poultry, whole egg, cooked dry beans, peas, or lentils; or

0-2 ounces of cheese; or

0-4 ounces (volume) of cottage cheese; or

0-4 ounces or 1⁄2 cup of yogurt; 4 or a combination of the above; 5 and

0-2 tablespoons vegetable or fruit, or a combination of both.5 6

*1 Breast milk or formula, or portions of both, must be served; however, it is recommended that breast milk be served from birth through 11 months. For some breastfed infants who regularly consume less than the minimum amount of breast milk per feeding, a serving of less than the minimum amount of breast milk may be offered, with additional breast milk offered **at a later time** if the infant will consume more. 2 Infant **formula** and dry infant cereal must be iron-fortified. 3 Information on crediting grain items may be found in FNS guidance. 4 Through September 30, 2025, yogurt must contain no more than 23 grams of total sugars per 6 ounces. By October 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). 5 A serving of this component is required when the infant is developmentally ready to accept it. 6 Fruit and vegetable juices must not be served.*

*[77 FR 4143, Jan. 26, 2012, as amended at 78 FR 13448, Feb. 28, 2013; 78 FR 39090, June 28, 2013; 81 FR 24372, Apr. 25, 2016; 81 FR 50185, July 29, 2016; 81 FR 75671, Nov. 1, 2016; 82 FR 56713, Nov. 30, 2017; 83 FR 63789, Dec. 12, 2018; 84 FR 50289, Sept. 25, 2019; 85 FR 7853, Feb. 12, 2020; 85 FR 74847, Nov. 24, 2020; 86 FR 57544, Oct. 18, 2021; 87 FR 4126, Jan. 27, 2022; 87 FR 7005, Feb. 7, 2022; 87 FR 47331, Aug. 3, 2022; 87 FR 52329, Aug. 25, 2022; 89 FR 32065, Apr. 25, 2024]*

§ 210.11 Competitive food service and standards.

(2) *Infant lunch meal pattern table. *The minimum amounts of meal components to be served at lunch are as follows:

(r) *Severability. *If any provision of this section is held to be invalid or unenforceable by its terms, or as applied to any person or circumstances, it shall be severable from this section and not affect the remainder thereof. In the event of such holding of invalidity or unenforceability of a provision, the meal pattern requirement covered by that provision reverts to the version that immediately preceded the invalidated provision.

(a) *Definitions. *For the purpose of this section:

(1) *Combination foods *means products that contain two or more components representing two or more of the recommended food groups: fruit, vegetable, dairy, protein or grains.

(2) *Competitive food *means all food and beverages other than meals reimbursed under programs authorized by the Richard B. Russell National School Lunch Act and the Child Nutrition Act of 1966 available for sale to students on the *School** campus *during the *School** day.*

(3) *Entrée item *means an item that is intended as the main dish in a reimbursable meal and is either:

(i) A combination food of a meat/meat alternate and a grain;

(ii) A combination food of a vegetable or fruit and a meat/meat alternate;

(iii) A meat/meat alternate alone with the exception of yogurt, low-fat or reduced fat cheese, nuts, seeds and nut or seed butters, and meat snacks (such as dried beef jerky); or

(iv) A grain only entrée that is served as the main dish in a school breakfast.

(4) *School campus *means, for the purpose of competitive food standards implementation, all areas of the property under the jurisdiction of the school that are accessible to students during the school day.

(5) *School day *means, for the purpose of competitive food standards implementation, the period from the midnight before, to 30 minutes after the end of the official school day.

(6) *Paired exempt foods *mean food items that have been designated as exempt from one or more of the nutrient requirements individually which are packaged together without any additional ingredients. Such “paired exempt foods” retain their individually designated exemption for total fat, saturated fat, and/or sugar when packaged together and sold but are required to meet the designated calorie and sodium standards specified in §§ 210.11(i) and (j) at all times.

(7) *Bean dip *means, for the purpose of competitive food standards, a spread made from ground pulses (beans, peas, and/or lentils), along with one or more of the following optional ingredients:

(i) Ground nut/seed butter (such as tahini [ground sesame] or peanut butter).

(ii) Vegetable oil (such as olive oil, canola oil, soybean oil).

(iii) Seasoning (such as salt, citric acid).

(iv) Vegetables and juice for flavor (such as olives, roasted pepper, garlic, lemon juice).

(v) For manufactured bean dip, contains ingredients necessary as preservatives and/or to maintain freshness.

(b) *General requirements for competitive food.*

(1) *State and local educational agency policies. *State agencies and/or local educational agencies must establish such policies and procedures as are necessary to ensure compliance with this section. State agencies and/or local educational agencies may impose additional restrictions on competitive foods, provided that they are not inconsistent with the requirements of this part.

(2) *Recordkeeping. *The local educational agency is responsible for the maintenance of records that document compliance with the nutrition standards for all competitive food available for sale to students in areas under its jurisdiction that are outside of the control of the school food authority responsible for the service of reimbursable school meals. In addition, the local educational agency is

responsible for ensuring that organizations designated as responsible for food service at the various venues in the schools maintain records in order to ensure and document compliance with the nutrition requirements for the foods and beverages sold to students at these venues during the school day as required by this section. The school food authority is responsible for maintaining records documenting compliance with these for foods sold under the auspices of the nonprofit school food service. At a minimum, records must include receipts, nutrition labels and/or product specifications for the competitive food available for sale to students.

(3) *Applicability. *The nutrition standards for the sale of competitive food outlined in this section apply to competitive food for all programs authorized by the Richard B. Russell National School Lunch Act and the Child Nutrition Act of 1966 operating on the school campus during the school day.

(4) *Fundraiser restrictions. *Competitive food and beverage items sold during the school day must meet the nutrition standards for competitive food as required in this section. A special exemption is allowed for the sale of food and/or beverages that do not meet the competitive food standards as required in this section for the purpose of conducting an infrequent school-sponsored fundraiser. Such specially exempted fundraisers must not take place more than the frequency specified by the State agency during such periods that schools are in session. No specially exempted fundraiser foods or beverages may be sold in competition with school meals in the food service area during the meal service.

(c) *General nutrition standards for competitive food.*

(1) *General requirement. *At a minimum, all competitive food sold to students on the school campus during the school day must meet the nutrition standards specified in this section. These standards apply to items as packaged and served to students.

(2) *General nutrition standards. *To be allowable, a competitive food item must:

(i) Meet all of the competitive food nutrient standards as outlined in this section; and

(ii) Be a grain product that contains 50 percent or more whole grains by weight or have as the first ingredient a whole grain; or

(iii) Have as the first ingredient one of the non-grain major food groups: fruits, vegetables, dairy or protein foods (meat, beans, poultry, seafood, eggs, nuts, seeds, etc.); or

(iv) Be a combination food that contains 1⁄4 cup of fruit and/or vegetable; or

(v) If water is the first ingredient, the second ingredient must be one of the food items in paragraphs (c)(2)(ii), (iii) or (iv) of this section.

(3) *Exemptions.*

(i) *Entrée items offered as part of the lunch or breakfast program. *Any entrée item offered as part of the lunch program or the breakfast program under 7 CFR Part 220 is exempt from all competitive food standards if it is offered as a competitive food on the day of, or the school day after, it is offered in the lunch or breakfast program. Exempt entrée items offered as a competitive food must be offered in the same or smaller portion sizes as in the lunch or breakfast program. Side dishes offered as part of the lunch or breakfast program and served à la carte must meet the nutrition standards in this section.

(ii) *Sugar-free chewing gum. *Sugar-free chewing gum is exempt from all of the competitive food standards in this section and may be sold to students on the school campus during the school day, at the discretion of the local educational agency.

(d) *Fruits and vegetables.*

(1) Fresh, frozen and canned fruits with no added ingredients except water or packed in 100 percent fruit juice or light syrup or extra light syrup are exempt from the nutrient standards included in this section.

(2) Fresh and frozen vegetables with no added ingredients except water and canned vegetables that are low sodium or no salt added that contain no added fat are exempt from the nutrient standards included in this section.

(e) *Grain products. *Grain products acceptable as a competitive food must include 50 percent or more whole grains by weight or have whole grain as the first ingredient. Grain products must meet all of the other nutrient standards included in this section.

(f) *Total fat and saturated fat.*

(1) *General requirements.*

(i) The total fat content of a competitive food must be not more than 35 percent of total calories from fat per item as packaged or served, except as specified in paragraphs (f)(2) and (3) of this section.

(ii) The saturated fat content of a competitive food must be less than 10 percent of total calories per item as packaged or served, except as specified in paragraph (f)(3) of this section.

(2) *Exemptions to the total fat requirement.*

(i) Seafood with no added fat is exempt from the total fat requirement, but subject to the saturated fat, sugar, calorie, and sodium standards.

(ii) Bean dip (as defined in paragraph (a)(7) of this section), is exempt from the total fat standard, but subject to the saturated fat, sugar, calorie, and sodium standards. This exemption does not apply to combination products that contain bean dip with other ingredients such as crackers, pretzels, pita, manufactured, snack-type vegetable and/or fruit sticks.

(3) *Exemptions to the total fat and saturated fat requirements.*

(i) Reduced fat cheese and part skim mozzarella cheese are exempt from the total fat and saturated fat standards, but subject to the sugar, calorie, and sodium standards. This exemption does not apply to combination foods.

(ii) Nuts and seeds and nut/seed butters are exempt from the total fat and saturated fat standards, but subject to the sugar, calorie, and sodium standards. This exemption does not apply to combination products that contain nuts, seeds, or nut/seed butters with other ingredients, such as peanut butter and crackers, trail mix, or chocolate covered peanuts.

(iii) Products that consist of only dried fruit with nuts and/or seeds with no added nutritive sweeteners or fat are exempt from the total fat, saturated fat, and sugar standards, but subject to the calorie and sodium standards.

(iv) Whole eggs with no added fat are exempt from the total fat and saturated fat standards, but subject to the calorie and sodium standards.

(g) *Total sugars.*

(1) *General requirement. *The total sugar content of a competitive food must be not more than 35 percent of *weight *per item as packaged or served, except as specified in paragraph (h)(2) of this section.

(2) *Exemptions to the total sugar requirement.*

(i) Dried whole fruits or vegetables; dried whole fruit or vegetable pieces; and dehydrated fruits or vegetables with no added nutritive sweeteners are exempt from the sugar standard, but subject to the total fat, saturated fat, calorie, and sodium standards. There is also an exemption from the sugar standard for dried fruits with nutritive sweeteners that are required for processing and/or palatability purposes.

(ii) Products that consist of only dried fruit with nuts and/or seeds with no added nutritive sweeteners or fat are exempt from the total fat, saturated fat, and sugar standards, but subject to the calorie and sodium standards.

(h) *Calorie and sodium content for snack items and side dishes **sold** as competitive foods. *Snack items and side dishes sold as competitive foods must have not more than 200 calories and 200 mg of sodium per item as packaged or served, including the calories and sodium contained in any added accompaniments such as butter, cream cheese, salad dressing, etc., and must meet all of the other nutrient standards in this section. These snack items and side dishes must have not more than 200 calories and 200 mg of sodium per item as packaged or served.

(i) *Calorie and sodium content for entrée items sold as competitive foods. *Entrée items sold as competitive foods, other than those exempt from the competitive food nutrition standards in paragraph (c)(3)(i) of this section, must have not more than 350 calories and 480 mg of sodium per item as packaged or served, including the calories and sodium contained in any added accompaniments such as butter, cream cheese, salad dressing, etc., and must meet all of the other nutrient standards in this section.

(j) *Caffeine. *Foods and beverages available to elementary and middle school-aged students must be caffeine-free, with the exception of trace amounts of naturally occurring caffeine substances. Foods and beverages available to high school-aged students may contain caffeine.

(k) *Accompaniments. *The use of accompaniments is limited when competitive food is sold to students in school. The accompaniments to a competitive food item must be included in the nutrient profile as a part of the food item served in determining if an item meets all of the nutrition standards for competitive food as required in this section. The contribution of the accompaniments may be based on the average amount of the accompaniment used per item at the site.

(l) *Beverages *—

(1) *Elementary schools. *Allowable beverages for elementary school-aged students are limited to:

(i) Plain water or plain carbonated water (no size limit);

(ii) Milk and fluid milk substitutes that meet the requirements outlined in § 210.10(d)(1) and (2) (no more than 8 fluid ounces); and

*[78 FR 39091, June 28, 2013, as amended at 81 FR 50151, July 29, 2016; 82 FR 56714, Nov. 30, 2017; 83 FR 63790, Dec. 12, 2018; 85 FR 74848, Nov. 24, 2020; 87 FR 7006, Feb. 7, 2022; 89 FR 32072, Apr. 25, 2024]*

§ 210.12 Student, parent, and community involvement.

(iii) One hundred (100) percent fruit/vegetable juice, and 100 percent fruit/vegetable juice diluted with water, with or without carbonation and with no added sweeteners (no more than 8 fluid ounces).

(2) *Middle schools. *Allowable beverages for middle school-aged students are limited to:

(i) Plain water or plain carbonated water (no size limit);

(ii) Milk and fluid milk substitutes that meet the requirements outlined in § 210.10(d)(1) and (2) (no more than 12 fluid ounces); and

(iii) One hundred (100) percent fruit/vegetable juice, and 100 percent fruit/vegetable juice diluted with water, with or without carbonation and with no added sweeteners (no more than 12 fluid ounces).

(3) *High schools. *Allowable beverages for high school-aged students are limited to:

(i) Plain water or plain carbonated water (no size limit);

(ii) Milk and fluid milk substitutes that meet the requirements outlined in § 210.10(d)(1) and (2) (no more than 12 fluid ounces);

(iii) One hundred (100) percent fruit/vegetable juice, and 100 percent fruit/vegetable juice diluted with water, with or without carbonation and with no added sweeteners (no more than 12 fluid ounces);

(iv) Calorie-free, flavored water, with or without carbonation (no more than 20 fluid ounces);

(v) Other beverages that are labeled to contain less than 5 calories per 8 fluid ounces, or less than or equal to 10 calories per 20 fluid ounces (no more than 20 fluid ounces); and

(vi) Other beverages that are labeled to contain no more than 40 calories per 8 fluid ounces or 60 calories per 12 fluid ounces (no more than 12 fluid ounces).

(a) *General. *School food authorities shall promote activities to involve students and parents in the Program. Such activities may include menu planning, enhancement of the eating environment, Program promotion, and related student-community support activities. School food authorities are encouraged to use the school food service program to teach students about good nutrition practices and to involve the school faculty and the general community in activities to enhance the Program.

(b) *Food service management companies. *School food authorities contracting with a food service management company shall comply with the provisions of § 210.16(a) regarding the establishment of an advisory board of parents, teachers and students.

(c) *Residential **child care** institutions. *Residential child care institutions shall comply with the provisions of this section, to the extent possible.

(d) *Outreach activities.*

*[53 FR 29147, Aug. 2, 1988, as amended at 78 FR 13448, Feb. 28, 2013; 81 FR 50168, July 29, 2016; 89 FR 32073, Apr. 25, 2024]*

§ 210.13 Facilities management.

(1) To the maximum extent practicable, school food authorities must inform families about the availability breakfasts for students. Information about the School Breakfast Program must be distributed just prior to or at the beginning of the school year. In addition, schools are encouraged to send reminders regarding the availability of the School Breakfast Program multiple times throughout the school year.

(2) School food authorities must cooperate with Summer Food Service Program sponsors to distribute materials to inform families of the availability and location of free Summer Food Service Program meals for students when school is not in session.

(e) *Local school wellness policies. *Local educational agencies must comply with the provisions of § 210.31(d) regarding student, parent, and community involvement in the development, implementation, and periodic review and update of the local school wellness policy.

(a) *Health standards. *The school food authority shall ensure that food storage, preparation and service is in accordance with the sanitation and health standards established under State and local law and regulations.

(b) *Food safety inspections. *Schools shall obtain a minimum of two food safety inspections during each school year conducted by a State or local governmental agency responsible for food safety inspections. They shall post in a publicly visible location a report of the most recent inspection conducted, and provide a copy of the inspection report to a member of the public upon request. Sites participating in more than one child nutrition program shall only be required to obtain two food safety inspections per school year if the nutrition programs offered use the same facilities for the production and service of meals.

(c) *Food safety program. *The school food authority must develop a written food safety program that covers any facility or part of a facility where food is stored, prepared, or served. The food safety program must meet the requirements in paragraph (c)(1) or paragraph (c)(2) of this section, and the requirements in § 210.15(b)(5).

(1) A school food authority with a food safety program based on traditional hazard analysis and critical control point (HACCP) principles must:

(i) Perform a hazard analysis;

(ii) Decide on critical control points;

(iii) Determine the critical limits;

(iv) Establish procedures to monitor critical control points;

(v) Establish corrective actions;

(vi) Establish verification procedures; and

(vii) Establish a recordkeeping system.

(2) A school food authority with a food safety program based on the process approach to HACCP must ensure that its program includes:

(i) Standard operating procedures to provide a food safety foundation;

*[54 FR 29147, Aug. 2, 1988, as amended at 64 FR 50740, Sept. 20, 1999; 70 FR 34630, June 15, 2005; 74 FR 66216, Dec. 15, 2009; 78 FR 13448, Feb. 28, 2013]*

§ 210.14 Resource management.

(ii) Menu items grouped according to process categories;

(iii) Critical control points and critical limits;

(iv) Monitoring procedures;

(v) Corrective action procedures;

(vi) Recordkeeping procedures; and

(vii) Periodic program review and revision.

(d) *Storage. *The school food authority shall ensure that the necessary facilities for storage, preparation and service of food are maintained. Facilities for the handling, storage, and distribution of purchased and donated foods shall be such as to properly safeguard against theft, spoilage and other loss.

(a) *Nonprofit school food service. *School food authorities shall maintain a nonprofit school food service. Revenues received by the nonprofit school food service are to be used only for the operation or improvement of such food service, *except **that,** *such revenues shall not be used to purchase land or buildings, unless otherwise approved by FNS, or to construct buildings. Expenditures of nonprofit school food service revenues shall be in accordance with the financial management system established by the State agency under § 210.19(a) of this part. School food authorities may use facilities, equipment, and personnel supported with nonprofit school food revenues to support a nonprofit nutrition program for the elderly, including a program funded under the Older Americans Act of 1965 (42 U.S.C. 3001 *et seq.).*

(b) *Net cash resources. *The school food authority shall limit its net cash resources to an amount that does not exceed 3 months average expenditures for its nonprofit school food service or such other amount as may be approved by the State agency in accordance with § 210.19(a).

(c) *Financial assurances. *The school food authority shall meet the requirements of the State agency for compliance with § 210.19(a) including any separation of records of nonprofit school food service from records of any other food service which may be operated by the school food authority as provided in paragraph (a) of this section.

(d) *Use of donated foods. *The school food authority shall enter into an agreement with the distributing agency to receive donated foods as required by part 250 of this chapter. In addition, the school food authority shall accept and use, in as large quantities as may be efficiently utilized in its nonprofit school food service, such foods as may be offered as a donation by the Department. The school food authority's policies, procedures, and records must account for the receipt, full value, proper storage and use of donated foods.

(e) *Pricing **paid** lunches. *For each school year, school food authorities must establish prices for paid lunches in accordance with this paragraph (e).

(1) *Calculation procedures. *Each school food authority shall:

(i) Determine the average price of paid lunches. The average shall be determined based on the total number of paid lunches claimed for the month of October in the previous school year, at each different price charged by the school food authority.

(ii) Calculate the difference between the per meal Federal reimbursement for paid and free lunches *received by the school food authority in the previous school year (i.e., *the reimbursement difference);

(iii) Compare the average price of a paid lunch under paragraph (e)(1)(i) of this section to the difference between reimbursement rates under paragraph (e)(1)(ii) of this section.

(2) *Average paid lunch price is equal to/greater than the reimbursement difference. *When the average paid lunch price from the prior school year is equal to or greater than the difference in reimbursement rates as determined in paragraph (e)(1)(iii) of this section, the school food authority shall establish an average paid lunch price for the current school year that is not less than the difference identified in (e)(1)(iii) of this section; except that, the school food authority may use the procedure in paragraph (e)(4)(ii) of this section when establishing prices of paid lunches.

(3) *Average lunch price is lower than the reimbursement difference. *When the average price from the prior school year is lower than the difference in reimbursement rates as determined in paragraph (e)(1)(iii) of this section, the school food authority shall establish an average price for the current school year that is not less than the average price charged in the previous school year as adjusted by a percentage equal to the sum obtained by adding:

(i) 2 percent; and

(ii) The percentage change in the Consumers Price Index for All Urban Consumers used to increase the Federal reimbursement rate under section 11 of the Act for the most recent school year for which data are available. The percentage to be used is found in the annual notice published in the FEDERAL REGISTER announcing the national average payment rates, from the prior year.

(4) *Price Adjustments.*

(i) *Maximum required price increase. *The maximum annual average price increase required under this paragraph shall not exceed ten cents.

(ii) *Rounding of paid lunch prices. *Any school food authority may round the adjusted price of the paid lunches down to the nearest five cents.

(iii) *Optional price increases. *A school food authority may increase the average price by more than ten cents.

(5) *Reduction in average price for paid lunches.*

(i) Any school food authority may reduce the average price of paid lunches as established under this paragraph if the State agency ensures that funds are added to the nonprofit school food service account in accordance with this paragraph.

The minimum that must be added is the product of:

(A) The number of paid lunches claimed by the school food authority in the previous school year multiplied by

(B) The amount required under paragraph (e)(3) of this section, as adjusted under paragraph (e)(4) of this section, minus the average price charged.

(ii) *Prohibitions. *The following shall not be used to reduce the average price charged for paid lunches:

(A) Federal sources of revenue;

(B) Revenue from foods sold in competition with lunches or with breakfasts offered under the School Breakfast Program authorized in 7 CFR part 220. Requirements concerning foods sold in competition with lunches or breakfasts are found in § 210.11 and § 220.12 of this chapter, respectively;

(C) In-kind contributions;

(D) Any in-kind contributions converted to direct cash expenditures; and

(E) Per-meal reimbursements (non-Federal) specifically provided for support of programs other than the school lunch program.

(iii) *Allowable **non-Federal** revenue sources. *Any contribution that is for the direct support of paid lunches that is not prohibited under paragraph (e)(5)(ii) of this section may be used as revenue for this purpose. Such contributions include, but are not limited to:

(A) Per-lunch reimbursements for paid lunches provided by State or local governments;

(B) Funds provided by organizations, such as school-related or community groups, to support paid lunches;

(C) Any portion of State revenue matching funds that exceeds the minimum requirement, as provided in § 210.17, and is provided for paid lunches; and

(D) A proportion attributable to paid lunches from direct payments made from school district funds to support the lunch service.

(6) *Additional considerations.*

(i) In any given year, if a school food authority with an average price lower than the reimbursement difference is not required by paragraph (e)(4)(ii) of this section to increase its average price for paid lunches, the school food authority shall use the unrounded average price as the basis for calculations to meet paragraph (e)(3) of this section for the next school year.

(ii) If a school food authority has an average price lower than the reimbursement difference and chooses to increase its average price for paid lunches in any school year more than is required by this section, the amount attributable to the additional voluntary increase may be carried forward to the next school year(s) to meet the requirements of this section.

(7) *Reporting lunch prices. *In accordance with guidelines provided by FNS:

(i) School food authorities shall report prices charged for paid lunches to the State agency; and

(ii) State agencies shall report these prices to FNS.

(f) *Revenue from nonprogram foods. *School food authorities must ensure that the revenue generated from the sale of nonprogram foods complies with the requirements in this paragraph (f).

(1) *Definition of nonprogram foods. *For the purposes of this paragraph, nonprogram foods are those foods and beverages:

(i) Sold in a participating school other than reimbursable meals and meal supplements; and

(ii) Purchased using funds from the nonprofit school food service account.

*[53 FR 29147, Aug. 2, 1988, as amended at 60 FR 31215, June 13, 1995; 76 FR 35316, June 17, 2011; 81 FR 50185, July 29, 2016; 89 FR 32073, Apr. 25, 2024]*

§ 210.15 Reporting and recordkeeping.

(2) *Revenue from nonprogram foods. *The proportion of total revenue from the sale of nonprogram foods to total revenue of the school food service account shall be equal to or greater than:

(i) The proportion of total food costs associated with obtaining nonprogram foods to

(ii) The total costs associated with obtaining program and nonprogram foods from the account.

(3) All revenue from the sale of nonprogram foods shall accrue to the nonprofit school food service account of a participating school food authority.

(g) *Indirect costs. *School food authorities must follow fair and consistent methodologies to identify and allocate allowable indirect costs to the nonprofit school food service account, in accordance with 2 CFR part 200 as implemented by 2 CFR part 400.

(a) *Reporting summary. *Participating school food authorities are required to submit forms and reports to the State agency or the distributing agency, as appropriate, to demonstrate compliance with Program requirements. These reports include, but are not limited to:

(1) A Claim for Reimbursement and, for the month of October and as otherwise specified by the State agency, supporting data as specified in accordance with § 210.8 of this part;

(2) An application and agreement for Program operations between the school food authority and the State agency, and a Free and Reduced Price Policy Statement as required under § 210.9;

(3) A written response to reviews pertaining to corrective action taken for Program deficiencies;

(4) A commodity school's preference whether to receive part of its donated food allocation in cash for processing and handling of donated foods as required under § 210.19(b);

(5) A written response to audit findings pertaining to the school food authority's operation as required under § 210.22;

(6) Information on civil rights complaints, if any, and their resolution as required under § 210.23;

(7) The number of food safety inspections obtained per school year by each school under its jurisdiction;

(8) The prices of paid lunches charged by the school food authority; and

(9) For any local educational agency required to conduct a second review of free and reduced price applications as required under § 245.11 of this chapter, the number of free and reduced price applications subject to a second review, the number and percentage of reviewed applications for which the eligibility determination was changed, and a summary of the types of changes made.

(b) *Recordkeeping summary. *In order to participate in the Program, a school food authority or a school, as applicable, must maintain records to demonstrate compliance with Program requirements. These records include but are not limited to:

(1) Documentation of participation data by school in support of the Claim for Reimbursement and data used in the claims review process, as required under § 210.8(a), (b), and (c) of this part;

*[53 FR 29147, Aug. 2, 1988, as amended at 54 FR 12582, Mar. 28, 1989; 56 FR 32941, July 17, 1991; 60 FR 31215, June 13, 1995; 65 FR 26912, 26922, May 9, 2000; 70 FR 34630, June 15, 2005; 74 FR 66216, Dec. 15, 2009; 76 FR 35317, June 17, 2011; 77 FR 25035, Apr. 27, 2012; 79 FR 7053, Feb. 6, 2014; 80 FR 11092, Mar. 2, 2015; 81 FR 50169, July 29, 2016; 81 FR 50185, July 29, 2016; 89 FR 32073, Apr. 25, 2024]*


[Note: Additional sections of Part 210 continue]

======================================================================
7 CFR PART 215 — Special Milk
Federal Register (current as of April 13, 2026)
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

*Reimbursement *means financial assistance paid or payable to participating schools and child care institutions for milk served to eligible children.

*School *means:

(1) An educational unit of high school grade or under, recognized as part of the educational system in the State and operating under public or nonprofit private ownership in a single building or complex of buildings;

(2) any public or nonprofit private classes of preprimary grade when they are conducted in the aforementioned schools; or

(3) any public or nonprofit private residential child care institution, or distinct part of such institution, which operates principally for the care of children, and, if private, is licensed to provide residential child care services under the appropriate licensing code by the State or a subordinate level of government, *except for *residential summer camps which participate in the Summer Food Service Program for Children, Job Corps centers funded by the Department of Labor, and private foster homes. The term *residential **child care** institutions *includes, but is not limited to: Homes for the mentally, emotionally or physically impaired, and unmarried mothers and their infants; group homes; halfway houses; orphanages; temporary shelters for abused children and for runaway children; long-term care facilities for chronically ill children; and juvenile detention centers. A long-term care facility is a hospital, skilled nursing facility, intermediate care facility, or distinct part thereof, which is intended for the care of children confined for 30 days or more.

(Sec. 11, Pub. L. 95-166, 91 Stat. 1337 (42 U.S.C. 1772, 1753, 1766; sec. 10(a), Pub. L. 95-627, 92 Stat. 3623 (42 U.S.C. 1760; sec. 10(d)), Pub. L. 95-627, 92 Stat. 3624 (42 U.S.C. 1757); sec. 14, Pub. L. 95-627, 92 Stat. 3625-3626; sec. 205, Pub. L. 96-499, The Omnibus Reconciliation Act of 1980, 94 Stat. 2599; secs. 807 and 808, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1772, 1784, 1760))

*[32 FR 12587, Aug. 31, 1967]*

§ 215.3 Administration.

*School Breakfast Program *means the program authorized by section 4 of the Child Nutrition Act of 1966, as amended.

*School Food Authority *means the governing body which is responsible for the administration of one or more schools and which has the legal authority to operate a milk program therein. The term “School Food Authority” also includes a nonprofit agency to which such governing body has delegated authority for the operation of a milk program in a school.

*School year *means the period of 12 calendar months beginning July 1, 1977, and each July 1 of any calendar year thereafter and ending June 30 of the following calendar year.

*Split-session *means an educational program operating for approximately one-half of the normal school day.

*State *means any of the 50 States, District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, and, as applicable, American Samoa and the Commonwealth of the Northern Marianas.

*State agency *means the State educational agency or any other State agency that has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer the Program.

*State Children's Health Insurance Program (SCHIP) *means the State medical assistance program under title XXI of the Social Security Act (42 U.S.C. 1397aa *et seq.).*

*Summer Food Service Program for Children *means the program authorized by section 13 of the National School Lunch Act, as amended.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

(a) Within the Department, FNS shall act on behalf of the Department in the administration of the Program. Within FNS, CND shall be responsible for Program administration.

(b) Within the States, to the extent practicable and permissible under State law, responsibility for the administration of the Program in schools and child care institutions shall be in the educational agency of the State: *Provided, however, *That another State agency, upon request by the Governor or other appropriate State executive or legislative authority, may be approved to administer the Program in schools as described in paragraph (3) of the definition of *School *in § 215.2 or in child care institutions.

Editorial Note: For FEDERAL REGISTER citations affecting § 215.2, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(c) FNSRO shall administer the Program in any *School *or any *Child care institution *as defined in § 215.2 wherein the State agency is not permitted by law to disburse Federal funds paid to it under the Program; *Provided, however, *That FNSRO shall also administer the Program in all other schools and child-care institutions which have been under continuous FNS administration since October 1, 1980 unless the administration of such schools and institutions is assumed by a State agency. References in this part to “FNSRO where applicable” are to FNSRO as the agency administering the Program to schools or child-care institutions within certain States.

(d) Each State agency desiring to take part in the Program shall enter into a written agreement with the Department for the administration of the Program in the State in accordance with the provisions of this part, 7 CFR parts 235, 245, 15, 15a, 15b and, as applicable, 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400, subparts B and D and USDA implementing regulations 2 CFR part 400 and part 415, and FNS Instructions. Such agreement shall cover the operation of the Program during the period specified therein and may be extended at the option of the Department.

(e) *Authority to waive statute and regulations.*

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State agency or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2)

(i) A State agency may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(ii) A State agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(3)

(i) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part. Any waiver request submitted by an eligible service provider must be submitted to the State agency for review. A State agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

(ii) If a State agency concurs with a request from an eligible service provider, the State agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request. By forwarding the request to the FNSRO, the State agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(Secs. 804, 816 and 817, Pub. L. 97-35; 95 Stat. 521-535 (42 U.S.C. 1753, 1756, 1759, 1771 and 1785))

*[**Amdt**. 14, 41 FR 31174, July 27, 1976, as amended by **Amdt**. 24, 47 FR 14133 Apr. 2, 1982; **Amdt**. 36, 54 FR 2989, Jan. 23, 1989; 71 FR 39516, July 13, 2006; 72 FR 63791, Nov. 13, 2007; 81 FR 66490, Sept. 28, 2016; 87 FR 57354, Sept. 19, 2022]*

§ 215.4 Payments of funds to States and FNSROs.

(Pub. L. 97-370, 96 Stat. 1806)

*[**Amdt**. 14, 41 FR 31174, July 27, 1976, as amended by **Amdt**. 30, 49 FR 18986, May 4, 1984]*

§ 215.5 Method of payment to States.

(iii) If the State agency denies the request, the State agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State agency's receipt of the request. The State agency response is final and may not be appealed to FNS.

(a) For each fiscal year, the Secretary shall make payments to each State agency at such times as he may determine from the funds appropriated for Program reimbursement. Subject to § 215.11(c)(2), the total of these payments for each State for any fiscal year shall be limited to the amount of reimbursement payable to School Food Authorities and child care institutions under § 215.8 of this part for the total number of half-pints of milk served under the Program to eligible children from October 1 to September 30.

(b) Each State agency shall be responsible for controlling Program reimbursement payments so as to keep within the funds made available to it, and for the timely reporting to FNS of the number of half pints of milk actually served. The Secretary shall increase or decrease the available level of funding by adjusting the State agency's Letter of Credit when appropriate.

(a) Funds to be paid to any State shall be made available by means of Letters of Credit issued by FNS in favor of the State agency. The State agency shall:

(1) Obtain funds needed to reimburse School Food Authorities and child-care institutions through presentation by designated State officials of a Payment Voucher on Letter of Credit (Treasury Form GFO 7578) in accordance with procedures prescribed by FNS and approved by the U.S. Treasury Department;

(2) Submit requests for funds only at such times and in such amounts as will permit prompt payment of claims;

(3) Use the funds received from such requests without delay for the purpose for which drawn. Notwithstanding the foregoing provisions, if funds are made available by Congress for the operation of the Program under a continuing resolution, Letters of Credit shall reflect only the amount available for the effective period of the resolution.

(b) [Reserved]

(c) The State agency shall release to FNS any Federal funds made available to it under the Program which are unobligated at the end of each fiscal year. Release of funds by the State agency shall be made as soon as practicable but in no event later than 30 days following demand by FNSRO, and shall be reflected by a related adjustment in the State agency's Letter of Credit.

*[**Amdt**. 13, 39 FR 28416, Aug. 7, 1974, as amended by **Amdt**. 14, 41 FR 31174, July 27, 1976]*

§ 215.6 Use of funds.

(Sec. 10(a), Pub. L. 95-627, 92 Stat. 3623 (42 U.S.C. 1760; sec. 10(d)(3), Pub. L. 95-627, 92 Stat. 3624 (42 U.S.C. 1757); sec. 14, Pub. L. 95-627, 92 Stat. 3625-3626; 44 U.S.C. 3506))

*[**Amdt**. 14, 41 FR 31174, July 27, 1976, as amended by **Amdt**. 18, 44 FR 37898, June 29, 1979; 47 FR 746, Jan. 7, 1982; 64 FR 50741, Sept. 20, 1999]*

§ 215.7 Requirements for participation.

(a) Federal funds made available under the Program shall be used to encourage the consumption of milk through reimbursement payments to schools and child-care institutions in connection with the purchase and service of milk to children in accordance with the provisions of this part: *Provided, however, *That, with the approval of FNS, any State agency, or FNSRO where applicable, may reserve for use in carrying out special developmental projects an amount equal to not more than 1 per centum of the Federal funds so made available for any fiscal year.

(b) Whoever embezzles, willfully misapplies, steals, or obtains by fraud any funds, assets, or property provided under this part, whether received directly or indirectly from the Department, shall:

(1) If such funds, assets, or property are of a value of $100 or more, be fined not more than $25,000 or imprisoned not more than 5 years or both; or

(2) if such funds, assets, or property are of a value of less than $100, be fined not more than $1,000 or imprisoned not more than one year or both.

(c) Whoever receives, conceals, or retains to his use or gain funds, assets, or property provided under this part, whether received directly or indirectly from the Department, knowing such funds, assets, or property have been embezzled, willfully misapplied, stolen, or obtained by fraud, shall be subject to the same penalties provided in paragraph (b) of this section.

(a) Any school or nonprofit child care institution shall receive the Special Milk Program upon request provided it does not participate in a meal service program authorized under the Child Nutrition Act of 1966 or the National School Lunch Act; except that schools with such meal service may receive the Special Milk Program upon request only for the children attending split-session kindergarten programs who do not have access to the meal service. Each School Food Authority or child-care institution shall make written application to the State agency, or FNSRO where applicable, for any school or child-care institution in which it desires to operate the Program, if such school or child-care institution did not participate in the Program in the prior fiscal year.

(b) Any School Food Authority or child care institution participating in the Program may elect to serve free milk to children eligible for free meals. Upon application for the Program, each School Food Authority or child care institution:

(1) Shall be required by the State agency, or FNSRO where applicable, to state whether or not it wishes to provide free milk in the schools or institutions participating under its jurisdiction and

(2) If it so wishes to provide free milk, shall also submit for approval a free milk policy statement which, if for a school, shall be in accordance with part 245 of this chapter or, if for a child care institution, shall be in accordance with § 215.13a of this part.

(c) The application shall include information in sufficient detail to enable the State agency, or FNSRO where applicable, to determine whether the School Food Authority or child-care institution is eligible to participate in the Program and extent of the need for Program payments.

(d) Each school food authority or child care institution approved to participate in the program shall enter into a written agreement with the State agency or FNSRO, as applicable, that may be amended as necessary. Nothing in the preceding sentence shall be construed to limit the ability of the State agency to suspend or terminate the agreement in accordance with § 215.15. If a single State agency administers any combination of the Child Nutrition Programs, that State agency shall provide each SFA with a single agreement with respect to the operation of those programs. Such agreement shall provide that the School Food Authority or child-care institution shall, with respect to participating schools and child-care institutions under its jurisdiction:

(1) Operate a nonprofit milk service. However, school food authorities may use facilities, equipment, and personnel supported with funds provided to a school food authority under this part to support a nonprofit nutrition program for the elderly, including a program funded under the Older Americans Act of 1965 (42 U.S.C. 3001 *et seq.).*

(2) If electing to provide free milk

(i) serve milk free to all eligible children, at times that milk is made available to nonneedy children under the Program; and

(ii) make no discrimination against any needy child because of his inability to pay for the milk.

(3) Comply with the requirements of the Department's regulations respecting nondiscrimination (7 CFR part 15);

(4) Claim reimbursement only for milk as defined in this part and in accordance with the provisions of § 215.8 and § 215.10;

(5) Submit Claims for Reimbursement in accordance with § 215.10 of this part and procedures established by the State agency or FNSRO where applicable;

(6) Maintain a financial management system as prescribed by the State agency, or FNSRO where applicable;

(7) Upon request, make all records pertaining to its milk program available to the State agency and to FNS or OA for audit and administrative review, at any reasonable time and place. Such records shall be retained for a period of three years after the end of the fiscal year to which they pertain, except that, if audit findings have not been resolved, the records shall be retained beyond the three-year period as long as required for the resolution of the issues raised by the audit;

(8) Retain the individual applications for free milk submitted by families for a period of three years after the end of the fiscal year to which they pertain, except that, if audit findings have not been resolved, the records shall be retained beyond the three-year period as long as required for the resolution of the issues raised by the audit.

(e) *State requirements. *Nothing contained in this part shall prevent a State agency from imposing additional requirements for participation in the Program which are not inconsistent with the provision of this part.

(Sec. 11, Pub. L. 95-166, 91 Stat. 1337 (42 U.S.C. 1772, 1753, 1766); sec. 5, Pub. L. 95-627, 92 Stat. 3619 (42 U.S.C. 1772); secs. 801, 803, 812; Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1759(a), 1773, 1758); 44 U.S.C. 3506)

*[**Amdt**. 13, 39 FR 28416, Aug. 7, 1974]*

§ 215.7a Fluid milk and non-dairy milk substitute requirements.

Fluid milk and non-dairy fluid milk substitutes served must meet the requirements as outlined in this section.

(f) *Program evaluations. *Local educational agencies, school food authorities, schools, child care institutions and contractors must cooperate in studies and evaluations conducted by or on behalf of the Department, related to programs authorized under the Richard B. Russell National School Lunch Act and the Child Nutrition Act of 1966.

(a) *Types of fluid milk. *All fluid milk served in the Program must be pasteurized fluid milk which meets State and local standards for such milk, have vitamins A and D at levels specified by the Food and Drug Administration, and must be consistent with State and local standards for such milk. Lactose-free and reduced-lactose milk that meet the fat content and flavor specifications for each age group may also be offered. Fluid milk must also meet the following requirements:

(1) *Children 1 year old. *Children one year of age must be served unflavored whole milk.

(2) *Children 2 through 5 years old. *Children two through five years old must be served either unflavored low-fat (1 percent) or unflavored fat-free (skim) milk.

(3) *Children 6 years old and older. *Children 6 years old and older must be served low-fat (1 percent fat or less) or fat-free (skim) milk. Milk may be flavored or unflavored.

(b) *Fluid milk substitutes for non-disability reasons.*

(1) A school food authority or child care institution may offer fluid milk substitutes based on a written request from a child's parent or guardian, a State licensed healthcare professional, or registered dietitian. A school food authority or child care institution choosing to offer fluid milk substitutes for a non-disability reason is not required to offer the specific fluid milk substitutes requested but may offer the fluid milk substitutes of its choice, provided the fluid milk substitutes offered meet the requirements of paragraph (b)(2) of this section.

Editorial Note: For FEDERAL REGISTER citations affecting § 215.7, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

TABLE 1 TO PARAGRAPH (b)(2)—NUTRIENT REQUIREMENTS FOR FLUID MILK

SUBSTITUTES

Nutrient Per cup (8 fl. oz.)

Calcium 276 mg.

Protein 8 g.

Vitamin A 150 mcg. retinol activity equivalents (RAE).

Vitamin D 2.5 mcg.

Magnesium 24 mg.

Phosphorus 222 mg.

Potassium 349 mg.

Riboflavin 0.44 mg.

Vitamin B-12 1.1 mcg.

*[81 FR 24375, Apr. 25, 2016, as amended at 82 FR 56714, Nov. 30, 2017; 83 FR 63790, Dec. 12, 2018; 85 FR 74849, Nov. 24, 2020; 87 FR 7006, Feb. 7, 2022; 89 FR 32077, Apr. 25, 2024]*

§ 215.8 Reimbursement payments.

(2) If a school food authority or child care institution chooses to offer one or more fluid milk substitutes for non-disability reasons, the fluid milk substitutes must provide, at a minimum, the nutrients listed in the following table. Fluid milk substitutes must be fortified in accordance with fortification guidelines issued by the Food and Drug Administration.

(3) Expenses incurred when providing fluid milk substitutes that exceed program reimbursements must be paid by the school food authority or child care institution; costs may be paid from the nonprofit food service account.

(a) [Reserved]

(b)

(1) The rate of reimbursement per half-pint of milk purchased and

(i) served in nonpricing programs to all children;

(ii) served to all children in pricing programs by institutions and School Food Authorities not electing to provide free milk; and

(iii) served to children other than needy children in pricing programs by institutions and School Food Authorities electing to provide free milk shall be the rate announced by the Secretary for the applicable school year. However, in no event shall the reimbursement for each half-pint (236 ml.) of milk served to children exceed the cost of the milk to the school or child care institution.

(Sec. 11, Pub. L. 95-166, 91 Stat. 1337 (42 U.S.C. 1772, 1753, 1766); sec. 5, Pub. L. 95-627, 92 Stat. 3619 (42 U.S.C. 1772); Omnibus Reconciliation Act of 1980, sec. 209, Pub. L. 96-499, 94 Stat. 2599; secs. 807 and 808, Pub. L. 97-35, 95 Stat. 521-535, 42 U.S.C. 1772, 1784, 1760; secs. 805 and 819, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1773))

*[**Amdt**. 13, 39 FR 28416, Aug. 7, 1974, as amended by **Amdt**. 16, 43 FR 1060, Jan. 6, 1978; 44 FR 10700, Feb. 23, 1979; **Amdt**. 17, 44 FR 33047, June 8, 1979; 46 FR 51365, Oct. 20, 1981; **Amdt**. 23, 47 FR 14134, Apr. 2, 1982; 82 FR 56714, Nov. 30, 2017]*

§ 215.9 Effective date for reimbursement.

(Sec. 11, Pub. L. 95-166, 91 Stat. 1337 (42 U.S.C. 1772, 1753, 1766))

*[32 FR 12587, Aug. 31, 1967, as amended by **Amdt**. 5, 37 FR 14686, July 22, 1972; **Amdt**. 13, 39 FR 28417, Aug. 7, 1974; **Amdt**. 16, 43 FR 1060, Jan. 6, 1978; 44 FR 10700, Feb. 23, 1979]*

§ 215.10 Reimbursement procedures.

(2) The rate of reimbursement for milk purchased and served free to needy children in pricing programs by institutions and School Food Authorities electing to provide free milk shall be the average cost of milk, i.e., the total cost of all milk purchased during the claim period, divided by the total number of purchased half-pints.

(c) Schools and child-care institutions having pricing programs shall use the reimbursement payments received to reduce the price of milk to children.

(a) A State Agency, or FNSRO where applicable, may grant written approval to begin operations under the Program prior to the receipt of the application from the School Food Authority or child-care institution. Such written approval shall be attached to the subsequently filed application, and the agreement executed by the School Food Authority or child-care institution shall be effective from the date upon which the School Food Authority or child-care institution was authorized to begin operations: *Provided, however, *That such effective date shall not be earlier than the calendar month preceding the calendar month in which the agreement is executed by the State Agency or by the Department.

(b) Reimbursement payments pursuant to § 215.8 shall be made for milk purchased and served to children at any time during the effective period of an agreement between a School Food Authority or child care institution and the State agency or the Department.

(a) To be entitled to reimbursement under this part, each School Food Authority shall submit to the State agency, or FNSRO where applicable, a monthly Claim for Reimbursement.

(b) Claims for Reimbursement shall include data in sufficient detail to justify the reimbursement claimed and to enable the State agency to provide the Reports of School Program Operations required under § 215.11(c)(2). Unless otherwise approved by FNS, the Claim for Reimbursement for any month shall include only milk served in that month except if the first or last month of Program operations for any year contains 10 operating days or less, such month may be added to the Claim for Reimbursement for the appropriate adjacent month; however, Claims for Reimbursement may not combine operations occurring in two fiscal years. If a single State agency administers any combination of the Child Nutrition Programs, the SFA shall be able to use a common claim form with respect to claims for reimbursement for meals served under those programs. A final Claim for Reimbursement shall be postmarked and/or submitted to the State agency, or FNSRO where applicable, not later than 60 days following the last day of the full month covered by the claim. State agencies may establish shorter deadlines at their discretion. Claims

(Sec. 11, Pub. L. 95-166, 91 Stat. 1337 (42 U.S.C. 1772, 1753, 1766); Pub. L. 97-370, 96 Stat. 1806)

*[**Amdt**. 13, 39 FR 28417, Aug. 7, 1974, as amended by **Amdt**. 14, 41 FR 31175, July 27, 1976; **Amdt**. 16, 43 FR 1060, Jan. 6, 1978; 44 FR 10700, Feb. 23, 1979; 45 FR 82622, Dec. 16, 1980; 48 FR 20896, May 10, 1983; **Amdt**. 30, 49 FR 18986, May 4, 1984; 64 FR 50742, Sept. 20, 1999]*


[Note: Additional sections of Part 215 continue]

======================================================================
7 CFR PART 220 — SBP
Federal Register (current as of April 13, 2026)
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

§ 220.6 Use of funds.

(b) The Secretary shall prescribe by July 1 of each fiscal year annual adjustments to the nearest one-fourth cent in the national average per breakfast factors for all breakfasts and for free and reduced price breakfasts, that shall reflect changes in the cost of operating a breakfast program.

(c) In addition to the funds made available under paragraph (a) of this section, funds shall be made available to the State agencies, and FNSROs where applicable, in such amounts as are needed to finance reimbursement rates assigned in accordance with the provisions of § 220.9(c).

(a) Obtain funds needed for reimbursement to School Food Authorities through presentation by designated State officials of a payment Voucher on Letter of Credit in accordance with procedures prescribed by FNS and approved by the U.S. Treasury Department;

(b) submit requests for funds only at such times and in such amounts, as will permit prompt payment of claims or authorized advances; and

(c) use the funds received from such requests without delay for the purpose for which drawn.

(a) Federal funds made available under the School Breakfast Program shall be used by State agencies, or FNSROs where applicable, to reimburse or make advance payments to School Food Authorities in connection with breakfasts served in accordance with the provisions of this part. However, with the approval of FNS, any State agency, or FNSRO where applicable, may reserve for use in carrying out special developmental projects an amount up to 1 per centum of the funds earned in any fiscal year under the School Breakfast Program. Advance payments to School Food Authorities may be made at such times and in such amounts as are necessary to meet current obligations.

(b) Whoever embezzles, willfully misapplies, steals, or obtains by fraud any funds, assets, or property provided under this part, whether received directly or indirectly from the Department, shall—

(1) If such funds, assets, or property are of a value of $100 or more, be fined not more than $25,000 or imprisoned not more than 5 years or both; or

(2) If such funds, assets, or property are of a value of less than $100, be fined not more than $1,000 or imprisoned not more than one year or both.

(Sec. 10(a), Pub. L. 95-627, 92 Stat. 3623 (42 U.S.C. 1760); sec. 10(d)(3), Pub. L. 95-627, 92 Stat. 3624 (42 U.S.C. 1757); sec. 14, Pub. L. 95-627, 92 Stat. 3625-3626)

*[40 FR 30923, July 24, 1975, as amended by **Amdt**. 25, 41 FR 34759, Aug. 17, 1976; **Amdt**. 28, 44 FR 37899, June 29, 1979; 64 FR 50742, Sept. 20, 1999]*

§ 220.7 Requirements for participation.

(c) Whoever receives, conceals, or retains to his use or gain funds, assets, or property provided under this part, whether received directly or indirectly from the Department, knowing such funds, assets, or property have been embezzled, willfully misapplied, stolen, or obtained by fraud, shall be subject to the same penalties provided in paragraph (b) of this section.

(a) The School Food Authority shall make written application to the State agency, or FNSRO where applicable, for any school in which it desires to operate the School Breakfast Program, if such school did not participate in the Program in the prior fiscal year. The School Food Authority shall also submit for approval, either with the application or at the request of the State agency, or FNSRO where applicable, a free and reduced price policy statement in accordance with part 245 of this chapter. A School Food Authority which simultaneously makes application for the National School Lunch Program and the School Breakfast Program shall submit one free and reduced price policy statement which shall provide that the terms, conditions, and eligibility criteria set forth in such policy statement shall apply to the service of free and reduced price lunches and to the service of free and reduced price breakfasts. If, at the time application is made for the School Breakfast Program, a School Food Authority has an approved free and reduced price policy statement on file with the State agency, or FNSRO where applicable, for the National School Lunch Program, it need only confirm in writing that such approved policy statement will also apply to the operation of its School Breakfast Program. Applications for the School Breakfast Program shall not be approved in the absence of an approved free and reduced price policy statement.

(1) A school which also either participates in the National School Lunch Program or only receives donations of commodities for its nonprofit lunch program under the provisions of part 250 of this chapter (commodity only school) shall apply the same set of eligibility criteria so that children who are eligible for free lunches shall also be eligible for free breakfasts and children who are eligible for reduced price lunches shall also be eligible for reduced price breakfasts.

(2) Schools shall obtain a minimum of two food safety inspections per school year conducted by a State or local governmental agency responsible for food safety inspections. Schools participating in more than one child nutrition program shall only be required to obtain a minimum of two food safety inspections per school year if the food preparation and service for all meal programs take place at the same facility. Schools shall post in a publicly visible location a report of the most recent inspection conducted, and provide a copy of the inspection report to a member of the public upon request.

(3) The school food authority must implement a food safety program meeting the requirements of §§ 210.13(c) and 210.15(b)(5) of this chapter at each facility or part of a facility where food is stored, prepared, or served.

(b) Applications shall solicit information in sufficient detail to enable the State agency to determine whether the School Food Authority is eligible to participate in the Program and extent of the need for Program payments.

(c) Within the funds available to them, State agencies, or FNSRO's where applicable, shall approve for participation in the School Breakfast Program any school making application and agreeing to carry out the program in accordance with this part. State agencies, or FNSRO's where applicable, have a positive obligation, however, to extend the benefits of the School Breakfast Program to children attending schools in areas where poor economic conditions exist.

(d)

(1) Any school food authority (including a State agency acting in the capacity of a school food authority) may contract with a food service management company to manage its food service operation in one or more of its schools. However, no school or school food authority may contract with a food service management company to operate an a la carte food service unless the company agrees to offer free, reduced price and paid reimbursable breakfasts to all eligible children. Any school food authority that employs a food service management company in the operation of its nonprofit school food service shall:

(i) Adhere to the procurement standards specified in § 220.16 when contracting with the food service management company;

(ii) Ensure that the food service operation is in conformance with the school food authority's agreement under the Program;

(iii) Monitor the food service operation through periodic on-site visits;

(iv) Retain control of the quality, extent, and general nature of its food service, and the prices to be charged the children for meals;

(v) Retain signature authority on the State agency-school food authority agreement, free and reduced price policy statement and claims;

(vi) Ensure that all federally donated foods received by the school food authority and made available to the food service management company accrue only to the benefit of the school food authority's nonprofit school food service and are fully utilized therein;

(vii) Maintain applicable health certification and assure that all State and local regulations are being met by a food service management company preparing or serving meals at a school food authority facility;

(viii) Obtain written approval of invitations for bids and requests for proposals before their issuance when required by the State agency. The school food authority must incorporate all State agency required changes to its solicitation documents before issuing those documents; and

(ix) Ensure that the State agency has reviewed and approved the contract terms and the school food authority has incorporated all State agency required changes into the contract or amendment before any contract or amendment to an existing food service management company contract is executed. Any changes made by the school food authority or a food service management company to a State agency pre-approved prototype contract or State agency approved contract term must be approved in writing by the State agency before the contract is executed. When requested, the school food authority must submit all procurement documents, including responses submitted by potential contractors, to the State agency, by the due date established by the State agency.

(2) In addition to adhering to the procurement standards under this part, school food authorities contracting with food service management companies shall ensure that:

(i) The invitation to bid or request for proposal contains a 21-day cycle menu developed in accordance with the provisions of § 220.8, to be used as a standard for the purpose of basing bids or estimating average cost per meal. A school food authority with no capability to prepare a cycle menu may, with State agency approval, require that each food service management company include a 21-day cycle menu, developed in accordance with the provisions of § 220.8, with its bid or proposal. The food service management company must adhere to the cycle for the first 21 days of meal service. Changes thereafter may be made with the approval of the school food authority; and

(ii) Any invitation to bid or request for proposal indicate that nonperformance subjects the food service management company to specified sanctions in instances where the food service management company violates or breaches contract terms. The school food authority shall indicate these sanctions in accordance with the procurement provisions stated in § 220.16.

(3) Contracts that permit all income and expenses to accrue to the food service management company and “cost-plus-a-percentage-of-cost” and “cost-plus-a-percentage-of-income” contracts are prohibited. Contracts that provide for fixed fees such as those that provide for management fees established on a per meal basis are allowed. Contractual agreements with food service management companies shall include provisions which ensure that the requirements of this section are met. Such agreements shall also include the following requirements:

(i) The food service management company shall maintain such records as the school food authority will need to support its Claim for Reimbursement under this part, and shall, at a minimum, report claim information to the school food authority promptly at the end of each month. Such records shall be made available to the school food authority, upon request, and shall be available for a period of 3 years from the date of the submission of the final Financial Status Report, for inspection and audit by representatives of the State agency, of the Department, and of the Government Accountability Office at any reasonable time and place. If audit findings have not been resolved, the records shall be retained beyond the three-year period (as long as required for the resolution of the issues raised by the audit);

(ii) The food service management company must have State or local health certification for any facility outside the school in which it proposes to prepare meals and the food service management company must maintain this health certification for the duration of the contract;

(iii) No payment is to be made for meals that are spoiled or unwholesome at time of delivery, do not meet detailed specifications as developed by the school food authority for each meal component specified in § 220.8, or do not otherwise meet the requirements of the contract. Specifications will cover items such a grade, purchase units, style, condition, weight, ingredients, formulations, and delivery time; and

(iv) Provisions in part 250, subpart D of this chapter must be included to ensure the value of donated foods, *i.e., *USDA Foods, are fully used in the nonprofit food service and credited to the nonprofit school food service account.

(4) The contract between a school food authority and food service management company shall be of a duration of no longer than 1 year and options for the yearly renewal of the contract shall not exceed 4 additional years. All contracts shall include a termination clause whereby either party may cancel for cause with 60-day notification.

(e) Each school food authority approved to participate in the program shall enter into a written agreement with the State agency or the Department through the FNSRO, as applicable, that may be amended as necessary. Nothing in the preceding sentence shall be construed to limit the ability of the State agency or the FNSRO to suspend or terminate the agreement in accordance with § 220.18. If a single State agency administers any combination of the Child Nutrition Programs, that State agency shall provide each SFA with a single agreement with respect to the operation of those programs. Such agreements shall provide that the School Food Authority shall, with respect to participating schools under its jurisdiction:

(1)

(i) Maintain a nonprofit school food service;

(ii) In accordance with the financial management system established under § 220.13(i) of this part, use all revenues received by such food service only for the operation or improvement of that food service *Except that, *facilities, equipment, and personnel support with funds provided to a school food authority under this part may be used to support a nonprofit nutrition program for the elderly, including a program funded under the Older Americans Act of 1965 (42 U.S.C. 3001 *et seq.);*

(iii) Revenues received by the nonprofit school food service must not be used to purchase land or buildings or to construct buildings;

(iv) Limit its net cash resources to an amount that does not exceed three months average expenditure for its nonprofit school food service or such other amount as may be approved by the State agency; and

(v) Observe the limitations on any competitive food service as set forth in § 220.12 of this part;

(2) Serve breakfasts which meet the minimum requirements prescribed in § 220.8;

(3) Price the breakfast as a unit;

(4) Serve breakfast free or at a reduced price to all children who are determined by the local education agency to be eligible for such meals under part 245 of this chapter;

(5) Make no discrimination against any child because of the child's inability to pay the full price of the breakfasts;

(6) Claim reimbursement at the assigned rates only for breakfasts served in accordance with the agreement;

(7) Submit Claims for Reimbursement in accordance with § 220.11 of this part and procedures established by the State agency, or FNSRO where applicable;

(8) Maintain, in the storage, preparation and service of food, proper sanitation and health standards in conformance with all applicable State and local laws and regulations, and comply with the food safety requirements in paragraph (a)(2) and paragraph (a)(3) of this section;

(9) Purchase, in as large quantities as may be efficiently utilized in its nonprofit school food service, foods designated as plentiful by the State agency;

(10) Accept and use, in as large quantities as may be efficiently utilized in its nonprofit school food service, such foods as may be offered as a donation by the Department;

(11) Maintain necessary facilities for storing, preparing, and serving food;

(44 U.S.C. 3506; sec. 819, Pub. L. 97-35, 95 Stat. 533 (42 U.S.C. 1759a, 1773 and 1757); Pub. L. 79-396, 60 Stat. 231 (42 U.S.C. 1751); Pub. L. 89-647, 80 Stat. 885-890 (42 U.S.C. 1773); Pub. L. 91-248, 84 Stat. 207 (42 U.S.C. 1759))

*[32 FR 34, Jan. 5, 1967]*

(12) Maintain a financial management system as prescribed by the State agency, or FNSRO where applicable;

(13) Upon request, make all accounts and records pertaining to its nonprofit school food service available to the State agency and to FNS for audit or review at a reasonable time and place. Such records must be retained for a period of three years after the end of the fiscal year to which they pertain, except that if audit findings have not been resolved, the records must be retained beyond the three-year period as long as required for the resolution of the issues raised by the audit;

(14) Retain documentation of free or reduced price eligibility as follows:

(i) Maintain files of currently approved and denied free and reduced price applications which must be readily retrievable by school for a period of three years after the end of the fiscal year to which they pertain; or

(ii) Maintain files with the names of children currently approved for free meals through direct certification with the supporting documentation, as specified in § 245.6(b)(4) of this chapter, which must be readily retrievable by school. Documentation for direct certification must include information obtained directly from the appropriate State or local agency, or other appropriate individual, as specified by FNS, that:

(A) A child in the *Family, *as defined in § 245.2 of this chapter, is receiving benefits from *SNAP, FDPIR *or *TANF, *as defined in § 245.2 of this chapter; if one child is receiving such benefits, all children in that family are considered to be directly certified;

(B) The child is a homeless child as defined in § 245.2 of this chapter;

(C) The child is a runaway child as defined in § 245.2 of this chapter;

(D) The child is a migrant child as defined in § 245.2 of this chapter;

(E) The child is a Head Start child, as defined in § 245.2 of this chapter; or

(F) The child is a foster child as defined in § 245.2 of this chapter.

(15) Comply with the requirements of the Department's regulations respecting nondiscrimination (7 CFR part 15).

(f) Nothing contained in this part shall prevent the State Agency from imposing additional requirements for participation in the program which are not inconsistent with the provisions of this part.

(g) *Program evaluations. *Local educational agencies, school food authorities, schools, and contractors must cooperate in studies and evaluations conducted by or on behalf of the Department, related to programs authorized under the Richard B. Russell National School Lunch Act and the Child Nutrition Act of 1966.

(h) Local educational agencies must comply with the provisions of § 210.31 of this chapter regarding the development, implementation, periodic review and update, and public notification of the local school wellness policy.

Editorial Note: For FEDERAL REGISTER citations affecting § 220.7, see the List of CFR Sections Affected, which

§ 220.8 Meal requirements for breakfasts.

(a) *General requirements. *This section contains the meal requirements applicable to school breakfasts for students in grades K through 12, and for children under the age of 5. In general, school food authorities must ensure that participating schools provide nutritious, well-balanced, and age-appropriate breakfasts to all the children they serve to improve their diet and safeguard their health.

(1) *General nutrition requirements. *School breakfasts offered to children age 5 and older must meet, at a minimum, the meal requirements in paragraph (b) of this section. Schools must follow a food-based menu planning approach and produce enough food to offer each child the quantities specified in the meal pattern established in paragraph (c) of this section for each age/grade group served in the school. In addition, school breakfasts must meet the dietary specifications in paragraph (f) of this section. Schools offering breakfasts to children ages 1 to 4 and infants must meet the meal pattern requirements in paragraphs (o) and (p) of this section, as applicable. When breakfast is served in the cafeteria, schools must make plain potable water available and accessible without restriction to children at no charge.

(2) *Unit pricing. *Schools must price each meal as a unit. The price of a reimbursable breakfast does not change if the student does not take a food item or requests smaller portions. Schools must identify, near or at the beginning of the serving line(s), the food items that constitute the unit-priced reimbursable school meal(s).

(3) *Production and menu records. *Schools or school food authorities, as applicable, must keep production and menu records for the meals they produce. These records must show how the meals offered contribute to the required meal components and food quantities for each age/grade group every day. Schools or school food authorities must maintain records of the latest nutritional analysis of the school menus conducted by the State agency. Information on maintaining production and menu records may be found in FNS guidance.

(b) *Meal requirements for school breakfasts. *School breakfasts for children ages 5 and older must reflect food and nutrition requirements specified by the Secretary. Compliance with these requirements is measured as follows:

(1) On a daily basis:

(i) Meals offered to each age/grade group must include the meal components and food quantities specified in the meal pattern in paragraph (c) of this section;

(ii) Meal selected by each student must have the number of meal components required for a reimbursable meal and include at least one fruit or vegetable.

(2) Over a 5-day school week:

(i) Average calorie content of the meals offered to each age/grade group must be within the minimum and maximum calorie levels specified in paragraph (f) of this section;

(ii) Average saturated fat content of the meals offered to each age/grade group must be less than 10 percent of total calories as specified in paragraph (f) of this section;

(iii) By July 1, 2027, average added sugars content of the meals offered to each age/grade group must be less than 10 percent of total calories as specified in paragraph (f) of this section; and

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

TABLE 1 TO PARAGRAPH (c) INTRODUCTORY TEXT—SCHOOL BREAKFAST PROGRAM

MEAL PATTERN

Meal components

Amount of food 1 per week (minimum per day)

Grades K-5 Grades 6-8 Grades 9-12

Fruits (cups) 2 5 (1) 5 (1) 5 (1)

Vegetables (cups) 2 0 0 0

Dark Green Subgroup 0 0 0

Red/Orange Subgroup 0 0 0

Beans, Peas, and Lentils Subgroup 0 0 0

Starchy Subgroup 0 0 0

Other Vegetables Subgroup 0 0 0

Grains or Meats/Meat Alternates (oz. eq) 3 7-10 (1) 8-10 (1) 9-10 (1)

Fluid Milk (cups) 4 5 (1) 5 (1) 5 (1)

DIETARY SPECIFICATIONS: DAILY AMOUNT BASED ON THE AVERAGE FOR A 5-DAY WEEK 5

Minimum-Maximum Calories (kcal) 350-500 400-550 450-600

Saturated Fat (% of total calories) <10 <10 <10

Added Sugars (% of total calories) <10 <10 <10

Sodium Limit: In place through June 30, 2027 

Sodium Limit: Must be implemented by July 1, *1 Food items included in each group and subgroup and amount equivalents. 2 Minimum creditable serving is 1⁄8 cup. Schools must offer 1 cup of fruit daily and 5 cups of fruit weekly. Schools may substitute vegetables for fruit at breakfast as described in paragraphs (c)(2)(**i**) and (ii) of this section. 3 Minimum creditable serving is 0.25 oz. eq. School may offer grains, **meats**/meat alternates, or a combination of both to meet the daily and weekly ounce equivalents for this combined component. At least 80 percent of grains offered weekly at breakfast must be whole **grain-rich** as defined in § 210.2 of this chapter, and the remaining grain items offered must be enriched. 4 Minimum creditable serving is 8 fluid ounces. All fluid milk must be fat-free (skim) or low-fat (1 percent fat or less) and must meet the requirements in paragraph (d) of **this section. 5 By July 1, 2027, schools must meet the dietary specification for added sugars. Schools must meet the sodium limits by the dates specified in this chart. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

(iv) Average sodium content of the meals offered to each age/grade group must not exceed the maximum level specified in paragraph (f) of this section.

(c) *Meal **pattern** for school breakfasts for grades K through 12. *A school must offer the meal components and quantities required in the breakfast meal pattern established in the following table:

Meal components

Amount of food 1 per week (minimum per day)

Grades K-5 Grades 6-8 Grades 9-12

2027 *1 Food items included in each group and subgroup and amount equivalents. 2 Minimum creditable serving is 1⁄8 cup. Schools must offer 1 cup of fruit daily and 5 cups of fruit weekly. Schools may substitute vegetables for fruit at breakfast as described in paragraphs (c)(2)(**i**) and (ii) of this section. 3 Minimum creditable serving is 0.25 oz. eq. School may offer grains, **meats**/meat alternates, or a combination of both to meet the daily and weekly ounce equivalents for this combined component. At least 80 percent of grains offered weekly at breakfast must be whole **grain-rich** as defined in § 210.2 of this chapter, and the remaining grain items offered must be enriched. 4 Minimum creditable serving is 8 fluid ounces. All fluid milk must be fat-free (skim) or low-fat (1 percent fat or less) and must meet the requirements in paragraph (d) of this section. 5 By July 1, 2027, schools must meet the dietary specification for added sugars. Schools must meet the sodium limits by the dates specified in this chart. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

(1) *Age/grade groups. *Schools must plan menus for students using the following age/grade groups: Grades K-5 (ages 5-10), grades 6-8 (ages 11-13), and grades 9-12 (ages 14-18). If an unusual grade configuration in a school prevents the use of the established age/grade groups, students in grades K-5 and grades 6-8 may be offered the same food quantities at breakfast provided that the calorie and sodium standards for each age/grade group are met. No customization of the established age/ grade groups is allowed.

(2) *Meal components. *Schools must offer students in each age/grade group the meal components specified in meal pattern in this paragraph (c). Meal component descriptions in § 210.10 of this chapter apply to this Program.

(i) *Fruits component. *Schools must offer daily the fruit quantities specified in the breakfast meal pattern in this paragraph (c). Fruits that are fresh, frozen, or dried, or canned in light syrup, water or fruit juice may be offered to meet the fruits component requirements. Vegetables may be offered in place of all or part of the required fruits at breakfast. Schools that choose to offer vegetables in place of fruits at breakfast one day per school week may offer any vegetables, including starchy vegetables. Schools that choose to offer vegetables in place of fruits at breakfast two or more days per school week must offer at least two different vegetable subgroups as defined in § 210.10(c)(2)(ii) of this chapter. All fruits are credited based on their volume as served, except that 1⁄4 cup of dried fruit counts as 1⁄2 cup of fruit. Only pasteurized, full-strength fruit juice may be offered, and may be credited to meet no more than one-half of the fruit component.

(ii) *Vegetables component. *Schools are not required to offer vegetables as part of the breakfast menu but may offer vegetables to meet part or all of the fruit requirement. Schools that choose to offer vegetables in place of fruits at breakfast one day per school week may offer any vegetables, including starchy vegetables. Schools that choose to offer vegetables in place of

fruits at breakfast two or more days more than one day per school week must offer vegetables from at least two different vegetable subgroups as defined in § 210.10(c)(2)(ii) of this chapter. Fresh, frozen, or canned vegetables and dry beans, peas, and lentils may be offered to meet the fruit requirement. All vegetables are credited based on their volume as served, except that 1 cup of leafy greens counts as 1⁄2 cup of vegetables and tomato paste and tomato puree are credited based on calculated volume of the whole food equivalency. Pasteurized, full-strength vegetable juice may be offered to meet no more than one-half of the vegetable component. Cooked dry beans, peas, and lentils may be counted as either a vegetable or as a meat/meat alternate but not as both in the same dish.

(iii) *Grains. *Grains offered at breakfast count toward the combined grains and meats/meat alternates component. Schools may offer grains, meats/meat alternates, or a combination of both to meet the daily and weekly ounce equivalents for this combined component. Information on crediting grain items may be found in FNS guidance.

(A) *Whole grain-rich requirement. *Whole grain-rich is the term designated by FNS to indicate that the grain content of a product is between 50 and 100 percent whole grain with any remaining grains being enriched. At least 80 percent of grains offered at breakfast weekly, based on ounce equivalents, must meet the whole grain-rich criteria as defined in § 220.2, and the remaining grain items offered must be enriched.

(B) *Breakfast cereals. *By July 1, 2025, breakfast cereals must contain no more than 6 grams of added sugars per dry ounce.

(C) *Daily and weekly servings. *The grains component is based on minimum daily servings plus total servings over a 5-day school week. Schools serving breakfast 6 or 7 days per week must increase the weekly grains quantity by approximately 20 percent (1⁄5) for each additional day. When schools operate less than 5 days per week, they may decrease the weekly quantity by approximately 20 percent (1⁄5) for each day less than 5.

(iv) *Meats/meat alternates. *Meats/meat alternates offered at breakfast count toward the combined grains and meats/meat alternates component. Schools may offer grains, meats/meat alternates, or a combination of both to meet the daily and weekly ounce equivalents for this combined component. Information on crediting meats/meat alternates may be found in FNS guidance.

(A) *Enriched macaroni. *Enriched macaroni with fortified protein, as defined in appendix A to part 210 of this chapter, may be used to meet part of the meats/meat alternates requirement when used as specified in appendix A to part 210.

(B) *Nuts and seeds. *Nuts and seeds and their butters are allowed as meat alternates. Acorns, chestnuts, and coconuts do not credit as meat alternates because of their low protein and iron content. Nut and seed meals or flours may credit only if they meet the requirements for Alternate Protein Products established in appendix A to this part.

(C) *Yogurt. *Yogurt may be offered to meet all or part of the combined grains and meats/meat alternates component. Yogurt may be plain or flavored, unsweetened or sweetened. By July 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). Noncommercial and/or non-standardized yogurt products, such as frozen yogurt, drinkable yogurt products, homemade yogurt, yogurt

flavored products, yogurt bars, yogurt covered fruits and/or nuts or similar products are not creditable. Four ounces (weight) or 1⁄2 cup (volume) of yogurt equals one ounce of the meats/meat alternates requirement.

(D) *Tofu and soy products. *Commercial tofu and soy products may be offered to meet all or part of the combined grains and meats/meat alternates component. Noncommercial and/ or non-standardized tofu and products are not creditable.

(E) *Beans, peas, and lentils. *Cooked dry beans, peas, and lentils may be used to meet all or part of the combined grains and meats/meat alternates component. Beans, peas, and lentils are identified in this section and include foods such as black beans, garbanzo beans, lentils, kidney beans, mature lima beans, navy beans, pinto beans, and split peas. Cooked dry beans, peas, and lentils may be counted as either a vegetable or as a meat/ meat alternate but not as both in the same dish.

(F) *Other meat alternates. *Other meat alternates, such as cheese and eggs, may be used to meet all or part of the combined grains and meats/meat alternates component.

(v) *Fluid milk component. *Fluid milk must be offered daily in accordance with paragraph (d) of this section.

(3) *Grain substitutions.*

(i) Schools in American Samoa, Guam, Hawaii, Puerto Rico, and the U.S. Virgin Islands may serve any vegetable, including vegetables such as breadfruit, prairie turnips, plantains, sweet potatoes, and yams, to meet the combined grains and meats/meat alternates component.

(ii) School food authorities and schools that are tribally operated, operated by the Bureau of Indian Education, and that serve primarily American Indian or Alaska Native children, may serve any vegetable, including vegetables such as breadfruit, prairie turnips, plantains, sweet potatoes, and yams, to meet the combined grains and meats/meat alternates component.

(4) *Traditional Indigenous foods. *Traditional Indigenous foods may credit toward the required meal components. Information on food crediting may be found in FNS guidance. Schools are encouraged to serve traditional Indigenous foods as part of their breakfast service. Per the Agriculture Improvement Act of 2014, as amended (25 U.S.C. 1685(b)(5)) traditional foods means food that has traditionally been prepared and consumed by an American Indian tribe, including wild game meat; fish; seafood; marine mammals; plants; and berries.

(d) *Fluid milk requirements. *Schools must offer students a variety (at least two different options) of fluid milk at breakfast daily. All fluid milk must be fat-free (skim) or low-fat (1 percent fat or less). Milk with higher fat content is not creditable. Low-fat or fat-free lactose-free and reduced-lactose fluid milk may also be offered. Milk may be flavored or unflavored, provided that unflavored milk is offered at each meal service. By July 1, 2025, flavored milk must contain no more than 10 grams of added sugars per 8 fluid ounces, or for flavored milk sold as competitive food for middle and high schools, 15 grams of added sugars per 12 fluid ounces. Schools must also comply with other applicable fluid milk requirements in § 210.10(d) of this chapter.

(e) *Offer versus serve for grades K through 12. *School breakfast must offer daily at least the three meal components required in the meal pattern in paragraph (c) of this section. To exercise the offer versus serve option at breakfast, a school food authority or school must offer a minimum of four food items daily as part of the required components. Under offer versus serve, students are allowed to decline one of the

TABLE 2 TO PARAGRAPH (f)(1)—SCHOOL BREAKFAST PROGRAM CALORIE RANGES

Grades K-5 Grades 6-8 Grades 9-12

Average Daily Minimum-Maximum Calories (kcal) 1 350-500 400-550 450-600 *1 The average daily amount must fall within the minimum and maximum levels. Discretionary sources of calories may be added to the meal pattern if within the dietary specifications.*

TABLE 3 TO PARAGRAPH (f)(4)—SCHOOL BREAKFAST PROGRAM SODIUM LIMITS

Age/grade group

Sodium limit: in place through June 30, 2027

(mg)

Sodium limit: must be

implemented by July 1, 2027

(mg)

Grades K-5 

Grades 6-8 

Grades 9-12 

four food items, provided that students select at least 1⁄2 cup of the fruit component for a reimbursable meal. If only three food items are offered at breakfast, school food authorities or schools may not exercise the offer versus serve option.

(f) *Dietary specifications *—

(1) *Calories. *School breakfasts offered to each age/grade group must meet, on average over the school week, the minimum and maximum calorie levels specified in the following table:

(2) *Saturated fat. *School breakfast offered to all age/grade groups must, on average over the school week, provide less than 10 percent of total calories from saturated fat.

(3) *Added sugars. *By July 1, 2027, school breakfasts offered to all age/grade groups must, on average over the school week, provide less than 10 percent of total calories from added sugars.

(4) *Sodium. *School breakfasts offered to each age/grade group must meet, on average over the school week, the levels of sodium specified in the following table within the established deadlines:

(g) *Compliance assistance. *The State agency and school food authority must provide technical assistance and training to assist schools in planning breakfasts that meet the meal pattern in paragraph (c) of this section, the dietary specifications established in paragraph (f) of this section, and the meal pattern in paragraphs (o) and (p) of this section, as applicable. Compliance assistance may be offered during training, onsite visits, and/or administrative reviews.

(h) *State agency responsibilities for monitoring dietary specifications. *When required by the Administrative Review process set forth in § 210.18 of this chapter, the State agency must conduct a weighted nutrient analysis to evaluate the average levels of calories, saturated fat, added sugars, and sodium of the breakfasts offered to students in grades K-12 during one week within the review period. The nutrient analysis must be conducted in accordance with the procedures established in § 210.10(i)(3) of this chapter. If the results of the nutrient analysis indicate that the school breakfasts do not meet the specifications for calories, saturated fat, added sugars, or sodium specified in paragraph (f) of this section, the State agency or school food authority must provide technical assistance and require the reviewed school to take corrective action to meet the requirements.

(i) *Nutrient analyses of school meals. *Any nutrient analysis of school breakfasts conducted under the administrative review process set forth in § 210.18 of this chapter must be performed in accordance with the procedures established in § 210.10(i) of this chapter. The purpose of the nutrient analysis is to determine the average levels of calories, saturated fat, added sugars, and sodium in the breakfasts offered to each age grade group over a school week.

(j) *Responsibility for monitoring meal requirements. *Compliance with the applicable breakfast requirements in paragraph (b) of this section, including the dietary specifications, and paragraphs (o) and (p) of this section will be monitored by the State agency through administrative reviews authorized in § 210.18 of this chapter.

(k) *Menu choices **at** breakfast. *The requirements in § 210.10(k) of this chapter also apply to this Program.

(l) *Requirements for breakfast period *—

(1) *Timing. *Schools must offer breakfasts meeting the requirements of this section at or near the beginning of the school day.

(2) [Reserved]

(m) *Modifications and variations in reimbursable meals. *The requirements in § 210.10(m) of this chapter also apply to this Program.

(n) *Nutrition disclosure. *The requirements in § 210.10(n) of this chapter also apply to this Program.

(o) *Breakfast requirements for preschoolers *—

(1) *Breakfasts served to preschoolers. *Schools serving breakfast to preschoolers under the School Breakfast Program must serve the meal components and quantities required in the breakfast meal pattern established for the Child and Adult Care Food Program under § 226.20(a), (c)(1), and (d) of this chapter. In addition, schools serving breakfasts to this age group must comply with the requirements set forth in paragraphs (a), (c)(3), (g), and (k) through (m) of this section, as applicable.

TABLE 4 TO PARAGRAPH (o)(2)—PRESCHOOL BREAKFAST MEAL PATTERN

[SELECT THE APPROPRIATE COMPONENTS FOR A REIMBURSABLE MEAL]

Meal components and food items 1 Minimum quantities

Ages 1-2 Ages 3-5

Fluid Milk 2 4 fluid ounces 6 fluid ounces.

Vegetables, Fruits, or portions of both 3 1⁄4 cup 1⁄2 cup.

Grains (oz. eq.) 4 1⁄2 ounce equivalent 1⁄2 ounce equivalent. *1 Must serve all three components for a reimbursable meal. 2 Must be unflavored whole milk for children age one. Must be unflavored low-fat (1 percent) or unflavored fat-free (skim) milk for children two through five years old. 3 Pasteurized full-strength juice may only be offered to meet the vegetable or fruit requirement at one meal, including snack, per day. 4 At least one serving per day, across all eating occasions, must be whole **grain-rich**. Grain-based desserts do not count toward meeting the grains requirement. **Meats**/meat alternates may be offered in place of the entire **grains** requirement, up to 3 times per week at breakfast. One ounce equivalent of a meat/meat alternate credits equal to one ounce equivalent of grains. Through September 30, 2025, breakfast cereals must contain no more than 6 grams of total sugars per dry ounce. By October 1, 2025, breakfast cereals must contain no more than 6 grams of added **sugars** per dry ounce. Information on crediting grain items and meats/meat alternates may be found in FNS guidance.*

(2) *Preschooler breakfast meal pattern table. *The minimum amounts of meal components to be served at breakfast are as follows:

(p) *Breakfast requirements for infants *—

(1) *Breakfasts served to infants. *Schools serving breakfasts to infants ages birth through 11 months under the School Breakfast Program must serve the meal components and quantities required in the breakfast meal pattern established for the Child and Adult Care Food Program, under § 226.20(a), (b), and (d) of this chapter. In addition, schools serving breakfasts to infants must comply with the requirements set forth in paragraphs (a), (c)(3), (g), and (k) through (m) of this section as applicable.

TABLE 5 TO PARAGRAPH (p)(2)—INFANT BREAKFAST MEAL PATTERN

Birth through 5 months 6 through 11 months

4-6 fluid ounces breast milk 1 or formula 2

6-8 fluid ounces breast milk 1 or formula; 2 and

0-1⁄2 ounce equivalent infant cereal; 2 3 or

0-4 tablespoons meat, fish, poultry, whole egg, cooked dry beans, peas, or lentils; or

0-2 ounces of cheese; or

0-4 ounces (volume) of cottage cheese; or

0-4 ounces or 1⁄2 cup of yogurt; 4 or a combination of the above; 5 and

0-2 tablespoons vegetable or fruit, or a combination of both.5 6

*1 Breast milk or formula, or portions of both, must be served; however, it is recommended that breast milk be served from birth through 11 months. For some breastfed infants who regularly consume less than the minimum amount of breast milk per feeding, a serving of less than the minimum amount of breast milk may be offered, with additional breast milk offered **at a later time** if the infant will consume more. 2 Infant **formula** and dry infant cereal must be iron-fortified. 3 Information on crediting grain items may be found in FNS guidance. 4 Through September 30, 2025, yogurt must contain no more than 23 grams of total sugars per 6 ounces. By October 1, 2025, yogurt must contain no more than 12 grams of added sugars per 6 ounces (2 grams of added sugars per ounce). 5 A serving of this component is required when the infant is developmentally ready to accept it. 6 Fruit and vegetable juices must not be served.*

*[77 FR 4154, Jan. 26, 2012, as amended at 78 FR 39093, June 28, 2013; 81 FR 24375, Apr. 25, 2016; 81 FR 50193, July 29, 2016; 81 FR 75675, Nov. 1, 2016; 82 FR 56714, Nov. 30, 2017; 83 FR 63790, Dec. 12, 2018; 84 FR 50292, Sept. 25, 2019; 85 FR 7854, Feb. 12, 2020; 85 FR 74849, Nov. 24, 2020; 86 FR 57546, Oct. 18, 2021; 87 FR 7006, Feb. 7, 2022; 87 FR 47332, Aug. 3, 2022; 87 FR 52329, Aug. 25, 2022; 89 FR 32080, Apr. 25, 2024]*

(2) *Infant breakfast meal pattern table. *The minimum amounts of meal components to be served at breakfast are as follows:

(q) *Severability. *If any provision of this section is held to be invalid or unenforceable by its terms, or as applied to any person or circumstances, it shall be severable from this section and not affect the remainder thereof. In the event of such holding of invalidity or unenforceability of a provision, the meal pattern requirements covered by that provision reverts to the version immediately preceding the invalidated provision.

§ 220.9 Reimbursement payments.

(Sec. 6, Pub. L. 95-627, 92 Stat. 3620 (42 U.S.C. 1776; secs. 801, 803, 812; Pub. L. 97-35, 95 Stat. 521-535, 42 U.S.C. 1753, 1759(a), 1758, 1773; sec. 819, Pub. L. 97-35, 95 Stat. 533 (42 U.S.C. 1759a, 1773 and 1757); 44 U.S.C. 3506))

*[**Amdt**. 25, 41 FR 34760, Aug. 17, 1976, as amended by **Amdt**. 29, 44 FR 48159, Aug. 17, 1979; **Amdt**. 38, 46 FR 50928, Oct. 16, 1981; 46 FR 51368, Oct. 20, 1981; 47 FR 746, Jan. 7, 1982; 47 FR 31375, July 20, 1982; 48 FR 40196, 40197, Sept. 6, 1983; 60 FR 31222, June 13, 1995; 65 FR 26923, May 9, 2000; 70 FR 66249, Nov. 2, 2005]*

(a) State agencies, or FNSRO's where applicable, shall make reimbursement payments to schools only in connection with breakfasts meeting the requirements of § 220.8, and reported in accordance with § 220.11(b) of this part. School Food Authorities shall plan for and prepare breakfasts on the basis of participation trends, with the objective of providing one breakfast per child per day. Production and participation records shall be maintained to demonstrate positive action toward this objective. In recognition of the fluctuation in participation levels which makes it difficult to precisely estimate the number of breakfasts needed and to reduce the resultant waste, any excess breakfasts that are prepared may be served to eligible children and may be claimed for reimbursement unless the State agency, or FNSRO where applicable, determines that the School Food Authority has failed to plan and prepare breakfasts with the objective of providing one breakfast per child per day. In no event shall the School Food Authority claim reimbursement for free and reduced price breakfasts in excess of the number of children approved for free and reduced price meals.

(b) The rates of reimbursement for breakfasts served to eligible children in schools not in severe need are the applicable national average payment factors for breakfasts. The maximum rates of reimbursement for breakfasts served to eligible children in schools determined to be in severe need are those prescribed by the Secretary. National average payment factors and maximum rates of reimbursement for the School Breakfast Program shall be prescribed annually by the Secretary in the FEDERAL REGISTER.

(c) The total reimbursement for breakfasts served to eligible children in schools not in severe need, and schools in severe need during the school year shall not exceed the sum of the products obtained by multiplying the total numbers of such free, reduced price and paid breakfasts, respectively, by the applicable rate of reimbursement for each type of breakfast as prescribed for the school year.

(d) The State agency, or FNSRO where applicable, shall determine whether a school is in severe need based on the following eligibility criteria:

(1) The school is participating in or desiring to initiate a breakfast program; and

(2) At least 40 percent of the lunches served to students at the school in the second preceding school year were served free or at a reduced price. Schools that did not serve lunches in the second preceding year and that would like to receive reimbursement at the severe need rate may apply to their administering State agency. The administering State agency shall approve or deny such requests in accordance with guidance, issued by the Secretary, that determines that the second preceding school year requirement would otherwise have been met.

§ 220.10 Effective date for reimbursement.

Reimbursement payments under the School Breakfast Program may be made only to School Food Authorities operating under an agreement with the State Agency or the Department, and may be made only after execution of the agreement. Such payments may include reimbursement in connection with breakfasts served in accordance with provisions of the program in the calendar month preceding the calendar month in which the agreement is executed.

*[32 FR 35, Jan. 5, 1967, as amended by **Amdt**. 9, 37 FR 9613, May 13, 1972]*


[Note: Additional sections of Part 220 continue]

======================================================================
7 CFR PART 225 — SFSP
Federal Register (current as of April 13, 2026)
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

*Unused reimbursement *means the difference between the amount of reimbursement earned and received and allowable costs, when reimbursement exceeds costs.

*Vended site *means a site that serves unitized meals, with or without milk, that are procured through a formal agreement or contract with:

(1) Public agencies or entities, such as a school food authority;

(2) Private, nonprofit organizations; or

(3) Private, for-profit companies, such as a commercial food distributor or food service management company.

*Vended sponsor *means a sponsor which purchases from a food service management company the unitized meals, with or without milk, which it will serve at its site(s), or a sponsor which purchases management services, subject to the limitations set forth in § 225.15, from a food service management company.

*Yogurt *means commercially prepared coagulated milk products obtained by the fermentation of specific bacteria, that meet milk fat or milk solid requirements and to which flavoring foods or ingredients may be added. These products are covered by the Food and Drug Administration's Standard of Identity for yogurt, lowfat yogurt, and nonfat yogurt, (21 CFR 131.200), (21 CFR 131.203), (21 CFR 131.206), respectively.

§ 225.3 Administration.

(a) *Responsibility within the Department. *FNS shall act on behalf of the Department in the administration of the Program.

(b) *State administered programs. *Within the State, responsibility for the administration of the Program must be in the State agency. Each State agency must notify the Department by January 1 of the fiscal year regarding its intention to administer the Program. Each State agency desiring to take part in the Program must enter into a written agreement with FNS for the administration of the Program in accordance with the provisions of this part. The agreement must cover the operation of the Program during the period specified therein and may be extended by written consent of both parties. The agreement must contain an assurance that the State agency will comply with the Department's nondiscrimination regulations (7 CFR part 15) issued under title VI of the Civil Rights Act of 1964, and any Instructions issued by FNS pursuant to 7 CFR part 15, title IX of the Education Amendments of 1972, and section 504 of the Rehabilitation Act of 1973. However, if a State educational agency is not permitted by law to disburse funds to any of the nonpublic schools in the State, the Secretary must disburse the funds directly to such schools within the State for the same purposes and subject to the same conditions as the disbursements to public schools within the State by the State educational agency.

(c) *Regional office administered programs. *The Secretary shall not administer the Program in the States, except that if a FNSRO has continuously administered the Program in any State since October 1, 1980, FNS shall continue to administer the Program in that State. In States in which FNSRO administers the Program, it shall have all of the responsibilities of a State agency and shall earn State administrative and Program funds as set forth in this part. A State in which FNS administers the Program may, upon request to FNS, assume administration of the Program.

(d) *Authority to waive **statute** and regulations.*

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State agency or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2)

(i) A State agency may submit a request for a waiver under paragraph (d)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(ii) A State agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(3)

(i) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part. Any waiver request submitted by an eligible service provider must be submitted to the State agency for review. A State agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

*[54 FR 18208, Apr. 27, 1989, as amended at 55 FR 13466, Apr. 10, 1990; 64 FR 72483, Dec. 28, 1999; 87 FR 57356, Sept. 19, 2022; 88 FR 90348, Dec. 29, 2023; 90 FR 24048, June 6, 2025]*

Subpart B—State Agency Provisions

§ 225.4 Program management and administration plan.

(ii) If a State agency concurs with a request from an eligible service provider, the State agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request. By forwarding the request to the FNSRO, the State agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(iii) If the State agency denies the request, the State agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State agency's receipt of the request. The State agency response is final and may not be appealed to FNS.

(a) Not later than February 15 of each year, each State agency shall submit to FNSRO a Program management and administration plan for that fiscal year.

(b) Each plan shall be acted on or approved by March 15 or, if it is submitted late, within 30 calendar days of receipt of the plan. If the plan initially submitted is not approved, the State agency and FNS shall work together to ensure that changes to the plan, in the form of amendments, are submitted so that the plan can be approved within 60 calendar days following the initial submission of the plan. Upon approval of the plan, the State agency shall be notified of the level of State administrative funding which it is assured of receiving under § 225.5(a)(3).

(c) Approval of the Plan by FNS shall be a prerequisite to the withdrawal of Program funds by the State from the Letter of Credit and to the donation by the Department of any commodities for use in the State's Program.

(d) The Plan must include, at a minimum, the following information:

(1) The State's administrative budget for the fiscal year, and the State's plan to comply with any standards prescribed by the Secretary for the use of these funds;

(2) The State's plan for use of Program funds and funds from within the State to the maximum extent practicable to reach needy children;

(3) The State's plans for providing technical assistance and training to eligible sponsors;

(4) The State's plans for monitoring and inspecting sponsors, feeding sites, and food service management companies and for ensuring that such companies do not enter into contracts for more meals than they can provide effectively and efficiently;

(5) The State's plan for timely and effective action against Program violators;

(6) The State's plan for ensuring the fiscal integrity of sponsors not subject to auditing requirements prescribed by the Secretary;

*[54 FR 18208, Apr. 27, 1989, as amended at 55 FR 13466, Apr. 10, 1990; 64 FR 72483, Dec. 28, 1999; 87 FR 57356, Sept. 19, 2022; 88 FR 90349, Dec. 29, 2023]*

§ 225.5 Payments to State agencies and use of Program funds.

(7) The State's plan for ensuring compliance with the food service management company procurement monitoring requirements set forth at § 225.6(l);

(8) An estimate of the State's need, if any, for monies available to pay for the cost of conducting health inspections and meal quality tests;

(9) The State's plan to provide a reasonable opportunity for children to access meals across all areas of the State; and

(10) The State's plan for Program delivery in areas that could benefit the most from the provision of non-congregate meals, including the State's plan to identify areas with no congregate meal service, and target priority areas for non-congregate meal service.

(a) *State administrative funds *—

(1) *Administrative funding formula. *For each fiscal year, FNS shall pay to each State agency for administrative expenses incurred in the Program an amount equal to

(i) 20 percent of the first $50,000 in Program funds properly payable to the State in the preceding fiscal year;

(ii) 10 percent of the next $100,000 in Program funds properly payable to the State in the preceding fiscal year;

(iii) 5 percent of the next $250,000 in Program funds properly payable to the State in the preceding fiscal year; and

(iv) 21⁄2 percent of any remaining Program funds properly payable to the State in the preceding fiscal year,

*Provided, however, *That FNS may make appropriate adjustments in the level of State administrative funds to reflect changes in Program size from the preceding fiscal year as evidenced by information submitted in the State Program management and administration plan and any other information available to FNS. If a State agency fails to submit timely and accurate reports under § 225.8(c) of this part, State administrative funds payable under this paragraph shall be subject to sanction. For such failure, FNS may recover, withhold, or cancel payment of up to one hundred percent of the funds payable to the State agency under this paragraph during the fiscal year.

(2) *Use of State administrative funds. *State administrative funds paid to any State shall be used by State agencies to employ personnel, including travel and related expenses, and to supervise and give technical assistance to sponsors in their initiation, expansion, and conduct of any food service for which Program funds are made available. State agencies may also use administrative funds for such other administrative expenses as are set forth in their approved Program management and administration plan.

(3) *Funding assurance. *At the time FNS approves the State's management and administration plan, the State shall be assured of receiving State administrative funding equal to the lesser of the following amounts: 80 percent of the amount obtained by applying the formula set forth in paragraph (a)(1) of this section to the total amount of Program payments made within the State during the prior fiscal year; or, 80 percent of the amount obtained by applying the formula set forth in paragraph (a)(1) to the amount of Program funds estimated to be needed in the management and administration plan. The State agency shall be assured that it will receive no less than this level unless FNS determines that the State agency has failed or is failing to meet its responsibilities under this part.

(4) *Limitation. *In no event may the total payment for State administrative costs in any fiscal year exceed the total amount of expenditures incurred by the State agency in administering the Program.

(5) *Full use of Federal funds. *States and State agencies must support the full use of Federal funds provided to State agencies for the administration of Child Nutrition Programs, and exclude such funds from State budget restrictions or limitations including, hiring freezes, work furloughs, and travel restrictions.

(b) *State administrative funds Letter of Credit.*

(1) At the beginning of each fiscal year, FNS shall make available to each participating State agency by Letter of Credit an initial allocation of State administrative funds for use in that fiscal year. This allocation shall not exceed one-third of the administrative funds provided to the State in the preceding fiscal year. For State agencies which did not receive any Program funds during the preceding fiscal year, the amount to be made available shall be determined by FNS.

(2) Additional State administrative funds shall be made available upon the receipt and approval by FNS of the State's Program management and administration plan. The amount of such funds, plus the initial allocation, shall not exceed 80 percent of the State administrative funds determined by the formula set forth in paragraph (a)(1) of this section and based on the estimates set forth in the approved Program management and administration plan.

(3) Any remaining State administrative funds shall be paid to each State agency as soon as practicable after the conduct of the funding assessment described in paragraph (c) of this section. However, regardless of whether such assessment is made, the remaining administrative funds shall be paid no later than September 1. The remaining administrative payment shall be in an amount equal to that determined to be needed during the funding evaluation or, if such evaluation is not conducted, the amount owed the State in accordance with paragraph (a)(1) of this section, less the amounts paid under paragraphs (b) (1) and (2) of this section.

(c) *Administrative funding evaluation. *FNSRO shall conduct data on the need for Program and State administrative funding within any State agency *if *the funding needs estimated in a State's management and administration plan are no longer accurate. Based on this data, FNS may make adjustments in the level of State administrative funding paid or payable to the State agency under paragraph (b) of this section to reflect changes in the size of the State's Program as compared to that estimated in its management and administration plan. The data shall be based on approved Program participation levels and shall be collected during the period of Program operations. As soon as possible following this data collection, payment of any additional administrative funds owed shall be made to the State agency. The payment may reflect adjustments made to the level of State administrative funding based on the information collected during the funding assessment. However, FNS shall not decrease the amount of a

State's administrative funds as a result of this assessment unless the State failed to make reasonable efforts to administer the Program as proposed in its management and administration plan or the State incurred unnecessary expenses.

(d) *Letter of Credit for Program payments.*

(1) Not later than April 15 of each fiscal year, FNS shall make available to each participating State in a Letter of Credit an amount equal to 65 percent of the preceding fiscal year's Program payments for operating costs plus 65 percent of the preceding fiscal year's Program payments for administrative costs in the State. This amount may be adjusted to reflect changes in reimbursement rates made pursuant to § 225.9(d)(8). However, the State shall not withdraw funds from this Letter of Credit until its Program management and administration plan is approved by FNS.

(2) Based on the State agency's approved management and administration plan, FNS shall, if necessary, adjust the State's Letter of Credit to ensure that 65 percent of estimated current year Program operating and administrative funding needs is available. Such adjustment shall be made no later than May 15, or within 90 days of FNS receipt of the State agency's management and administration plan, whichever date is later.

(3) Subsequent to the adjustment provided for in paragraph (d)(2) of this section, FNS will, if necessary, make one additional adjustment to ensure that the State agency's Letter of Credit contains at least 65 percent of the Program operating and administrative funds needed during the current fiscal year. Such adjustment may be based on the administrative funding assessment provided for in paragraph (c) of this section, if one is conducted, or on any additional information which demonstrates that the funds available in the Letter of Credit do not equal at least 65 percent of current year Program needs. In no case will such adjustments be made later than September 1. Funds made available in the Letter of Credit shall be used by the State agency to make Program payments to sponsors.

(4) The Letter of Credit shall include sufficient funds to enable the State agency to make advance payments to sponsors serving areas in which schools operate under a continuous school calendar. These funds shall be made available no later than the first day of the month prior to the month during which the food service will be conducted.

(5) FNS shall make available any remaining Program funds due within 45 days of the receipt of valid claims for reimbursement from sponsors by the State agency. However, no payment shall be made for claims submitted later than 60 days after the month covered by the claim unless an exception is granted by FNS.

(6) Each State agency shall release to FNS any Program funds which it determines are unobligated as of September 30 of each fiscal year. Release of funds by the State agency shall be made as soon as practicable, but in no event later than 30 calendar days following demand by FNS, and shall be accomplished by an adjustment in the State agency's Letter of Credit.

(e) *Adjustment to Letter of Credit. *Prior to May 15 of each fiscal year, FNS shall make any adjustments necessary in each State's Letter of Credit to reflect actual expenditures in the preceding fiscal year's Program.

(f) *Health inspection funds. *If the State agency's approved management and administration plan estimates a need for health inspection funding, FNS shall make available by letter of credit an amount up to one percent of Program funds estimated to be needed in the management and administration plan. Such amount may be adjusted, based on the administrative funding assessment provided for in paragraph (c) of this section, if such assessment is conducted. Health inspection funds shall be used solely to enable

*[54 FR 18208, Apr. 27, 1989, as amended at 76 FR 37982, June 29, 2011]*

§ 225.6 State agency responsibilities.

State or local health departments or other governmental agencies charged with health inspection functions to carry out health inspections and meal quality tests, provided that if these agencies cannot perform such inspections or tests, the State agency may use the funds to contract with an independent agency to conduct the inspection or meal quality tests. Funds so provided but not expended or obligated shall be returned to the Department by September 30 of the same fiscal year.

(a) *General responsibilities.*

(1) The State agency shall provide sufficient qualified consultative, technical, and managerial personnel to administer the Program, monitor performance, and measure progress in achieving Program goals. The State agency shall assign Program responsibilities to personnel to ensure that all applicable requirements under this part are met.

(2) By February 1 of each fiscal year, each State agency must announce the purpose, eligibility criteria, and availability of the Program throughout the State, through appropriate means of communication. As part of this effort, each State agency must:

(i) Identify areas in which poor economic conditions exist to qualify for the Program and actively seek eligible applicant sponsors to serve:

(A) Rural areas;

(B) Indian Tribal territories; and

(C) Areas with a concentration of migrant farm workers.

(ii) The State agency must identify rural areas with no congregate meal service and encourage participating sponsors to provide non-congregate meals to eligible children in those areas.

(iii) The State agency must target outreach efforts to priority outreach areas.

(iv) For approval of closed enrolled sites, the State agency must establish criteria to ensure that operation of a closed enrolled site does not limit Program access for eligible children in the area where the site is located.

(3) Each State agency shall require applicant sponsors submitting Program application site information sheets, Program agreements, or a request for advance payments, and sponsors submitting claims for reimbursement to certify that the information submitted on these forms is true and correct and that the sponsor is aware that deliberate misrepresentation or withholding of information may result in prosecution under applicable State and Federal statutes.

(4) In addition to the warnings specified in paragraph (a)(3) of this section, State agencies may include the following information on applications and pre-application materials distributed to prospective sponsors:

(i) The criminal penalties and provisions established in section 12(g) of the National School Lunch Act (42 U.S.C. 1760(g)) that states substantially: Whoever embezzles, willfully misapplies, steals, or obtains by fraud any funds, assets, or property that are the subject of a grant or other form of assistance under this Act or the Child Nutrition Act of 1966 (42 U.S.C. 1771 *et seq.), *whether received directly or indirectly from the United States Department of Agriculture, or

whoever receives, conceals, or retains such funds, assets, or property to personal use or gain, knowing such funds, assets, or property have been embezzled, willfully misapplied, stolen, or obtained by fraud shall, if such funds, assets, or property are of the value of $100 or more, be fined not more than $25,000 or imprisoned not more than five years, or both, or, if such funds, assets, or property are of a value of less than $100, shall be fined not more than $1,000 or imprisoned for not more than one year, or both.

(ii) The procedures for termination from Program participation of any site or sponsor which is determined to be seriously deficient in its administration of the Program. In addition, the application may also state that appeals of sponsor or site terminations will follow procedures mandated by the State agency and will also meet the minimum requirements of 7 CFR 225.13.

(b) *Approval of sponsor applications.*

(1) Each State agency must inform all of the previous year's sponsors which meet current eligibility requirements and all other potential sponsors of the deadline date for submitting a written application for participation in the Program. The State agency must require that all applicant sponsors submit written applications for Program participation to the State agency by June 15. However, the State agency may establish an earlier deadline for the Program application submission. Sponsors applying for participation in the Program due to an unanticipated school closure shall be exempt from the application submission deadline.

(2) Each State agency shall inform potential sponsors of the procedure for applying for advance operating and administrative costs payments as provided for in § 225.9(c). Where applicable, each State agency shall inform sponsors of the procedure for applying for start-up payments provided for in § 225.9(a).

(3) Within 30 days of receiving a complete and correct application, the State agency shall notify the applicant of its approval or disapproval. If an incomplete application is received, the State agency shall so notify the applicant within 15 days and shall provide technical assistance for the purpose of completing the application. Any disapproved applicant shall be notified of its right to appeal under § 225.13.

(4) The State agency shall determine the eligibility of sponsors applying for participation in the Program in accordance with the applicant sponsor eligibility criteria outlined in § 225.14. However, State agencies may approve the application of an otherwise eligible applicant sponsor which does not provide a year-round service to the community which it proposes to serve under the Program only if it meets one or more of the following criteria: It is a residential camp; it proposes to provide a food service for the children of migrant workers; a failure to do so would deny the Program to an area in which poor economic conditions exist; a significant number of needy children will not otherwise have reasonable access to the Program; or it proposes to serve an area affected by an unanticipated school closure. In addition, the State agency may approve a sponsor for participation during an unanticipated school closure without a prior application if the sponsor participated in the program at any time during the current year or in either of the prior two calendar years.

(5) The State agency must use the following priority system in approving applicants to operate sites that propose to serve the same area or the same enrolled children:

(i) Public or nonprofit private school food authorities;

(ii) Public agencies and private nonprofit organizations that have demonstrated successful program performance in a prior year;

(iii) New public agencies; and

(iv) New private nonprofit organizations.

(v) If two or more sponsors that qualify under paragraph (b)(5)(ii) of this section apply to serve the same area, the State agency must determine on a case-by-case basis which sponsor or sponsors it will select to serve the needy children in the area. The State agency should consider the resources and capabilities of each applicant.

(6) The State agency must not approve any sponsor to operate more than 200 sites or to serve more than an average of 50,000 children per day. However, the State agency may approve exceptions if:

(i) The applicant demonstrates that it has the capability of managing a program larger than the limits in this paragraph (b)(6); and

(ii) The State agency has the capacity to conduct reviews of at least 10 percent of the sponsor's sites, as described in § 225.7(e)(4)(v).

(7) The State agency shall review each applicant's administrative budget as a part of the application approval process in order to assess the applicant's ability to operate in compliance with these regulations within its projected reimbursement. In approving the applicant's administrative budget, the State agency shall take into consideration the number of sites and children to be served, as well as any other relevant factors. A sponsor's administrative budget shall be subject to review for adjustments by the State agency if the sponsor's level of site participation or the number of meals served to children changes significantly. State agencies may exempt school food authorities applying to operate the SFSP from submitting a separate budget to the State agency, if the school food authority submits an annual budget for the National School Lunch Program and the submitted budget includes the operation of SFSP.

(8) Applicants which qualify as camps and sponsors of conditional non-congregate sites must be approved for reimbursement only for meals served free to enrolled children who meet the Program's income standards.

(9) The State agency shall not approve the application of any applicant sponsor identifiable through its organization or principals as a sponsor which has been determined to be seriously deficient as described in § 225.11(c). However, the State agency may approve the application of a sponsor which has been disapproved or terminated in prior years in accordance with this paragraph if the applicant demonstrates to the satisfaction of the State agency that it has taken appropriate corrective actions to prevent recurrence of the deficiencies.

(10) If the sponsor's application to participate is denied, the official making the determination of denial must notify the applicant sponsor in writing stating all of the grounds on which the State agency based the denial. Pending the outcome of a review of a denial, the State agency shall proceed to approve other applicants in accordance with its responsibilities under paragraph (b)(5) of this section, without regard to the application under review.

(11) The State agency shall not approve the application of any applicant sponsor which submits fraudulent information or documentation when applying for Program participation or which knowingly withholds information that may lead to the disapproval of its application. Complete information regarding such disapproval of an applicant shall be submitted by the State agency through FNSRO to OIG.

(12) The State agency must not deny a sponsor's application based solely on the sponsor's intent to provide a non-congregate meal service.

(c) *Content of sponsor application *—

(1) *Application form.*

(i) The sponsor must submit a written application to the State agency for participation in the Program. The State agency may use the application form developed by FNS, or develop its own application form, provided that the form requests the full legal name, any previously used names, mailing address; date of birth of the sponsor's responsible principals, which include the executive director and board chair; and the sponsor's Federal Employer Identification Number (FEIN) or Unique Entity Identifier (UEI). Application to sponsor the Program must be made on a timely basis within the deadlines established under paragraph (b)(1) of this section.

(ii) At the discretion of the State agency, sponsors proposing to serve an area affected by an unanticipated school closure may be exempt from submitting a new application if they have participated in the Program at any time during the current year or in either of the prior two calendar years.

(iii) Requirements for new sponsors and sponsors that have experienced significant operational problems in the prior year, as determined by the State agency, are found under paragraph (c)(2) of this section.

(iv) Requirements for experienced sponsors are found under paragraph (c)(3) of this section.

(2) *Application requirements for new sponsors and sponsors that have experienced significant operational problems in the prior year. *New sponsors and sponsors that have experienced significant operational problems in the prior year, as determined by the State agency, must include the following information in their applications:

(i) A full management plan, as described in paragraph (e) of this section;

(ii) A free meal policy statement, as described in paragraph (f) of this section;

(iii) A site information sheet for each site where a food service operation is proposed, as described in paragraph (g)(1) of this section;

(iv) Information in sufficient detail to enable the State agency to determine that the sponsor meets the criteria for participation in the Program, as described in § 225.14;

(v) Information on the extent of Program payments needed, including a request for advance payments and start-up payments, if applicable;

(vi) A staffing and monitoring plan;

(vii) A complete administrative budget for State agency review and approval, which includes:

(A) The projected administrative expenses that the sponsor expects to incur during the operation of the Program, and

(B) Information in sufficient detail to enable the State agency to assess the sponsor's ability to operate the Program within its estimated reimbursement;

(viii) *A summary of how meals will be obtained at each site (e.g., *self-prepared at each site, self-prepared and distributed from a central kitchen, purchased from a school food authority, competitively procured from a food service management company);

(ix) If an invitation for bid is required under § 225.15(m), a schedule for bid dates and a copy of the invitation for bid;

(x) For each sponsor which seeks approval as a unit of local, municipal, county or State government under § 225.14(b)(3) or as a private nonprofit organization under § 225.14(b)(5), certification that the sponsor has administrative oversight, as required under § 225.14(d)(3); and

(xi) Procedures that document meals are only distributed, to a reasonable extent, to eligible children and that duplicate meals are not distributed to any child, if the applicant sponsor is electing to use the non-congregate meal service options described in § 225.16(i)(1) and (2).

(3) *Application requirements for experienced sponsors. *The following information must be included in the applications of experienced sponsors:

(i) A simplified or full management plan, as described in paragraph (e) of this section;

(ii) A site information sheet for each site where a food service operation is proposed, as described under paragraph (g)(2) of this section;

(iii) Information on the extent of Program payments needed, including a request for advance payments and start-up payments, if it is applicable;

(iv) A staffing and monitoring plan;

(v) A complete administrative budget for State agency review and approval, which includes:

(A) The projected administrative expenses which a sponsor expects to incur during the operation of the Program; and

(B) Information in sufficient detail to enable the State agency to assess the sponsor's ability to operate the Program within its estimated reimbursement.

(vi) If the method of obtaining meals is changed, a summary of how meals will be obtained at each *site (e.g., *self-prepared at each site, self-prepared and distributed from a central kitchen, purchased from a school food authority, competitively procured from a food service management company);

(vii) If an invitation for bid is required under § 225.15(m), a schedule for bid dates, and a copy of the invitation for bid, if it is changed from the previous year; and

(viii) Procedures that document meals are only distributed, to a reasonable extent, to eligible children and that duplicate meals are not distributed to any child, if the applicant sponsor is electing to use the non-congregate meal service options described in § 225.16(i)(1) and (2).

(4) *Applications for school food authorities and Child and Adult Care Food Program institutions. *At the discretion of the State agency, school food authorities in good standing in the National School Lunch Program or School Breakfast Program, as applicable, and institutions in good standing in the Child and Adult Care Food Program may apply to operate the Summer Food Service Program at the same sites where they provide meals through the aforementioned Programs by following the procedures for experienced sponsors outlined in paragraph (c)(3) of this section.

(d) *Performance standards. *The State agency may only approve the applications of those sponsors that meet the three performance standards outlined in this section: financial viability, administrative capability, and Program accountability. The State agency must deny applications that do not meet all of these standards. The State agency must consider past performance in the SFSP or another Child Nutrition Program, and any other factors it deems relevant when determining whether the sponsor's application meets the following standards:

(1) *Performance standard 1. *The sponsor must be financially viable. The sponsor must expend and account for Program funds, consistent with this part; FNS Instruction 796-4, Financial Management in the Summer Food Service Program; 2 CFR part 200, subpart D; and USDA regulations 2 CFR parts 400 and 415. To demonstrate financial viability and financial management, the sponsor's management plan must:

(i) Describe the community's need for summer meals and the sponsor's recruitment strategy:

(A) Explain how the sponsor's participation will help ensure the delivery of Program benefits to otherwise unserved sites or children; and

(B) Describe how the sponsor will recruit sites, consistent with any State agency requirements.

(ii) Describe the sponsor's financial resources and financial history:

(A) Show that the sponsor has adequate sources of funds available to operate the Program, pay employees and suppliers during periods of temporary interruptions in Program payments, and pay debts if fiscal claims are assessed against the sponsor; and

(B) Provide audit documents, financial statements, and other documentation that demonstrate financial viability.

(iii) Ensure that all costs in the sponsor's budget are necessary, reasonable, allowable, and appropriately documented.

(2) *Performance standard 2. *The sponsor must be administratively capable. Appropriate and effective management practices must be in effect to ensure that Program operations meet the requirements of this part. To demonstrate administrative capability, the sponsor must:

(i) Have an adequate number and type of qualified staff to ensure the operation of the Program, consistent with this part; and

(ii) Have written policies and procedures that assign Program responsibilities and duties and ensure compliance with civil rights requirements.

(3) *Performance standard 3. *The sponsor must have internal controls and other management systems in place to ensure fiscal accountability and operation of the Program, consistent with this part. To demonstrate Program accountability, the sponsor must:

(i) Demonstrate that the sponsor has a financial system with management controls specified in written operational policies that will ensure that:

(A) All funds and property received are handled with fiscal integrity and accountability;

(B) All expenses are incurred with integrity and accountability;

(C) Claims will be processed accurately, and in a timely manner;

(D) Funds and property are properly safeguarded and used, and expenses incurred, for authorized Program purposes; and

(E) A system of safeguards and controls is in place to prevent and detect improper financial activities by employees.

(ii) Maintain appropriate records to document compliance with Program requirements, including budgets, approved budget amendments, accounting records, management plans, and site operations.

(e) *Management plan *—

(1) *Compliance. *The State agency must require the submission of a management plan to determine compliance with performance standards established under paragraph (d) of this section.

(i) Requirements for new sponsors and sponsors that have experienced significant operational problems in the prior year, as determined by the State agency, are found under paragraph (e)(2) of this section.

(ii) Requirements for experienced sponsors are found under paragraph (e)(3) of this section.

(iii) Requirements for school food authorities in good standing in the National School Lunch Program or School Breakfast Program, as applicable, or institutions in good standing in the Child and Adult Care Food Program are found under paragraph (e)(4) of this section.

(2) *Requirements for new sponsors and sponsors that have experienced significant operational problems in the prior year. *Sponsors must submit a complete management plan that includes:

(i) Detailed information on the sponsor's management and administrative structure, including information that demonstrates the sponsor's financial viability and financial management described under paragraph (d)(1) of this section;

(ii) Information that demonstrates compliance with each of the performance standards outlined under paragraph (d) of this section;

(iii) A list or description of the staff assigned to perform Program monitoring required under § 225.15(d)(2) and (3); and

(iv) For each sponsor which submits an application under paragraph (c)(1) of this section, information in sufficient detail to demonstrate that the sponsor will:

(A) Provide adequate and not less than annual training of sponsor's staff and sponsored sites, as required under § 225.15(d)(1);

(B) Perform monitoring consistent with § 225.15(d)(2) and (3), to ensure that all site operations are accountable and appropriate;

(C) Accurately classify sites consistent with paragraphs (g)(1) and (2) of this section;

(D) Demonstrate the sponsor's compliance with meal service, recordkeeping, and other operational requirements of this part;

(E) Provide meals that meet the meal patterns set forth in § 225.16;

(F) Have a food service that complies with applicable State and local health and sanitation requirements;

(G) Comply with civil rights requirements;

(H) Maintain complete and appropriate records on file; and

(I) Claim reimbursement only for eligible meals.

(3) *Requirements for experienced sponsors. *Experienced sponsors must submit a management plan. At the discretion of the State agency, experienced sponsors may submit a full management plan or a simplified management plan. A full management plan must be submitted at least once every 3 years. The simplified management plan must include a certification that any information previously submitted to the State to satisfy the eligibility requirements, set forth in paragraph (d) of this section, for the sponsor, its sites, and all of its current principals is current, or that the sponsor has submitted any changes or updates to the State. This certification must address all required elements of each performance standard.

(4) *Requirements for school food authorities in good standing in the National School Lunch Program or School Breakfast Program, as applicable, or institutions in good standing in the Child and Adult Care Food Program. *These sponsors are not required to submit a management plan unless requested by the State agency. The State agency may request additional evidence of financial and administrative capability sufficient to ensure that the school food authority or institution has the ability and resources to operate the Program if the State agency has reason to believe that this would pose significant challenges for the applicant.

(f) *Free meal policy statement *—

(1) *Nondiscrimination statement.*

(i) Each sponsor must submit a nondiscrimination statement of its policy for serving meals to children. The statement must consist of:

(A) An assurance that all children are served the same meals and that there is no discrimination in the course of the food service; and

(B) Except for camps and conditional non-congregate sites, a statement that the meals served are free at all sites.

(ii) A school sponsor must submit the policy statement only once, with the initial application to participate as a sponsor. However, if there is a substantive change in the school's free and reduced price policy, a revised policy statement must be provided at the State agency's request.

(iii) In addition to the information described in paragraph (i) of this section, the policy statement of all camps and conditional non-congregate sites that charge separately for meals must also include:

(A) A statement that the eligibility standards conform to the Secretary's family size and income standards for reduced price school meals;

(B) A description of the method to be used in accepting applications from families for Program meals that ensures that households are permitted to apply on behalf of children who are members of households receiving SNAP, FDPIR, or TANF benefits using the categorical eligibility procedures described in § 225.15(f);

(C) A description of the method to be used for collecting payments from children who pay the full price of the meal while preventing the overt identification of children receiving a free meal;

(D) An assurance that the sponsor will establish hearing procedures for families requesting to appeal a denial of an application for free meals. These procedures must meet the requirements set forth in paragraph (f)(2) of this section;

(E) An assurance that, if a family requests a hearing, the child will continue to receive free meals until a decision is rendered; and

(F) An assurance that there will be no overt identification of free meal recipients and no discrimination against any child on the basis of race, color, national origin, sex (including gender identity and sexual orientation), age, or disability.

(2) *Hearing procedures statement. *Each camp or sponsor of a conditional non-congregate site must submit a copy of its hearing procedures with its application. At a minimum, the procedures must provide that:

(i) A simple, publicly announced method will be used for a family to make an oral or written request for a hearing;

(ii) The family will have the opportunity to be assisted or represented by an attorney or other person (designated representative);

(iii) The family or designated representative will have an opportunity to examine the documents and records supporting the decision being appealed, both before and during the hearing;

(iv) The hearing will be reasonably prompt and convenient for the family or designated representative;

(v) Adequate notice will be given to the family or designated representative of the time and place of the hearing;

(vi) The family or designated representative will have an opportunity to present oral or documented evidence and arguments supporting its position;

(vii) The family or designated representative will have an opportunity to question or refute any testimony or other evidence and to confront and cross-examine any adverse witnesses;

(viii) The hearing will be conducted and the decision made by a hearing official who did not participate in the action being appealed;

(ix) The decision will be based on the oral and documentary evidence presented at the hearing and made a part of the record;

(x) The family or designated representative will be notified in writing of the decision;

(xi) A written record will be prepared for each hearing, which includes the action being appealed, any documentary evidence and a summary of oral testimony presented at the hearing, the decision and the reasons for the decision, and a copy of the notice sent to the family or designated representative; and

(xii) The written record will be maintained for a period of three years following the conclusion of the hearing and will be available for examination by the family or designated representative at any reasonable time and place.

(g) *Site information sheet. *The State agency must develop a site information sheet for sponsors.

(1) *New sites. *The application submitted by sponsors must include a site information sheet for each site where a food service operation is proposed. Where a non-congregate meal service operation is proposed for the first time, the sponsor must follow the requirements of this paragraph (g)(1). At a minimum, the site information sheet must demonstrate or describe the following:

(i) An organized and supervised system for serving meals to children;

(ii) The estimated number of meals to be served, types of meals to be served, and meal service times;

(iii) Whether the site is rural, as defined in § 225.2, or non-rural. Documentation supporting the rural designation is required. New documentation is required every 5 years, or earlier, if the State agency determines that an area's rural status has changed significantly since the last designation;

(iv) Whether the meal service is congregate or non-congregate;

(v) Whether the site is a self-preparation site or a vended site, as defined in § 225.2;

(vi) Arrangements for delivery and holding of meals until meal service times and storing and refrigerating any leftover meals until the next day, within standards prescribed by State or local health authorities;

(vii) Access to a means of communication to make necessary adjustments in the number of meals delivered, based on changes in the number of children in attendance at each site;

(viii) Arrangements for food service during periods of inclement weather;

(ix) For open sites and restricted open sites:

(A) Documentation supporting the eligibility of each site as serving an area in which poor economic conditions exist;

(B) When school data are used, new documentation is required every 5 years;

(C) When census data are used, new documentation is required every 5 years, or earlier, if the State agency determines that an area's socioeconomic status has changed significantly since the last census; and

(D) At the discretion of the State agency, sponsors proposing to serve an area affected by an unanticipated school closure may be exempt from submitting new site documentation if the sponsor has participated in the Program at any time during the current year or in either of the prior 2 calendar years;

(x) For closed enrolled sites:

(A) The projected number of children enrolled and the projected number of children eligible for free and reduced price school meals for each of these sites; or documentation supporting the eligibility of each site as serving an area in which poor economic conditions exist;

(B) When school data are used, new documentation is required every 5 years; and

(C) When census data are used, new documentation is required every 5 years, or earlier, if the State agency determines that an area's socioeconomic status has changed significantly since the last census;

(xi) For NYSP sites, certification from the sponsor that all of the children who will receive Program meals are enrolled participants in the NYSP;

(xii) For camps, the number of children enrolled in each session who meet the Program's income standards. If such information is not available at the time of application, this information must be submitted as soon as possible thereafter, and in no case later than the filing of the camp's claim for reimbursement for each session;

(xiii) For sites that will serve children of migrant workers:

(A) Certification from a migrant organization, which attests that the site serves children of migrant workers; and

(B) Certification from the sponsor that the site primarily serves children of migrant workers, if non-migrant children are also served; and

(xiv) For conditional non-congregate sites, the number of children enrolled who meet the Program's income standards. If such information is not available at the time of application, this information must be submitted as soon as possible thereafter, and in no case later than the filing of the sponsor's claim for reimbursement.

(2) *Experienced sites. *The application submitted by sponsors must include a site information sheet for each site where a food service operation is proposed. The State agency may require sponsors of experienced sites to provide information described in paragraph (g)(1) of this section. At a minimum, the site information sheet must demonstrate or describe the following:

(i) The estimated number of meals, types of meals to be served, and meal service times;

(ii) Whether the site is rural, as defined in § 225.2, or non-rural. Documentation supporting the rural designation is required. New documentation is required every 5 years, or earlier, if the State agency determines that an area's rural status has changed significantly since the last designation;

(iii) Whether the meal service is congregate or non-congregate;

(iv) For open sites and restricted open sites:

(A) Documentation supporting the eligibility of each site as serving an area in which poor economic conditions exist;

(B) When school data are used, new documentation is required every 5 years;

(C) When census data are used, new documentation is required every 5 years, or earlier, if the State agency determines that an area's socioeconomic status has changed significantly since the last census; and

(D) Any site that a sponsor proposes to serve during an unanticipated school closure, which has participated in the Program at any time during the current year or in either of the prior 2 calendar years, is considered eligible without new documentation;

(v) For closed enrolled sites:

(A) The projected number of children enrolled and the projected number of children eligible for free and reduced price school meals for each of these sites; or documentation supporting the eligibility of each site as serving an area in which poor economic conditions exist;

(B) When school data are used, new documentation is required every 5 years; and

(C) When census data are used, new documentation is required every 5 years, or earlier, if the State agency determines that an area's socioeconomic status has changed significantly since the last census;

(vi) For NYSP sites, certification from the sponsor that all of the children who will receive Program meals are enrolled participants in the NYSP;

(vii) For camps, the number of children enrolled in each session who meet the Program's income standards. If such information is not available at the time of application, this information must be submitted as soon as possible thereafter, and in no case later than the filing of the camp's claim for reimbursement for each session; and

(viii) For conditional non-congregate sites, the number of children enrolled who meet the Program's income standards. If such information is not available at the time of application, this information must be submitted as soon as possible thereafter, and in no case later than the filing of the sponsor's claim for reimbursement.

(h) *Approval of sites.*

(1) When evaluating a proposed food service site, the State agency must ensure that:

(i) If not a camp or a conditional non-congregate site, the proposed site serves an area in which poor economic conditions exist, as defined by § 225.2;

(ii) The area which the site proposes to serve is not or will not be served in whole or in part by another site, unless it can be demonstrated to the satisfaction of the State agency that each site will serve children not served by any other site in the same area for the same meal;

(iii) The site is approved to serve no more than the number of children for which its facilities are adequate; and

(iv) If it is a site proposed to operate during an unanticipated school closure, it is a non-school site.

(2) When approving the application of a site which will serve meals prepared by a food service management company, the State agency must establish for each meal service an approved level for the maximum number of children's meals which may be served under the Program. These approved levels must be established in accordance with the following provisions:

(i) The initial maximum approved level must be based upon the historical record of the number of meals served at the site if such a record has been established in prior years and the State agency determines that it is accurate. The State agency must develop a procedure for establishing initial maximum approved levels for sites when no accurate record from prior years is available. The State agency may consider participation at other similar sites located in the area, documentation of programming taking place at the site, statistics on the number of children residing in the area, and other relevant information.

(ii) The maximum approved level must be adjusted, if warranted, based upon information collected during site reviews. If the number of meals served at the site on the day of the review is significantly below the site's approved level, the State agency should consider making a downward adjustment in the approved level with the objective of providing only one meal per child.

(iii) The sponsor may seek an upward adjustment in the approved level for its sites by requesting a site review or by providing the State agency with evidence that the number of meals served exceeds the sites' approved levels. The sponsor may request an upward adjustment at any point prior to submitting the claim for the impacted reimbursement period.

(iv) Whenever the State agency establishes or adjusts approved levels of meal service for a site, it must document the action in its files, and it shall provide the sponsor with immediate written confirmation of the approved level.

(v) Upon approval of its application or any adjustment to its maximum approved levels, the sponsor must inform the food service management company with which it contracts of the approved level for each meal service at each site served by the food service management company. This notification of any adjustments in approved levels must take place within the time frames set forth in the contract for adjusting meal orders. Whenever the sponsor notifies the food service management company of the approved levels or any adjustments to these levels for any of its sites, the sponsor must clearly inform the food service management company that an approved level of meal service represents the maximum number of meals which may be served at a site and is not a standing order for a specific number of meals at that site. When the number of children being served meals is below the site's approved level, the sponsor must adjust meal orders with the objective of serving only one meal per child as required under § 225.15(b)(3).

(3) When approving the application of a site that will provide a non-congregate meal service, the State agency must ensure that the proposed site:

(i) Meets the requirements described in paragraphs (h)(1) and (2) of this section.

(ii) Is rural, as defined in § 225.2.

(iii) Will not serve an area where children would receive the same meal at an approved congregate meal site, unless it can be demonstrated to the satisfaction of the State agency that the site will serve a different group of children who may not be otherwise served.

(iv) Serves an area in which poor economic conditions exist or is approved for reimbursement only for meals served free to enrolled children who meet the Program's income standards.

(v) Distributes up to the allowable number of reimbursable meals that would be provided over a 10-calendar day period. The State agency may establish a shorter calendar day period on a case-by-case basis and without regard to sponsor type.

(4) When approving the application of a site which will provide both congregate and non-congregate meal services, the State agency must ensure that:

(i) The proposed site meets the requirements in paragraphs (h)(1) through (3) of this section.

(ii) The proposed site will only conduct a non-congregate meal service when the site is not providing a congregate meal service.

(iii) The sponsor proposes an organized and supervised system which prevents overlap between meal services and reasonably ensures children are not receiving more than the daily maximum allowance of meals as required in § 225.16(b)(3).

(i) *State-sponsor agreement. *A sponsor approved for participation in the Program must enter into a permanent written agreement with the State agency. The existence of a valid permanent agreement does not limit the State agency's ability to terminate the agreement, as provided under § 225.11(c). The State agency must terminate the sponsor's agreement whenever a sponsor's participation in the Program ends. The State agency or sponsor may terminate the agreement at its convenience, upon mutual agreement, due to considerations unrelated to either party's performance of Program responsibilities under the agreement. However, any action initiated by the State agency to terminate an agreement for its convenience requires prior consultation with FNS. All sponsors must agree in writing to:

(1) Operate a nonprofit food service during the period specified, as follows:

(i) From May through September for children on school vacation;

(ii) At any time of the year, in the case of sponsors administering the Program under a continuous school calendar system; or

(iii) During the period from October through April, if it serves an area affected by an unanticipated school closure due to a natural disaster, major building repairs, court orders relating to school safety or other issues, labor-management disputes, or, when approved by the State agency, a similar cause.

(2) For school food authorities, offer meals which meet the requirements and provisions set forth in § 225.16 during times designated as meal service periods by the sponsor and offer the same meals to all children.

(3) For all other sponsors, serve meals which meet the requirements and provisions set forth in § 225.16 during times designated as meal service periods by the sponsor and serve the same meals to all children.

(4) Serve meals without cost to all children, except that camps and conditional non-congregate sites may charge for meals served to children who are not served meals under the Program.

(5) Issue a free meal policy statement in accordance with paragraph (c) of this section.

(6) Meet the training requirement for its administrative and site personnel, as required under § 225.15(d)(1).

(7) Claim reimbursement only for the types of meals specified in the agreement that are served:

(i) Without charge to children at approved sites, except camps and conditional non-congregate sites, during the approved meal service time;

(ii) Without charge to children who meet the Program's income standards in camps and conditional non-congregate sites;

(iii) Within the approved level for the maximum number of children's meals that may be served, if a maximum approved level is required under paragraph (h)(2) of this section;

(iv) At the approved meal service time, unless a change is approved by the State agency, as required under § 225.16(c); and

(v) At the approved site, unless the requirements in § 225.16(g) are met.

(8) Submit claims for reimbursement in accordance with procedures established by the State agency, and those stated in § 225.9.

(9) In the storage, preparation and service of food, maintain proper sanitation and health standards in conformance with all applicable State and local laws and regulations.

(10) Accept and use, in quantities that may be efficiently utilized in the Program, such foods as may be offered as a donation by the Department.

(11) Have access to facilities necessary for storing, preparing, and serving food.

(12) Maintain a financial management system as prescribed by the State agency.

(13) Maintain on file documentation of site visits and reviews in accordance with § 225.15(d) (2) and (3).

(14) Upon request, make all accounts and records pertaining to the Program available to State, Federal, or other authorized officials for audit or administrative review, at a reasonable time and place. The records shall be retained for a period of 3 years after the end of the fiscal year to which they pertain, unless audit or investigative findings have not been resolved, in which case the records shall be retained until all issues raised by the audit or investigation have been resolved.

(15) For approved congregate meal service, maintain children on site while meals are consumed. Sponsors may allow a child to take one fruit, vegetable, or grain item off-site for later consumption if the requirements in § 225.16(h) are met.

(16) Retain final financial and administrative responsibility for its program.

(j) *Special Account. *In addition, the State agency may require any vended sponsor to enter into a special account agreement with the State agency. The special account agreement shall stipulate that the sponsor shall establish a special account with a State agency or Federally insured bank for operating costs payable to the sponsor by the State. The agreement shall also stipulate that any disbursement of monies from the account must be authorized by both the sponsor and the food service management company. The special account agreement may contain such other terms, agreed to by both the sponsor and the food service management company, which are consistent with the terms of the contract between the sponsor and the food service management company. A copy of the special account agreement shall be submitted to the State agency and another copy maintained on file by the sponsor. Any charges made by the bank for the account described in this section shall be considered an allowable sponsor administrative cost.

(k) *Food service management company registration. *A State agency may require each food service management company, operating within the State, to register based on State procedures. A State agency may further require the food service management company to certify that the information submitted on its application for registration is true and correct and that the food service management company is aware that misrepresentation may result in prosecution under applicable State and Federal statutes.

(l) *Monitoring of** food service management company procurements.*

(1) The State agency shall ensure that sponsors' food service management company procurements are carried out in accordance with §§ 225.15(m) and 225.17.

(2) Each State agency shall develop a standard form of contract for use by sponsors in contracting with food service management companies. Sponsors that are public entities, sponsors with exclusive year-round contracts with a food service management company, and sponsors that have no food service management company contracts exceeding the simplified acquisition threshold in 2 CFR part 200, as applicable, may use their existing or usual form of contract, provided that such form of contract has been submitted to and approved by the State agency. The standard contract developed by the State agency shall expressly and without exception provide that:

(i) All meals prepared by a food service management company shall be unitized, with or without milk or juice, unless the State agency has approved, pursuant to paragraph (l)(3) of this section, a request for exceptions to the unitizing requirement for certain components of a meal;

(ii) A food service management company entering into a contract with a sponsor under the Program shall not subcontract for the total meal, with or without milk, or for the assembly of the meal;

(iii) The sponsor shall provide to the food service management company a list of State agency approved food service sites, along with the approved level for the number of meals which may be claimed for reimbursement for each site, established under § 225.6(h)(2), and shall notify the food service management company of all sites which have been approved, cancelled, or terminated subsequent to the submission of the initial approved site list and of any changes in the approved level of meal service for a site. Such notification shall be provided within the time limits mutually agreed upon in the contract;

(iv) The food service management company shall maintain such records (supported by invoices, receipts, or other evidence) as the sponsor will need to meet its responsibilities under this part, and shall submit all required reports to the sponsor promptly at the end of each month, unless more frequent reports are required by the sponsor;

(v) The food service management company must have State or local health certification for the facility in which it proposes to prepare meals for use in the Program. It must ensure that health and sanitation requirements are met at all times. In addition, the food service management company must ensure that meals are inspected periodically to determine bacteria levels present in the meals and that the bacteria levels found to be present in the meals conform with the standards set by local health authorities. The results of the inspections must be submitted promptly to the sponsor and to the State agency.

(vi) The meals served under the contract shall conform to the cycle menus and meal quality standards and food specifications approved by the State agency and upon which the bid was based;

(vii) The books and records of the food service management company pertaining to the sponsor's food service operation shall be available for inspection and audit by representatives of the State agency, the Department and the U.S. Government Accountability Office at any reasonable time and place for a period of 3 years from the date of receipt of final payment under the contract, except that, if audit or investigation findings have not been resolved, such records shall be retained until all issues raised by the audit or investigation have been resolved;

(viii) The sponsor and the food service management company shall operate in accordance with current Program regulations;

(ix) The food service management company shall be paid by the sponsor for all meals delivered in accordance with the contract and this part. However, neither the Department nor the State agency assumes any liability for payment of differences between the number of meals delivered by the food service management company and the number of meals served by the sponsor that are eligible for reimbursement;

(x) Meals shall be delivered in accordance with a delivery schedule prescribed in the contract;

(xi) Increases and decreases in the number of meals ordered shall be made by the sponsor, as needed, within a prior notice period mutually agreed upon;

(xii) All meals served under the Program shall meet the requirements of § 225.16;

(xiii) In cases of nonperformance or noncompliance on the part of the food service management company, the company shall pay the sponsor for any excess costs which the sponsor may incur by obtaining meals from another source;

(xiv) If the State agency requires the sponsor to establish a special account for the deposit of operating costs payments in accordance with the conditions set forth in § 225.6(j), the contract shall so specify;

(xv) The food service management company shall submit records of all costs incurred in the sponsor's food service operation in sufficient time to allow the sponsor to prepare and submit the claim for reimbursement to meet the 60-day submission deadline; and

(xvi) The food service management company shall comply with the appropriate bonding requirements, as set forth in § 225.15(m)(5) through (7).

(3) All meals prepared by a food service management company shall be unitized, with or without milk or juice, unless the sponsor submits to the State agency a request for exceptions to the unitizing requirement for certain components of a meal. These requests shall be submitted to the State agency in writing in sufficient time for the State agency to respond prior to the sponsor's advertising for bids. The State agency shall notify the sponsor in writing of its determination in a timely manner.

(4) Each State agency shall have a representative present at all food service management company procurement bid openings when sponsors are expected to receive more than $100,000 in Program payments.

(5) Copies of all contracts between sponsors and food service management companies, along with a certification of independent price determination, shall be submitted to the State agency prior to the beginning of Program operations. Sponsors shall also submit to the State agency copies of all bids received and their reason for selecting the food service management company chosen.

(6) All bids in an amount which exceeds the lowest bid shall be submitted to the State agency for approval before acceptance. All bids totaling $100,000 or more shall be submitted to the State agency for approval before acceptance. State agencies shall respond to a request for approval of such bids within 5 working days of receipt.

(7) The contract between a sponsor and food service management company shall be no longer than 1 year; and options for the yearly renewal of a contract may not exceed 4 additional years. All contracts shall include a termination clause whereby either party may cancel for cause or for convenience with up to 60-day notification.

*[54 FR 18208, Apr. 27, 1989, as amended at 55 FR 13467, Apr. 10, 1990; ; 64 FR 72484, Dec. 28, 1999; 64 FR 72896, Dec. 29, 1999; 72 FR 10895, Mar. 12, 2007; 76 FR 22798, Apr. 25, 2011; 78 FR 13450, Feb. 28, 2013; 83 FR 25357, June 1, 2018; 84 FR 15501, Apr. 16, 2019; 87 FR 57356, Sept. 19, 2022; 88 FR 57849, Aug. 23, 2023; 88 FR 90349, Dec. 29, 2023]*

§ 225.7 Program monitoring and assistance.

(8) Failure by a sponsor to comply with the provisions of this paragraph or § 225.15(m) shall be sufficient grounds for the State agency to terminate participation by the sponsor in accordance with § 225.18(b).

(m) *Meal pattern exceptions. *The State agency shall review and act upon requests for exceptions to the meal pattern in accordance with the guidelines and limitations set forth in § 225.16.

(a) *Training. *Prior to the beginning of Program operations, each State agency shall make available training in all necessary areas of Program administration to sponsor personnel, food service management company representatives, auditors, and health inspectors who will participate in the Program in that State. Prior to Program operations, the State agency shall ensure that the sponsor's supervisory personnel responsible for the food service receive training in all necessary areas of Program administration and operations. This training shall reflect the fact that individual sponsors or groups of sponsors require different levels and areas of Program training. State agencies are encouraged to utilize in such training, and in the training of site personnel, sponsor personnel who have previously participated in the Program. Training should be made available at convenient locations or via the internet. State agencies are not required to conduct this training for sponsors operating the Program during unanticipated school closures.

(b) *Program materials. *Each State agency shall develop and make available all necessary Program materials in sufficient time to enable applicant sponsors to prepare adequately for the Program.

(c) *Food specifications and meal quality standards. *With the assistance of the Department, each State agency shall develop and make available to all sponsors minimum food specifications and model meal quality standards which shall become part of all contracts between vended sponsors and food service management companies.

(d) *Pre-approval visits. *The State agency must conduct pre-approval visits of sponsors and sites, as specified in paragraph (d)(1) through (4) of this section, to assess the applicant sponsor's or site's potential for successful Program operations and to verify information provided in the application.

(1) The State agency must visit, prior to approval:

(i) All applicant sponsors that did not participate in the program in the prior year;

(ii) All applicant sponsors that had operational problems noted in the prior year; and

(iii) All sites that the State agency has determined need a pre-approval visit.

(2) If a sponsor is a school food authority or Child and Adult Care Food Program institution and was reviewed by the State agency under their respective programs during the preceding 12 months, and had no significant deficiencies noted in that review, a pre-approval visit may be conducted at the discretion of the State agency.

(3) Pre-approval visits of sponsors proposing to operate the Program during unanticipated school closures may be conducted at the discretion of the State agency.

(4) Each State agency must establish a process to determine which sites need pre-approval visits. Characteristics that must be considered include, but are not limited to:

(i) Sites that did not participate in the program in the prior year;

(ii) Existing sites that are new to non-congregate meal service; and

(iii) Existing sites that exhibited operational problems in the prior year.

(e) *Sponsor and site reviews *—

(1) *Purpose. *The State agency must review sponsors and sites to ensure compliance with Program regulations, the Department's non-discrimination regulations (7 CFR part 15), and any other applicable instructions issued by the Department.

(2) *Sample selection. *In determining which sponsors and sites to review, the State agency must, at a minimum, consider the sponsors and sites' previous participation in the Program, their current and previous Program performance, whether they operate as congregate or non-congregate sites, and the results of previous reviews.

(3) *School food authorities. *When the same school food authority personnel administer this Program as well as the National School Lunch Program (7 CFR part 210), the State agency is not required to conduct a sponsor or site review in the same year in which the National School Lunch Program operations have been reviewed and determined to be satisfactory.

(4) *Frequency and number of required reviews. *State agencies must:

(i) Conduct a review of every new sponsor at least once during the first year of operation;

(ii) Annually review every sponsor that experienced significant operational problems in the prior year;

(iii) Review each sponsor at least once every 3 years;

(iv) Review more frequently those sponsors that, in the determination of the State agency, require additional technical assistance; and

(v) As part of each sponsor review, conduct reviews of at least 10 percent of each reviewed sponsor's sites, or one site, whichever number is greater. The review sample must include sites representative of all meal service models operated by the sponsor.

(5) *Site selection criteria.*

(i) State agencies must develop criteria for site selection when selecting sites to meet the minimum number of sites required under paragraph (e)(4)(v) of this section. State agencies should, to the maximum extent possible, select sites that reflect the sponsor's entire population of sites. Characteristics that should be reflected in the sites selected for review include:

(A) The maximum number of meals approved to serve under § 225.6(h)(1) and (2);

(B) *Method of obtaining meals (i.e., *self-preparation or vended meal service);

(C) Time since last site review by State agency;

(D) *Type of site (e.g., *open, closed enrolled, camp);

(E) *Type of physical location (e.g., *school, outdoor area, community center);

(F) *Rural designation (i.e., *rural, as defined in § 225.2, or non-rural);

(G) *Type of meal service (i.e., *congregate or non-congregate);

(H) *If non-congregate, meal distribution method (e.g., *meal pick-up, delivery); and

(I) Affiliation with the sponsor, as defined in § 225.2.

(ii) The State agency may use additional criteria to select sites including, but not limited to: recommendations from the sponsor; findings from other audits or reviews; or any indicators of *potential error in daily meal counts (e.g., *identical or very similar claiming patterns, large changes in free meal counts).

(6) *Meal claim validation. *As part of every sponsor review under paragraph (e)(4) of this section, the State agency must validate the sponsor's meal claim utilizing a record review process.

(i) The State agency must develop a record review process. This process must include, at a minimum, reconciliation of delivery receipts, daily meal counts from sites, and the comparison of the sponsor's claim consolidation spreadsheet with the meals claimed for reimbursement by the sponsor for the period under review.

(ii) For the purposes of this paragraph (e)(6), the percent error includes both overclaims and underclaims. Claims against sponsors as a result of meal claim validation should be assessed after the conclusion of the meal claim validation process in accordance with § 225.12.

(iii) In determining the sample size for each step of this process, fractions must be rounded up 

(iv) State agencies must at a minimum follow the process to conduct the meal claim validation as described in table 1.

(v) In determining the percentage of error, under paragraphs (e)(6)(i) through (iv) of this section, error is calculated for each step as follows:

(A) *Determining the meal counting and claiming discrepancy for each site validated. *Subtract the total meals validated from the total meals claimed by the sponsor for each validated site. Take the absolute value of each discrepancy. By applying the absolute value, the numbers will be expressed as positive valued numbers.

(B) *Calculating total discrepancy. *Add together all discrepancies from each site as determined in paragraph (e)(6)(v)(A) of this section to calculate the total discrepancies for sites validated in the given step.

(C) *Calculating percent **error**. *Divide the total discrepancies as determined in paragraph (e)(6)(v)(B) of this section by the total meals claimed by the sponsor for all reviewed sites within the validation sample for the given step. Multiply by 100 to calculate the percentage of error.

(vi) The State agency may expand the validation of meal claims beyond the review period or to include additional sites if the State agency has reason to believe that the sponsor has engaged in unlawful acts in connection with Program operations.

(vii) In lieu of the meal claim validation process described in table 1 to paragraph (e)(6)(iv) of this section, the State agency may complete a validation which includes all meals served on all operating days for all sites under a sponsor for the review period.

(7) *Review of sponsor operations. *State agencies should determine if:

(i) Expenditures are allowable and consistent with FNS Instructions and guidance and all funds accruing to the food service are properly identified and recorded as food service revenue;

(ii) Expenditures are consistent with budgeted costs, and the previous year's expenditures taking into consideration any changes in circumstances;

(iii) Reimbursements have not resulted in accumulation of net cash resources as defined in paragraph (m) of this section; and

(iv) The level of administrative spending is reasonable and does not affect the sponsor's ability to operate a nonprofit food service and provide a quality meal service.

(f) *Follow-up reviews. *The State agency must conduct follow-up reviews of sponsors and sites as necessary.

(g) *Monitoring system. *Each State agency must develop and implement a monitoring system to ensure that sponsors, including site personnel, and the sponsor's food service management company, if applicable, immediately receive a copy of any review reports which indicate Program violations and which could result in a Program disallowance.

(h) *Records. *Documentation of Program assistance and the results of such assistance must be maintained on file by the State agency 3 years after submission in accordance with § 225.8(a).

(i) *Meal preparation facility reviews. *As part of the review of any vended sponsor that purchases unitized meals, with or without milk, to be served at a SFSP site, the State agency must review the meal production facility and meal production documentation of any food service management company from which the sponsor purchases meals for compliance with program requirements. If the sponsor does not purchase meals but does purchase management services within the restrictions specified in § 225.15, the State agency is not required to conduct a meal preparation facility review.

(1) Each State agency must establish an order of priority for visiting facilities at which food is prepared for the Program. The facility review must be conducted at least one time within the appropriate review cycle for each vended sponsor. If multiple vended sponsors use the same food service management company and are being reviewed in the same review cycle, a single facility review will fulfill the review requirements for those vended sponsors.

(2) The State agency must respond promptly to complaints concerning facilities. If the food service management company fails to correct violations noted by the State agency during a review, the State agency must notify the sponsor and the food service management company that reimbursement must not be paid for meals prepared by the food service management company after a date specified in the notification.

(3) Funds provided in § 225.5(f) may be used for conducting meal preparation facility reviews.

(j) *Forms for reviews by sponsors. *Each State agency must develop and provide monitor review forms to all approved sponsors. These forms must be completed by sponsor monitors. The monitor review form must include, but not be limited to:

(1) The time of the reviewer's arrival and departure;

(2) The site supervisor's printed name and signature;

(3) A certification statement to be signed by the monitor;

(4) The number of meals prepared or delivered;

(5) Whether the meal service is congregate or non-congregate;

(6) The number of meals served to children;

(7) The deficiencies noted;

(8) The corrective actions taken by the sponsor; and

(9) The date of such actions.

(k) *Corrective actions. *Corrective actions which the State agency may take when Program violations are observed during the conduct of a review are discussed in § 225.11. The State agency must conduct follow-up reviews as appropriate when corrective actions are required.

(l) *Other facility inspections and meal quality tests. *In addition to those inspections required by paragraph (i) of this section, the State agency may also conduct, or arrange to have conducted: inspections of self-preparation and vended sponsors' food preparation facilities; inspections of food service sites; and meal quality tests. The procedures for carrying out these inspections and tests must be consistent with procedures used by local health authorities. For inspections of food service management companies' facilities not conducted by State agency personnel, copies of the results must be provided to the State agency. The company and the sponsor must also immediately receive a copy of the results of these inspections when corrective action is required. If a food service management company fails to correct violations noted by the State agency during a review, the State agency must notify the sponsor and the food service management company that reimbursement must not be paid for meals prepared by the food service management company after a date specified in the notification. Funds provided for in § 225.5(f) may be used for conducting these inspections and tests.

(m) *Financial management. *Each State agency must establish a financial management system, in accordance with 2 CFR part 200, subparts D and E, and USDA implementing regulations 2 CFR parts 400 and 415, as applicable, and FNS guidance, to identify allowable Program costs and to establish standards for sponsor recordkeeping and reporting. The State agency must provide guidance on these financial management standards to each sponsor. Additionally, each State agency must establish a system for monitoring and reviewing sponsors' nonprofit food service to ensure that all Program reimbursement funds are used solely for the conduct of the food service operation. State agencies must review the net cash resources of

*[54 FR 18208, Apr. 27, 1989, as amended at 55 FR 13468, Apr. 10, 1990; 64 FR 72485, Dec. 28, 1999; 64 FR 72898, Dec. 29, 1999; 71 FR 39518, July 13, 2006; 76 FR 22798, Apr. 25, 2011; 81 FR 66492, Sept. 28, 2016; 83 FR 25358, June 1, 2018; 87 FR 57360, Sept. 19, 2022; 88 FR 90352, Dec. 29, 2023]*


[Note: Additional sections of Part 225 continue]

======================================================================
7 CFR PART 226 — CACFP
Federal Register (current as of April 13, 2026)
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

*Principal *means any individual who holds a management position within, or is an officer of, an institution or a sponsored center, including all members of the institution's board of directors or the sponsored center's board of directors.

*Program *means the Child and Adult Care Food Program authorized by section 17 of the National School Lunch Act, as amended.

*Program payments *means financial assistance in the form of start-up payments, expansion payments, advance payments, or reimbursement paid or payable to institutions for operating costs and administrative costs.

*Reduced-price **meal** *means a meal served under the Program to a participant from a family that meets the income standards for reduced-price school meals. Any separate charge imposed must be less than the full price of the meal, but in no case more than 40 cents for a lunch or supper, 30 cents for a breakfast, and 15 cents for a snack. Neither the participant nor any member of his family may be required to work in the food service program for a reduced-price meal.

*Reimbursement *means Federal financial assistance paid or payable to institutions for Program costs within the rates assigned by the State agency.

*Renewing **institution** *means a sponsoring organization or an independent center that is participating in the Program at the time it submits annual renewal information.

*Responsible principal or responsible individual *means:

(a) A principal, whether compensated or uncompensated, who the State agency or FNS determines to be responsible for an institution's serious deficiency;

(b) Any other individual employed by, or under contract with, an institution or sponsored center, who the State agency or FNS determines to be responsible for an institution's serious deficiency; or

(c) An uncompensated individual who the State agency or FNS determines to be responsible for an institution's serious deficiency.

*Rural area *means any geographical area in a county which is not a part of a Metropolitan Statistical Area or any “pocket” within a Metropolitan Statistical Area which, at the option of the State agency and with FNSRO concurrence, is determined to be geographically isolated from urban areas.

*SSI participant *means an adult participant who receives assistance under title XVI of the Social Security Act, the Supplemental Security Income (SSI) for the Aged, Blind and Disabled Program.

*School year *means a period of 12 calendar months beginning July 1 of any year and ending June 30 of the following year.

*Seriously deficient *means the status of an institution or a day care home that has been determined to be non-compliant in one or more aspects of its operation of the Program.

*Snack *means a meal supplement that meets the meal pattern requirements specified in § 226.20(b)(6) or (c)(4).

*SNAP household *means any individual or group of individuals which is currently certified to receive assistances as a household from *SNAP, *the Supplemental Nutrition Assistance Program, as defined in § 245.2 of this chapter.

*Sponsored center *means a child care center, an at-risk afterschool care center, an adult day care center, an emergency shelter, or an outside-school-hours care center that operates the Program under the auspices of a sponsoring organization. The two types of sponsored centers are as follows:

(1) An affiliated center is a part of the same legal entity as the CACFP sponsoring organization; or

(2) An unaffiliated center is legally distinct from the sponsoring organization.

*Sponsoring organization *means a public or nonprofit private organization that is entirely responsible for the administration of the food program in:

(1) One or more day care homes;

(2) A child care center, emergency shelter, at-risk afterschool care center, outside-school-hours care center, or adult day care center which is a legally distinct entity from the sponsoring organization;

(3) Two or more child care centers, emergency shelters, at-risk afterschool care centers, outside-school-hours care center, or adult day care centers; or

(4) Any combination of child care centers, emergency shelters, at-risk afterschool care centers, outside-school-hours care centers, adult day care centers, and day care homes.

The term “sponsoring organization” also includes an organization that is entirely responsible for administration of the Program in any combination of two or more child care centers, at-risk afterschool care centers, adult day care centers or outside-school-hours care centers, which meet the definition of *For-profit center *in this section and are part of the same legal entity as the sponsoring organization.

*Start-up payments *means financial assistance made available to a sponsoring organization for its administrative expenses associated with developing or expanding a food service program in day care homes and initiating successful Program operations. These start-up payments may include administrative expenses associated with outreach and recruitment of unlicensed family or group day care homes and the allowable licensing-related expenses of such homes.

*State *means any of the 50 States, the District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, American Samoa, the Trust Territory of the Pacific Islands, and the Northern Mariana Islands.

*State agency *means the State educational agency or any other State agency that has been designated by the Governor or other appropriate executive, or by the legislative authority of the State, and has been approved by the Department to administer the Program within the State or in States in which FNS administers the Program, FNSRO. This also may include a State agency other than the existing CACFP State Agency, when such agency is designated by the Governor of the State to administer only the adult day care component of the CACFP.

*State agency list *means an actual paper or electronic list, or the retrievable paper records, maintained by the State agency, that includes a synopsis of information concerning seriously deficient institutions and providers terminated for cause in that State. The list must be made available to FNS upon request, and must include the following information:

(a) Institutions determined to be seriously deficient by the State agency, including the names and mailing addresses of the institutions, the basis for each serious deficiency determination, and the status of the institutions as they move through the possible subsequent stages of corrective action, proposed termination, suspension, agreement termination, and/or disqualification, as applicable;

(b) Responsible principals and responsible individuals who have been disqualified from participation by the State agency, including their names, mailing addresses, and dates of birth; and

(c) Day care home providers whose agreements have been terminated for cause by a sponsoring organization in the State, including their names, mailing addresses, and dates of birth.

*State Children's Health Insurance Program (SCHIP) *means the State medical assistance program under title XXI of the Social Security Act (42 U.S.C. 1397aa *et seq.).*

*State licensed healthcare professional *means an individual who is authorized to write medical prescriptions under State law. This may include, but is not limited to, a licensed physician, nurse practitioner, or physician's assistant, depending on State law.

*Suspended *means the status of an institution or day care home that is temporarily ineligible for participation (including Program payments).

*Suspension review *means the review provided, upon the institution's request, to an institution that has been given a notice of intent to suspend participation (including Program payments), based on a determination that the institution has knowingly submitted a false or fraudulent claim.

*Suspension review official *means the independent and impartial official who conducts the suspension review.

*Termination for cause *means the termination of a day care home's Program agreement by the sponsoring organization due to the day care home's violation of the agreement.

*TANF recipient *means an individual or household receiving assistance (as defined in 45 CFR 260.31) under a State-administered Temporary Assistance for Needy Families program.

*Termination for convenience *means termination of a Program agreement due to considerations unrelated to either party's performance of Program responsibilities under the agreement between:

(1) A State agency and the independent center,

(2) A State agency and the sponsoring organization,

(3) A sponsoring organization and the unaffiliated center, or

(4) A sponsoring organization and the day care home.

*Tier I day care home *means

(a) a day care home that is operated by a provider whose household meets the income standards for free or reduced-price meals, as determined by the sponsoring organization based on a completed free and reduced price application, and whose income is verified by the sponsoring organization of the home in accordance with § 226.23(h)(6);

(b) A day care home that is located in an area served by a school enrolling students in which at least 50 percent of the total number of children enrolled are certified eligible to receive free or reduced price meals; or

(c) A day care home that is located in a geographic area, as defined by FNS based on census data, in which at least 50 percent of the children residing in the area are members of households which meet the income standards for free or reduced price meals.

*Tier II day care home *means a day care home that does not meet the criteria for a *Tier I day care home.*

*Title XVI *means Title XVI of the Social Security Act which authorizes the Supplemental Security Income for the Aged, Blind, and Disabled Program—SSI.

*Title XIX *means Title XIX of the Social Security Act which authorizes the Grants to States for Medical Assistance Programs—Medicaid.

*Title XX *means Title XX of the Social Security Act.

*Tofu *means a commercially prepared soy-bean derived food, made by a process in which soybeans are soaked, ground, mixed with water, heated, filtered, coagulated, and formed into cakes. Basic ingredients are whole soybeans, one or more food-grade coagulates (typically a salt or acid), and water.

*Unannounced review *means an on-site review for which no prior notification is given to the facility or institution.

*USDA implementing regulations *include the following: 2 CFR part 400, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards; 2 CFR part 415, General Program Administrative Regulations; 2 CFR part 416, General Program Administrative Regulations for Grants and Cooperative Agreements to State and Local Governments; and 2 CFR part 418, New Restrictions on Lobbying.

*[47 FR 36527, Aug. 20, 1982; 47 FR 46072, Oct. 15, 1982]*

§ 226.3 Administration.

*Verification *means a review of the information reported by institutions to the State agency regarding the eligibility of participants for free or reduced-price meals, and, in addition, for a pricing program, confirmation of eligibility for free or reduced-price benefits under the program. Verification for a pricing program shall include confirmation of income eligibility and, at State discretion, any other information required on the application which is defined as documentation in § 226.2. Such verification may be accomplished by examining information (e.g., wage stubs, etc.) provided by the household or other sources of information as specified in § 226.23(h)(2)(iv). However, if a SNAP, FDPIR or TANF case number is provided for a child, verification for such child shall include only confirmation that the child is included in a currently certified SNAP or FDPIR household or is a TANF recipient. If a Head Start statement of income eligibility is provided for a child, verification for such child shall include only confirmation that the child is a Head Start participant. For an adult participant, if a SNAP or FDPIR case number or SSI or Medicaid assistance identification number is provided, verification for such participant shall include only confirmation that the participant is included in a currently certified SNAP or FDPIR household or is a current SSI or Medicaid participant.

*Whole grain-rich *is the term designated by FNS to indicate that the grain content of a product is between 50 and 100 percent whole grain with any remaining grains being enriched.

*Whole grains *means foods that consist of intact, ground, cracked, or flaked grain seed whose principal anatomical components—the starchy endosperm, germ, and bran—are present in the same relative proportions as they exist in the intact grain seed.

*Yogurt *means commercially coagulated milk products obtained by the fermentation of specific bacteria, that meet milk fat or milk solid requirements to which flavoring foods or ingredients may be added. These products are covered by the Food and Drug Administration's Standard of Identity for yogurt, lowfat yogurt, and nonfat yogurt, (21 CFR 131.200), (21 CFR 131.203), (21 CFR 131.206), respectively.

(a) Within the Department, FNS shall act on behalf of the Department in the administration of the Program.

(b) Within the States, responsibility for the administration of the Program shall be in the State agency, except that if FNS has continuously administered the Program in any State since October 1, 1980, FNS shall continue to administer the Program in that State. A State in which FNS administers the Program may, upon request to FNS, assume administration of the Program.

(c) Each State agency desiring to take part in the Program shall enter into a written agreement with the Department for the administration of the Program in the State in accordance with the provisions of this part. This agreement shall cover the operation of the Program during the period specified therein and may be extended by consent of both parties.

(d) FNSRO shall, in each State in which it administers the Program, have available all funds and assume all responsibilities of a State agency as set forth in this part.

(e)

Editorial Note: For FEDERAL REGISTER citations affecting § 226.2, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

*[47 FR 36527, Aug. 20, 1982, as amended at 87 FR 57366, Sept. 19, 2022]*

Subpart B—Assistance to States

§ 226.4 Payments to States and use of funds.

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State agency or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2)

(i) A State agency may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(ii) A State agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(3)

(i) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part. Any waiver request submitted by an eligible service provider must be submitted to the State agency for review. A State agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

(ii) If a State agency concurs with a request from an eligible service provider, the State agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request. By forwarding the request to the FNSRO, the State agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(iii) If the State agency denies the request, the State agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State agency's receipt of the request. The State agency response is final and may not be appealed to FNS.

(a) *Availability of funds. *For each fiscal year based on funds provided to the Department, FNS must make funds available to each State agency to reimburse institutions for their costs in connection with food service operations, including administrative expenses, under this part. Funds must be made available in an amount no less than the sum of the totals obtained under paragraphs (b), (c), (d), (e), (f), (g), and (j) of

this section. However, in any fiscal year, the aggregate amount of assistance provided to a State under this part must not exceed the sum of the Federal funds provided by the State to participating institutions within the State for that fiscal year and any funds used by the State under paragraphs (j) and (l) of this section.

(b) *Center funds. *For meals served to participants in child care centers, adult day care centers and outside-school-hours care centers, funds shall be made available to each State agency in an amount no less than the sum of the products obtained by multiplying:

(1) The number of breakfasts served in the Program within the State to participants from families that do not satisfy the eligibility standards for free and reduced-price school meals enrolled in institutions by the national average payment rate for breakfasts for such participants under section 4 of the Child Nutrition Act of 1966;

(2) The number of breakfasts served in the Program within the State to participants from families that satisfy the eligibility standards for free school meals enrolled in institutions by the national average payment rate for free breakfasts under section 4 of the Child Nutrition Act of 1966;

(3) The number of breakfasts served to participants from families that satisfy the eligibility standard for reduced-price school meals enrolled in institutions by the national average payment rate for reduced-price school breakfasts under section 4 of the Child Nutrition Act of 1966;

(4) The number of lunches and suppers served in the Program within the State by the national average payment rate for lunches under section 4 of the National School Lunch Act. (All lunches and suppers served in the State are funded under this provision);

(5) The number of lunches and suppers served in the Program within the State to participants from families that satisfy the eligibility standard for free school meals enrolled in institutions by the national average payment rate for free lunches under section 11 of the National School Lunch Act;

(6) The number of lunches and suppers served in the Program within the State to participants from families that satisfy the eligibility standard for reduced-price school meals enrolled in institutions by the national average payment rate for reduced-price lunches under section 11 of the National School Lunch Act;

(7) The number of snacks served in the Program within the State to participants from families that do not satisfy the eligibility standards for free and reduced-price school meals enrolled in institutions by 2.75 cents;

(8) The number of snacks served in the Program within the State to participants from families that satisfy the eligibility standard for free school meals enrolled in institutions by 30 cents;

(9) The number of snacks served in the Program within the State to participants from families that satisfy the eligibility standard for reduced-price school meals enrolled in institutions by 15 cents.

(c) *Emergency shelter funds. *For meals and snacks served to children in emergency shelters, funds will be made available to each State agency in an amount equal to the total calculated by multiplying the number of meals and snacks served in the Program within the State to such children by the national average payment rate for free meals and free snacks under section 11 of the National School Lunch Act.

(d) *At-risk afterschool care center funds. *For snacks served to children in at-risk afterschool care centers, funds will be made available to each State agency in an amount equal to the total calculated by multiplying the number of snacks served in the Program within the State to such children by the national

average payment rate for free snacks under section 11 of the National School Lunch Act. For at-risk afterschool meals and at-risk afterschool snacks served to children, funds will be made available to each eligible State agency in an amount equal to the total calculated by multiplying the number of at-risk afterschool meals and the number of at-risk afterschool snacks served in the Program within the State by the national average payment rate for free meals and free snacks, respectively, under section 11 of the Richard B. Russell National School Lunch Act.

(e) *Day care home funds. *For meals served to children in day care homes, funds shall be made available to each State agency in an amount no less than the sum of products obtained by multiplying:

(1) The number of breakfasts served in the Program within the State to children enrolled in tier I day care homes by the current tier I day care home rate for breakfasts;

(2) The number of breakfasts served in the Program within the State to children enrolled in tier II day care homes that have been determined eligible for free or reduced price meals by the current tier I day care home rate for breakfasts;

(3) The number of breakfasts served in the Program within the State to children enrolled in tier II day care homes that do not satisfy the eligibility standards for free or reduced price meals, or to children from whose households applications were not collected, by the current tier II day care home rate for breakfasts;

(4) The number of lunches and suppers served in the Program within the State to children enrolled in tier I day care homes by the current tier I day care home rate for lunches/suppers;

(5) The number of lunches and suppers served in the Program within the State to children enrolled in tier II day care homes that have been determined eligible for free or reduced price meals by the current tier I day care home rate for lunches/suppers;

(6) The number of lunches and suppers served in the Program within the State to children enrolled in tier II day care homes that do not satisfy the eligibility standards for free or reduced price meals, or to children from whose households applications were not collected, by the current tier II day care home rate for lunches/suppers;

(7) The number of snacks served in the Program within the State to children enrolled in tier I day care homes by the current tier I day care home rate for snacks;

(8) The number of snacks served in the Program within the State to children enrolled in tier II day care homes that have been determined eligible for free or reduced price meals by the current tier I day care home rate for snacks; and

(9) The number of snacks served in the Program within the State to children enrolled in tier II day care homes that do not satisfy the eligibility standards for free or reduced price meals, or to children from whose households applications were not collected, by the current tier II day care home rate for snacks.

(f) *Administrative funds. *For administrative payments to day care home sponsoring organizations, funds shall be made available to each State agency in an amount not less than the product obtained each month by multiplying the number of day care homes participating under each sponsoring organization within the State by the applicable rates specified in § 226.12(a)(3).

(g) *Start-up and expansion funds. *For start-up and expansion payments to eligible sponsoring organizations, funds shall be made available to each State agency in an amount equal to the total amount of start-up and expansion payments made in the most recent period for which reports are available for that State or on the basis of estimates by FNS.

(h) *Funding assurance. *FNS shall ensure that, to the extent funds are appropriated, each State has sufficient Program funds available for providing start-up, expansion and advance payments in accordance with this part.

(i) *Rate adjustments. *FNS shall publish a notice in the FEDERAL REGISTER to announce each rate adjustment. FNS shall adjust the following rates on the specified dates:

(1) The rates for meals, including snacks, served in tier I and tier II day care homes shall be adjusted annually, on July 1 (beginning July 1, 1997), on the basis of changes in the series for food at home of the Consumer Price Index for All Urban Consumers published by the Department of Labor. Such adjustments shall be rounded to the nearest lower cent based on changes measured over the most recent twelve-month period for which data are available. The adjustments shall be computed using the unrounded rate in effect for the preceding school year.

(2) The rates for meals, including snacks, served in child care centers, emergency shelters, at-risk afterschool care centers, adult day care centers and outside-school-hours care centers will be adjusted annually, on July 1, on the basis of changes in the series for food away from home of the Consumer Price Index for All Urban Consumers published by the Department of Labor. Such adjustment must be rounded to the nearest lower cent, based on changes measured over the most recent twelve-month period for which data are available. The adjustment to the rates must be computed using the unrounded rate in effect for the preceding year.

(3) The rate for administrative payments to day care home sponsoring organizations shall be adjusted annually, on July 1, on the basis of changes in the series for all items of the Consumer Price Index for All Urban Consumers published by the Department of Labor. Such adjustments shall be made to the nearest dollar based on changes measured over the most recent twelve-month period for which data are available.

(j) *Audit funds.*

(1) Funds are available to each State agency in an amount equal to 1.5 percent of the Program funds used by the State during the second fiscal year preceding the fiscal year for which these funds are to be made available. These funds are for the expense of conducting audits under § 226.8 and Program monitoring under § 226.6(m).

(2) State agencies may request an increase in the amount of funds made available under this paragraph.

(i) FNS approval for increased funding will be based on the State agency's expressed need for an increase in resources to meet audit requirements, fulfill monitoring requirements, or effectively improve Program management.

(ii) The total amount of audit funds made available to any State agency under this paragraph may not exceed 2 percent of Program funds used by the State during the second fiscal year preceding the fiscal year for which the funds are made available.

(iii) The amount of assistance provided to a State agency under this paragraph in any fiscal year may not exceed the State's expenditures under §§ 226.6(m) and 226.8 during the fiscal year in which the funds are made available.

*[47 FR 36527, Aug. 20, 1982, as amended at 52 FR 36906, Oct. 2, 1987; 53 FR 52588, Dec. 28, 1988; 62 FR 902, Jan. 7, 1997; 63 FR 9728, Feb. 26, 1998; 69 FR 53536, Sept. 1, 2004; 71 FR 4, Jan. 3, 2006; 71 FR 39518, July 13, 2006; 72 FR 41603, 41604, July 31, 2007; 75 FR 16327, Apr. 1, 2010; 76 FR 34569, June 13, 2011; 78 FR 13451, Feb. 28, 2013; 81 FR 66492, Sept. 28, 2016; 88 FR 57851, Aug. 23, 2023]*

§ 226.5 Donation of commodities.

*[47 FR 36527, Aug. 20, 1982, as amended at 62 FR 23618, May 1, 1997]*

Subpart C—State Agency Provisions

§ 226.6 State agency administrative responsibilities.

(k) *Method of funding. *FNS shall authorize funds for State agencies in accordance with 2 CFR part 200, subpart D, and USDA implementing regulations 2 CFR part 400 and part 415, as applicable.

(l) *Special developmental projects. *The State agency may use in carrying out special developmental projects an amount not to exceed one percent of Program funds used in the second prior fiscal year. Special developmental projects shall conform to FNS guidance and be approved in writing by FNS.

(a) USDA foods available under section 6 of this Act, section 416 of the Agricultural Act of 1949 (7 U.S.C. 1431) or purchased under section 32 of the Act of August 24, 1935 (7 U.S.C. 1431), section 709 of the Food and Agriculture Act of 1965 (7 U.S.C. 1446a-1), or other authority, and donated by the Department shall be made available to each State.

(b) The value of such commodities donated to each State for each school year shall be, at a minimum, the amount obtained by multiplying the number of reimbursable lunches and suppers served in participating institutions in that State during the preceding school year by the rate for commodities established under section 6(e) of the Act for the current school year. Adjustments shall be made at the end of each school year to reflect the difference between the number of reimbursable lunches and suppers served during the preceding year and the number served during the current year, and subsequent commodity entitlement shall be based on the adjusted meal counts. At the discretion of FNS, current-year adjustments may be made for significant variations in the number of reimbursable meals served. Such current-year adjustments will not be routine and will only be made for unusual problems encountered in a State, such as a disaster that necessitates institutional closures for a prolonged period of time. CACFP State agencies electing to receive cash-in-lieu of commodities will receive payments based on the number of reimbursable meals actually served during the current school year.

(a) *State agency personnel. *Each State agency must provide sufficient consultative, technical, and managerial personnel to:

(1) Administer the Program;

(2) Provide sufficient training and technical assistance to institutions;

(3) Monitor Program performance;

(4) Facilitate expansion of the Program in low-income and rural areas; and

(5) Ensure effective operation of the Program by participating institutions.

(b) *Program applications and agreements. *Each State agency must establish application review procedures, as described in paragraph (b)(1) of this section, to determine the eligibility of new institutions and facilities for which applications are submitted by sponsoring organizations. Each State agency must establish procedures for the review of renewal information, as described in paragraph (b)(2) of this section, to determine the continued eligibility of renewing institutions. The State agency must enter into written agreements with institutions, as described in paragraph (b)(4) of this section.

(1) *Application procedures for new institutions. *Each State agency must establish application procedures to determine the eligibility of new institutions under this part. At a minimum, such procedures must require that institutions submit information to the State agency in accordance with paragraph (f) of this section. For new private nonprofit and proprietary child care institutions, such procedures must also include a pre-approval visit by the State agency to confirm the information in the institution's application and to further assess its ability to manage the Program. The State agency must establish factors, consistent with § 226.16(b)(1), that it will consider in determining whether a new sponsoring organization has sufficient staff to perform required monitoring responsibilities at all of its sponsored facilities. As part of the review of the sponsoring organization's management plan, the State agency must determine the appropriate level of staffing for each sponsoring organization, consistent with the staffing range of monitors set forth at § 226.16(b)(1) and the factors it has established. The State agency must ensure that each new sponsoring organization applying for participation after July 29, 2002 meets this requirement. In addition, the State agency's application review procedures must ensure that the following information is included in a new institution's application:

(i) *Participant eligibility information. *Centers must submit current information on the number of enrolled participants who are eligible for free, reduced-price and paid meals;

(ii) *Enrollment information. *Sponsoring organizations of day care homes must submit current information on:

(A) The total number of children enrolled in all homes in the sponsorship;

(B) An assurance that day care home providers' own children whose meals are claimed for reimbursement in the Program are eligible for free or reduced-price meals;

(C) The total number of tier I and tier II day care homes that it sponsors;

(D) The total number of children enrolled in tier I day care homes;

(E) The total number of children enrolled in tier II day care homes; and

(F) The total number of children in tier II day care homes that have been identified as eligible for free or reduced-price meals;

(iii) *Nondiscrimination statement. *Institutions must submit their nondiscrimination policy statement and a media release, unless the State agency has issued a Statewide media release on behalf of all institutions;

(iv) *Management plan. *Sponsoring organizations must submit a complete management plan that includes:

(A) Detailed information on the organization's management and administrative structure;

(B) A list or description of the staff assigned to Program monitoring, in accordance with the requirements set forth at § 226.16(b)(1);

(C) An administrative budget that includes projected CACFP administrative earnings and expenses;

(D) The procedures to be used by the organization to administer the Program in, and disburse payments to, the child care facilities under its sponsorship; and

(E) For sponsoring organizations of family day care homes, a description of the system for making tier I day care home determinations, and a description of the system of notifying tier II day care homes of their options for reimbursement;

(v) *Budget. *An institution must submit a budget that the State agency must review in accordance with § 226.7(g);

(vi) *Documentation of licensing/approval. *All centers and family day care homes must document that they meet Program licensing/approval requirements;

(vii) *Documentation of tax-exempt status. *All private nonprofit institutions must document their tax-exempt status;

(viii) *At-risk **afterschool** care centers. *Institutions (independent at-risk afterschool care centers and sponsoring organizations of at-risk afterschool care centers) must submit documentation sufficient to determine that each at-risk afterschool care center meets the program eligibility requirements in § 226.17a(a), and sponsoring organizations must submit documentation that each sponsored at-risk afterschool care center meets the area eligibility requirements in § 226.17a(i).

(ix) *Documentation of for-profit center eligibility. *Institutions must document that each for-profit center for which application is made meets the definition of a *For-profit center, as set forth at *§ 226.2;

(x) *Preference for commodities/cash-in-lieu of commodities. *Institutions must state their preference to receive commodities or cash-in-lieu of commodities;

(xi) *Providing benefits to unserved facilities or participants *—

(A) *Criteria. *The State agency must develop criteria for determining whether a new sponsoring organization's participation will help ensure the delivery of benefits to otherwise unserved facilities or participants, and must disseminate these criteria to new sponsoring organizations when they request information about applying to the Program; and

(B) *Documentation. *The new sponsoring organization must submit documentation that its participation will help ensure the delivery of benefits to otherwise unserved facilities or participants in accordance with the State agency's criteria;

(xii) *Presence on the National disqualified list. *If an institution or one of its principals is on the National disqualified list and submits an application, the State agency may not approve the application. If a sponsoring organization submits an application on behalf of a facility, and either the facility or any of its principals is on the National disqualified list, the State agency may not approve the application. In accordance with paragraph (k)(3)(vii) of this section, in this circumstance, the State agency's refusal to consider the application is not subject to administrative review.

(xiii) *Ineligibility for other publicly funded programs *—

(A) *General. *A State agency is prohibited from approving an institution's application if, during the past seven years, the institution or any of its principals have been declared ineligible for any other publicly funded program by reason of violating that program's requirements. However, this prohibition does not apply if the institution or the principal has been fully reinstated in, or determined eligible for, that program, including the payment of any debts owed;

(B) *Certification. *Institutions must submit:

*(1) *A statement listing the publicly funded programs in which the institution and its principals have participated in the past seven years; and

*(2) *A certification that, during the past seven years, neither the institution nor any of its principals have been declared ineligible to participate in any other publicly funded program by reason of violating that program's requirements; or

*(3) *In lieu of the certification, documentation that the institution or the principal previously declared ineligible was later fully reinstated in, or determined eligible for, the program, including the payment of any debts owed; and

(C) *Follow-up. *If the State agency has reason to believe that the institution or its principals were determined ineligible to participate in another publicly funded program by reason of violating that program's requirements, the State agency must follow up with the entity administering the publicly funded program to gather sufficient evidence to determine whether the institution or its principals were, in fact, determined ineligible;

(xiv) *Information on criminal convictions.*

(A) A State agency is prohibited from approving an institution's application if the institution or any of its principals has been convicted of any activity that occurred during the past seven years and that indicated a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency; and

(B) Institutions must submit a certification that neither the institution nor any of its principals has been convicted of any activity that occurred during the past seven years and that indicated a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency;

(xv) *Certification of truth of applications and submission of names and addresses. *Institutions must submit a certification that all information on the application is true and correct, along with the names, mailing addresses, and dates of birth of the institution's executive director and chair of the board of directors or the owner, in the case of a for-profit center that does not have an executive director or is not required to have a board of directors. In addition, the institution's Federal Employer Identification Number (FEIN) or the Unique Entity Identifier (UEI) must be provided;

(xvi) *Outside employment policy. *Sponsoring organizations must submit an outside employment policy. The policy must restrict other employment by employees that interferes with an employee's performance of Program-related duties and responsibilities, including outside employment that constitutes a real or apparent conflict of interest. Sponsoring organizations that are participating on July 29, 2002, must submit an outside employment policy not later than September 27, 2002. The policy will be effective unless disapproved by the State agency;

(xvii) *Bond. *Sponsoring organizations applying for initial participation on or after June 20, 2000, must submit a bond, if such bond is required by State law, regulation, or policy. If the State agency requires a bond for sponsoring organizations pursuant to State law, regulation, or policy, the State agency must submit a copy of that requirement and a list of sponsoring organizations posting a bond to the appropriate FNSRO on an annual basis; and

(xviii) *Compliance with performance standards. *Each new institution must submit information sufficient to document that it is financially viable, is administratively capable of operating the Program in accordance with this part, and has internal controls in effect to ensure accountability. To document this, any new institution must demonstrate in its application that it is capable of operating in conformance with the following performance standards. The State agency must only approve the applications of those new institutions that meet these performance standards, and must deny the applications of those new institutions that do not meet the standards. In ensuring compliance with these performance standards, the State agency should use its discretion in determining whether the institution's application, in conjunction with its past performance in CACFP, establishes to the State agency's satisfaction that the institution meets the performance standards.

(A) *Performance Standard 1—Financial viability and financial management. *The new institution must be financially viable. Program funds must be expended and accounted for in accordance with the requirements of this part, FNS Instruction 796-2 (“Financial Management in the Child and Adult Care Food Program”), and 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415. To demonstrate financial viability, the new institution must document that it meets the following criteria:

*(1) Description of need/recruitment. *A new sponsoring organization must demonstrate in its management plan that its participation will help ensure the delivery of Program benefits to otherwise unserved facilities or participants, in accordance with criteria developed by the State agency pursuant to paragraph (b)(1)(x) of this section. A new sponsoring organization must demonstrate that it will use appropriate practices for recruiting facilities, consistent with paragraph (p) of this section and any State agency requirements;

*(2) Fiscal resources and financial history. *A new institution must demonstrate that it has adequate financial resources to operate the CACFP on a daily basis, has adequate sources of funds to continue to pay employees and suppliers during periods of temporary interruptions in Program payments and/or to pay debts when fiscal claims have been assessed against the institution, and can document financial viability (for example, through audits, financial statements, etc.); and

*(3) Budgets. *Costs in the institution's budget must be necessary, reasonable, allowable, and appropriately documented;

(B) *Performance Standard 2—Administrative capability. *The new institution must be administratively capable. Appropriate and effective management practices must be in effect to ensure that the Program operates in accordance with this part. To demonstrate administrative capability, the new institution must document that it meets the following criteria:

*(1) *Has an adequate number and type of qualified staff to ensure the operation of the Program in accordance with this part;

*(2) *If a sponsoring organization, documents in its management plan that it employs staff sufficient to meet the ratio of monitors to facilities, taking into account the factors that the State agency will consider in determining a sponsoring organization's staffing needs, as set forth in § 226.16(b)(1); and

*(3) *If a sponsoring organization, has Program policies and procedures in writing that assign Program responsibilities and duties, and ensure compliance with civil rights requirements; and

(C) *Performance Standard 3—Program accountability. *The new institution must have internal controls and other management systems in effect to ensure fiscal accountability and to ensure that the Program will operate in accordance with the requirements of this part. To demonstrate Program accountability, the new institution must document that it meets the following criteria:

*(1) Governing board of directors. *Has adequate oversight of the Program by an independent governing board of directors as defined at § 226.2;

*(2) Fiscal accountability. *Has a financial system with management controls specified in writing. For new sponsoring organizations, these written operational policies must assure:

*(**i**) *Fiscal integrity and accountability for all funds and property received, held, and disbursed;

*(ii) *The integrity and accountability of all expenses incurred;

*(iii) *That claims will be processed accurately, and in a timely manner;

*(iv) *That funds and property are properly safeguarded and used, and expenses incurred, for authorized Program purposes; and

*(v) *That a system of safeguards and controls is in place to prevent and detect improper financial activities by employees;

*(3) Recordkeeping. *Maintains appropriate records to document compliance with Program requirements, including budgets, accounting records, approved budget amendments, and, if a sponsoring organization, management plans and appropriate records on facility operations;

*(4) Sponsoring organization operations. *If a new sponsoring organization, documents in its management plan that it will:

*(**i**) *Provide adequate and regular training of sponsoring organization staff and sponsored facilities in accordance with §§ 226.15(e)(12) and (e)(14) and 226.16(d)(2) and (d)(3);

*(ii) *Perform monitoring in accordance with § 226.16(d)(4), to ensure that sponsored facilities accountably and appropriately operate the Program;

*(iii) *If a sponsor of family day care homes, accurately classify day care homes as tier I or tier II in accordance with § 226.15(f); and

*(iv) *Have a system in place to ensure that administrative costs funded from Program reimbursements do not exceed regulatory limits set forth at §§ 226.12(a) and 226.16(b)(1); and

*(5) Meal service and other operational requirements. *Independent centers and facilities will follow practices that result in the operation of the Program in accordance with the meal service, recordkeeping, and other operational requirements of this part. These practices must be documented in the independent center's application or in the sponsoring organization's management plan and must demonstrate that independent centers or sponsored facilities will:

*(**i**) *Provide meals that meet the meal patterns set forth in § 226.20;

*(ii) *Comply with licensure or approval requirements set forth in paragraph (d) of this section;

*(iii) *Have a food service that complies with applicable State and local health and sanitation requirements;

*(iv) *Comply with civil rights requirements;

*(v) *Maintain complete and appropriate records on file; and

*(vi) *Claim reimbursement only for eligible meals.

(2) *Annual information submission requirements for State agency review of renewing institutions. *Each State agency must establish annual information submission procedures to confirm the continued eligibility of renewing institutions under this part. Renewing institutions must not be required to submit a free and reduced-price policy statement or a nondiscrimination statement unless they make substantive changes to either statement. In addition, the State agency's review procedures must ensure that institutions annually submit information or certify that certain information is still true based on the requirements of this section. For information that must be certified, any new changes made in the past year and not previously reported to the State agency must be updated in the annual renewal information submission. Any additional information submitted in the renewal must be certified by the institution to be true.

(i) This paragraph (b)(2) contains the information that must be certified. The State agency must ensure that renewing independent centers certify the following to be true:

(A) The institution and its principals are not currently on the National disqualified list, per paragraph (b)(1)(xii) of this section;

(B) A list of any publicly funded programs that the sponsoring organization and its principals have participated in, in the past 7 years, is current, per paragraph (b)(1)(xiii)(B) of this section;

(C) The institution and its principals have not been determined ineligible for any other publicly funded programs due to violation of that program's requirements, in the past 7 years, per paragraphs (b)(1)(xiii)(B) and (C) of this section;

(D) No principals have been convicted of any activity that occurred during the past 7 years and that indicated a lack of business integrity, per paragraph (b)(1)(xiv)(B) of this section;

(E) The names, mailing addresses, and dates of birth of all current principals have been submitted to the State agency, per paragraph (b)(1)(xv) of this section;

(F) The institution is currently compliant with the required performance standards of financial viability and management, administrative capability, and program accountability, per paragraph (b)(1)(xviii) of this section; and

(G) Licensing or approval status of each child care center or adult day care center is up-to-date.

(ii) The State agency must ensure that renewing sponsoring organizations certify the following to be true:

(A) All of the requirements under paragraph (b)(2)(i) of this section are certified to be true;

(B) The management plan on file with the State agency is complete and up to date, per paragraph (b)(1)(iv) of this section;

(C) No sponsored facility or principal of a sponsored facility is currently on the National disqualified list, per paragraph (b)(1)(xii) of this section;

(D) The outside employment policy most recently submitted to the State agency remains current and in effect, per paragraph (b)(1)(xvi) of this section;

(E) Licensing or approval status of each sponsored child care center, adult day care center, or day care home is up-to-date;

(F) The list of the sponsoring organization's facilities on file with the State agency is up-to-date; and

(G) All facilities under the sponsoring organization's oversight have adhered to Program training requirements.

(iii) *State agency review of institution information. *The State agency's review of information that must be submitted, certified or updated annually is as follows:

(A) *Management plan. *The State agency must ensure that renewing sponsoring organizations certify that the sponsoring organization has reviewed the current management plan on file with the State agency and that it is complete and up to date. If the management plan has changed, the sponsoring organization must submit updates to the management plan that meet the requirements of § 226.16(b)(1). The State agency must establish factors, consistent with § 226.16(b)(1), that it will consider in determining whether a renewing sponsoring organization has sufficient staff to perform required monitoring responsibilities at all of its sponsored facilities. As part of its management plan review,

the State agency must determine the appropriate level of staffing for the sponsoring organization, consistent with the staffing range of monitors set forth at § 226.6(b)(1) and the factors the State agency has established.

(B) *Administrative budget submission. *The State agency must ensure that renewing sponsoring organizations submit an administrative budget for the upcoming year with sufficiently detailed information concerning projected CACFP administrative earnings and expenses, as well as other non-Program funds to be used in Program administration. The State agency must be able to determine the allowability, necessity, and reasonableness of all proposed expenditures, and to assess the sponsoring organization's capability to manage Program funds. The administrative budget must demonstrate that the sponsoring organization will expend and account for funds in accordance with regulatory *requirements, FNS Instruction 796-2 (Financial Management in the Child and Adult Care Food Program), *2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415, and applicable Office of Management and Budget circulars. The administrative budget submitted by a sponsoring organization of centers must demonstrate that the administrative costs to be charged to the Program do not exceed 15 percent of the meal reimbursements estimated or actually earned during the budget year, unless the State agency grants a waiver, as described in § 226.7(g). For sponsoring organizations of day care homes seeking to carry over administrative funds, as described in § 226.12(a)(3), the budget must include an estimate of requested administrative fund carryover amounts and a description of proposed purpose for which those funds would be obligated or expended.

(C) *Presence on the National disqualified list. *The State agency must ensure that renewing institutions certify that neither the institution nor its principals are on the National disqualified list. The State agency must also ensure that renewing sponsoring organizations certify that no sponsored facility or facility principal is on the National disqualified list.

(D) *Ineligibility for other publicly funded programs. *A State agency is prohibited from approving a renewing institution or facility's application if, during the past 7 years, the institution, facility, responsible principals, or responsible individuals have been declared ineligible for any other publicly funded program by reason of violating that program's requirements. However, this prohibition does not apply if the institution, facility, responsible principals, or responsible individuals have been fully reinstated in or determined eligible for that program, including the payment of any debts owed. The State agency must follow up with the entity administering the publicly funded program to gather sufficient evidence to determine whether the institution or its principals were, in fact, determined ineligible.

(E) *Information on criminal convictions. *The State agency must ensure that renewing institutions certify that the institution's principals have not been convicted of any activity that occurred during the past 7 years and that indicates a lack of business integrity, as defined in paragraph (c)(1)(ii)(A) of this section.

(F) *Submission of names and addresses. *The State agency must ensure that renewing institutions submit a certification attesting to the validity of the following information: full legal name and any names previously used, mailing address, and dates of birth of the institution's executive director and chair of the board of directors or the owner, in the case

of a for-profit center that does not have an executive director or is not required to have a board of directors. In addition, the institution's Federal Employer Identification Number (FEIN) or the Unique Entity Identifier (UEI) must be provided.

(G) *Outside employment policy. *The State agency must ensure that renewing sponsoring organizations certify that the outside employment policy most recently submitted to the State agency remains current and in effect or the sponsoring organization must submit an updated outside employment policy at the time of renewal. The policy must restrict other employment by employees that interferes with an employee's performance of Program-related duties and responsibilities, including outside employment that constitutes a real or apparent conflict of interest.

(H) *Compliance with performance standards. *The State agency must ensure that each renewing institution certifies that it is still in compliance with the performance standards described in paragraph (b)(1)(xviii) of this section, meaning it is financially viable, is administratively capable of operating the Program in accordance with this part, and has internal controls in effect to ensure accountability.

(I) *Licensing. *The State agency must ensure that each independent center certifies that its licensing or approval status is up-to-date and that it continues to meet the licensing requirements described in paragraphs (d) and (e) of this section. Sponsoring organizations must certify that the licensing or approval status of their facilities is up-to-date and that they continue to meet the licensing requirements described in paragraphs (d) and (e) of this section. If the independent center or facility has a new license not previously on file with the State agency, a copy must be submitted, unless the State agency has other means of confirming the licensing or approval status of any independent center or facility providing care.

(J) *Facility lists. *The State agency must ensure that each sponsoring organization certifies that the list of all of their applicant day care homes, child care centers, outside-school-hours-care centers, at-risk afterschool care centers, emergency shelters, and adult day care centers on file with the State agency is up-to-date.

(K) *Facility training. *The State agency must ensure that renewing sponsoring organizations certify that all facilities under their oversight have adhered to the training requirements set forth in Program regulations.

(iv) *Additional Information collection. *Institutions must provide information to the State agency as specified in paragraphs (f)(3), (f)(4), and (f)(7) of this section.

(3) *State agency notification requirements.*

(i) Any new institution applying for participation in the Program must be notified in writing of approval or disapproval by the State agency, within 30 calendar days of the State agency's receipt of a complete application. Whenever possible, State agencies should provide assistance to institutions that have submitted an incomplete application. Any disapproved applicant institution must be notified of the reasons for its disapproval and its right to appeal, as described in paragraph (k) of this section. Any disapproved applicant day care home or unaffiliated center must be notified of the reasons for its disapproval and its right to appeal, as described in paragraph (l) of this section.

(ii) Any renewing institution must be provided written notification indicating whether it has completely and sufficiently met all renewal information requirements within 30 days of the submission of renewal information. Whenever possible, State agencies should provide assistance to institutions whose information is incomplete.

(4) *Program agreements.*

(i) The State agency must require each institution that has been approved for participation in the Program to enter into a permanent agreement governing the rights and responsibilities of each party. The existence of a valid permanent agreement, however, does not eliminate the need for an institution to comply with the annual information submission requirements and related provisions at paragraphs (b) and (f) of this section.

(ii) The existence of a valid permanent agreement does not limit the State agency's ability to terminate the agreement, as provided under paragraph (c)(3) of this section. The State agency must terminate the institution's agreement whenever an institution's participation in the Program ends. The State agency must terminate the agreement for cause based on violations by the institution, facility, responsible principals, or responsible individuals, as described in paragraph (c) of this section. The State agency or institution may terminate the agreement at its convenience for considerations unrelated to the institution's performance of Program responsibilities under the agreement. However, any action initiated by the State agency to terminate an agreement for its convenience requires prior consultation with FNS. Termination for convenience does not result in ineligibility for any program authorized under this part or parts 210, 215, 220, or 225 of this chapter.

(iii) The Program agreement must include the following requirements:

(A) The responsibility of the institution to accept final financial and administrative management of a proper, efficient, and effective food service, and comply with all requirements under this part.

(B) The responsibility of the institution to comply with all requirements of title VI of the Civil Rights Act of 1964, title IX of the Education Amendments of 1972, section 504 of the Rehabilitation Act of 1973, the Age Discrimination Act of 1975, and the Department's regulations concerning nondiscrimination (parts 15, 15a and 15b of this title), including requirements for racial and ethnic participation data collection, public notification of the nondiscrimination policy, and reviews to assure compliance with the nondiscrimination policy, to the end that no person may, on the grounds of race, color, national origin, sex, age, or disability, be excluded from participation in, be denied the benefits of, or be otherwise subjected to discrimination under, the Program.

(C) The right of the State agency, the Department, and other State or Federal officials to make announced or unannounced reviews of their operations during the institution's normal hours of child or adult care operations, and that anyone making such reviews must show photo identification that demonstrates that they are employees of one of these entities.

(c) *Denial of applications and termination of agreements *—

(1) *Denial of a new institution's application *—

(i) *General. *If a new institution's application does not meet all of the requirements in paragraph (b) of this section and in §§ 226.15(b) and 226.16(b), the State agency must deny the application. If, in reviewing a new institution's application, the State agency determines that the institution has committed one or more serious deficiency listed in paragraph (c)(1)(ii) of this section, the State agency must initiate action to:

(A) Deny the new institution's application; and

(B) Disqualify the new institution and the responsible principals and responsible individuals (e.g., the person who signs the application).

(ii) *List of serious deficiencies for new institutions. *The list of serious deficiencies is not identical for each category of institution (new, renewing, participating) because the type of information likely to be available to the State agency is different, depending on whether the State agency is reviewing a new or renewing institution's application or is conducting a review of a participating institution. Serious deficiencies for new institutions are:

(A) Submission of false information on the institution's application, including but not limited to a determination that the institution has concealed a conviction for any activity that occurred during the past seven years and that indicates a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency; or

(B) Any other action affecting the institution's ability to administer the Program in accordance with Program requirements.

(iii) *Serious deficiency notification procedures for new institutions. *If the State agency determines that a new institution has committed one or more serious deficiency listed in paragraph (c)(1)(ii) of this section, the State agency must use the following procedures to provide the institution and the responsible principals and responsible individuals with notice of the serious deficiency(ies) and an opportunity to take corrective action.

(A) *Notice of serious deficiency. *The State agency must notify the institution's executive director and chairman of the board of directors that the institution has been determined to be seriously deficient. The notice must identify the responsible principals and responsible individuals (e.g., for new institutions, the person who signed the application) and must be sent to those persons as well. The State agency may specify in the notice different corrective action, and time periods for completing the corrective action, for the institution and the responsible principals and responsible individuals. At the same time the notice is issued, the State agency must add the institution to the State agency list, along with the basis for the serious deficiency determination, and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *The serious deficiency(ies);

*(2) *The actions to be taken to correct the serious deficiency(ies);

*(3) *The time allotted to correct the serious deficiency(ies) in accordance with paragraph (c)(4) of this section.

*(4) *That the serious deficiency determination is not subject to administrative review;

*(5) *That failure to fully and permanently correct the serious deficiency(ies) within the allotted time will result in denial of the institution's application and the disqualification of the institution and the responsible principals and responsible individuals;

*(6) *That the State agency will not pay any claims for reimbursement for eligible meals served or allowable administrative expenses incurred until the State agency has approved the institution's application and the institution has signed a Program agreement; and

*(7) *That the institution's withdrawal of its application, after having been notified that it is seriously deficient, will still result in the institution's formal termination by the State agency and placement of the institution and its responsible principals and individuals on the National disqualified list; and

*(8) *That, if the State agency does not possess the date of birth for any individual named as a “responsible principal or individual” in the serious deficiency notice, the submission of that person's date of birth is a condition of corrective action for the institution and/or individual.

(B) *Successful corrective action.*

*(1) *If corrective action has been taken to fully and permanently correct the serious deficiency(ies) within the allotted time and to the State agency's satisfaction, the State agency must:

*(**i**) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the State agency has temporarily defer its serious deficiency determination; and

*(ii) *Offer the new institution the opportunity to resubmit its application. If the new institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(2) *If corrective action is complete for the institution but not for all of the responsible principals and responsible individuals (or vice versa), the State agency must:

*(**i**) *Continue with the actions (as set forth in paragraph (c)(1)(iii)(C) of this section) against the remaining parties;

*(ii) *At the same time the notice is issued, the State agency must also update the State agency list to indicate that the serious deficiency(ies) has(ve) been corrected and provide a copy of the notice to the appropriate FNSRO; and

*(iii) *If the new institution has corrected the serious deficiency(ies), offer it the opportunity to resubmit its application. If the new institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(3) *If the State agency initially determines that the institution's corrective action is complete, but later determines that the serious deficiency(ies) has recurred, the State agency must move immediately to issue a notice of intent to terminate and disqualify the institution, in accordance with paragraph (c)(1)(iii)(C) of this section.

(C) *Application denial and proposed disqualification. *If timely corrective action is not taken to fully and permanently correct the serious deficiency(ies), the State agency must notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution's application has been denied. At the same time the notice is issued, the State agency must also update the State agency list and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *That the institution's application has been denied and the State agency is proposing to disqualify the institution and the responsible principals and responsible individuals;

*(2) *The basis for the actions; and

*(3) *The procedures for seeking an administrative review (in accordance with paragraph (k) of this section) of the application denial and proposed disqualifications.

(D) *Program payments. *The State agency is prohibited from paying any claims for reimbursement from a new institution for eligible meals served or allowable administrative expenses incurred until the State agency has approved its application and the institution and State agency have signed a Program agreement.

(E) *Disqualification. *When the time for requesting an administrative review expires or when the administrative review official upholds the State agency's denial and proposed disqualifications, the State agency must notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals that the institution and the responsible principal and responsible individuals have been disqualified. At the same time the notice is issued, the State agency must also update the State agency list and provide a copy of the notice and the mailing address and date of birth for each responsible principal and responsible individual to the appropriate FNSRO.

(2) *Denial of a renewing institution's application *—

(i) *General. *If a renewing institution's application does not meet all of the requirements in paragraph (b) of this section and in §§ 226.15(b) and 226.16(b), the State agency must deny the application. If, in reviewing a renewing institution's application, the State agency determines that the institution has committed one or more serious deficiency listed in paragraph (c)(2)(ii) of this section, the State agency must *initiate *action to deny the renewing institution's application and *initiate *action to disqualify the renewing institution and the responsible principals and responsible individuals.

(ii) *List of serious deficiencies for renewing institutions. *The list of serious deficiencies is not identical for each category of institution (new, renewing, participating) because the type of information likely to be available to the State agency is different, depending on whether the State agency is reviewing a new or renewing institution's application or is conducting a review of a participating institution. Serious deficiencies for renewing institutions are:

(A) Submission of false information on the institution's application, including but not limited to a determination that the institution has concealed a conviction for any activity that occurred during the past seven years and that indicates a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency;

(B) Failure to operate the Program in conformance with the performance standards set forth in paragraphs (b)(1)(xviii) and (b)(2)(vii) of this section;

(C) Failure to comply with the bid procedures and contract requirements of applicable Federal procurement regulations;

(D) Use of a food service management company that is in violation of health codes;

(E) Failure by a sponsoring organization of day care homes to properly classify day care homes as tier I or tier II in accordance with § 226.15(f);

(F) Failure by a sponsoring organization to properly train or monitor sponsored facilities in accordance with § 226.16(d);

(G) Failure to perform any of the other financial and administrative responsibilities required by this part;

(H) Failure to properly implement and administer the day care home termination and administrative review provisions set forth at paragraph (l) of this section and § 226.16(l); or

(I) Any other action affecting the institution's ability to administer the Program in accordance with Program requirements.

(iii) *Serious deficiency notification procedures for renewing institutions. *If the State agency determines that a renewing institution has committed one or more serious deficiency listed in paragraph (c)(2)(ii) of this section, the State agency must use the following procedures to provide the institution and the responsible principals and responsible individuals notice of the serious deficiency(ies) and an opportunity to take corrective action.

(A) *Notice of serious deficiency. *The State agency must notify the institution's executive director and chairman of the board of directors that the institution has been determined to be seriously deficient. The notice must identify the responsible principals and responsible individuals and must be sent to those persons as well. The State agency may specify in the notice different corrective action, and time periods for completing the corrective action, for the institution and the responsible principals and responsible individuals. At the same time the notice is issued, the State agency must add the institution to the State agency list, along with the basis for the serious deficiency determination, and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *The serious deficiency(ies);

*(2) *The actions to be taken to correct the serious deficiency(ies);

*(3) *The time allotted to correct the serious deficiency(ies) in accordance with paragraph (c)(4) of this section;

*(4) *That the serious deficiency determination is not subject to administrative review.

*(5) *That failure to fully and permanently correct the serious deficiency(ies) within the allotted time will result in the State agency's denial of the institution's application, the proposed termination of the institution's agreement and the proposed disqualification of the institution and the responsible principals and responsible individuals;

*(6) *That the institution's voluntary termination of its agreement with the State agency after having been notified that it is seriously deficient will still result in the institution's formal termination by the State agency and placement of the institution and its responsible principals and responsible individuals on the National disqualified list; and

*(7) *That, if the State agency does not possess the date of birth for any individual named as a “responsible principal or individual” in the serious deficiency notice, the submission of that person's date of birth is a condition of corrective action for the institution and/or individual.

(B) *Successful corrective action.*

*(1) *If corrective action has been taken to fully and permanently correct the serious deficiency(ies) within the allotted time and to the State agency's satisfaction, the State agency must:

*(**i**) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the State agency has temporarily defer its serious deficiency determination; and

*(ii) *Offer the renewing institution the opportunity to resubmit its application. If the renewing institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(2) *If corrective action is complete for the institution but not for all of the responsible principals and responsible individuals (or vice versa), the State agency must:

*(**i**) *Continue with the actions (as set forth in paragraph (c)(2)(iii)(C) of this section) against the remaining parties;

*(ii) *At the same time the notice is issued, the State agency must also update the State agency list to indicate that the serious deficiency(ies) has(ve) been corrected and provide a copy of the notice to the appropriate FNSRO; and

*(iii) *If the renewing institution has corrected the serious deficiency(ies), offer it the opportunity to resubmit its application. If the renewing institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(3) *If the State agency initially determines that the institution's corrective action is complete, but later determines that the serious deficiency(ies) have recurred, the state agency must move immediately to issue a notice of intent to terminate and disqualify the institution, in accordance with paragraph (c)(2)(iii)(C) of this section.

(C) *Application denial and proposed disqualification. *If timely corrective action is not taken to fully and permanently correct the serious deficiency(ies), the State agency must notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution's application has been denied. At the same time the notice is issued, the State agency must update the State agency list and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *That the institution's application has been denied and the State agency is proposing to terminate the institution's agreement and to disqualify the institution and the responsible principals and responsible individuals;

*(2) *The basis for the actions;

*(3**) *That, if the institution voluntarily terminates its agreement after receiving the notice of the proposed termination, the institution and the responsible principals and responsible individuals will be disqualified;

*(4) *The procedures for seeking an administrative review (in accordance with paragraph (k) of this section) of the application denial and proposed disqualifications; and

*(5) *That the institution may continue to participate in the Program and receive Program reimbursement for eligible meals served and allowable administrative costs incurred until its administrative review is completed.

(D) *Agreement termination and disqualification. *When the time for requesting an administrative review expires or when the administrative review official upholds the State agency's denial of the institution's application, the proposed termination, and the proposed disqualifications, the State agency must:

*(1) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the agreement has been terminated and that the institution and the responsible principals and responsible individuals have been disqualified;

*(2) *Update the State agency list at the time such notice is issued; and

*(3) *Provide a copy of the notice and the mailing address and date of birth for each responsible principal and responsible individual to the appropriate FNSRO.

(3) *Termination of a participating institution's agreement.*

(i) *General. *If the State agency holds an agreement with an institution operating in more than one State that has been disqualified from the Program by another State agency and placed on the National disqualified list, the State agency must terminate the institution's agreement effective no later than 45 days of the date of the institution's disqualification by the other State agency. At the same time the notice of termination is issued, the State agency must add the institution to the State agency list and indicate that the institution's agreement has been terminated and provide a copy of the notice to the appropriate FNSRO. If the State agency determines that a participating institution has committed one or more serious deficiency listed in paragraph (c)(3)(ii) of this section, the State agency must *initiate *action to terminate the agreement of a participating institution and *initiate *action to disqualify the institution and any responsible principals and responsible individuals.

(ii) *List of serious deficiencies for participating institutions. *The list of serious deficiencies is not identical for each category of institution (new, renewing, participating) because the type of information likely to be available to the State agency is different, depending on whether the State agency is reviewing a new or renewing institution's application or is conducting a review of a participating institution. Serious deficiencies for participating institutions are:

(A) Submission of false information on the institution's application, including but not limited to a determination that the institution has concealed a conviction for any activity that occurred during the past seven years and that indicates a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency;

(B) Permitting an individual who is on the National disqualified list to serve in a principal capacity with the institution or, if a sponsoring organization, permitting such an individual to serve as a principal in a sponsored center or as a day care home;

(C) Failure to operate the Program in conformance with the performance standards set forth in paragraphs (b)(1)(xviii) and (b)(2)(vii) of this section;

(D) Failure to comply with the bid procedures and contract requirements of applicable Federal procurement regulations;

(E) Failure to return to the State agency any advance payments that exceeded the amount earned for serving eligible meals, or failure to return disallowed start-up or expansion payments;

(F) Failure to maintain adequate records;

(G) Failure to adjust meal orders to conform to variations in the number of participants;

(H) Claiming reimbursement for meals not served to participants;

(I) Claiming reimbursement for a significant number of meals that do not meet Program requirements;

(J) Use of a food service management company that is in violation of health codes;

(K) Failure of a sponsoring organization to disburse payments to its facilities in accordance with the regulations at § 226.16(g) and (h) or in accordance with its management plan;

(L) Claiming reimbursement for meals served by a for-profit child care center or a for-profit outside-school-hours care center during a calendar month in which less than 25 percent of the children in care (enrolled or licensed capacity, whichever is less) were eligible for free or reduced-price meals or were title XX beneficiaries;

(M) Claiming reimbursement for meals served by a for-profit adult day care center during a calendar month in which less than 25 percent of its enrolled adult participants were title XIX or title XX beneficiaries;

(N) Failure by a sponsoring organization of day care homes to properly classify day care homes as tier I or tier II in accordance with § 226.15(f);

(O) Failure by a sponsoring organization to properly train or monitor sponsored facilities in accordance with § 226.16(d);

(P) Use of day care home funds by a sponsoring organization to pay for the sponsoring organization's administrative expenses;

(Q) Failure to perform any of the other financial and administrative responsibilities required by this part;

(R) Failure to properly implement and administer the day care home termination and administrative review provisions set forth at paragraph (l) of this section and § 226.16(l);

(S) The fact the institution or any of the institution's principals have been declared ineligible for any other publicly funded program by reason of violating that program's requirements. However, this prohibition does not apply if the institution or the principal has been fully reinstated in, or is now eligible to participate in, that program, including the payment of any debts owed;

(T) Conviction of the institution or any of its principals for any activity that occurred during the past seven years and that indicates a lack of business integrity. A lack of business integrity includes fraud, antitrust violations, embezzlement, theft, forgery, bribery, falsification or destruction of records, making false statements, receiving stolen property, making false claims, obstruction of justice, or any other activity indicating a lack of business integrity as defined by the State agency; or

(U) Any other action affecting the institution's ability to administer the Program in accordance with Program requirements.

(iii) *Serious deficiency notification procedures for participating institutions. *If the State agency determines that a participating institution has committed one or more serious deficiency listed in paragraph (c)(3)(ii) of this section, the State agency must use the following procedures to provide the institution and the responsible principals and responsible individuals notice of the serious deficiency(ies) and an opportunity to take corrective action. However, if the serious deficiency(ies) constitutes an imminent threat to the health or safety of participants, or the institution has engaged in activities that threaten the public health or safety, the State agency must follow the procedures in paragraph (c)(5)(i) of this section instead of the procedures below. Further, if the serious deficiency is the submission of a false or fraudulent claim, in addition to the procedures below, the State agency may suspend the institution's participation in accordance with paragraph (c)(5)(ii) of this section.

(A) *Notice of serious deficiency. *The State agency must notify the institution's executive director and chairman of the board of directors that the institution has been determined seriously deficient. The notice must identify the responsible principals and responsible individuals and must be sent to those persons as well. The State agency may specify in the notice different corrective action and time periods for completing the corrective action for the institution and the responsible principals and responsible individuals. At the same time the notice is issued, the State agency must add the institution to the State agency list, along with the basis for the serious deficiency determination, and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *The serious deficiency(ies);

*(2) *The actions to be taken to correct the serious deficiency(ies);

*(3) *The time allotted to correct the serious deficiency(ies) in accordance with paragraph (c)(4) of this section;

*(4) *That the serious deficiency determination is not subject to administrative review.

*(5) *That failure to fully and permanently correct the serious deficiency(ies) within the allotted time will result in the State agency's proposed termination of the institution's agreement and the proposed disqualification of the institution and the responsible principals and responsible individuals;

*(6) *That the institution's voluntary termination of its agreement with the State agency after having been notified that it is seriously deficient will still result in the instituion's formal termination by the State agency and placement of the institution and its responsible principals and responsible individuals on the National disqualified list; and

*(7) *That, if the State agency does not possess the date of birth for any individual named as a “responsible principal or individual” in the serious deficiency notice, the submission of that person's date of birth is a condition of corrective action for the institution and/or individual.

(B) *Successful corrective action.*

*(1) *If corrective action has been taken to fully and permanently correct the serious deficiency(ies) within the allotted time and to the State agency's satisfaction, the State agency must:

*(**i**) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the State agency has temporarily defer its serious deficiency determination; and

*(ii) *Offer the participating institution the opportunity to resubmit its application. If the participating institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(2) *If corrective action is complete for the institution but not for all of the responsible principals and responsible individuals (or vice versa), the State agency must:

*(**i**) *Continue with the actions (as set forth in paragraph (c)(3)(iii)(C) of this section) against the remaining parties;

*(ii) *At the same time the notice is issued, the State agency must also update the State agency list to indicate that the serious deficiency(ies) has(ve) been corrected and provide a copy of the notice to the appropriate FNSRO; and

*(iii) *If the participating institution has corrected the serious deficiency(ies), offer it the opportunity to resubmit its application. If the participating institution resubmits its application, the State agency must complete its review of the application within 30 days after receiving a complete and correct application.

*(3) *If the State agency initially determines that the institution's corrective action is complete, but later determines that the serious deficiency(ies) has recurred, the State agency must move immediately to issue a notice of intent to terminate and disqualify the institution, in accordance with paragraph (c)(1)(iii)(C) of this section.

(C) *Proposed termination and proposed disqualification. *If timely corrective action is not taken to fully and permanently correct the serious deficiency(ies), the State agency must notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the State agency is proposing to terminate the institution's agreement and to disqualify the institution and the responsible principals and responsible individuals. At the same time the notice is issued, the State agency must also update the State agency list and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *That the State agency is proposing to terminate the institution's agreement and to disqualify the institution and the responsible principals and responsible individuals;

*(2) *The basis for the actions;

*(3) *That, if the institution voluntarily terminates its agreement after receiving the notice of proposed termination, the institution and the responsible principals and responsible individuals will be disqualified.

*(4) *The procedures for seeking an administrative review (in accordance with paragraph (k) of this section) of the application denial and proposed disqualifications; and

*(5) *That, unless participation has been suspended, the institution may continue to participate and receive Program reimbursement for eligible meals served and allowable administrative costs incurred until its administrative review is completed.

(D) *Program payments and extended agreement. *If the participating institution must renew its application, or its agreement expires, before the end of the time allotted for corrective action and/or the conclusion of any administrative review requested by the participating institution:

*(1) *The State agency must temporarily extend its current agreement with the participating institution and continue to pay any valid unpaid claims for reimbursement for eligible meals served and allowable administrative expenses incurred; and

*(2) *During this period, the State agency may base administrative payments to the institution on the institution's previous approved budget, or may base administrative payments to the institution on the budget submitted by the institution as part of its renewal application; and

*(3) *The actions set forth in *paragraphs (c)(3)(iii)(D)(1) *and *(c)(3)(iii)(D)(2) *of this section must be taken either until the serious deficiency(ies) is corrected or until the institution's agreement is terminated, including the period of any administrative review;

(E) *Agreement termination and disqualification. *When the time for requesting an administrative review expires or when the administrative review official upholds the State agency's proposed termination and disqualifications, the State agency must:

*(1) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution's agreement has been terminated and that the institution and the responsible principals and responsible individuals have been disqualified;

*(2) *Update the State agency list at the time such notice is issued; and

*(3) *Provide a copy of the notice and the mailing address and date of birth for each responsible principal and responsible individual to the appropriate FNSRO.

(4) *Corrective action timeframes *—

(i) *General. *Except as noted in this paragraph (c)(4), the State agency is prohibited from allowing more than 90 days for corrective action from the date the institution receives the serious deficiency notice.

(ii) *Unlawful practices. *If the State agency determines that the institution has engaged in unlawful practices, submitted false or fraudulent claims or other information to the State agency, or been convicted of or concealed a criminal background, the State agency is prohibited from allowing more than 30 days for corrective action.

(iii) *Long-term changes. *For serious deficiencies requiring the long-term revision of management systems or processes, the State agency may permit more than 90 days to complete the corrective action as long as a corrective action plan is submitted to and approved by the State agency within 90 days (or such shorter deadline as the State agency may establish). The corrective action must include milestones and a definite completion date that the State agency will monitor. The determination of serious deficiency will remain in effect until the State agency determines that the serious deficiency(ies) has(ve) been fully and permanently corrected within the allotted time.

(5) *Suspension of an institution's participation. *A State agency is prohibited from suspending an institution's participation (including all Program payments) except for the reasons set forth in this paragraph (c)(5).

(i) *Public health or safety *—

(A) *General. *If State or local health or licensing officials have cited an institution for serious health or safety violations, the State agency must immediately suspend the institution's Program participation, initiate action to terminate the institution's agreement, and initiate action to disqualify the institution and the responsible principals and responsible individuals prior to any formal action to revoke the institution's licensure or approval. If the State agency determines that there is an imminent threat to the health or safety of participants at an institution, or that the institution has engaged in activities that threaten the public health or safety, the State agency must immediately notify the appropriate State or local licensing and health authorities and take action that is consistent with the recommendations and requirements of those authorities. An imminent threat to the health or safety of participants and engaging in activities that threaten the public health or safety constitute serious deficiencies; however, the State agency must use the procedures in this paragraph (c)(5)(i) (instead of the procedures in paragraph (c)(3) of this section) to provide the institution notice of the suspension of participation, serious deficiency, proposed termination of the institution's agreement, and proposed disqualification of the responsible principals and responsible individuals.

(B) *Notice of suspension, serious deficiency, proposed termination, and proposed disqualification. *The State agency must notify the institution's executive director and chairman of the board of directors that the institution's participation (including Program payments) has been suspended, that the institution has been determined to be seriously deficient, and that the State agency proposes to terminate the institution's agreement and to disqualify the institution and the responsible principals and responsible individuals. The notice must also identify the responsible principals and responsible individuals and must be sent to those persons as well. At the same time this notice is sent, the State agency must add the institution and the responsible principals and responsible individuals to the State agency list, along with the basis for the serious deficiency determination and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *That the State agency is suspending the institution's participation (including Program payments), proposing to terminate the institution's agreement, and proposing to disqualify the institution and the responsible principals and responsible individuals;

*(2) *The serious deficiency(ies);

*(3) *That, if the institution voluntary terminates its agreement with the State agency after having been notified of the proposed termination, the institution and the responsible principals and responsible individuals will be disqualified;

*(4) *That the serious deficiency determination is not subject to administrative review;

*(5) *The procedures for seeking an administrative review (consistent with paragraph (k) of this section) of the suspension, proposed termination, and proposed disqualifications; and

*(6) *That, if the administrative review official overturns the suspension, the institution may claim reimbursement for eligible meals served and allowable administrative costs incurred during the suspension period.

(C) *Agreement termination and disqualification. *When the time for requesting an administrative review expires or when the administrative review official upholds the State agency's proposed termination and disqualifications, the State agency must:

*(1) *Notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution's agreement has been terminated and that the institution and the responsible principals and responsible individuals have been disqualified;

*(2) *Update the State agency list at the time such notice is issued; and

*(3) *Provide a copy of the notice and the mailing address and date of birth for each responsible principal and responsible individual to the appropriate FNSRO.

(D) *Program payments. *The State agency is prohibited from paying any claims for reimbursement from a suspended institution. However, if the suspended institution prevails in the administrative review of the proposed termination, the State agency must pay any claims for reimbursement for eligible meals served and allowable administrative costs incurred during the suspension period.

(ii) *False or fraudulent claims *—

(A) *General. *If the State agency determines that an institution has knowingly submitted a false or fraudulent claim, the State agency *may *initiate action to suspend the institution's participation and must *initiate *action to terminate the institution's agreement and initiate action to disqualify the institution and the responsible principals and responsible individuals (in accordance with paragraph (c)(3) of this section). The submission of a false or fraudulent claim constitutes a serious deficiency as set forth in paragraph (c)(3)(ii) of this section, which lists serious deficiencies for participating institutions. If the State agency wishes to suspend the institution's participation, it must use the following procedures to issue the notice of proposed suspension of participation *at the same time *it issues the serious deficiency notice, which must include the information described in paragraph (c)(3)(iii)(A) of this section.

(B) *Proposed suspension of participation. *If the State agency decides to propose to suspend an institution's participation due to the institution's submission of a false or fraudulent claim, it must notify the institution's executive director and chairman of the board of directors that the State agency intends to suspend the institution's participation (including all Program payments) unless the institution requests a review of the proposed suspension. At the same time the notice is issued, the State agency must also update the State agency list and provide a copy of the notice to the appropriate FNSRO. The notice must identify the responsible principals and responsible individuals and must be sent to those persons as well. The notice must also specify:

*(1) *That the State agency is proposing to suspend the institution's participation;

*(2) *That the proposed suspension is based on the institution's submission of a false or fraudulent claim, as described in the serious deficiency notice;

*(3) *The effective date of the suspension (which may be no earlier than 10 days after the institution receives the suspension notice);

*(4) *The name, address and telephone number of the suspension review official who will conduct the suspension review; and

*(5**) *That if the institution wishes to have a suspension review, it must request a review and submit to the suspension review official written documentation opposing the proposed suspension within 10 days of the institution's receipt of the notice.

(C) *Suspension review. *If the institution requests a review of the State agency's proposed suspension of participation, the suspension review must be heard by a suspension review official who must:

*(1) *Be an independent and impartial person other than, and not accountable to, any person involved in the decision to initiate suspension proceedings;

*(2) *Immediately notify the State agency that the institution has contested the proposed suspension and must obtain from the State agency its notice of proposed suspension of participation, along with all supporting documentation; and

*(3) *Render a decision on suspension of participation within 10 days of the deadline for receiving the institution's documentation opposing the proposed suspension.

(D) *Suspension review decision. *If the suspension review official determines that the State agency's proposed suspension is not appropriate, the State agency is prohibited from suspending participation. If the suspension review official determines, based on a preponderance of the evidence, that the State agency's action was appropriate, the State agency must suspend the institution's participation (including all Program payments), effective on the date of the suspension review decision. The State agency must notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution's participation has been suspended. At the same time the notice is issued, the State agency must also update the State agency list and provide a copy of the notice to the appropriate FNSRO. The notice must also specify:

*(1) *That the State agency is suspending the institution's participation (including Program payments);

*(2) *The effective date of the suspension (the date of the suspension review decision);

*(3) *The procedures for seeking an administrative review (in accordance with paragraph (k) of this section) of the suspension; and

*(4) *That if the administrative review official overturns the suspension, the institution may claim reimbursement for eligible meals served and allowable administrative costs incurred during the suspension period.

(E) *Program payments. *A State agency is prohibited from paying any claims for reimbursement submitted by a suspended institution. However, if the institution suspended for the submission of false or fraudulent claims is a sponsoring organization, the State agency must ensure that sponsored facilities continue to receive reimbursement for eligible meals served during the suspension period. If the suspended institution prevails in the administrative review of the proposed termination, the State agency must pay any valid unpaid claims for reimbursement for eligible meals served and allowable administrative costs incurred during the suspension period.

(F) *Maximum time for suspension. *Under no circumstances may the suspension of participation remain in effect for more than 120 days following the suspension review decision.

(6) *FNS determination of serious deficiency *—

(i) *General. *FNS may determine independently that a participating institution has committed one or more serious deficiency listed in paragraph (c)(3)(ii) of this section, which lists serious deficiencies for participating institutions.

(ii) *Serious deficiency notification procedures. *If FNS determines that an institution has committed one or more serious deficiency listed in paragraph (c)(3)(ii) of this section (the list of serious deficiencies for participating institutions), FNS will use the following procedures to provide the institution and the responsible principals and responsible individuals with notice of the serious deficiency(ies) and an opportunity to take corrective action.

(A) *Notice of serious deficiency. *FNS will notify the institution's executive director and chairman of the board of directors that the institution has been found to be seriously deficient. The notice will identify the responsible principals and responsible individuals

and will be sent to them as well. FNS may specify in the notice different corrective action and time periods for completing the corrective action, for the institution and the responsible principals and responsible individuals. The notice will also specify:

*(1) *The serious deficiency(ies);

*(2) *The actions to be taken to correct the serious deficiency(ies);

*(3) *The time allotted to correct the serious deficiency(ies) in accordance with paragraph (c)(4) of this section;

*(4) *That failure to fully and permanently correct the serious deficiency(ies) within the allotted time, or the institution's voluntary termination of its agreement(s) with any State agency after having been notified that it is seriously deficient, will result in the proposed disqualification of the institution and the responsible principals and responsible individuals and the termination of its agreement(s) with all State agencies; and

*(5) *That the serious deficiency determination is not subject to administrative review.

(B) *Suspension of participation. *If FNS determines that there is an imminent threat to the health or safety of participants at an institution, or that the institution has engaged in activities that threaten the public health or safety, any State agency that holds an agreement with the institution must suspend the participation of the institution. If FNS determines that the institution has submitted a false or fraudulent claim, it may require any State agency that holds an agreement with the institution to initiate action to suspend the institution's participation for false or fraudulent claims in accordance with paragraph (c)(5)(ii) of this section (which deals with an institution's suspension by a State agency for submission of false or fraudulent claims). In both cases, FNS will provide the State agency the information necessary to support these actions and, in the case of a false and fraudulent claim, will provide an individual to serve as the suspension review official if requested by the State agency.

(C) *Successful corrective action.*

*(1) *If corrective action has been taken to fully and permanently correct the serious deficiency(ies) within the allotted time and to FNS's satisfaction, FNS will notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that it has temporarily defer its serious deficiency determination; and

*(2) *If corrective action is complete for the institution but not for all of the responsible principals and responsible individuals (or vice versa), FNS will continue with the actions (as set forth in paragraph (c)(6)(ii)(D) of this section) against the remaining parties.

*(3) *If FNS initially determines that the institution's corrective action is complete, but later determines that the serious deficiency(ies) has recurred, FNS will move immediately to issue a notice of intent to terminate and disqualify the institution, in accordance with paragraph (c)(6)(ii)(D) of this section.

(D) *Proposed disqualification. *If timely corrective action is not taken to fully and permanently correct the serious deficiency(ies), FNS will notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that FNS is proposing to disqualify them. The notice will also specify:

*(1) *That FNS is proposing to disqualify the institution and the responsible principals and responsible individuals;

*(2) *The basis for the actions;

*(3) *That, if the institution seeks to voluntarily terminate its agreement after receiving the notice of proposed disqualification, the institution and the responsible principals and responsible individuals will be disqualified;

*(4) *The procedures for seeking an administrative review (in accordance with paragraph (k) of this section) of the proposed disqualifications;

*(5) *That unless participation has been suspended, the institution may continue to participate and receive Program reimbursement for eligible meals served and allowable administrative costs incurred until its administrative review is completed; and

*(6**) *That if the institution does not prevail in the administrative review, any State agency holding an agreement with the institution will be required to terminate that agreement and the institution is prohibited from seeking an administrative review of the termination of the agreement by the State agency(ies).

(E) *Disqualification. *When the time for requesting an administrative review expires or when the administrative review official upholds FNS's proposed disqualifications, FNS will notify the institution's executive director and chairman of the board of directors, and the responsible principals and responsible individuals, that the institution and the responsible principal or responsible individual have been disqualified.

(F) *Program payments. *If the State agency holds an agreement with an institution that FNS has determined to be seriously deficient, the State agency must continue to pay any valid unpaid claims for reimbursement for eligible meals served and allowable administrative expenses incurred until the serious deficiency(ies) is corrected or the State agency terminates the institution's agreement, including the period of any administrative review, unless participation has been suspended.

(G) *Required State agency action.*

*(1) Disqualified institutions. *If the State agency holds an agreement with an institution that FNS determines to be seriously deficient and subsequently disqualifies, the State agency must terminate the institution's agreement effective no later than 45 days after the date of the institution's disqualification by FNS. As noted in paragraph (k)(3)(iv) of this section, the termination is not subject to administrative review. At the same time the notice of termination is issued, the State agency must add the institution to the State agency list and provide a copy of the notice to the appropriate FNSRO.

*(2) Disqualified principals. *If the State agency holds an agreement with an institution whose principal FNS determines to be seriously deficient and subsequently disqualifies, the State agency must determine the institution to be seriously deficient and initiate action to terminate and disqualify the institution in accordance with the procedures in paragraph (c)(3) of this section. The State agency must initiate these actions no later than 45 days after the date of the principal's disqualification by FNS.

(7) *National disqualified list *—

(i) *Maintenance and availability of list. *FNS will maintain the National disqualified list and make it available to all State agencies and all sponsoring organizations.

(ii) *Effect on institutions. *No organization on the National disqualified list may participate in the Program as an institution. As noted in paragraphs (b)(1)(xii) and (b)(2)(ii) of this section, the State agency must must not approve the application of a new or renewing institution if the institution is on the National disqualified list. In addition, as noted in paragraphs (c)(3)(i) and *(c)(6)(ii)(G)(1) *of this section, the State agency must terminate the agreement of any participating institution that is disqualified by another State agency or by FNS.

(iii) *Effect on sponsored centers. *No organization on the National disqualified list may participate in the Program as a sponsored center. As noted in § 226.16(b) and paragraphs (b)(1)(xii) and (b)(2)(ii) of this section, a sponsoring organization is prohibited from submitting an application on behalf of a sponsored facility (and a State agency is prohibited from approving such an application) if the facility is on the National disqualified list.

(iv) *Effect on individuals. *No individual on the National disqualified list may serve as a principal in any institution or facility or as a day care home provider.

(A) *Principal for an institution or a sponsored facility. *As noted in paragraphs (b)(1)(xii) and (b)(2)(ii) of this section, the State agency must must not approve the application of a new or renewing institution if any of the institution's principals is on the National disqualified list. As noted in paragraphs (c)(3)(ii)(B) and *(c)(6)(ii)(G)(2) *of this section, the State agency must declare an institution seriously deficient and initiate action to terminate the institution's agreement and disqualify the institution if the institution permits an individual who is on the National disqualified list to serve in a principal capacity for the institution or one of its facilities.

(B) *Principal for a sponsored facility. *As noted in § 226.16(b) and paragraphs (b)(1)(xii) and (b)(2)(ii) of this section, a sponsoring organization is prohibited from submitting an application on behalf of a sponsored facility (or a State agency from approving such an application) if any of the facility's principals are on the National disqualified list.

(C) *Serving as a day care home. *As noted in § 226.16(b) and paragraphs (b)(1)(xii) and (b)(2)(ii) of this section, a sponsoring organization is prohibited from submitting an application on behalf of a sponsored facility (and a State agency is prohibited from approving such an application) if the facility is on the National disqualified list.

(v) *Removal of institutions, principals, and individuals from the list. *Once included on the National disqualified list, an institution and responsible principals and responsible individuals remain on the list until such time as FNS, in consultation with the appropriate State agency, determines that the serious deficiency(ies) that led to their placement on the list has(ve) been corrected, or

until seven years have elapsed since they were disqualified from participation. However, if the institution, principal or individual has failed to repay debts owed under the Program, they will remain on the list until the debt has been repaid.

(vi) *Removal of day care homes from the list. *Once included on the National disqualified list, a day care home will remain on the list until such time as the State agency determines that the serious deficiency(ies) that led to its placement on the list has(ve) been corrected, or until seven years have elapsed since its agreement was terminated for cause. However, if the day care home has failed to repay debts owed under the Program, it will remain on the list until the debt has been repaid.

(8) *State agency list *—

(i) *Maintenance of the State agency list. *The State agency must maintain a State agency list (in the form of an actual paper or electronic list or retrievable paper records). The list must be made available to FNS upon request, and must include the following information:

(A) Institutions determined to be seriously deficient by the State agency, including the names and mailing addresses of the institutions and the status of the institutions as they move through the possible subsequent stages of corrective action, proposed termination, suspension, agreement termination, and/or disqualification, as applicable;

(B) Responsible principals and individuals who have been disqualified from participation by the State agency, including their names, mailing addresses, and dates of birth; and

(C) Day care home providers whose agreements have been terminated for cause by a sponsoring organization in the State, including their names, mailing addresses, and dates of birth.

(ii) *Referral of disqualified day care homes to FNS. *Within 10 days of receiving a notice of termination and disqualification from a sponsoring organization, the State agency must provide the appropriate FNSRO the name, mailing address, and date of birth of each day care home provider whose agreement is terminated for cause on or after July 29, 2002.

(iii) *Prior lists of disqualified day care homes. *If on July 29, 2002 the State agency maintains a list of day care homes that have been disqualified from participation, the State agency may continue to prohibit participation by those day care homes. However, the State agency must remove a day care home from its prior list no later than the time at which the State agency determines that the serious deficiency(ies) that led to the day care home's placement on the list has(ve) been corrected or July 29, 2009 (unless the day care home has failed to repay debts owed under the Program). If the day care home has failed to repay its debt, the State agency may keep the day care home on its prior list until the debt has been repaid.

(d) *Licensing/approval for institutions or facilities providing **child care**. *This section prescribes State agency responsibilities to ensure that child care centers, at-risk afterschool care centers, outside-school-hours care centers, and day care homes meet the licensing/approval criteria set forth in this part. Emergency shelters are exempt from licensing/approval requirements contained in this section but must meet the requirements of paragraph (d)(2) to be eligible to participate in the Program. Independent centers shall submit such documentation to the State agency on their own behalf.

(1) *General. *Each State agency must establish procedures to annually review information submitted by institutions to ensure that all participating child care centers, at-risk afterschool care centers, outside-school hours care centers, and day care homes:

(i) Are licensed or approved by Federal, State, or local authorities, provided that institutions that are approved for Federal programs on the basis of State or local licensing are not eligible for the Program if their licenses lapse or are terminated; or

(ii) Are complying with applicable procedures to renew licensing or approval in situations where the State agency has no information that licensing or approval will be denied; or

(iii) Demonstrate compliance with applicable State or local child care standards to the State agency, if licensing is not available; or

(iv) Demonstrate compliance wit

[Note: Additional sections of Part 226 continue]

======================================================================
7 CFR PART 227 — Nutrition Ed
Federal Register (current as of April 13, 2026)
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

§ 227.5 Program funding.

(s) *State educational agency *means, as the State legislature may determine:

(1) The Chief State School Officer (such as the State Superintendent of Public Instruction, Commissioner of Education, or similar officer), or

(2) a board of education controlling the State Department of Education.

(a) Within the Department, FNS shall act on behalf of the Department in the administration of the Program.

(b) Within the States, responsibility for administration of the Program shall be in the State agency, except that FNSRO shall administer the Program with respect to nonprofit private schools or institutions in any State where the State agency is prohibited by law from administering the Program in nonprofit private schools or institutions.

(a) *Total grant. *The total grant to each State agency for each fiscal year for program costs and administrative costs shall consist of an amount equal to 50 cents per child enrolled in schools and institutions within the State during such year, but in no event shall such grant be less than $50,000: *Provided, however, *That a State's total grant shall be reduced proportionately if the State does not administer the program in nonprofit private schools and institutions. If funds appropriated for a fiscal year are insufficient to pay the amount to which each State is entitled, the amount of such grant shall be ratably reduced to the extent necessary so that the total of the amounts paid to each State does not exceed the amount of appropriated funds. Each State agency which receives funds based on all children enrolled in public and nonprofit private schools and institutions shall make the Program available to those schools and institutions. Enrollment figures shall be the latest available as certified by the Department of Education.

(b) *First fiscal year participation *—

(1) *Assessment and planning grant. *A portion of the total grant shall be made available to each State agency during its first fiscal year of participation as an assessment and planning grant for:

(i) Employing a State Coordinator, as provided for in § 227.30, and related support personnel costs including fringe benefits and travel expenses,

(ii) Undertaking a needs assessment in the State,

(iii) Developing a State Plan for nutrition education and training within the State, and

(iv) Applying for the State assessment and planning grant.

*[44 FR 28282, May 15, 1979, as amended at 52 FR 8223, Mar. 17, 1987]*

Subpart B—State Agency Provisions

(2) *Advances for the assessment and planning grant. *FNS shall make advances to any State desiring to participate in the Program, to enable the State to carry out the responsibilities set forth in paragraph (b)(1) of this section. Advances shall be made in two phases, in accordance with the following procedures:

(i) Initially, State agencies may receive an advance up to $35,000 for the purpose of hiring a State coordinator, as provided for in § 227.30. Application for such an advance shall be made on Form AD-623 when the State agency applies for participation in the Program. The information required for this advance shall be set out in Part III, Budget Information, Section B, Budget Categories. The State agency shall there indicate the funds required for the salary, travel, and fringe benefits of the State Coordinator, and related personnel costs necessary to carry out the duties and responsibilities of the State Coordinator.

(ii) After appointment of the State Coordinator, the State agency may receive an additional advance of up to 50 percent of the total grant to which the State agency is entitled for the first year of participation, after deduction of the advance made for the State Coordinator under § 227.5(b)(2), but not to exceed $100,000, for the purpose of undertaking a needs assessment in the State, developing a State Plan for nutrition education and training, and applying for the assessment and planning grant. Application for such advance shall be made by amending Part III, Budget Information, of Form AD-623.

(3) *Funds for implementing State plan.*

(i) States receiving advances. Each State agency shall receive the remaining portion of its total grant in order to implement its State plan, which has been approved by FNS, if the State agency has carried out the responsibilities for which advances were received. With the submission of the State plan each State agency may apply for the funds remaining of its total grant.

(ii) States previously participating. Those States which previously participated may apply for their total grant upon submission of the State Plan.

(c) *Administrative costs. *Each State agency may use up to 15 percent of its total grant for up to 50 percent of its cash expenditures for administrative costs.

(d) *Payment to State agencies. *Approval of the State plan by FNS is a prerequisite to the payment of funds to the State agency. All funds made available for the Program shall be provided through a letter of credit or check, as determined by FNS.

(e) *Unobligated funds. *The State agency will release to FNS any Federal funds made available to it under the Program which are unobligated by September 30 of each fiscal year.

(f) *Funds for existing programs. *State agencies shall maintain their present level of funding for existing nutrition education and training programs. FNS funds for the Program shall augment current nutrition education and training programs and projects. Funds made available by FNS for this Program shall not replace such funds.

§ 227.30 Responsibilities of State agencies.

(a) *General. *Except to the extent that it would be inconsistent with this part, the Program shall be administered in accordance with the applicable provisions of the Departmental regulations 2 CFR part 200, subpart D, and USDA implementing regulations 2 CFR part 400 and part 415, as applicable.

(b) *Application. *For the initial fiscal year of participation States shall make application for administration of the Program on Form and are responsible for amending Form AD-623 to request advance funding. In the initial application, in connection with the request for advance funding for the State Coordinator, part IV, Program Narrative, of Form AD-623 shall indicate the State agency's procedures for hiring a State Coordinator and contain a justification for the dollar value of salary requested. The narrative shall also indicate the time frame for hiring the State Coordinator. In amending Form AD-623 in connection with the request for advance funding for the remaining portion of the assessment and planning grant, part IV, Program Narrative, shall set forth the details for areas of the assessment and planning grant, other than employment of the State Coordinator.

(b-1) If any State does not apply for participation in the Program, by April 1 of a fiscal year by submitting Form AD 623 as required in §§ 227.30(b) and 227.5(b)(2)(i), the State's share of the funds shall be provided to the remaining States, so long as this does not take the remaining States' grants above 50 cents per child enrolled in schools or institutions, except in those States which receive a minimum grant of $75,000 for a fiscal year.

(c) *State Coordinator. *After execution of the agreement the State agency shall appoint a nutrition education specialist to serve as a State Coordinator for the Program who may be employed on a full-time or part-time basis. The State Coordinator may be a State employee who reports directly or indirectly to the Chief State School Officer or an individual under contract with the State agency to serve as the State Coordinator. A State agency shall not contract with an organization to provide for the services of a State Coordinator. The State Coordinator, at a minimum, shall meet both of the following requirements:

(1) The State Coordinator shall have a Masters degree or equivalent experience. Equivalent experience is experience related to the position being filled or as defined by State civil service or personnel policies. If the Masters degree is not in foods and nutrition or dietetics, the Bachelors degree shall include academic preparations in foods and nutrition or dietetics.

(2) In addition, the State Coordinator shall have recognized and demonstrated skills in management and education through at least three years experience in one or more of these areas: Elementary or secondary education, but not limited to classroom teaching; foodservice management and training for adults; community nutrition or public health programs; foodservice operations for children; or community action or assistance programs.

(d) *Needs assessment. *Each State agency shall conduct an ongoing needs assessment in accordance with § 227.36 The needs assessment shall be the data base utilized in formulating the State plan for each fiscal year. For the first year of participation a State agency may apply for funds in order to carry out the needs assessment in accordance with § 227.5.

(e) *Developing and submitting the State plan. *Each State agency shall submit to the Secretary a State plan for Nutrition Education and Training in accordance with § 227.37 prior to the beginning of each fiscal year. The date of submission for the State plan shall be designated by the Secretary. The Secretary shall act on the submitted State plan within 60 days after it is received. For the first year of participation the State agency shall submit to the Secretary, within nine months after the award of the planning and assessment grant, a State plan for nutrition education and training in accordance with § 227.37.

*(Approved by the Office of Management and Budget under control number 0584-0062)*

(44 U.S.C. 3506; E.O. 12372, July 14, 1982, 47 FR 30959, sec. 401(b) of the Intergovernmental Cooperation Act of 1968 (31 U.S.C. 6506(c))

*[44 FR 28282, May 15, 1979, as amended at 45 FR 14842, Mar. 7, 1980; 47 FR 746, Jan. 7, 1982; 47 FR 22072, May 21, 1982; 48 FR 29123, June 24, 1983; 48 FR 39213, Aug. 30, 1983; 81 FR 66493, Sept. 28, 2016]*

§ 227.31 Audits, management reviews, and evaluations.

(f) *Records and reports.*

(1) Each State agency shall maintain full and complete records concerning Program operations and shall retain such records in accordance with 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415.

(2) Each State agency shall submit to FNS a quarterly Financial Status Report, FNS-777, as required 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415.

(3) Each State agency shall submit an annual performance report (Form FNS-42) to FNS within 30 days after the close of the Fiscal Year.

(4) Each State agency shall maintain a financial management system in accordance with 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415.

(5) Each State agency shall comply with the requirements of 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415, for property management and the procurement of supplies, equipment and other services with these Program funds.

(6) Any income accruing to a State or local agency because of the Program shall be used in accordance with 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415.

(g) *Nondiscrimination. *Each State agency shall ensure that Program operations are in compliance with the Department's nondiscrimination regulations (part 15 of this title) issued under title VI of the Civil Rights Act of 1964.

(a) *Audits.*

(1) Examinations by the State agencies in the form of audits or internal audits shall be performed in accord with 2 CFR part 200, subpart F and Appendix XI, Compliance Supplement.

(b) *Management reviews. *The State agency is responsible for meeting the following requirements:

(1) The State agency shall establish management evaluation and review procedures to monitor compliance with the State plan for local educational agencies and land grant colleges, other institutions of higher education and public or private nonprofit educational or research agencies, institutions, or organizations.

(2) The State agency shall require participating agencies to establish program review procedures to be used in reviewing the Agencies operations and those of subsidiaries or contractors.

(c) *Evaluations. *The State agency shall conduct formal evaluations of program activities at least annually. These evaluations shall be aimed at assessing the effectiveness of the various activities undertaken by the State and local agencies. State officials shall analyze why some activities have proved effective while

*(Approved by the Office of Management and Budget under control number 0584-0062)*

(44 U.S.C. 3506; E.O. 12372 (July 14, 1982, 47 FR 30959); sec. 401(b) Intergovernmental Cooperation Act of 1968 (31 U.S.C. 6506(c))

*[44 FR 28282, May 15, 1979, as amended at 47 FR 746, Jan. 7, 1982; 48 FR 29123, June 24, 1983; 81 FR 66493, Sept. 28, 2016]*

Subpart C—State Coordinator Provisions

§ 227.35 Responsibilities of State coordinator.

At a minimum, the State Coordinator shall be responsible for:

*[44 FR 28282, May 15, 1979, as amended at 81 FR 66493, Sept. 28, 2016; 83 FR 14173, Apr. 3, 2018]*

§ 227.36 Requirements of needs assessment.

others have not and shall initiate appropriate improvements. The results of the evaluations shall be used to make adjustments in ongoing activities and to plan activities and programs for the next year's State plan. The State agency shall submit a plan for evaluation of Program activities as part of the State plan in accordance with § 227.37(b)(14).

(a) Preparation of a budget,

(b) The conduct of the needs assessment,

(c) Development of a State plan,

(d) Implementation of the approved State Plan,

(e) Evaluation of the progress and implementation of the State Plan,

(f) Coordination of the Program with the Child Nutrition Programs at the State and local levels,

(g) Coordination of the Program with other nutrition education and training programs conducted with Federal or State funds,

(h) Communication of needs and accomplishments of State nutrition education and training programs to parents and the community at large,

(i) Use of Program funds in compliance with all regulations, instructions, or other guidance material provided by FNS,

(j) Coordinating the submission and preparation of the Program financial status report (FNS-777), and

(k) Annual evaluation of the effectiveness of the State Plan.

(a) The needs assessment is an ongoing process which identifies the discrepancies between “what should be” and “what is” and shall be applied to each category listed below to enable State agencies to determine their nutrition education and training needs for each year. The needs assessment shall identify the following as a minimum:

(1) Children, teachers, and food service personnel in need of nutrition education and training;

(2) Existing State or federally funded nutrition education and training programs including their:

(i) Goals and objectives;

(ii) Source and level of funding;

(iii) Any available documentation of their relative success or failure; and

(iv) Factors contributing to their success or failure;

(3) Offices or agencies at the State and local level designated to be responsible for nutrition education and training of teachers and school food service personnel;

(4) Any relevant State nutrition education mandates;

(5) Funding levels at the State and local level for preservice and inservice nutrition education and training of food service personnel and teachers;

(6) State and local individuals, and groups conducting nutrition education and training;

(7) Materials which are currently available for nutrition education and training programs, and determine for each:

(i) Subject area and content covered;

(ii) Grade level;

(iii) How utilized;

(iv) Acceptability by user;

(v) Currency of materials;

(8) Any major child nutrition related health problems in each State;

(9) Existing sources of primary and secondary data, including any data that has been collected for documenting the State's nutrition education and training needs;

(10) Available documentation of the competencies of teachers in the area of nutrition education;

(11) Available documentation of the competencies of food service personnel;

(12) Problems encountered by schools and institutions in procuring nutritious food economically and in preparing nutritious appetizing meals and areas where training can assist in alleviating these problems;

(13) Problems teachers encounter in conducting effective nutrition education activities and areas where inservice training or materials can assist in alleviating these problems;

(14) Problems in dietary habits of children and areas where nutrition education may assist in positive changes;

(15) Problems encountered in coordinating the nutrition education by teachers with the meal preparation and activities of the food service facility and areas where training might alleviate these problems.

(b) The needs assessment should be an ongoing process and provide not only data on current activities but also a description of the problems and needs in each category and whether training or materials would help alleviate the identified problems.


[Note: Additional sections of Part 227 continue]

======================================================================
7 CFR PART 235 — State Admin Expense
Federal Register (current as of April 13, 2026)
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

§ 235.4 Allocation of funds to States.

(a) *Nondiscretionary SAE Funds. *For each fiscal year, FNS shall allocate the following:

(1) To each State which administers the National School Lunch, School Breakfast or Special Milk Programs an amount equal to one (1) percent of the funds expended by such State during the second preceding fiscal year under sections 4 and 11 of the National School Lunch Act, as amended, and sections 3, 4 and 17A of the Child Nutrition Act of 1966, as amended. However, the total amount allocated to any State under this paragraph shall not be less than $200,000 or the amount allocated to the State in the fiscal year ending September 30, 1981, whichever is greater. On October 1, 2008 and each October 1 thereafter, the minimum dollar amount for a fiscal year for administrative costs shall be adjusted to reflect the percentage change between the value of the index for State and local government purchases, as published by the Bureau of Economic Analysis of the Department of Commerce, for the 12-month period ending June 30 of the second preceding fiscal year, and the value of that index for the 12-month period ending June 30 of the preceding fiscal year.

(2) To each State which administers the Child and Adult Care Food Program an amount equal to the sum of: Twenty percent of the first $50,000; ten percent of the next $100,000; five percent of the next $250,000; and two and one-half percent of any remaining funds expended within the State under section 17 of the National School Lunch Act, as amended, during the second preceding fiscal year. FNS may adjust the amount of any such allocation in accordance with changes in the size of the Child and Adult Care Food Program in a State.

(3) For each of fiscal years 2005 through 2007 no State shall receive less than its fiscal year 2004 allocation for administrative costs for all child nutrition programs.

(b) *Discretionary SAE Funds. *For each fiscal year, FNS shall provide the following additional allocations:

(1) Allocate $30,000 to each State which administers the Child and Adult Care Food Program (7 CFR part 226).

(2) $30,000 to each State which administers the Food Distribution Program (part 250 of this chapter) in schools and/or institutions which participate in programs under parts 210, 220, and 226 of this chapter; provided that the State meets the training requirements set forth in § 235.11(h).

(3) Amounts derived by application of the following four-part formula to each State agency which is allocated funds under paragraph (a) of this section:

(i) One equal share of forty (40) percent of the funds designated by FNS for the reviews conducted under § 210.18 of this title.

(ii) The ratio of the number of School Food Authorities participating in the National School Lunch or Commodity School Programs under the jurisdiction of the State agency to such School Food Authorities in all States times twenty (20) percent of the funds designated by FNS for reviews conducted under § 210.18 or of this title.

(iii) The ratio of the number of free and reduced price meals served in School Food Authorities under the jurisdiction of the State agency during the second preceding fiscal year to the number of free and reduced price meals served in all States in the second preceding fiscal year times twenty (20) percent of the funds designated by FNS for reviews conducted under § 210.18 of this title.

(iv) Equal shares of twenty (20) percent of the funds designated by FNS for reviews conducted under § 210.18 of this title for each School Food Authority under the jurisdiction of the State agency participating in the National School Lunch or Commodity School Programs which has an enrollment of 40,000 or more; *Provided, however, *That for State agencies with fewer than two School Food Authorities with enrollments of 40,000 or more, an equal share shall be provided to the State agency, for either, or both, of the two largest School Food Authorities which have enrollments of more than 2,000; and *Provided, further, *That State agencies with only one School Food Authority, regardless of size, shall be provided with one equal share. For each fiscal year, the amount of State Administrative Expense Funds designated by FNS for reviews conducted under § 210.18 of this title and subject to allocation under this paragraph shall be equal to or greater than the amount designated by FNS for program management improvements for the fiscal year ending September 30, 1980.

(4) Funds which remain after the allocations required in paragraphs (a)(1), (a)(2), (b)(1), (b)(2) and (b)(3) of this section, and after any payments provided for under paragraph (c) of this section, as determined by the Secretary, to those States which administer the Food Distribution Program (part 250 of this chapter) in schools and/or institutions which participate in programs under parts 210, 220, or 226 of this chapter and to those States which administer part 226 of this chapter. The amount of funds to be allocated to each State for the Food Distribution Program for any fiscal year shall bear the same ratio to the total amount of funds made available for allocation to the State for the Food Distribution Program under this paragraph as the value of USDA donated foods delivered to the State for schools and institutions participating in programs under parts 210, 220 and 226 of this chapter during the second preceding fiscal year bears to the value of USDA donated foods delivered to all the States for such schools and institutions during the second preceding fiscal year. The amount of funds to be allocated to each State which administers the Child and Adult Care Food Program for any fiscal year shall bear the same ratio to the total amount of funds made available for allocation to all such States under this paragraph as the amount of funds allocated to each State under paragraph (a)(2) of this section bears to the amount allocated to all States under that paragraph.

(c) *SAE Funds for the Child and Adult Care Food Program. *If a State elects to have a separate State agency administer the adult care component of the Child and Adult Care Food Program, such separate State agency shall receive a pro rata share of the SAE funds allocated to the State under paragraphs (a)(2), (b)(1), and (b)(4) of this section which is equal to the ratio of funds expended by the State for the adult care component of the Child and Adult Care Food Program during the second preceding fiscal year to the funds expended by the State for the entire Child and Adult Care Food Program during the second preceding fiscal year. The remaining funds shall be allocated to the State agency administering the child care component of the Child and Adult Care Food Program.

(d) *SAE Start-up Cost Assistance for State Administration of Former ROAPs. *For any State agency which agrees to assume responsibility for the administration of food service programs in nonprofit private schools or child and adult care institutions that were previously administered by FNS, an appropriate adjustment in the administrative funds paid under this part to the State shall be made by FNS not later than the succeeding fiscal year. Such an adjustment shall consist of an amount of start-up cost assistance, negotiated with the State agency, of no less than $10,000 and not exceeding $100,000, per State.

(Sec. 14, Pub. L. 95-166, 91 Stat. 1338 (42 U.S.C. 1776); sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776); sec. 7(a), Pub. L. 95-627, 92 Stat. 3622 (42 U.S.C. 1751); Pub. L. 96-499, secs. 201 and 204, 94 Stat. 2599; secs. 805, 812, 814 and 819, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1754, 1759a, 1774 and 1776); E.O. 12372 (July 14, 1982, 47 FR 30959); sec. 401(b) Intergovernmental Cooperation Act of 1968 (31 U.S.C. 6506(c))

*[44 FR 48957, Aug. 21, 1979]*

§ 235.5 Payments to States.

(e) *SAE Funding Reduction Upon State Agency Termination of a Food Service Program. *For any State agency which terminates its administration of any food service program for which State administrative expense funds are provided under this part, a reduction in the amount of such funds, negotiated with the State agency, shall be made by FNS.

(f) *SAE Funds for ROAPs. *FNS shall have available to it the applicable amounts provided for in paragraphs (a)(1), (a)(2), and (b)(1) of this section, and part 225 of this title, when it is responsible for the administration of a program or programs within a State.

(g) *Reallocation. *Funds allotted to State agencies under this section shall be subject to the reallocation provisions of § 235.5(d).

(h) *Withholding SAE funds. *The Secretary may withhold some or all of the funds allocated to the State agency under this section if the Secretary determines that the State agency is seriously deficient in the administration of any program for which State administrative expense funds are provided under this part or in the compliance of any regulation issued pursuant to those programs. On a subsequent determination by the Secretary that State agency administration of the programs or compliance with regulations is no longer seriously deficient and is operated in an acceptable manner, the Secretary may allocate some or all of the funds withheld.

(a) *Method of payment. *FNS will specify the terms and conditions of the State agency's annual grant of SAE funds in conjunction with the grant award document and will make funds available for payment by means of a Letter of Credit issued in favor of the State agency. The total amount of a State agency's grant shall be equal to the sum of the amounts allocated to such agency under § 235.4 plus or minus any adjustments resulting from the reallocation provisions under paragraph (d) of this section plus any transfers under § 235.6(a) and/or § 235.6(c) of this part. The amount of SAE funds made available for payment to a State agency in any fiscal year shall be determined by FNS upon approval of the State agency's administrative plan under paragraph (b) of this section and any amendments to such plan under paragraph (c) of this section. Funds shall not be made available before the State agency's plan or amendment to such plan, as applicable, has been approved by FNS. However, if the plan has not been approved by October 1 of the base year, FNS may advance SAE funds to the State agency, in amounts determined appropriate by FNS, pending approval of the plan.

(b) *Administrative plan.*

(1) Each State agency shall submit, subject to FNS approval, an initial State Administrative Expense plan based upon guidance provided by FNS. This base year plan shall include:

(i) The staffing pattern for State level personnel;

Editorial Note: For FEDERAL REGISTER citations affecting § 235.4, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(ii) A budget for the forthcoming fiscal year showing projected amounts (combined SAE and State funds) by cost category;

(iii) The total amount of budgeted funds to be provided from State sources;

(iv) The total amount of budgeted funds to be provided under this part;

(v) The State agency's estimate of the total amount of budgeted funds (combined SAE and State funds) attributable to administration of the School Nutrition Programs (National School Lunch, School Breakfast and Special Milk Programs), Child and Adult Care Food Program, and/or Food Distribution Program in schools and child and adult care institutions and to each of the major activity areas of the State agency; and

(vi) The State agency's estimate of the total Child and Adult Care Food Program audit funds to be used for the forthcoming fiscal year.

(2) These activity areas shall be defined and described by the State agency in accordance with guidance issued by FNS and may include such activities as program monitoring, technical assistance, Federal reporting/claims processing, policy implementation, and allocation of foods to recipient agencies.

(3) Except in specific instances where determined necessary by FNS, State agencies shall not be required to maintain expenditure records by activity area or program. State agencies shall refer to 2 CFR part 200, subpart E and USDA implementing regulations 2 CFR part 400 and part 415.

(4) FNS shall approve a State agency's plan, or any amendment to such plan under paragraph (c) of this section, if it determines that the plan or amendment is consistent with program administrative needs and SAE requirements under this part.

(5) To the extent practicable, State agencies shall implement their approved plans (as amended). FNS shall monitor State agency implementation of the plans through management evaluations, State agency reports submitted under this part, audits, and through other available means.

(6) FNS may expand plan requirements for individual State agencies in order to address specific administrative deficiencies which affect compliance with program requirements and which have been identified by FNS through its monitoring activities.

(c) *Amendments to the administrative plan. *A State agency may amend its plan at any time to reflect changes in funding or activities, except that, if such changes are substantive as defined in the June 5, 1997 guidance, and any amendments or updates to this guidance, the State agency shall amend its plan in accordance with guidance provided by FNS. Plan amendments shall provide information in a format consistent with that provided in the State agency's plan, but shall only require FNS approval if it results in a substantive change as defined by FNS.

(d) *Reallocation of funds. *Annually, between March 1 and May 1 on a date specified by FNS, of each year, each State agency shall submit to FNS a State Administrative Expense Funds Reallocation Report (FNS-525) on the use of SAE funds. At such time, a State agency may release to FNS any funds that have been allocated, reallocated or transferred to it under this part or may request additional funds in excess of its current grant level. Based on this information or on other available information, FNS shall reallocate, as it determines appropriate, any funds allocated to State agencies in the current fiscal year which will not be obligated in the following fiscal year and any funds carried over from the prior fiscal year which remain unobligated at the end of the current fiscal year. Reallocated funds shall be made available for payment to a State agency upon approval by FNS of the State agency's amendment to the base year plan which

*[**Amdt**. 14, 51 FR 27151, July 30, 1986, as amended by **Amdt**. 17, 55 FR 1378, Jan. 16, 1990; 60 FR 15462, Mar. 24, 1995; 64 FR 50743, Sept. 20, 199; 88 FR 57858, Aug. 23, 20239]*

§ 235.6 Use of funds.

covers the reallocated funds, if applicable. Notwithstanding any other provision of this part, a State agency may, at any time, release to FNS for reallocation any funds that have been allocated, reallocated or transferred to it under this part and are not needed to implement its approved plan under this section.

(e) *Return of funds.*

(1) In Fiscal Year 1991, up to 25 per cent of the SAE funds allocated to each State agency under § 235.4 may remain available for obligation and expenditure in the second fiscal year of the grant. In subsequent fiscal years, up to 20 percent may remain available for obligation and expenditure in the second fiscal year. The maximum amount to remain available will be calculated at the time of the formula allocation by multiplying the appropriate percentage by each State agency's formula allocation as provided under § 235.4(a) through (c). At the end of the first fiscal year, the amount subject to the retention limit is determined by subtracting the amount reported by the State agency as Total Federal share of outlays and unliquidated obligations on the fourth quarter Standard Form FNS 777, Financial Status Report, from the total amount of SAE funds made available for that fiscal year (i.e., the formula allocation adjusted for any transfers or reallocations). However, funds provided under § 235.4(d) are not subject to the retention limit. Any funds in excess of the amount that remains available to each State agency shall be returned to FNS.

(2) At the end of the fiscal year following the fiscal year for which funds were allocated, each State agency shall return any funds made available which are unobligated.

(3) Return of funds by the State agency shall be made as soon as practicable, but in any event, not later than 30 days following demand by FNS.

(a) Funds allocated under this part and 7 CFR part 225 shall be used for State agency administrative costs incurred in connection with the programs governed by 7 CFR parts 210, 215, 220, 225, 226, and 250 of this title. Except as provided under § 235.6(c), funds allocated under § 235.4, paragraphs (a) and (b) and 7 CFR part 225 shall be used for the program(s) for which allocated, except that the State agency may transfer funds allocated for any such program(s) to other such program(s). Subject to the provisions of this paragraph, a State agency may also transfer SAE funds that are not needed to implement its approved plan § 235.5(b) to another State agency within the State that is eligible to receive SAE funds under this part. Up to 25 per cent of funds allocated under § 235.4(a) through (c) for Fiscal Year 1991 and up to 20 per cent of funds allocated in subsequent fiscal years to a State agency may, subject to the provisions of § 235.5 of this part, remain available for obligation and expenditure by such State agency during the following fiscal year.

(1) State administrative expense funds paid to any State may be used by State agencies to pay salaries, including employee benefits and travel expenses for administrative and supervisory personnel, for support services, for office equipment, and for staff development, particularly for monitoring and training of food service personnel at the local level in areas such as food purchasing and merchandizing. Such funds shall be used to employ additional personnel, as approved in the applicable State plan to supervise, improve management, and give technical assistance to school food authorities and to institutions in their initiation, expansion, and conduct of any programs for which the funds are made available. State agencies may also use these funds for their general

administrative expenses in connection with any such programs, including travel and related expenses. Additional personnel or part-time personnel hired are expected to meet professional qualifications and to be paid at salary scales of positions of comparable difficulty and responsibility under the State agency. Personnel may be used on a staff year equivalent basis, thus permitting new personnel and existing staff to be cross-utilized for most effective and economical operation under existing and new programs. State agencies may also use these funds for the purposes of State director annual continuing education/training as described in § 235.11(h)(3); however, costs associated with obtaining college credits to meet the hiring standards in § 235.11(h)(1) and (2) are not allowable.

(2) State Administrative Expense Funds paid to any State agency under § 235.4(b)(3) shall be available for reviews conducted under § 210.18 activities associated with carrying out actions to ensure adherence to the program performance standards.

(b) State administrative expense funds shall be used consistent with the cost principles and constraints on allowable and unallowable costs and indirect cost rates as prescribed in 2 CFR part 200, subpart E and USDA implementing regulations 2 CFR part 400 and part 415.

(c) In addition to State Administrative Expense funds made available specifically for food distribution purposes under § 235.4 (b)(2) and (b)(4), State Administrative Expense funds allocated under § 235.4 (a)(1), (a)(2), (b)(1), (b)(3), and (d), and under (b)(4) for the Child and Adult Care Food Program may be used to assist in the administration of the Food Distribution Program (7 CFR part 250) in schools and institutions which participate in programs governed by parts 210, 220, and 226 of this title when such Food Distribution Program is administered within the State agency and may also be used to pay administrative expenses of a distributing agency, when such agency is other than the State agency and is responsible for administering all or part of such Food Distribution Program.

(d) FNS shall allocate, for the purpose of providing grants on an annual basis to public entities and private nonprofit organizations participating in projects under section 18(c) of the National School Lunch Act, not more than $4,000,000 in each of Fiscal Years 1993 and 1994. Subject to the maximum allocation for such projects for each fiscal year, at the beginning of each of Fiscal Years 1993 and 1994, FNS shall allocate, from funds available under § 235.5(d) that have not otherwise been allocated to States, an amount equal to the estimates by FNS of the funds to be returned under paragraph (a) of this section, but not less than $1,000,000 in each fiscal year. To the extent that amounts returned to FNS are less than estimated or are insufficient to meet the needs of the projects, FNS may allocate amounts to meet the needs of the projects from funds available under this section that have not been otherwise allocated to States. FNS shall reallocate any of the excess funds above the minimum level in accordance with § 235.5(d).

(e) Where State Administrative Expense Funds are used to acquire personal property or services the provisions of §§ 235.9 and 235.10 must be observed.

(f) Each State agency shall adequately safeguard all assets and assure that they are used solely for authorized purposes.

(g) Whoever embezzles, willfully misapplies, steals, or obtains by fraud any funds, assets, or property provided under this part, whether received directly or indirectly from the Department, shall:

(1) If such funds, assets, or property are of a value of $100 or more, be fined not more than $25,000 or imprisoned not more than five years or both; or

(2) If such funds, assets, or property are of a value of less than $100, be fined not more than $1,000 or imprisoned not more than one year or both.

(Sec. 14, Pub. L. 95-166, 91 Stat. 1338, 1339, 1340 (42 U.S.C. 1751, 1753, 1759a, 1761, 1766, 1772-1775, 1776, 1786); sec. 7(a), Pub. L. 95-627, 92 Stat. 3621, 3622 (42 U.S.C. 1751, 1776))

*[41 FR 32405, Aug. 3, 1976]*

§ 235.7 Records and reports.

(h) Whoever receives, conceals, or retains to his use or gain funds, assets, or property provided under this part, whether received directly or indirectly from the Department, knowing such funds, assets, or property have been embezzled, willfully misapplied, stolen, or obtained by fraud, shall be subject to the same penalties provided in paragraph (h) of this section.

(i) *Full use of Federal funds. *States and State agencies must support the full use of Federal funds provided to State agencies for the administration of Child Nutrition Programs, and exclude such funds from State budget restrictions or limitations including hiring freezes, work furloughs, and travel restrictions.

(a) Each State agency shall keep records on the expenditure of State administrative expense funds provided under this part and part 225 of this title. Such records shall conform with the applicable State plan for use of State administrative expense funds. The State agency shall make such records available, upon a reasonable request, to FNS, OIG, or the U.S. Comptroller General and shall maintain current accounting records of State administrative expense funds which shall adequately identify fund authorizations, obligations, unobligated balances, assets, liabilities, outlays and income. The records may be kept in their original form or on microfilm, and shall be retained for a period of three years after the date of the submission of the final Financial Status Report, subject to the exceptions noted below:

(1) If audit findings have not been resolved, the records shall be retained beyond the three-year period as long as required for the resolution of the issues raised by the audit.

(2) Records for nonexpendable property acquired with State Administrative Expense Funds shall be retained for three years after its final disposition.

(b) Each State agency shall submit to FNS a quarterly Financial Status Report (FNS-777) on the use of State administrative expense funds provided for each fiscal year under this part. Reports shall be postmarked and/or submitted to FNS no later than 30 days after the end of each quarter of the fiscal year and, in case of funds carried over under § 235.6(a), each quarter of the following fiscal year until all such funds have been obligated and expended. Obligations shall be reported for the fiscal year in which they occur. Each State agency shall submit a final Financial Status Report for each fiscal year's State administrative expense funds. This report shall be postmarked and/or submitted to FNS no later than 30 days after the end of the fiscal year following the fiscal year for which the funds were initially made available. Based on guidance provided by FNS, each State agency shall also use the quarterly FNS-777 to report on the use of State funds provided during the fiscal year. Each State agency shall also submit an annual report containing information on School Food Authorities under agreement with the State agency to participate in the National School Lunch or Commodity School programs.

(c) State agencies operating those programs governed by parts 210, 215, 220 and 226 and those State agencies which are distributing agencies eligible for SAE funds shall participate in surveys and studies of programs authorized under the National School Lunch Act, as amended, and the Child Nutrition Act of

Editorial Note: For FEDERAL REGISTER citations affecting § 235.6, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(Sec. 14, Pub. L. 95-166, 91 Stat. 1338 (42 U.S.C. 1776); sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776); 93 Stat. 837, Pub. L. 96-108 (42 U.S.C. 1776); secs. 804, 816, 817 and 819, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1756, 1759, 1771, 1773 and 1785); sec. 7(a), Pub. L. 95-627, 92 Stat. 3622, 42 U.S.C. 1751)

*[41 FR 32405, Aug. 3, 1976, as amended at 43 FR 37173, Aug. 22, 1978; 44 FR 48958, Aug. 21, 1979; 45 FR 8563, Feb. 8, 1980; **Amdt**. 9, 48 FR 195, Jan. 4, 1983; **Amdt**. 11, 48 FR 27892, June 17, 1983; **Amdt**. 12, 49 FR 18989, May 4, 1984; **Amdt**. 14, 51 FR 27152, July 30, **1986; **Amdt**. 17, 55 FR 1378, Jan. 16, 1990; 60 FR 15463, Mar. 24, 1995; 81 FR 66493, Sept. 28, 2016]*

§ 235.8 Management evaluations and audits.

(Sec. 7, Pub. L. 95-627, 92 Stat. 3621 (42 U.S.C. 1776); secs. 804, 805, 812, 814, 816, 817 and 819, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1753, 1754, 1756, 1759, 1759a, 1771, 1773, 1774, 1776, and 1785))

*[41 FR 32405, Aug. 3, 1976, as amended at 44 FR 51186, Aug. 31, 1979; **Amdt**. 7, 47 FR 18567, Apr. 30, 1982; **Amdt**. 9, 48 FR 195, Jan. 4, 1983; 54 FR 2991, Jan. 23, 1989; 71 FR 39519, July 13, 2006; 81 FR 66493, Sept. 28, 2016]*

§ 235.9 Procurement and property management standards.

1966, as amended, when such studies and surveys are authorized by the Secretary of Agriculture. The aforementioned State agencies shall encourage individual School Food Authorities, child and adult care institutions, and distributing agencies (as applicable) to participate in such studies and surveys. Distribution of State Administrative Expense funds to an individual State agency is contingent upon that State agency's cooperation in such studies and surveys.

(a) Unless otherwise exempt, audits at the State level shall be conducted in accordance with 2 CFR part 200, subpart F and Appendix XI, Compliance Supplement and USDA implementing regulations 2 CFR part 400 and part 415.

(b) While OIG shall rely to the fullest extent feasible upon State sponsored audits, it shall, whenever considered necessary,

(1) perform on-site test audits, and

(2) review audit reports and related working papers of audits performed by or for State agencies.

(c) Each State agency shall provide FNS with full opportunity to conduct management evaluations of all operations of the State agency under this part and shall provide OIG with full opportunity to conduct audits of all such operations. Each State agency shall make available its records, including records of the receipt and expenditure of funds, upon a reasonable request by FNS, OIG, or the U.S. Comptroller General.

(a) *Requirements. *State agencies shall comply with the requirements of 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415 concerning the procurement of supplies, equipment and other services with State Administrative Expense Funds.

(b) *Contractual responsibilities. *The standards contained in 2 CFR part 200, subpart D and USDA implementing regulations 2 CFR part 400 and part 415 do not relieve the State agency of any contractual responsibilities under its contract. The State agency is the responsible authority, without recourse to FNS, regarding the settlement and satisfaction of all contractual and administrative issues arising out of procurements entered into in connection with the Program. This includes, but is not limited to source evaluation, protests, disputes, claims, or other matters of a contractual nature. Matters concerning violation of law are to be referred to the local, State or Federal authority that has proper jurisdiction.

(Pub. L. 79-396, 60 Stat. 231 (42 U.S.C. 1751); Pub. L. 89-642, 80 Stat. 885-890 (42 U.S.C. 1773); Pub. L. 91-248, 84 Stat. 207 (42 U.S.C. 1759))

*[**Amdt**. 9, 48 FR 19355, Apr. 29, 1983, as amended at 71 FR 39519, July 13, 200; 81 FR 66493, Sept. 28, 2016]*

§ 235.10 [Reserved]


[Note: Additional sections of Part 235 continue]

======================================================================
7 CFR PART 240 — Cash in Lieu
Federal Register (current as of April 13, 2026)
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

§ 240.2 Definitions.

For the purpose of this part the term:

*Act *means the National School Lunch Act, as amended.

*Child Care Food Program *means the Program authorized by section 17 of the Act.

*Commodity school *means a school that does not participate in the National School Lunch Program under part 210 of this chapter but which operates a nonprofit lunch program under agreement with the State educational agency or FNSRO and receives donated foods, or donated foods and cash or services of a value of up to 5 cents per lunch in lieu of donated foods under this part for processing and handling the foods.

*Department *means the U.S. Department of Agriculture.

*Distributing agencies *means State, Federal or private agencies which enter into agreements with the Department for the distribution of donated foods to program schools, commodity schools, and nonresidential child care institutions.

*Donated-food processing and handling expenses *means any expenses incurred by or on behalf of a commodity school for processing or other aspects of the preparation, delivery, and storage of donated foods for use in its lunch program.

*Donated foods *means foods donated, or available for donation, by the Department under any of the legislation referred to in part 250 of this chapter.

*Fiscal year *means the period of 12 months beginning October 1 of any calendar year and ending September 30 of the following calendar year.

*FNS *means the Food and Nutrition Service of the Department.

*FNSRO *means the appropriate Food and Nutrition Service Regional Office.

*National School Lunch Program *means the Program authorized by sections 4 and 11 of the Act.

*Nonprofit *means exempt from income tax under section 501(c)(3) of the Internal Revenue Code of 1954, as amended; or in the Commonwealth of Puerto Rico, certified as nonprofit by its Governor.

*Nonresidential **child care** institution *means any child care center, day care home, or sponsoring organization (as those terms are defined in part 226 of this chapter) which participates in the Child Care Food Program.

*Program school *means a school which participates in the National School Lunch Program.

*School *means

(1) an educational unit of high school grade or under except for a private school with an average yearly tuition exceeding $1,500 per child, operating under public or nonprofit private ownership in a single building or complex of buildings. The term “high school grade or under” includes classes of preprimary grade when they are conducted in a school having classes of primary or higher grade, or when they are recognized as a part of the educational system in the State, regardless of whether such preprimary grade classes are conducted in a school having classes of primary or higher grade;

(2) with the exception of residential summer camps which participate in the Summer Food Service Program for Children, Job Corps centers funded by the Department of Labor and private foster homes, any public or nonprofit private child care institution, or distinct part of such institution, which

(i) maintains children in residence,

(ii) operates principally for the care of children, and

(iii) if private, is licensed to provide residential child care services under the appropriate licensing code by the State or a subordinate level of government. The term “child care institutions” includes, but is not limited to: homes for the mentally retarded, the emotionally disturbed, the physically handicapped, and unmarried mothers and their infants; group homes; halfway houses; orphanages; temporary shelters for abused children and for runaway children; long-term care facilities for chronically ill children; and juvenile detention centers; and

(3) with respect to the Commonwealth of Puerto Rico, nonprofit child care centers certified as such by the Governor of Puerto Rico.

*School food authority *means the governing body which is responsible for the administration of one or more schools and which has the legal authority to operate a nonprofit lunch program therein.

*School year *means the period of 12 months beginning July 1 of any calendar year and ending June 30 of the following calendar year.

*Secretary *means the Secretary of Agriculture.

*Service institutions *means camps or sponsors (as those terms are defined in part 225 of this chapter) which participate in the Summer Food Service Program for Children.

*Special needs children *means children who are emotionally, mentally or physically handicapped.

*State *means any of the 50 States, the District of Columbia, the Commonwealth of Puerto Rico, the Virgin Islands, Guam, American-Samoa, the Trust Territory of the Pacific Islands, or the Commonwealth of the Northern Mariana Islands.

*State agency *means the State educational agency or such other agency of the State as has been designated by the Governor or other appropriate executive or legislative authority of the State and approved by the Department to administer, in the State, the National School Lunch Program, the Child Care Food Program, the Summer Food Service Program for Children, or nonprofit lunch programs in commodity schools.

*State educational agency *means, as the State legislature may determine,

(1) the chief State school officer (such as the State Superintendent of Public Instruction, Commissioner of Education, or similar officer), or

(2) a board of education controlling the State Department of Education.

*Summer Food Service Program for Children *means the Program authorized by section 13 of the Act.

*Tuition *means any educational expense required by the school as part of the students' educational program; not including transportation fees for commuting to and from school, and the cost of room and board. The following monies shall not be included when calculating a school's average yearly tuition per child:

(1) Academic scholarship aid from public or private organizations or entities given to students, or to schools for students, and

§ 240.3 Cash in lieu of donated foods for program schools.

*[47 FR 15982, Apr. 13, 1982, as amended at 52 FR 7267, Mar. 10, 1987; 58 FR 39120, July 22, 1993]*

§ 240.4 Cash in lieu of donated foods for nonresidential child and adult care institutions.

*[47 FR 15982, Apr. 13, 1982, as amended at 58 FR 39120, July 22, 1993]*

§ 240.5 Cash in lieu of donated foods for commodity schools.

(2) state, county or local funds provided to schools operating principally for the purpose of educating handicapped or other special needs children for whose education the State, county or local government is primarily or solely responsible. In a school which varies tuition, the average yearly tuition shall be calculated by dividing the total tuition receipts for the current school year by the total number of students enrolled for purposes of determining if the average yearly tuition exceeds $1,500 per child.

(a) Not later than June 1 of each school year, FNS shall make an estimate of the value of agricultural commodities and other foods that will be delivered to States during the school year under the food distribution regulations (7 CFR part 250) for use in program schools. If the estimated value is less than the total value of assistance authorized under section 6(e) of the Act for the National School Lunch Program, FNS shall determine the difference between the value of the foods then programmed for each State for the school year and the required value and shall pay the difference to each State agency not later than July 1 of that school year.

(b) Notwithstanding any other provision of this section, in any State in which FNS administers the National School Lunch Program in any of the schools of the State, FNS shall withhold from the funds payable to that State under this section an amount equal to the ratio of the number of lunches served in schools in which the program is administered by FNS to the total number of lunches served in all program schools in the State.

(a) For each school year any State agency may, upon application to FNS prior to the beginning of the school year, elect to receive cash in lieu of donated foods for use in nonresidential child care or adult care institutions participating in the Child and Adult Care Food Program. FNS shall pay each State agency making such election, at a minimum, an amount calculated by multiplying the number of lunches and suppers served in the State's nonresidential child and adult care institutions which meet the meal pattern requirements prescribed in the regulations for the Child and Adult Care Food Program under part 226 of this chapter by the national average value of donated food prescribed in section 6(e)(1) of the Act. However, if a State agency has elected to receive a combination of donated foods and cash, the required amount shall be reduced based upon the number of such lunches and suppers served for which the State receives donated foods.

(b) Notwithstanding any other provision of this section in any State in which FNS administers the Child Care Food Program in any nonresidential child care institution, FNS shall withhold from the funds payable to such State under this section an amount equal to the ratio of the number of lunches and suppers served in such institutions in which the program is administered by the FNS and for which cash payments are provided to the total number of lunches and suppers served in that program and for which cash in lieu of payments are received, in all nonresidential child care institutions in the State.

(a) The school food authority of a commodity school may elect

§ 240.6 Funds for States which have phased out facilities.

Notwithstanding any other provision of this part, any State which phased out its food distribution facilities prior to June 30, 1974, may, for purposes of the National School Lunch Program, the Summer Food Service Program for Children, and the Child Care Food Program, elect to receive cash payments in lieu of donated foods. Where such an election is made, FNS shall make cash payments to such State in an amount equivalent in value to the donated foods (or cash in lieu thereof) to which the State would otherwise have been entitled under section 6(e) of the Act, if it had retained its food distribution facilities, except that the amount may be based on the number of meals served in the current school year, rather than on the number of meals served in the preceding school year with a subsequent reconciliation.

*[47 FR 15982, Apr. 13, 1982, as amended at 58 FR 39120, July 22, 1993]*

§ 240.7 Payments to States.

(1) to receive cash payments in lieu of up to five cents per lunch of the value specified in § 250.4(b)(2)(ii) of this chapter to be used for donated-food processing and handling expenses, or

(2) to have such payments retained for use on its behalf by the State agency. The school food authority shall consult with commodity schools before making the election.

(b) When a school food authority makes an election regarding receipt of cash payments and the amount of any payments to be received under this paragraph, such election shall be binding on the school food authority for the school year to which the election applies.

(c) The State agency shall

(1) no later than May 14, 1982 for the school year ending June 30, 1982, and no later than August 15 of each subsequent school year, contact all school food authorities of commodity schools to learn their election regarding cash payments under this section and the amount of any such payments, and

(2) forward this information to the distributing agency and FNSRO, in accordance with § 210.14(d)(2) of this chapter.

(a) Funds to be paid to any State agency under § 240.3 of this part for disbursement to program schools shall be made available by means of United States Treasury Department checks. The State agency shall use the funds received without delay for the purpose for which issued.

(b) Funds to be paid to any State agency under § 240.4(a) for disbursement to nonresidential child care institutions and funds to be paid to any State agency under § 240.6 for disbursement to program schools, service institutions, or nonresidential child care institutions shall be made available by means of Letters of Credit issued by FNS in favor of the State agency. The State agency shall:

(1) Obtain funds needed to pay school food authorities, nonresidential child care institutions, and service institutions, as applicable through presentation by designated State Officials of a Payment Voucher on Letter of Credit (Treasury Form GFO 7578) in accordance with procedures prescribed by FNS and approved by the United States Treasury Department;

(2) Submit requests for funds on a monthly basis in such amounts as necessary to make payments with respect to meals served the previous month;

(3) Use the funds received without delay for the purpose for which drawn.

§ 240.8 Payments to program schools, service institutions, nonresidential child care institutions and commodity schools.


[Note: Additional sections of Part 240 continue]

======================================================================
7 CFR PART 245 — Eligibility
Federal Register (current as of April 13, 2026)
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

(vi) How a household may apply for benefits at any time during the school year as circumstances change;

(vii) A statement to the effect that children having parents or guardians who become unemployed are eligible for free or reduced price meals or for free milk during the period of unemployment, *Provided, *that the loss of income causes the household income during the period of unemployment to be within the eligibility criteria;

(viii) The statement: “In the operation of child feeding programs, no child will be discriminated against because of race, sex, color, national origin, age or disability;”

(ix) An explanation that Head Start enrollees and foster, homeless, migrant, and runaway children, as defined in § 245.2, are categorically eligible for free meals and free milk and their families should contact the school for more information;

(x) How a household may appeal the decision of the local educational agencywith respect to the application under the hearing procedure set forth in § 245.7. The letter or notice shall be accompanied by a copy of the application form required under § 245.6.

(xi) A statement to the effect that the Special Supplemental Nutrition Program for Women, Infants and Children (WIC) participants may be eligible for free or reduced price meals.

(2) On or about the beginning of each school year, a public release, containing the same information supplied to parents, and including both free and reduced price eligibility criteria shall be provided to the informational media, the local unemployment office, and to any major employers contemplating large layoffs in the area from which the school draws its attendance.

(Sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758); Pub. L. 79-396, 60 Stat. 231 (42 U.S.C. 1751); Pub. L. 89-642, 80 Stat. 885-880 (42 U.S.C. 1773); Pub. L. 91-248, 84 Stat. 207 (42 U.S.C. 1759))

*[**Amdt**. 8, 40 FR 57207, Dec. 8, 1975]*

§ 245.6 Application, eligibility and certification of children for free and reduced price meals and free milk.

(b) Copies of the public release shall be made available upon request to any interested persons. Any subsequent changes in a school's eligibility criteria during the school year shall be publicly announced in the same manner as the original criteria were announced.

(a) *General requirements—content of application and descriptive materials. *Each local educational agency, as defined in § 245.2, for schools participating in the National School Lunch Program, School Breakfast Program or Special Milk Program or a commodity only school, shall provide meal benefit forms for use by families in making application for free or reduced price meals or free milk for their children.

(1) *Household applications. *The State agency or local educational agency must provide a form that permits a household to apply for all children in that household who attend schools in the same local educational agency. The local educational agency must provide newly enrolled students with an application and determine eligibility promptly. The local educational agency cannot require the household to submit an application for each child attending its schools. The application shall be clear and simple in design and the information requested therein shall be limited to that required to demonstrate that the household does, or does not, meet the eligibility criteria for free or reduced price meals, respectively, or for free milk, provided by the local educational agency.

(2) *Understandable communications. *Any communication with households for eligibility determination purposes must be in an understandable and uniform format and to the maximum extent practicable, in a language that parents and guardians can understand.

(3) *Electronic availability. *In addition to the distribution of applications and descriptive materials in paper form as provided for in this section, the local educational agency may establish a system for executing household applications electronically and using electronic signatures. The electronic submission system must comply with the disclosure requirements in this section and with technical assistance and guidance provided by FNS. Descriptive materials may also be made available electronically by the local educational agency.

(4) *Transferring eligibility status. *When a student transfers to a new school district, the new local educational agency may accept the eligibility determination from the student's former local educational agency without incurring liability for the accuracy of the initial determination. As required under paragraph (c)(3) of this section, the accepting local educational agency must make changes that occur as a result of verification activities or coordinated review findings conducted in that local educational agency.

(5) *Required income information. *The information requested on the application with respect to the current income of the household must be limited to:

Editorial Note: For FEDERAL REGISTER citations affecting § 245.5, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(i) The income received by each member identified by the household member who received the income or an indication which household members had no income; and

(ii) The source of the income (such as earnings, wages, welfare, pensions, support payments, unemployment compensation, social security and other cash income). Other cash income includes cash amounts received or withdrawn from any source, including savings, investments, trust accounts, and other resources which are available to pay for a child's meals or milk.

(6) *Household members and social security numbers. *The application must require applicants to provide the names of all household members. In addition, the last four digits of the social security number of the adult household member who signs the application must be provided. If the adult member signing the application does not possess a social security number, the household must so indicate. However, if application is being made for a child(ren) who is a member of a household receiving assistance under the SNAP, or is in a FDPIR or TANF household, the application shall enable the household to provide the appropriate SNAP or TANF case number or FDPIR case number or other FDPIR identifier in lieu of names of all household members, household income information and social security number.

(7) *Adult member's signature. *The application must be signed by an adult member of the family. The application must contain clear instructions with respect to the submission of the completed application to the official or officials designated by the local educational agency to make eligibility determinations. A household must be permitted to file an application at any time during the school year. A household may, but is not required to, report any changes in income, household size or program participation during the school year.

(8) *Required statements for the application.*

(i) The application and descriptive materials must include substantially the following statements:

(A) “The Richard B. Russell National School Lunch Act requires the information on this application. You do not have to give the information, but if you do not, we cannot approve your child for free or reduced-price meals. You must include the last four digits of the social security number of the adult household member who signs the application. The last four digits of the social security number are not required when you list a Supplemental Nutrition Assistance Program (SNAP), Temporary Assistance for Needy Families (TANF) Program or Food Distribution Program on Indian Reservations (FDPIR) case number or other FDPIR identifier for your child or when you indicate that the adult household member signing the application does not have a social security number. We will use your information to determine if your child is eligible for free or reduced-price meals, and for administration and enforcement of the lunch and breakfast programs. We MAY share your eligibility information with education, health, and nutrition programs to help them evaluate, fund, or determine benefits for their programs, auditors for program reviews, and law enforcement officials to help them look into violations of program rules.”

(B) “Foster, migrant, homeless, and runaway children, and children enrolled in a Head Start program are categorically eligible for free meals and free milk. If you are completing an application for these children, contact the school for more information.”

(ii) When either the State agency or the local educational agency plans to use or disclose children's eligibility information for non-program purposes, additional information, as specified in paragraph (h) of this section, must be added to this statement. State agencies and local educational agencies are responsible for drafting the appropriate statement.

(9) *Attesting to information on the application. *The application must also include a statement, immediately above the space for signature, that the person signing the application certifies that all information furnished in the application is true and correct, that the application is being made in connection with the receipt of Federal funds, that school officials may verify the information on the application, and that deliberate misrepresentation of the information may subject the applicant to prosecution under applicable State and Federal criminal statutes. Applicants must attest to changes in information as specified in this paragraph (b), if changes are voluntarily reported in writing during the eligibility period.

(b) *Direct certification. *In lieu of requiring a household to complete the free and reduced price meal or free milk application, as specified in paragraph (a) of this section, the local educational agency must certify children as eligible for free meals or free milk in accordance with paragraph (b)(1)(i) of this section or may certify children as eligible for free meals or free milk in accordance with paragraph (b)(2) of this section. If a household also submits an application for directly certified children, the direct certification eligibility determination will take precedence.

(1) *Mandatory direct certification of children in SNAP households.*

(i) All local educational agencies conducting eligibility determinations must directly certify children who are members of a household receiving assistance under *SNAP, *as defined in § 245.2, in School Year 2008-2009, which begins on July 1, 2008, and each subsequent school year.

(ii) Schools participating only in the Special Milk Program authorized under part 215 of this chapter may directly certify children for that program but are not required to conduct direct certification with SNAP. In addition, residential child care institutions, as defined in paragraph (c) of the definition of *School *in § 210.2 of this chapter, that do not have non-residential children are also not required to conduct direct certification with SNAP.

(iii) Beginning in School Year 2012-2013, direct certification shall be conducted using a data matching technique only and letters to household for direct certification may be used only as an additional means to notify households of children's eligibility based on receipt of SNAP benefits. The last period that letters to households may be used as the primary method for direct certification is School Year 2011-12.

(iv) Each State agency must enter into an agreement with the State agency conducting eligibility determinations for *SNAP. *The agreement must specify the procedures that will be used to facilitate the direct certification of children who are members of a household receiving assistance under *SNAP, *as defined in § 245.2. The agreement must address procedures to comply with the requirements of paragraphs (b)(3) through (b)(9) of this section. Direct certification must allow for notifying parents that their children have been determined eligible for free meals or free milk, as applicable, and that no further application is required. Such agreements must address how phase-out of non-electronic matches as the primary method for conducting direct certification for SNAP will be completed by School Year 2012-2013. The agreement shall be maintained by the State agency.

(v) Local educational agencies and schools currently operating Provision 2 or Provision 3 in non-base years, or the community eligibility provision, as permitted under § 245.9, are required to conduct a data match between Supplemental Nutrition Assistance Program records and student enrollment records at least once annually. State agencies may conduct data matching on behalf of LEAs and exempt LEAs from this requirement.

(2) *Children who may be directly certified. *The local educational agency may directly certify children for free meals or free milk based on documentation received from the appropriate State or local agency that administers *FDPIR *or *TANF, *as defined in § 245.2, when that agency indicates that the children are members of a household receiving assistance under one of these programs. In addition, the local educational agency may directly certify children for free meals or free milk based on documentation from the appropriate State or local agency or other appropriate individual, as specified by FNS, that the child is a *Foster child, *a *Homeless child, *a *Migrant, *a *Runaway child, *or a *Head Start child, *as defined in § 245.2.

(3) *Frequency of direct certification contacts with SNAP.*

(i) Until School Year 2011-2012, local educational agencies must conduct direct certification activities with *SNAP *at least at the beginning of the school year.

(ii)

(A) Beginning in School Year 2011-2012, at a minimum, all local educational agencies must conduct direct certification as follows:

*(1) *At or around the beginning of the school year;

*(2) *Three months after the initial effort; and

*(3) *Six months after the initial effort.

(B) The information used shall be the most recent available.

(iii) The names of all newly enrolled children and all children not certified for free meals shall be submitted for the direct certification required in paragraph (b)(3)(ii)(B) and paragraph (b)(3)(ii)(C) of this section. Newly enrolled children must be provided with application materials in order to alleviate a delay in receipt of free meals or free milk if direct certification for these children cannot be completed promptly upon enrollment.

(iv) State agencies are encouraged to conduct direct certification more frequently to obtain information about newly enrolled children or children who may be newly certified for that program's benefits.

(4) *Frequency of direct certification with other programs. *Local educational agencies opting to conduct direct certification activities with FDPIR or TANF should conduct such activities at or around the beginning of the school year. Obtaining information about foster, homeless, migrant, or runaway children or Head Start enrollees should be done, at a minimum, at or around the beginning of the school year and when newly enrolled children or children newly eligible for those programs are being certified.

(5) *Direct certification documentation.*

(i) The required documentation for direct certification is provided in paragraph (2) of the definition of *Documentation *in § 245.2.

(ii)

(A) Beginning in School Year 2012-2013, direct certification with *SNAP *shall be conducted using a data matching technique only. Letters to households for direct certification may be used only as an additional means to notify households of children's eligibility based on receipt of SNAP benefits. The last period that letters to households may be used as the

primary method for direct certification is School Year 2011-2012. While such notices cannot be the primary method used by a state to document receipt of *SNAP, *the local educational agency shall accept such a letter if presented by a household.

(B) Letters or other documents may be used as the primary method for direct certification to document receipt of *FDPIR *or *TANF *benefits.

(iii) Individual notices from officials of eligible programs for a *Foster** child, *a *Homeless child, *a *Migrant child, *a *Runaway child, *or a *Head Start child, *as defined in § 245.2, may continue to be used. These notices are provided to school officials who must certify these children as eligible for free meals or free milk, as applicable, without further application, upon receipt of such notice.

(6) *Officials who can provide documentation for direct certification.*

(i) The local educational agency must accept documentation from officials of the State or local agency that administers SNAP, certifying that a child is a member of a household receiving assistance under *SNAP *as defined in § 245.2, or officials of the State or local agency that administers *FDPIR *or *TANF, *as defined in § 245.2, certifying that a child is a member of a household receiving assistance under one of those programs.

(ii) For a *Foster child, *as defined in § 245.2, an official document indicating the status of the child as a foster child from an appropriate State or local agency or a court where the foster child received placement may provide appropriate documentation. In the case of a child who is a *Homeless child, *as defined in § 245.2, the director of a homeless shelter or the local educational liaison for homeless children and youth may provide the appropriate documentation. The Migrant Education Program coordinator or the local educational liaison, as applicable, may provide the supporting documentation for a *Migrant child, *as defined in § 245.2. For a *Head Start child, *as defined in § 245.2, an official from that program may supply the documentation indicating enrollment in the Head Start program. Once the appropriate official has provided the direct certification documentation to the local educational agency, the child must have free benefits made available as soon as possible but no later than three operating days after the date the local educational agency receives the direct certification documentation.

(7) *Extension of eligibility to all children in a family. *If any child is identified as a member of a household receiving assistance under SNAP, FDPIR, or TANF, all children in the *Family, *as defined in § 245.2, shall be categorically eligible for free meals or free milk. This applies to children identified through direct certification or through a free and reduced price application.

(8) *Foster, Homeless, Migrant, Runaway, or Head Start Children. *To be categorically eligible as a Foster child, a Homeless child, a Migrant child, a Runaway child, or a Head Start child, the child's individual eligibility or participation for these programs shall be established. Categorical eligibility based on these programs shall not be extended to other children in the household.

(9) *Confidential nature of direct certification information. *Information about children or their households obtained through the direct certification process must be kept confidential and is subject to the limitations on disclosure of information in section 9 of the Richard B. Russell National School Lunch Act, 42 U.S.C. 1758. Therefore, information that a household is receiving benefits from SNAP, FDPIR or TANF or that a child is participating in another program which makes children categorically

eligible for free school meals or free milk must be used solely for the purposes of direct certification for determining children's eligibility for free school meals or free milk and as otherwise permitted under § 245.6(f).

(10) *Notification to families. *For children who are directly certified, local educational agencies are not required to provide application materials and notice to parents informing them of the availability of free and reduced price meal benefits, as specified in § 245.5(a), when that information is distributed by mail, individualized student packets, or other method which prevents overt identification of children eligible for direct certification.

(c) *Determination of eligibility *—

(1) *Duration of eligibility. *Except as otherwise specified in paragraph (c)(3) of this section, eligibility for free or reduced price meals, as determined through an approved application or by direct certification, must remain in effect for the entire school year and for up to 30 operating days into the subsequent school year. The local educational agency must determine household eligibility for free or reduced price meals either through direct certification or the application process at or about the beginning of the school year. The local educational agency must determine eligibility for free or reduced price meals when a household submits an application or, if feasible, through direct certification, at any time during the school year.

(2) *Use of prior year's eligibility status. *Prior to the processing of applications or the completion of direct certification procedures for the current school year, children from households with approved applications or documentation of direct certification on file from the preceding year, shall be offered reimbursable free and reduced price meals or free milk, as appropriate. The local educational agency must extend eligibility to newly enrolled children when other children in their household (as defined in § 245.2) were approved for benefits the previous year. However, applications and documentation of direct certification from the preceding year shall be used only to determine eligibility for the first 30 operating days following the first operating day at the beginning of the school year, or until a new eligibility determination is made in the current school year, whichever comes first. At the State agency's discretion, students who, in the preceding school year, attended a school operating a special assistance certification and reimbursement alternative (as permitted in § 245.9)) may be offered free reimbursable meals for up to 30 operating days or until a new eligibility determination is made in the current school year, whichever comes first.

(3) *Exceptions for year-long duration of eligibility *—

(i) *Voluntary reporting of changes. *Households are not required to report changes in circumstances during the school year, but a household may voluntarily contact the local educational agency to report any changes. If the household voluntarily reports a change in income or in program participation that would result in loss of categorical eligibility, the local educational agency may only reduce benefits if the household requests the reduction in writing, for example, by submitting a new application.

(ii) Households must attest to changes in information as specified in § 245.6(a)(9). In addition, benefits cannot be reduced by information received through other sources without the written consent of the household, except for information received through verification.

(iii) *Changes resulting from verification or administrative reviews. *The local educational agency must change the children's eligibility status when a change is required as a result of verification activities conducted under § 245.6a or as a result of a review conducted in accordance with § 210.18 of this chapter.

(4) *Calculating income. *The local educational agency must use the income information provided by the household on the application to calculate the household's total current income. When a household submits an application containing complete documentation, as defined in § 245.2, and the household's total current income is at or below the eligibility limits specified in the Income Eligibility Guidelines as defined in § 245.2, the children in that household must be approved for free or reduced price benefits, as applicable.

(5) *Categorical eligibility *—

(i) *SNAP, FDPIR, TANF *When a household submits an application containing the required SNAP, FDPIR or TANF documentation, as defined under *Documentation *in § 245.2, all children in that household shall be categorically eligible for free meals or free milk. Additionally, when the local educational agency obtains confirmation of eligibility for these programs through direct certification, all children who are identified as members of a *Family, *as defined in § 245.2, shall be categorically eligible for free meals or milk.

(ii) *Foster, homeless, migrant, **andrunaway** children and Head Start **enrollees**. *Upon receipt of *Documentation, *as defined in paragraph (2)(ii) and (2)(iv) of the definition in § 245.2, the local educational agency must approve such children for free benefits without further application.

(6) *Notice of approval *—

(i) *Income applications. *The local educational agency must notify the household of the children's eligibility and provide the eligible children the benefits to which they are entitled within 10 operating days of receiving the application from the household.

(ii) *Direct Certification. *Households approved for benefits based on information provided by the appropriate State or local agency responsible for the administration of the SNAP, FDPIR or TANF must be notified, in writing, that their children are eligible for free meals or free milk, that no application for free and reduced price school meals or free milk is required. The notice of eligibility must also inform the household that the parent or guardian must notify the local educational agency if they do not want their children to receive free benefits. However, when the parent or guardian transmits a notice of eligibility provided by the SNAP, FDPIR or TANF office, the local educational agency is not required to provide a separate notice of eligibility. The local educational agency must notify, in writing, households with children who are approved on the basis of documentation that they are *Categorically eligible, *as defined in § 245.2, that their children are eligible for free meals or free milk, and that no application is required.

(iii) *Households declining benefits. *Children from households that notify the local educational agency that they do not want free or reduced price benefits must have their benefits discontinued as soon as possible. Any notification from the household declining benefits must be documented and maintained on file, as required under paragraph (e) of this section, to substantiate the eligibility determination.

(7) *Denied applications and the notice of denial. *When the application furnished by a family is not complete or does not meet the eligibility criteria for free or reduced price benefits, the local educational agency must document and retain the reasons for ineligibility and must retain the denied application. In addition, the local educational agency must promptly provide written notice to each family denied benefits. At a minimum, this notice shall include:

(i) The reason for the denial of benefits, e.g. income in excess of allowable limits or incomplete application;

(ii) Notification of the right to appeal;

(iii) Instructions on how to appeal; and

(iv) A statement reminding parents that they may reapply for free or reduced price benefits at any time during the school year.

(8) *Appeals of denied benefits. *A family that wishes to appeal an application that was denied may do so in accordance with the procedures established by the local educational agency as required by § 245.7. However, prior to initiating the hearing procedure, the family may request a conference to provide the opportunity for the family and local educational agency officials to discuss the situation, present information, and obtain an explanation of the data submitted in the application or the decision rendered. The request for a conference shall not in any way prejudice or diminish the right to a fair hearing. The local educational authority shall promptly schedule a fair hearing, if requested.

(d) *Households that fail to apply. *After the letter to parents and the applications have been disseminated, the local educational agency may determine, based on information available to it, that a child for whom an application has not been submitted meets the local educational agency's eligibility criteria for free and reduced price meals or for free milk. In such a situation, the local educational agency shall complete and file an application for such child setting forth the basis of determining the child's eligibility. When a local educational agency has obtained a determination of individual family income and family-size data from other sources, it need not require the submission of an application for any child from a family whose income would qualify for free or reduced price meals or for free milk under the local educational agency's established criteria. In such event, the School Food Authority shall notify the family that its children are eligible for free or reduced price meals or for free milk. Nothing in this paragraph shall be deemed to provide authority for the local educational agency to make eligibility determinations or certifications by categories or groups of children.

(e) *Recordkeeping. *The local educational agency must maintain documentation substantiating eligibility determinations on file for 3 years after the date of the fiscal year to which they pertain, except that if audit findings have not been resolved, the documentation must be maintained as long as required for resolution of the issues raised by the audit.

(f) *Disclosure of children's free and **reduced price** **meal** or free milk eligibility information to education and certain other programs and individuals without parental consent. *The State agency or local educational agency, as appropriate, may disclose aggregate information about children eligible for free and reduced price meals or free milk to any party without parental notification and consent when children cannot be identified through release of the aggregate data or by means of deduction. Additionally, the State agency or local educational agency also may disclose information that identifies children eligible for free and reduced price meals or free milk to persons directly connected with the administration or enforcement of the programs and the individuals specified in this paragraph (f) without parent/guardian consent. The State agency or local educational agency that makes the free and reduced price meal or free milk eligibility determination is responsible for deciding whether to disclose children's free and reduced price meal or free milk eligibility information.

(1) *Persons authorized to receive eligibility information. *Only persons directly connected with the administration or enforcement of a program or activity listed in paragraphs (f)(2) or (f)(3) of this section may have access to children's eligibility information, without parental consent. Persons considered directly connected with administration or enforcement of a program or activity listed in paragraphs (f)(2) or (f)(3) of this section are Federal, State, or local program operators responsible for the ongoing operation of the program or activity or responsible for program compliance. Program

operators may include persons responsible for carrying out program requirements and monitoring, reviewing, auditing, or investigating the program. Program operators may include contractors, to the extent those persons have a need to know the information for program administration or enforcement. Contractors may include evaluators, auditors, and others with whom Federal or State agencies and program operators contract with to assist in the administration or enforcement of their program in their behalf.

(2) *Disclosure of children's names and eligibility status only. *The State agency or local educational agency, as appropriate, may disclose, without parental consent, children's names and eligibility status (whether they are eligible for free or reduced price meals or free milk) to persons directly connected with the administration or enforcement of:

(i) A Federal education program;

(ii) A State health program or State education program administered by the State or local education agency;

(iii) A Federal, State, or local means-tested nutrition program with eligibility standards comparable to the National School Lunch Program (i.e., food assistance programs for households with incomes at or below 185 percent of the Federal poverty level); or

(iv) A third party contractor assisting in verification of eligibility efforts by contacting households who fail to respond to requests for verification of their eligibility.

(3) *Disclosure of all eligibility information in addition to eligibility status. *In addition to children's names and eligibility status, the State agency or local educational agency, as appropriate, may disclose, without parental consent, all eligibility information obtained through the free and reduced price meals or free milk eligibility process (including all information on the application or obtained through direct certification) to:

(i) Persons directly connected with the administration or enforcement of programs authorized under the Richard B. Russell National School Lunch Act or the Child Nutrition Act of 1966. This means that all eligibility information obtained for the National School Lunch Program, School Breakfast Program or Special Milk Program may be disclosed to persons directly connected with administering or enforcing regulations under the National School Lunch or School Breakfast Programs (Parts 210 and 220, respectively, of this chapter), Child and Adult Care Food Program (Part 226 of this chapter), Summer Food Service Program (Part 225 of this chapter) and the Special Supplemental Nutrition Program for Women, Infants and Children (WIC) (Part 246 of this chapter);

(ii) The Comptroller General of the United States for purposes of audit and examination; and

(iii) Federal, State, and local law enforcement officials for the purpose of investigating any alleged violation of the programs listed in paragraphs (g)(3) and (g)(4) of this section.

(4) *Use of free and **reduced price** **meal** or free milk eligibility information by other programs other than Medicaid or the State Children's Health Insurance Program (SCHIP). *State agencies and local educational agencies may use free and reduced price meal or free milk eligibility information for administering or enforcing the National School Lunch, Special Milk or School Breakfast Programs (Parts 210, 215 and 220, respectively, of this chapter). Additionally, any other Federal, State, or local agency charged with administering or enforcing these programs may use the information for that

purpose. Individuals and programs to which children's free and reduced price meal eligibility information has been disclosed under this section may use the information only in the administration or enforcement of the receiving program. No further disclosure of the information may be made.

(g) *Disclosure of children's eligibility information to Medicaid and/or SCHIP, unless parents decline. *Children's free or reduced price meal or free milk eligibility information only may be disclosed to Medicaid or SCHIP when both the State agency and the local educational agency so elect, the parent/guardian does not decline to have their eligibility information disclosed and the other provisions described in paragraph (i) of this section are met. Provided that both the State agency and local educational agency opt to allow the disclosure of eligibility information to Medicaid and/or SCHIP, the State agency or local educational agency, as appropriate, may disclose children's names, eligibility status (whether they are eligible for free or reduced price meals or free milk), and any other eligibility information obtained through the free and reduced price meal or free milk application or obtained through direct certification to persons directly connected with the administration of Medicaid or SCHIP. Persons directly connected to the administration of Medicaid and SCHIP are State employees and persons authorized under Federal and State Medicaid and SCHIP requirements to carry out initial processing of Medicaid or SCHIP applications or to make eligibility determinations for Medicaid or SCHIP.

(1) The State agency must ensure that:

(i) The child care institution and health insurance program officials have a written agreement that requires the health insurance program agency to use the eligibility information to seek to enroll children in Medicaid and SCHIP; and

(ii) Parents/guardians are notified that their eligibility information may be disclosed to Medicaid or SCHIP and given an opportunity to decline to have their children's eligibility information disclosed, prior to any disclosure.

(2) *Use of children's free and **reduced price** meal eligibility information by Medicaid/SCHIP. *Medicaid and SCHIP agencies and health insurance program operators receiving children's free and reduced price meal or free milk eligibility information may use the information to seek to enroll children in Medicaid or SCHIP. The Medicaid and SCHIP enrollment process may include targeting and identifying children from low-income households who are potentially eligible for Medicaid or SCHIP for the purpose of seeking to enroll them in Medicaid or SCHIP. No further disclosure of the information may be made. Medicaid and SCHIP agencies and health insurance program operators also may verify children's eligibility in a program under the Child Nutrition Act of 1966 or the Richard B. Russell National School Lunch Act.

(h) *Notifying households of potential uses and disclosures of children's eligibility information. *Households must be informed that the information they provide on the free and reduced price meal or free milk application will be used to determine eligibility for free and reduced price meals or free milk and that eligibility information may be disclosed to other programs.

(1) For disclosures to programs, other than Medicaid or SCHIP, that are permitted access to children's eligibility information, without parent/guardian consent, the State agency or local educational agency, as appropriate, must notify parents/guardians at the time of application that their children's free and reduced price meal or free milk eligibility information may be disclosed. The State agency or local educational agency, as appropriate, must add substantially the following statement to the statement required under paragraph (a)(8)(i) of this section, “We may share your eligibility information with education, health, and nutrition programs to help them evaluate, fund, or determine

benefits for their programs; auditors for program reviews; and law enforcement officials to help them look into violations of program rules.” For children determined eligible through direct certification, the notice of potential disclosure may be included in the document informing parents/guardians of their children's eligibility for free meals or free milk through direct certification.

(2) For disclosure to Medicaid or SCHIP, the State agency or local educational agency, as appropriate, must notify parents/guardians that their children's free and reduced price meal or free milk eligibility information will be disclosed to Medicaid and/or SCHIP unless the parent/guardian elects not to have their information disclosed. Additionally, the State agency or local educational agency, as appropriate, must give parents/guardians an opportunity to elect not to have their information disclosed to Medicaid or SCHIP. Only the parent or guardian who is a member of the household or family for purposes of the free and reduced price meal or free milk application may decline the disclosure of eligibility information to Medicaid or SCHIP. The notification must inform parents/ guardians that they are not required to consent to the disclosure, that the information, if disclosed, will be used to identify children eligible for and to seek to enroll children in a health insurance program, and that their decision will not affect their children's eligibility for free and reduced price meals or free milk. The notification may be included in the letter/notice to parents/guardians that accompanies the free and reduced price meal or free milk application, on the application itself or in a separate notice provided to parents/guardians. The notice must give parents/guardians adequate time to respond. The State agency or local educational agency, as appropriate, must add substantially the following statement to the statement required under paragraph (a)(8)(i) of this section, “We may share your information with Medicaid or the State Children's Health Insurance Program, unless you tell us not to. The information, if disclosed, will be used to identify eligible children and seek to enroll them in Medicaid or SCHIP.” For children determined eligible through direct certification, the notice of potential disclosure and opportunity to decline the disclosure may be included in the document informing parents/guardians of their children's eligibility for free meal or free milk through direct certification.

(i) *Other disclosures. *State agencies and local educational agencies that plan to use or disclose information about children eligible for free or reduced price meals or free milk in ways not specified in this section must obtain written consent from the child's parent or guardian prior to the use or disclosure. Only a parent or guardian who is a member of the child's household for purposes of the free and reduced price meal or free milk application may give consent to the disclosure of free and reduced price meal eligibility information.

(1) The consent must identify the information that will be shared and how the information will be used.

(2) The consent statement must be signed and dated by the child's parent or guardian who is a member of the household for purposes of the free and reduced price meal or free milk application.

(3) There must be a statement informing parents and guardians that failing to sign the consent will not affect the child's eligibility for free or reduced price meals or free milk and that the individuals or programs receiving the information will not share the information with any other entity or program.

(4) Parents/guardians must be permitted to limit the consent only to those programs with which they wish to share information.

(j) *Agreements with programs/individuals receiving children's free and **reduced price** **meal** or free milk eligibility information.*

(Sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758))

*[35 FR 14065, Sept. 4, 1970]*

§ 245.6a Verification requirements.

(1) An agreement with programs or individuals receiving free and reduced price meal or free milk eligibility information is recommended for programs other than Medicaid or SCHIP. The agreement or MOU should include information similar to that required for disclosures to Medicaid and SCHIP specified in paragraph (j)(2) of this section.

(2) The State agency or school food authorities, as appropriate, must have a written agreement with the State or local agency or agencies administering Medicaid or SCHIP prior to disclosing children's free and reduced price meal or free milk eligibility information. At a minimum, the agreement must:

(i) Identify the health insurance program or health agency receiving children's eligibility information;

(ii) Describe the information that will be disclosed;

(iii) Require that the Medicaid or SCHIP agency use the information obtained and specify that the information must be used to seek to enroll children in Medicaid or SCHIP;

(iv) Require that the Medicaid or SCHIP agency describe how they will use the information obtained;

(v) Describe how the information will be protected from unauthorized uses and disclosures;

(vi) Describe the penalties for unauthorized disclosure; and

(vii) Be signed by both the Medicaid or SCHIP program or agency and the State agency or child care institution, as appropriate.

(k) *Penalties for unauthorized disclosure or misuse of information. *In accordance with section 9(b)(6)(C) of the Richard B. Russell National School Lunch Act (42 U.S.C. 1758(b)(6)(C)), any individual who publishes, divulges, discloses or makes known in any manner, or to any extent not authorized by statute or this section, any information obtained under this section will be fined not more than $1,000 or imprisoned for up to 1 year, or both.

(a) *Definitions *—

(1) *Eligible programs. *For the purposes of this section, the following programs qualify as programs for which a case number may be provided in lieu of income information and that may be used for direct verification purposes:

(i) *SNAP, *as defined in 245.2;

(ii) The Food Distribution Program on Indian Reservations (FDPIR) as defined in § 245.2; and

(iii) A State program funded under the program of block grants to States for temporary assistance for needy families (TANF) as defined in § 245.2.

Editorial Note: For FEDERAL REGISTER citations affecting § 245.6, see the List of CFR Sections Affected, which

appears in the Finding Aids section of the printed volume and at *www.govinfo.gov.*

(2) *Error prone application. *For the purposes of this section, “error prone application” means an approved household application that indicates monthly income within $100 or annual income within $1,200 of the applicable income eligibility limit for free or for reduced meals.

(3) *Non-response rate. *For the purposes of this section, “non-response rate” means the percentage of approved household applications for which verification information was not obtained by the local educational agency after verification was attempted. The non-response rate is reported on the FNS-742 in accordance with paragraph (h) of this section.

(4) *Official poverty line. *For the purposes of this section, “official poverty line” means that described in section 1902(l)(2)(A) of the Social Security Act (42 U.S.C. 1396a(l)(2)(A)).

(5) *Sample size. *For the purposes of this section, “sample size” means the number of approved applications that a local educational agency is required to verify based on the number of approved applications on file as of October 1 of the current school year.

(6) *School year. *For the purposes of this section, a school year means a period of 12 calendar months beginning July 1 of any year and ending June 30 of the following year.

(7) *Sources of information. *For the purposes of this section, sources of information for verification may include written evidence, collateral contacts, and systems of records as follows:

(i) Written evidence shall be used as the primary source of information for verification. Written evidence includes written confirmation of a household's circumstances, such as wage stubs, award letters, and letters from employers. Whenever written evidence is insufficient to confirm income information on the application or current eligibility, the local educational agency may require collateral contacts.

(ii) Collateral contacts are verbal confirmations of a household's circumstances by a person outside of the household. The collateral contact may be made in person or by phone. The verifying official may select a collateral contact if the household fails to designate one or designates one which is unacceptable to the verifying official. If the verifying official designates a collateral contact, the contact shall not be made without providing written or oral notice to the household. At the time of this notice, the household shall be informed that it may consent to the contact or provide acceptable documentation in another form. If the household refuses to choose one of these options, its eligibility shall be terminated in accordance with the normal procedures for failure to cooperate with verification efforts. Collateral contacts could include employers, social service agencies, and migrant agencies.

(iii) Agency records to which the State agency or local educational agency may have access are not considered collateral contacts. Information concerning income, household size, or SNAP, FDPIR, or TANF eligibility, maintained by other government agencies to which the State agency, the local educational agency, or school can legally gain access, may be used to confirm a household's income, size, or receipt of benefits. Information may also be obtained from individuals or agencies serving foster, homeless, migrant, or runaway children, as defined in § 245.2. Agency records may be used for verification conducted after the household has been notified of its selection for verification or for the direct verification procedures in paragraph (g) of this section.

(iv) Households which dispute the validity of income information acquired through collateral contacts or a system of records shall be given the opportunity to provide other documentation.

(b) *Deadline and extensions for local educational agencies *—

(1) *Deadline. *The local education agency must complete the verification efforts specified in paragraph (c) of this section not later than November 15 of each school year.

(2) *Deadline extensions.*

(i) The local educational agency may request an extension of the November 15 deadline, in writing, from the State agency. The State agency may approve an extension up to December 15 of the current school year due to natural disaster, civil disorder, strike or other circumstances that prevent the local educational agency from timely completion of verification activities.

(ii) In the case of natural disaster, civil disorder or other local conditions, USDA may substitute alternatives for the verification deadline in paragraph (b)(1) of this section.

(3) *Beginning verification activities. *The local educational agency may conduct verification activity once it begins the application approval process for the current school year and has approved applications on file. However, the final required sample size must be based on the number of approved applications on file as of October 1.

(c) *Verification requirement *—

(1) *General. *The local educational agency must verify eligibility of children in a sample of household applications approved for free and reduced price meal benefits for that school year.

(i) A State may, with the written approval of FNS, assume responsibility for complying with the verification requirements of this section on behalf of its local educational agencies. When assuming such responsibility, States may qualify, if approved by FNS, to use one of the alternative sample sizes provided for in paragraph (c)(4) of this section if qualified under paragraph (d) of this section.

(ii) An application must be approved if it contains the essential documentation specified in the definition of *Documentation *in § 245.2 and, if applicable, the household meets the income eligibility criteria for free or reduced price benefits. Verification efforts must not delay the approval of applications.

(2) *Exceptions from verification. *Verification is not required in residential child care institutions; in schools in which FNS has approved special cash assistance claims based on economic statistics regarding per capita income; or in schools in which all children are served with no separate charge for food service and no special cash assistance is claimed. Local educational agencies in which all schools participate in the special assistance certification and reimbursement alternatives specified in § 245.9 shall meet the verification requirement only in those years in which applications are taken for all children in attendance. Verification of eligibility is not required of households if all children in the household are determined eligible based on documentation provided by the State or local agency responsible for the administration of the SNAP, FDPIR or TANF or if all children in the household are determined to be foster, homeless, migrant, or runaway, as defined in § 245.2.

(3) *Standard sample size. *Unless eligible for an alternative sample size under paragraph (d) of this section, the sample size for each local educational agency shall equal the lesser of:

(i) Three (3) percent of all applications approved by the local educational agency for the school year, as of October 1 of the school year, selected from error prone applications; or

(ii) 3,000 error prone applications approved by the local educational agency for the school year, as of October 1 of the school year.

(iii) Local educational agencies shall not exceed the standard sample size in paragraphs (c)(3)(i) or (c)(3)(ii) of this section, as applicable, and, unless eligible for one of the alternative sample sizes provided in paragraph (c)(4) of this section, the local educational agency shall not use a smaller sample size than those in paragraphs (c)(3)(i) or (c)(3)(ii) of this section, as applicable.

(iv) If the number of error-prone applications exceeds the required sample size, the local educational agency shall select the required sample at random, i.e., each application has an equal chance of being selected, from the total number of error-prone applications.

(4) *Alternative sample sizes. *If eligible under paragraph (d) of this section for an alternative sample size, the local educational agency may use one of the following alternative sample sizes:

(i) *Alternative One. *The sample size shall equal the lesser of:

(A) 3,000 of all applications selected at random from applications approved by the local educational agency as of October 1 of the school year; or

(B) Three (3) percent of all applications selected at random from applications approved by the local educational agency as of October 1 of the school year.

(ii) *Alternative Two. *The sample size shall equal the lesser of the sum of:

(A) 1,000 of all applications approved by the local educational agency as of October 1 of the school year, selected from error prone applications or

(B) One (1) percent of all applications approved by the local educational agency as of October 1 of the school year, selected from error prone applications PLUS

(C) The lesser of:

*(1) *500 applications approved by the local educational agency as of October 1 of the school year that provide a case number in lieu of income information showing participation in an eligible program as defined in paragraph (a)(1) of this section; or

*(2) *One-half (1⁄2) of one (1) percent of applications approved by the local educational agency as of October 1 of the school year that provide a case number in lieu of income information showing participation in an eligible program as defined in paragraph (a)(1) of this section.

(5) *Completing the sample size. *When there are an insufficient number of error prone applications or applications with case number to meet the sample sizes provided for in paragraphs (c)(3) or (c)(4) of this section, the local educational agency shall select, at random, additional approved applications to comply with the specified sample size requirements.

(6) *Local conditions. *In the case of natural disaster, civil disorder, strike or other local conditions as determined by FNS, FNS may substitute alternatives for the sample size and sample selection criteria in paragraphs (c)(3) and (c)(4) of this section.

(7) *Verification for cause. *In addition to the required verification sample, local educational agencies must verify any questionable application and should, on a case-by-case basis, verify any application for cause such as an application on which a household reports zero income or when the local

educational agency is aware of additional income or persons in the household. Any application verified for cause is not considered part of the required sample size. If the local educational agency verifies a household's application for cause, all verification procedures in this section must be followed.

(d) *Eligibility for alternative sample sizes *—

(1) *State agency oversight. *At a minimum, the State agency shall establish a procedure for local educational agencies to designate use of an alternative sample size and may set a deadline for such notification. The State agency may also establish criteria for reviewing and approving the use of an alternative sample size, including deadlines for submissions.

(2) *Lowered non-response rate. *Any local educational agency is eligible to use one of the alternative sample sizes in paragraph (c)(4) of this section for any school year when the non-response rate for the preceding school year is less than twenty percent.

(3) *Improved non-response rate. *A local educational agency with more than 20,000 children approved by application as eligible for free or reduced price meals as of October 1 of the school year is eligible to use one of the alternative sample sizes in paragraph (c)(4) of this section for any school year when the non-response rate for the preceding school year is at least ten percent below the non-response rate for the second preceding school year.

(4) *Continuing eligibility for alternative sample sizes. *The local educational agency must annually determine if it is eligible to use one of the alternative sample sizes provided in paragraph (c)(4) of this section. If qualified, the local educational agency shall contact the State agency in accordance with procedures established by the State agency under paragraph (d)(1) of this section.

(e) *Activities prior to household notification *—

(1) *Confirmation of a household's initial eligibility.*

(i) Prior to conducting any other verification activity, an individual, other than the individual who made the initial eligibility determination, shall review for accuracy each approved application selected for verification to ensure that the initial determination was correct. If the initial determination was correct, the local educational agency shall verify the approved application. If the initial determination was incorrect, the local educational agency must:

(A) If the eligibility status changes from reduced price to free, make the increased benefits immediately available and notify the household of the change in benefits; the local educational agency will then verify the application;

(B) If the eligibility status changes from free to reduced price, first verify the application and then notify the household of the correct eligibility status after verification is completed and, if required, send the household a notice of adverse action in accordance with paragraph (j) of this section; or

(C) If the eligibility status changes from free or reduced price to paid, send the household a notice of adverse action in accordance with paragraph (j) of this section and do not conduct verification on this application and select a similar application (for example, another error-prone application) to replace it.

(ii) The requirements in paragraph (e)(1)(i) of this section are waived if the local educational agency is using a technology-based system that demonstrates a high level of accuracy in processing an initial eligibility determination based on the income eligibility guidelines for the National School Lunch Program. Any local educational agency that conducts a confirmation review of all applications at the time of certification meets this requirement. The State agency may request documentation to support the accuracy of the local educational agency's system. If the State agency determines that the technology-based system is inadequate, it may require that the local educational agency conduct a confirmation review of each application selected for verification.

(2) *Replacing applications. *The local educational agency may, on a case-by-case basis, replace up to five percent of applications selected and confirmed for verification. Applications may be replaced when the local educational agency determines that the household would be unable to satisfactorily respond to the verification request. Any application removed shall be replaced with another approved application selected on the same basis (i.e., an error-prone application must be substituted for a withdrawn error-prone application).

(f) *Verification procedures and assistance for households *—

(1) *Notification of selection. *Other than households verified through the direct verification process in paragraph (g) of this section, households selected for verification must be notified in writing that their applications were selected for verification. The written statement must include a telephone number for assistance as required in paragraph (f)(5) of this section. Any communications with households concerning verification must be in an understandable and uniform format and, to the maximum extent practicable, in a language that parents and guardians can understand. These households must be advised of the type of information or documents the school accepts. Households selected for verification must be informed that:

(i) They are required to submit the requested information to verify eligibility for free or reduced-price meals, by the date determined by the local educational agency.

(ii) They may, instead, submit proof that the children receive SNAP, FDPIR, or TANF assistance, as explained in paragraph (f)(3) of this section.

(iii) They may, instead, request that the local educational agency contact the appropriate officials to confirm that their children are foster, homeless, migrant, or runaway, as defined in § 245.2.

(iv) Failure to cooperate with verification efforts will result in the termination of benefits.

(2) *Documentation timeframe. *Households selected and notified of their selection for verification must provide documentation of income. The documentation must indicate the source, amount and frequency of all income and can be for any point in time between the month prior to application for school meal benefits and the time the household is requested to provide income documentation.

(3) *SNAP FDPIR or TANF recipients. *On applications where households have furnished SNAP or TANF case numbers or FDPIR case numbers or other FDPIR identifiers, verification shall be accomplished by confirming with the SNAP, FDPIR, or TANF office that at least one child who is eligible because a case number was furnished, is a member of a household participating in one of the eligible programs in paragraph (a)(1) of this section. The household may also provide a copy of “Notice of Eligibility” for the SNAP, FDPIR or the TANF Program or equivalent official documentation issued by the SNAP, FDPIR or TANF office which confirms that at least one child who is eligible because a case number was provided is a member of a household receiving assistance under the SNAP, FDPIR or

the TANF program. An identification card for these programs is not acceptable as verification unless it contains an expiration date. If it is not established that at least one child is a member of a household receiving assistance under the SNAP, FDPIR or the TANF program (in accordance with the timeframe in paragraph (f)(2) of this section), the procedures for adverse action specified in paragraph (j) of this section must be followed.

(4) *Household cooperation. *If a household refuses to cooperate with efforts to verify, eligibility for free or reduced price benefits shall be terminated in accordance with paragraph (j) of this section. Households which refuse to complete the verification process and which are consequently determined ineligible for such benefits shall be counted toward meeting the local educational agency's required sample of verified applications.

(5) *Telephone assistance. *The local educational agency shall provide a telephone number to households selected for verification to call free of charge to obtain information about the verification process. The telephone number must be prominently displayed on the letter to households selected for verification.

(6) *Followup** attempts. *The local educational agency shall make at least one attempt to contact any household that does not respond to a verification request. The attempt may be through a telephone call, e-mail, mail or in person and must be documented by the local educational agency. Non-response to the initial request for verification includes no response and incomplete or ambiguous responses that do not permit the local educational agency to resolve the children's eligibility for free or reduced price meal and milk benefits. The local educational agency may contract with another entity to conduct followup activity in accordance with § 210.21 of this chapter, the use and disclosure of information requirements of the Richard B. Russell National School Lunch Act and this section.

(7) *Eligibility changes. *Based on the verification activities, the local educational agency shall make appropriate modifications to the eligibility determinations made initially. The local educational agency must notify the household of any change. Households must be notified of any reduction in benefits in accordance with paragraph (j) of this section. Households with reduced benefits or that are longer eligible for free or reduced price meals must be notified of their right to reapply at any time with documentation of income or participation in one of the eligible programs in paragraph (a)(1) of this section.

(g) *Direct verification. *Local educational agencies may conduct direct verification activities with the eligible programs defined in paragraph (a)(1) of this section and with the public agency that administers the State plan for medical assistance under title XIX of the Social Security Act (42 U.S.C. 1396 *et seq.), (Medicaid), *and under title XXI of the Social Security Act (42 U.S.C. 1397aa *et seq.), the State Children's Health *Insurance Program (SCHIP) as defined in § 245.2. Records from the public agency may be used to verify income and program participation. The public agency's records are subject to the timeframe in paragraph (g)(5) of this section. Direct verification must be conducted prior to contacting the household for documentation.

(1) *Names submitted. *The local educational agency must only submit the names of school children certified for free or reduced price meal benefits or free milk to the agency administering an eligible program, the Medicaid program or the SCHIP program. Names and other identifiers of adult or non-school children must not be submitted for direct verification purposes.

(2) *Eligible programs. *If information obtained through direct verification of an application for free or reduced price meal benefits indicates a child is participating in one of the eligible programs in paragraph (a)(1) of this section, no additional verification is required.

(3) *States with Medicaid Income Limits of 133%. *In States in which the income eligibility limit applied in the Medicaid program or in SCHIP is not more than 133% of the official poverty line or in States that otherwise identify households that have income that is not more than 133% of the official poverty line, records from these agencies may be used to verify eligibility. If information obtained through direct verification with these programs verifies the household's eligibility status, no additional verification is required.

(4) *States with Medicaid Income Limits between 133%-185%. *In States in which the income eligibility limit applied in the Medicaid program or in SCHIP exceeds 133% of the official poverty line, direct verification information must include either the percentage of the official poverty line upon which the applicant's Medicaid participation is based or Medicaid income and Medicaid household size in order to determine that the applicant is either at or below 133% of the Federal poverty line, or is between 133% and 185% of the Federal poverty line. Verification for children approved for free meals is complete if Medicaid data indicates that the percentage is at or below 133% of the Federal poverty line. Verification for children approved for reduced price meals is complete if Medicaid data indicates that the percentage is at or below 185% of the Federal poverty line. If information obtained through direct verification with these programs verifies eligibility status, no additional verification is required.

(5) *Documentation timeframe. *For the purposes of direct verification, documentation must be the most recent available but such documentation must indicate eligibility for participation or income within the 180-day period ending on the date of application. In addition, local educational agencies may use documentation, which must be within the 180-day period ending on the date of application, for any one month or for all months in the period from the month prior to application through the month direct verification is conducted. The information provided only needs to indicate eligibility for participation in the program at that point in time, not that the child was certified for that program's benefits within the 180-day period.

(6) *Incomplete information. *If it is the information provided by the public agency does not verify eligibility, the local educational agency must conduct verification in accordance with paragraph (f) of this section. In addition, households must be able to dispute the validity of income information acquired through direct verification and shall be given the opportunity to provide other documentation.

(h) *Verification reporting and recordkeeping requirements. *By February 1, each local educational agency must report information related to its annual statutorily required verification activity, which excludes verification conducted in accordance with paragraph (c)(7) of this section, to the State agency in accordance with guidelines provided by FNS. These required data elements will be specified by FNS. Contingent upon new funding to support this purpose, FNS will also require each local educational agency to collect and report the number of students who were terminated as a result of verification but who were reinstated as of February 15th. The first report containing this data element would be required in the school year beginning July 1, 2005 and each school year thereafter. State agencies may develop paper or electronic reporting forms to collect this data from local educational agencies, as long as all required data elements are collected from each local educational agency. Local educational agencies shall retain copies of the information reported under this section and all supporting documents for a minimum of 3 years. All verified applications must be readily retrievable on an individual school basis and include all documents submitted by the household for the purpose of confirming eligibility, reproductions of those documents, or

(Sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758))

*[48 FR 12510, Mar. 25, 1983, as amended at 49 FR 26034, June 26, 1984; 52 FR 19275, May 22, 1987; 55 FR 19240, May 9, 1990; 56 FR 32950, July 17, 1991; 56 FR 33861, July 24, 1991; 64 FR 50744, Sept. 20, 1999; 64 FR 72474, Dec. 28, 1999; 66 FR 48328, Sept. 20, 2001; 68 FR 53489, Sept. 11, 2003; 72 FR 63795, Nov. 13, 2007; 73 FR 76859, Dec. 18, 2008; 76 FR 22802, Apr. 25, 2011; 78 FR 12230, Feb. 22, 2013; 78 FR 13453, Feb. 28, 2013]*

§ 245.7 Hearing procedure for families and local educational agencies.

annotations made by the determining official which indicate which documents were submitted by the household and the date of submission. All relevant correspondence between the households selected for verification and the school or local educational agency must be retained. Local educational agencies are encouraged to collect and report any or all verification data elements before the required dates.

(i) *Nondiscrimination. *The verification efforts shall be applied without regard to race, sex, color, national origin, age, or disability.

(j) *Adverse action. *If verification activities fail to confirm eligibility for free or reduced price benefits or should the household fail to cooperate with verification efforts, the school or local educational agencyshall reduce or terminate benefits, as applicable, as follows: Ten days advance notification shall be provided to households that are to receive a reduction or termination of benefits, prior to the actual reduction or termination. The first day of the 10 day advance notice period shall be the day the notice is sent. The notice shall advise the household of:

(1) The change;

(2) The reasons for the change;

(3) Notification of the right to appeal and when the appeal must be filed to ensure continued benefits while awaiting a hearing and decision;

(4) Instructions on how to appeal; and

(5) The right to reapply at any time during the school year. The reasons for ineligibility shall be properly documented and retained on file at the local educational agency.

(a) Each local educational agency of a school participating in the National School Lunch Program, School Breakfast Program or the Special Milk Program or of a commodity only school shall establish a hearing procedure under which:

(1) A family can appeal from a decision made by the local educational agency with respect to an application the family has made for free or reduced price meals or for free milk, and

(2) The local educational agency can challenge the continued eligibility of any child for a free or reduced price meal or for free milk. The hearing procedure shall provide for both the family and the local educational agency:

(i) A simple, publicly announced method to make an oral or written request for a hearing;

(ii) An opportunity to be assisted or represented by an attorney or other person;

(iii) An opportunity to examine, prior to and during the hearing, any documents and records presented to support the decision under appeal;

(44 U.S.C. 3506; sec. 803, Pub. L. 97-35, 95 Stat. 521-535 (42 U.S.C. 1758))

*[**Amdt**. 6, 39 FR 30339, Aug. 22, 1974, as amended at 47 FR 746, Jan. 7, 1982; 48 FR 12511, Mar. 25, 1983; 72 FR 63796, Nov. 13, 2007]*

§ 245.8 Nondiscrimination practices for children eligible to receive free and reduced price meals and free milk.

School Food Authorities and local educational agencies of schools participating in the National School Lunch Program, School Breakfast Program or Special Milk Program or of commodity only schools shall take all actions that are necessary to insure compliance with the following nondiscrimination practices for children eligible to receive free and reduced price meals or free milk:

(iv) That the hearing shall be held with reasonable promptness and convenience, and that adequate notice shall be given as to the time and place of the hearing;

(v) An opportunity to present oral or documentary evidence and arguments supporting a position without undue interference;

(vi) An opportunity to question or refute any testimony or other evidence and to confront and cross-examine any adverse witnesses;

(vii) That the hearing shall be conducted and the decision made by a hearing official who did not participate in making the decision under appeal or in any previously held conference;

(viii) That the decision of the hearing official shall be based on the oral and documentary evidence presented at the hearing and made a part of the hearing record;

(ix) That the parties concerned and any designated representative shall be notified in writing of the decision of the hearing official;

(x) That a written record shall be prepared with respect to each hearing, which shall include the challenge or the decision under appeal, any documentary evidence and a summary of any oral testimony presented at the hearing, the decision of the hearing official, including the reasons therefor, and a copy of the notification to the parties concerned of the decision of the hearing official; and

(xi) That the written record of each hearing shall be preserved for a period of 3 years and shall be available for examination by the parties concerned or their representatives at any reasonable time and place during that period.

(b) *Continuation of benefits. *When a household disagrees with an adverse action which affects its benefits and requests a fair hearing, benefits shall be continued as follows while the household awaits the hearing and decision:

(1) Households that have been approved for benefits and that are subject to a reduction or termination of benefits later in the same school year shall receive continued benefits if they appeal the adverse action within the 10 day advance notice period; and

(2) Households that are denied benefits upon application shall not receive benefits.

(a) The names of the children shall not be published, posted or announced in any manner;

*[**Amdt**. 6, 39 FR 30339, Aug. 22, 1974, as amended at 72 FR 63796, Nov. 13, 2007]*

§ 245.9 Special assistance certification and reimbursement alternatives.

(b) There shall be no overt identification of any of the children by the use of special tokens or tickets or by any other means;

(c) The children shall not be required to work for their meals or milk;

(d) The children shall not be required to use a separate dining area, go through a separate serving line, enter the dining area through a separate entrance or consume their meals or milk at a different time;

(e) When more than one lunch or breakfast or type of milk is offered which meets the requirements prescribed in § 210.10, § 220.8 or the definition of *Milk *in § 215.2 of this chapter, the children shall have the same choice of meals or milk that is available to those children who pay the full price for their meal or milk.

(a) *Provision 1. *A Local educational agency of a school having at least 80 percent of its enrolled children determined eligible for free or reduced price meals may, at its option, authorize the school to reduce annual certification and public notification for those children eligible for *free meals *to once every two consecutive school years. This alternative shall be known as provision 1 and the following requirements shall apply:

(1) A Local educational agency of a school operating under provision 1 requirements shall publicly notify in accordance with § 245.5, parents of enrolled children who are receiving free meals once every two consecutive school years, and shall publicly notify in accordance with § 245.5, parents of all other enrolled children on an annual basis.

(2) The 80 percent enrollment eligibility for this alternative shall be based on the school's March enrollment data of the previous school year, or on other comparable data.

(3) A Local educational agency of a school operating under provision 1, shall count the number of free, reduced price and paid meals served to children in that school as the basis for monthly reimbursement claims.

(b) *Provision 2. *A local educational agency may certify children for free and reduced price meals for up to 4 consecutive school years in the schools which serve meals at no charge to all enrolled children; provided that public notification and eligibility determinations are in accordance with §§ 245.5 and 245.3, respectively, during the base year as defined in paragraph (b)(6) of this section. The Provision 2 base year is the first year, and is included in the 4-year cycle. The following requirements apply:

(1) *Meals at no charge. *Participating schools must serve reimbursable meals, as determined by a point of service observation, or as otherwise approved under part 210 of this chapter, to all participating children at no charge.

(2) *Cost differential. *The local educational agency of a school participating in Provision 2 must pay, with funds from non-Federal sources, the difference between the cost of serving lunches and/or breakfasts at no charge to all participating children and Federal reimbursement.

(3) *Meal counts. *During the base year, even though meals are served to participating students at no charge, schools must take daily meal counts of reimbursable student meals by type (free, reduced price, and paid) at the point of service, or as otherwise approved under part 210 of this chapter. During the non-base years, participating Provision 2 schools must take total daily meal counts (not

by type) of reimbursable student meals at the point of service, or as otherwise approved under part 210 of this chapter. For the purpose of calculating reimbursement claims in the non-base years, local educational agencies must establish school specific monthly or annual claiming percentages, as follows:

(i) *Monthly percentages. *In any given Provision 2 school, the monthly meal counts of the actual number of meals served by type (free, reduced price, and paid) during the base year must be converted to monthly percentages for each meal type. For example, the free lunch percentage is derived by dividing the monthly total number of reimbursable free lunches served by the total number of reimbursable lunches served in the same month (free, reduced price and paid). The percentages for the reduced price and paid lunches are calculated using the same method as the above example for free lunches. These three percentages, calculated at the end of each month of the first school year, are multiplied by the corresponding monthly lunch count total of all reimbursable lunches served in the second, third and fourth consecutive school years, and applicable extensions, in order to calculate reimbursement claims for free, reduced price and paid lunches each month. The free, reduced price and paid percentages for breakfasts and, as applicable, snacks, are calculated using the same method; or

(ii) *Annual percentages. *In any given Provision 2 school, the actual number of all reimbursable meals served by type (free, reduced price, and paid) during the base year must be converted to an annual percentage for each meal type. For example, the free lunch percentage is derived by dividing the annual total number of reimbursable free lunches served by the annual total number of reimbursable lunches served for all meal types (free, reduced price and paid). The percentages for the reduced price and paid lunches are calculated using the same method as the above example for free lunches. These three percentages, calculated at the end of the base year, are multiplied by the total monthly lunch count of all reimbursable lunches served in each month of the second, third and fourth consecutive school years, and applicable extensions, in order to calculate reimbursement claims for free, reduced price and paid lunches each month. The free, reduced price and paid percentages for breakfasts and, as applicable, snacks, are calculated using the same method for each type of meal service.

(4) *Local educational agency claims **review** process. *During the Provision 2 base year (not including a streamlined base year under paragraph (c)(2)(iii) of this section), local educational agencies are required to review the lunch count data for each school under its jurisdiction to ensure the accuracy of the monthly Claim for Reimbursement in accordance with § 210.8(a)(2) of this chapter. During non-base years and streamlined base years, local educational agencies must compare each Provision 2 school's total daily meal counts to the school's total enrollment, adjusted by an attendance factor. The local educational agency must promptly follow-up as specified in § 210.8(a)(4) of this chapter when the claims review suggests the likelihood of lunch count problems. When a school elects to operate Provision 2 only in the School Breakfast Program, local educational agencies must continue to comply with the claims review requirements of § 210.8(a)(2) of this chapter for the National School Lunch Program.

(5) *Verification. *Except as otherwise specified in § 245.6a(a)(5), local educational agencies are required to conduct verification in accordance with § 245.6a. When a school elects to participate under Provision 2 or for all of the meal programs in which it participates (breakfast 7 CFR part 220 and/or lunch 7 CFR part 210), the applications from that school are excluded from the local educational agency's required verification sample size and are exempt from verification during non-base years.

(6) *Base year. *For purposes of this paragraph (b), the term *base year *means the last school year for which eligibility determinations were made and meal counts by type were taken or the school year in which a school conducted a streamlined base year as authorized under paragraph (c)(2)(iii) of this section. Schools shall offer reimbursable meals to all students at no charge during the Provision 2 base year except as otherwise specified in paragraph (b)(6)(ii) of this section.

(i) *Duration of the base year. *The base year must begin at the start of the school year or as otherwise specified in paragraph (b)(6)(ii) of this section.

(ii) *Delayed implementation. *At State agency discretion, schools may delay implementation of Provision 2 for a period of time not to exceed the first claiming period of the school year in which the base year is established. Schools implementing this option may conduct standard meal counting and claiming procedures, including charging students eligible for reduced price and paid meals, during the first claiming period of the school year. Such schools must submit claims reflecting the actual number of meals served by type. In subsequent years, such schools shall convert the actual number of reimbursable meals served by type (free, reduced price and paid) during the remaining claiming periods of the base year, in which meals were served at no charge to all participating students, to an annual percentage for each type of meal. The annual claiming percentages must be applied to the total number of reimbursable meals served during the first claiming period in all non-base years of operation for that cycle and any extensions.

(c) *Extension of Provision 2. *At the end of the initial cycle, and each subsequent 4-year cycle, the State agency may allow a school to continue under Provision 2 for another 4 years using the claiming percentages calculated during the most recent base year if the local educational agency can establish, through available and approved socioeconomic data, that the income level of the school's population, as adjusted for inflation, has remained stable, declined or has had only negligible improvement since the base year.

(1) *Extension criteria. *Local educational agencies must submit to the State agency available and approved socioeconomic data to establish whether the income level of a school's population, as adjusted for inflation, remained constant with the income level of the most recent base year.

(i) *Available and approved sources of socioeconomic data. *Pre-approved sources of socioeconomic data which may be used by local educational agencies to establish the income level of the school's population are: local data collected by the city or county zoning and economic planning office; unemployment data; local SNAP certification data including direct certification; Food Distribution Program on Indian Reservations data; statistical sampling of the school's population using the application or equivalent income measurement process; and, Temporary Assistance for Needy Families data (provided that the eligibility standards were the same or more restrictive in the base year as the current year with allowance for inflation). To grant an extension using pre-approved socioeconomic data sources, State agencies must review and evaluate the socioeconomic data submitted by the local educational agency to ensure that it is reflective of the school's population, provides equivalent data for both the base year and the last year of the current cycle, and demonstrates that the income level of the school's population, as adjusted for inflation, has remained stable, declined or had only negligible improvement. If the local educational agency wants to establish the income level of the school's population using alternate sources of socioeconomic data, the use of such data must be approved by the Food and Nutrition Service. Data from alternate sources must be reflective of the school's population, be equivalent data for both the base year and the last year of the current cycle, and effectively measure whether the income level of the school's population, as adjusted for inflation, has remained stable, declined or had only negligible improvement.

(ii) *Negligible improvement. *The change in the income level of the school's population shall be considered negligible if there is a 5 percent or less improvement, after adjusting for inflation, over the base year in the level of the socioeconomic indicator which is used to establish the income level of the school's population.

(2) *Extension not approved. *The State agency shall not approve an extension of Provision 2 procedures in those schools for which the available and approved socioeconomic data does not reflect the school's population, is not equivalent data for the base year and the last year of the current cycle, or shows over 5 percent improvement, after adjusting for inflation, in the income level of the school's population. Such schools shall:

(i) *Return to standard meal counting and claiming. *Return to standard meal counting and claiming procedures;

(ii) *Establish a new base year. *Establish a new Provision 2 base year by taking new free and reduced price applications, making new free and reduced price eligibility determinations, and taking point of service counts of free, reduced price and paid meals for the first year of the new cycle. For these schools, the new Provision 2 cycle will be 4 years. Schools electing to establish a Provision 2 base year shall follow procedures contained in paragraph (b) of this section;

(iii) *Establish a streamlined base year. *With prior approval by the State agency, establish a streamlined base year by providing reimbursable meals to all participating students at no charge and developing either enrollment based or participation based claiming percentages.

(A) *Enrollment based percentages. *In accordance with guidance established by the Food and Nutrition Service, establish a new Provision 2 base year by determining program eligibility on the basis of household size and income, and direct certification if applicable, for a statistically valid proportion of the school's enrollment as of October 31, or other date approved by the State agency. The statistically valid measurement of the school's enrollment must be obtained during the first year of the new cycle and meet the requirements of paragraph (m) of this section. Using the data obtained, enrollment based claiming percentages representing a proportion of the school's population eligible for free, reduced price and paid benefits shall be developed and applied to total daily meal counts of reimbursable meals at the point of service, or as otherwise approved under part 210 of this chapter. For schools electing to participate in Provision 2, these percentages shall be used for claiming reimbursement for each year of the new cycle and any extensions; or

(B) *Participation based percentages. *In accordance with guidance established by the Food and Nutrition Service, establish a new Provision 2 base year by determining program eligibility on the basis of household size and income, and direct certification if applicable, for a statistically valid proportion of participating students established over multiple operating days. The statistically valid measurement of the school's student participation must be obtained during the first year of the new cycle and meet the requirements of paragraph (m) of this section. Using the data obtained, participation based claiming percentages representing a proportion of the school's participating students which are eligible for free, reduced price and paid benefits shall be developed and applied to total daily meal counts of reimbursable meals at the point of service or as otherwise approved under part 210 of this chapter. These percentages shall be used for claiming reimbursement for each year of the new cycle and any extensions; or

(iv) *Establish a Provision 3 base year. *Schools may convert to Provision 3 using the procedures contained in paragraphs (e)(2)(ii) or (e)(2)(iii) of this section.

(d) *Provision 3. *A local educational agency of a school which serves all enrolled children in that school reimbursable meals at no charge during any period for up to 4 consecutive school years may elect to receive Federal cash reimbursement and commodity assistance at the same level as the total Federal cash and commodity assistance received by the school during the last year that eligibility determinations for free and reduced price meals were made and meals were counted by type (free, reduced price and paid) at the point of service, or as otherwise authorized under part 210 of this chapter. Such cash reimbursement and commodity assistance will be adjusted for each of the 4 consecutive school years pursuant to paragraph (d)(4) of this section. For purposes of this paragraph (d), the term base year means the last complete school year for which eligibility determinations were made and meal counts by type were taken or the school year in which a school conducted a streamlined base year as authorized under paragraph (e)(2)(iii) of this section. The base year must begin at the start of a school year. Reimbursable meals may be offered to all students at no charge or students eligible for reduced price and paid meal benefits may be charged for meals during a Provision 3 base, *except that *schools conducting a Provision 3 streamlined base year must provide reimbursable meals to all participating students at no charge in accordance with paragraph (e)(2)(iii) of this section. The Provision 3 base year immediately precedes, and is not included in, the 4-year cycle. This alternative shall be known as Provision 3, and the following requirements shall apply:

(1) *Meals at no charge. *Participating schools must serve reimbursable meals, as determined by a point of service observation, or as otherwise authorized under part 210 of this chapter, to all participating children at no charge during non-base years of operation or as specified in paragraph (e)(2)(iii) of this section, if applicable.

(2) *Cost differential. *The local educational agency of a school participating in Provision 3 must pay, with funds from non-Federal sources, the difference between the cost of serving lunches and/or breakfasts at no charge to all participating children and Federal reimbursement.

(3) *Meal counts. *Participating schools must take total daily meal counts of reimbursable meals served to participating children at the point of service, or as otherwise authorized under part 210 of this chapter, during the non-base years. Such meal counts must be retained at the local level in accordance with paragraph (h) of this section. State agencies may require the submission of the meal counts on the local educational agency's monthly Claim for Reimbursement or through other means. In addition, local educational agencies must establish a system of oversight using the daily meal counts to ensure that participation has not declined significantly from the base year. If participation declines significantly, the local educational agency must provide the school with technical assistance, adjust the level of financial assistance received through the State agency or return the school to standard eligibility determination and meal counting procedures, as appropriate. In residential child care institutions, the State agency may approve implementation of Provision 3 without the requirement to obtain daily meal counts of reimbursable meals at the point of service if:

(i) The State agency determines that enrollment, participation and meal counts do not vary; and

(ii) There is an approved mechanism in place to ensure that students will receive reimbursable meals.

(4) *Annual adjustments. *The State agency or local educational agency shall make annual adjustments for enrollment and inflation to the total Federal cash and commodity assistance received by a Provision 3 school in the base year. The adjustments shall be made for increases and decreases in

enrollment of children with access to the program(s). The annual adjustment for enrollment shall be based on the school's base year enrollment as of October 31 compared to the school's current year enrollment as of October 31. Another date within the base year may be used if it is approved by the State agency, and provides a more accurate reflection of the school's enrollment or accommodates the reporting system in effect in that State. If another date is used for the base year, the current year date must correspond to the base year date of comparison. State agencies may, at their discretion, make additional adjustments to a participating school's enrollment more frequently than once per school year. If more frequent enrollment is calculated, it must be applied for both upward and downward adjustments. The annual adjustment for inflation shall be effected through the application of the current year rates of reimbursement. To the extent that the number of operating days in the current school year differs from the number of operating days in the base year, and the difference affects the number of meals, a prorata adjustment shall also be made to the base year level of assistance, as adjusted by enrollment and inflation. Upward and downward adjustments to the number of operating days shall be made. Such adjustment shall be effected by either:

(i) Multiplying the average daily meal count by type (free, reduced price and paid) by the difference in the number of operating days between the base year and the current year and adding/ subtracting that number of meals from the Claim for Reimbursement, as appropriate. In developing the average daily meal count by type for the current school year, schools shall use the base year data adjusted by enrollment; or

(ii) Multiplying the dollar amount otherwise payable (i.e., the base year level of assistance, as adjusted by enrollment and inflation) by the ratio of the number of operating days in the current year to the number of operating days in the base year.

(5) *Reporting requirements. *The State agency shall submit to the Department on the monthly FNS-10, Report of School Programs Operations, the number of meals, by type (i.e., monthly meal counts by type for the base year, as adjusted); or the number of meals, by type, constructed to reflect the adjusted levels of cash assistance. State agencies may employ either method to effect payment of reimbursement for Provision 3 schools.

(6) *Local educational agency claims review process. *During the Provision 3 base year (not including a streamlined base year under paragraph (e)(2)(iii) of this section), local educational agencies are required to review the lunch count data for each school under its jurisdiction to ensure the accuracy of the monthly Claim for Reimbursement in accordance with § 210.8(a)(2) of this chapter. During non-base years and streamlined base years, local educational agencies must conduct their own system of oversight or compare each Provision 3 school's total daily meal counts to the school's total enrollment, adjusted by an attendance factor. The local educational agency must promptly follow-up as specified in § 210.8(a)(4) of this chapter when the claims review suggests the likelihood of lunch count problems. When a school elects to operate Provision 3 only in the School Breakfast Program, local educational agencies must continue to comply with the claims review requirements of § 210.8(a)(2) of this chapter for the National School Lunch Program.

(7) *Verification. *Except as otherwise specified in § 245.6a(a)(5), local educational agencies are required to conduct verification in accordance with § 245.6a. When a school elects to participate under Provision 3 for all of the meal programs in which it participates (breakfast 7 CFR part 220 and/or lunch 7 CFR part 210), the applications from that school are excluded from the local educational agency's required verification sample size and are exempt from verification during non-base years.

(e) *Extension of Provision 3. *At the end of the initial cycle, and each subsequent 4-year cycle, the State agency may allow a school to continue under Provision 3 for another 4 years without taking new free and reduced price applications and meal counts by type. State agencies may grant an extension of Provision 3 if the local educational agency can establish, through available and approved socioeconomic data, that the income level of the school's population, as adjusted for inflation, has remained stable, declined, or has had only negligible improvement since the most recent base year.

(1) *Extension criteria. *Local educational agencies must submit to the State agency available and approved socioeconomic data to establish whether the income level of the school's population, as adjusted for inflation, remained constant with the income level of the most recent base year.

(i) *Available and approved sources of socioeconomic data. *Pre-approved sources of socioeconomic data which may be used by local educational agencies to establish the income level of the school's population are: local data collected by the city or county zoning and economic planning office; unemployment data; local SNAP certification data including direct certification; Food Distribution Program on Indian Reservations data; statistical sampling of the school's population using the application process; and Temporary Assistance for Needy Families data (provided that the eligibility standards were the same or more restrictive in the base year as the current year with allowance for inflation). To grant an extension using pre-approved socioeconomic data sources, State agencies must review and evaluate the socioeconomic data submitted by the local educational agency to ensure that it is reflective of the school's population, provides equivalent data for both the base year and the last year of the current cycle, and demonstrates that the income level of the school's population, as adjusted for inflation, has remained stable, declined or had only negligible improvement. If the local educational agency wants to establish the income level of the school's population using alternate sources of data, the use of such data must be approved by the Food and Nutrition Service. Data from alternate sources must be reflective of the school's population, be equivalent data for both the base year and the last year of the current cycle, and effectively measure whether the income level of the school's population, as adjusted for inflation, has remained stable, declined or had only negligible improvement.

(ii) *Negligible improvement. *The change in the income level of the school population shall be considered negligible if there is a 5 percent or less improvement, after adjusting for inflation, over the base year in the level of the socioeconomic indicator which is used to establish the income level of the school's population.

(2) *Extension not approved. *Schools for which the available and approved socioeconomic data does not reflect the school's population, is not equivalent data for the base year and the last year of the current cycle, or shows over 5 percent improvement after adjusting for inflation, shall not be approved for an extension. Such schools must elect one of the following options:

(i) *Return to standard meal counting and claiming. *Return to standard meal counting and claiming procedures;

(ii) *Establish a new base year. *Establish a new Provision 3 base year by taking new free and reduced price applications, making new free and reduced price eligibility determinations, and taking point of service counts of free, reduced price and paid meals for the first year of the new cycle. Schools electing to establish a Provision 3 base year shall follow procedures contained in paragraph (d) of this section;

(iii) *Establish a streamlined base year. *With prior approval by the State agency, establish a streamlined base year by providing reimbursable meals to all participating students at no charge and developing either enrollment based or participation based claiming percentages.

(A) *Enrollment based percentages. *In accordance with guidance established by the Food and Nutrition Service, establish a new Provision 3 base year by determining program eligibility on the basis of household size and income, and direct certification if applicable, for a statistically valid proportion of the school's enrollment as of October 31, or other date approved by the State agency. The statistically valid measurement of the school's enrollment must be obtained during the first year of the new cycle and meet the requirements of paragraph (m) of this section. Using the data obtained, enrollment based claiming percentages representing a proportion of the school's population eligible for free, reduced price and paid benefits shall be developed and applied to total daily meal counts of reimbursable meals at the point of service, or as otherwise approved under part 210 of this chapter. For schools electing to participate in Provision 3, the streamlined base year level of assistance will be adjusted for enrollment, inflation and, if applicable, operating days, for each subsequent year of the new cycle 

[Note: Additional sections of Part 245 continue]

======================================================================
7 CFR PART 292 — Summer EBT
Federal Register (current as of April 13, 2026)
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

*Local Education Agency (LEA) *means a public board of education or other public or private nonprofit authority legally constituted within a State for either administrative control or direction of, or to perform a service function for, public or private nonprofit elementary schools or secondary schools in a city, county, township, school district, or other political subdivision of a State, or for a combination of school districts or counties that is recognized in a State as an administrative agency for its public or private nonprofit elementary schools or secondary schools. The term also includes any other public or private nonprofit institution or agency having administrative control and direction of a public or private nonprofit elementary school or secondary school, including residential child care institutions, Bureau of Indian Affairs schools, and educational service agencies and consortia of those agencies, as well as the State educational agency in a State or territory in which the State educational agency is the sole educational agency for all public or private nonprofit schools.

*NSLP/SBP *means the National School Lunch Program established under the Richard B. Russell National School Lunch Act (42 U.S.C. 1751 *et seq.) and/or the School Breakfast Program established under the Child *Nutrition Act of 1966 (42 U.S.C. 1771 *et seq.).*

*NSLP/SBP application *means an application for free and reduced price meals, submitted by a household for a child or children enrolled at an NSLP- or SBP-participating school(s). Eligibility determinations based on NSLP/SBP applications may be used to confer eligibility for Summer EBT.

*OIG *means the Office of Inspector General of the Department.

*Period of eligibility *means the period of time from the first day of *instructional year, *as defined in this section, immediately preceding the *summer operational period, *as defined in this section, through the last day of the summer operational period.

*Planning Advanced Planning Document (PAPD) *means a brief written plan of action that requests FFP to accomplish the planning activities necessary for a Summer EBT agency to determine the need for, feasibility of, projected costs and benefits of EBT service acquisitions, plan the acquisition of EBT services, and to acquire information necessary to prepare an Implementation APD when there is a change or an enhancement to the EBT technology.

*Program *means the Summer Electronic Benefits Transfer for Children Program authorized by section 13A of the Richard B. Russell National School Lunch Act, 42 U.S.C. 1762.

*Program funds *means Federal financial assistance made available to Summer EBT agencies for the purpose of making Program payments.

*Project *means a related set of information technology related tasks, undertaken by a Summer EBT agency, to improve the efficiency, economy and effectiveness of administration and/or operation of its human services programs. A project may also be a less comprehensive activity such as office automation, enhancements to an existing system, or an upgrade of computer hardware.

*Request for Proposal (RFP) *means the document used for public solicitations of competitive proposals from qualified sources as outlined in paragraphs (1) through (7) of this definition:

(1) In competitive negotiation, proposals are requested from a number of sources and the Request for Proposal is publicized, negotiations are normally conducted with more than one of the sources submitting offers, and either a fixed-price or cost-reimbursable type contract is awarded, as appropriate.

(2) Competitive negotiation may be used if conditions are appropriate for the use of formal advertising. If competitive negotiation is used for procurement under a grant, the following requirements must apply:

(i) Proposals must be solicited from an adequate number of qualified sources to permit reasonable competition consistent with the nature and requirements of the procurement. The Request for Proposals must be publicized and reasonable requests by other sources to compete must be honored to the maximum extent practicable.

(ii) The Request for Proposal must identify significant evaluation factors, including price or cost where required and their relative importance.

(iii) The Summer EBT agency must provide procedures for technical evaluation of the proposals received, determinations of responsible offerors for the purpose of written or oral discussions, and selection for contract award.

(iv) Award may be made to the responsible offeror whose proposal will be most advantageous to the Summer EBT agency, price and other factors considered. Unsuccessful offerors should be notified promptly.

(v) State agencies may utilize competitive negotiation procedures for procurement of architectural/ engineering professional services whereby competitors' qualifications are evaluated, and the most qualified competitor is selected subject to negotiation of fair and reasonable compensation.

*Rolling verification *means sampling applications for verification on a rolling basis from the beginning of the instructional year immediately preceding the summer operational period.

*School **aged** *means the years in which a child is required to attend school, or an equivalent program as defined by State or Tribal law. Also known as the age requirement for compulsory education.

*Secretary *means the Secretary of Agriculture.

*SNAP *means the program operated pursuant to the Food and Nutrition Act of 2008.

*SNAP eligible foods *means any food or food product that meets the definition of eligible foods at § 271.2 of this chapter.

*SNAP retail food store *means an establishment that meets the definition of retail food store at § 271.2 of this chapter.

*Special provision school *means, for the purposes of Summer EBT, those schools which do not collect NSLP/SBP applications annually described in section 11(a)(1)(B)-(F) of the Richard B. Russell National School Lunch Act (NSLA) which are provision 1 at § 245.9(a) of this chapter, provision 2 at § 245.9(b) and (c) of this chapter, provision 3 at § 245.9(d) and (e) of this chapter, and the community eligibility provision codified at § 245.9(f) of this chapter.

*State *means any of the fifty States, the District of Columbia, the Commonwealth of Puerto Rico, the U.S. Virgin Islands, Guam, American Samoa, or the Commonwealth of the Northern Mariana Islands.

*Streamlined certification *means automatically enrolling an eligible child for Summer EBT, without need for further application or confirmation of school enrollment.

*Summer EBT agency, *as used in this part:

(1) Means:

(i)

(A) Any agency of State government that has been designated by the Governor or other appropriate executive or legislative authority of the State which is responsible for the administration of the Summer EBT Program within the State and enters into a written agreement with USDA to administer Summer EBT. In those States where such assistance programs are operated on a decentralized basis, it includes all State agencies that assist with administration of the Summer EBT Program unless otherwise specified.

(B) Coordinating Summer EBT agencies have an inter-agency written agreement with partnering Summer EBT agencies to administer the Program, as applicable.

(ii) An ITO that is responsible for the administration of the Summer EBT Program and has entered into a written agreement with USDA to administer Summer EBT.

(2) Summer EBT agencies may be further described to clarify roles and requirements, as necessary, including:

(i) *Coordinating Summer EBT agency *means the Summer EBT agency within a State that is designated as the primary point of contact for USDA for the Summer EBT Program within the State or ITO and is responsible for the effective and efficient administration of the Program.

(ii) *Partnering Summer EBT agency *means a Summer EBT agency other than the coordinating Summer EBT agency that has a role in administration of the Program.

(iii) *ITO Summer EBT agency *means an agency of an ITO that administers the Program on behalf of the ITO.

(iv) *State Summer EBT agency *means an agency of a State that administers the Program on behalf of the State.

*Summer EBT application *means an application submitted to a Summer EBT agency or an NSLP/SBP-participating school by a household for a child or children who are enrolled at a NSLP/SBP-participating school for Summer EBT benefits. Eligibility determinations based on Summer EBT applications may not be used to confer eligibility for the NSLP/SBP.

*Summer operational period *means the benefit period that generally reflects the period between the end of classes during the current school year and the start of classes for the next school year, as determined by the Summer EBT agency.

*Supplemental foods *means, for the purposes of ITOs administering the Summer EBT Program, foods—

(1) Containing nutrients determined by nutritional research to be lacking in the diets of children; and

(2) Promoting the health of the population served by the program under this section, as indicated by relevant nutrition science, public health concerns, and cultural eating patterns, as determined by FNS; and

(3) Supplemental foods authorized for the WIC Program by the applicable WIC ITO meet the requirements set forth in this definition, excluding infant foods and infant formula.

*System error *means an error resulting from a malfunction at any point in the redemption process. These adjustments may occur after the availability date and may result in either a debit or credit to the household.

*TANF *means the State funded program under part A of title IV of the Social Security Act that the Secretary determines complies with standards established by the Secretary that ensure that the standards under the State program are comparable to or more restrictive than those in effect on June 1, 1995. This program is commonly referred to as Temporary Assistance for Needy Families, although States may refer to the program by another name.

*Trafficking *means:

(1)

(i) The buying, selling, stealing, or otherwise effecting an exchange of Summer EBT benefits issued and accessed via Electronic Benefit Transfer (EBT) cards, card numbers, and personal identification numbers (PINs), or by manual voucher and signature, for cash or consideration other than eligible food, either directly, indirectly, in complicity or collusion with others, or acting alone;

§ 292.3 Administration.

(ii) The exchange of firearms, ammunition, explosives, or controlled substances, as defined in 21 U.S.C. 802, for Summer EBT benefits;

(iii) Purchasing a product with Summer EBT benefits that has a container requiring a return deposit with the intent of obtaining cash by intentionally discarding the product and intentionally returning the container for the deposit amount;

(iv) Purchasing a product with Summer EBT benefits with the intent of obtaining cash or consideration other than eligible food by reselling the product, and subsequently intentionally reselling the product purchased with Summer EBT benefits in exchange for cash or consideration other than eligible food; or

(v) Intentionally purchasing products originally purchased with Summer EBT benefits in exchange for cash or consideration other than eligible food.

(2) Attempting to buy, sell, steal, or otherwise affect an exchange of Summer EBT benefits issued and accessed via Electronic Benefit Transfer (EBT) cards, card numbers and personal identification numbers (PINs), or by manual voucher and signatures, for cash or consideration other than eligible food, either directly, indirectly, in complicity or collusion with others, or acting alone.

*Vendor *means a sole proprietorship, partnership, cooperative association, corporation, or other business entity operating one or more stores enrolled by an ITO for the purposes of the Summer EBT Program to provide supplemental foods in areas approved for service. To be eligible for the Summer EBT Program, the vendor must be authorized by the WIC ITO to provide authorized supplemental foods to WIC participants under a retail food delivery system.

*Verification *means confirmation of eligibility for the Summer EBT Program when a child's eligibility is established through a Summer EBT application. Verification includes confirmation of income eligibility and, at State or local discretion, may also include confirmation of any other information required in the application. Direct verification, as outlined in § 292.14(e), must be attempted prior to contacting the household. If such efforts are unsuccessful, verification may be accomplished by examining information provided by the household such as wage stubs, or by other means as specified in § 292.14(f)(3). If a SNAP or TANF case number or a FDPIR case number or other identifier is provided for a child, verification for such child must only include confirmation that the child is a member of a household receiving SNAP, TANF, or FDPIR benefits.

*Verification for cause *means verification of questionable applications, on a case-by-case basis, such as an instance when the Summer EBT agency is made aware of conflicting or inconsistent information than what was provided on the application.

*WIC *or *WIC Program *means the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) established under section 17 of the Child Nutrition Act of 1966 (42 U.S.C. 1786).

(a) *Delegation to FNS. *FNS must act on behalf of USDA in the administration of the Program.

(b) *Delegation to a State or ITO. *The Governor or other appropriate executive or legislative authority of the State or ITO will designate one or more Summer EBT agencies to be responsible for the administration of the Summer EBT Program within the State or ITO. If more than one Summer EBT agency is named within a State or ITO, a coordinating Summer EBT agency must be named. All other Summer EBT agencies will be partnering Summer EBT agencies.

(1) *Coordinating Summer EBT agency.*

(i) Each coordinating Summer EBT agency must enter into a written agreement with USDA for the administration of the Program in accordance with the applicable requirements of this part.

(ii) The coordinating Summer EBT agency is:

(A) The primary point of contact for the Summer EBT Program within the State or ITO;

(B) Responsible for the complete and timely submission of any required plans, forms, and reports;

(C) Responsible for activities as outlined in the inter-agency written agreement; and

(D) Responsible for the effective and efficient administration of the Program in accordance with the requirements of this part; the Department's regulations governing nondiscrimination (7 CFR parts 15, 15a, and 15b); governing administration of grants (2 CFR part 200, subparts A through F, and USDA implementing regulations in 2 CFR parts 400 and 415); governing non-procurement debarment/suspension (2 CFR part 180 and USDA implementing regulations in 2 CFR part 417); governing restrictions on lobbying (2 CFR part 200, subpart E, and USDA implementing regulations in 2 CFR parts 400, 415, and 418); and governing the drug-free workplace requirements (2 CFR part 182); FNS guidelines; and, instructions issued under the FNS Directives Management System.

(2) *Partnering Summer EBT agencies.*

(i) Each partnering Summer EBT agency must enter into a written agreement with USDA for the administration of the Program in accordance with the applicable requirements of this part.

(ii) The partnering Summer EBT agency is:

(A) Responsible for activities as outlined in the inter-agency written agreement. If only one Agency will be responsible for the administration of Summer EBT, designation of partnering agencies is not applicable.

(B) Responsible for the effective and efficient administration of the Program in accordance with the requirements of this part; the Department's regulations governing nondiscrimination (7 CFR parts 15, 15a, and 15b); governing administration of grants (2 CFR part 200, subparts A through F, and USDA implementing regulations in 2 CFR parts 400 and 415); governing non-procurement debarment/suspension (2 CFR part 180 and USDA implementing regulations in 2 CFR part 417); governing restrictions on lobbying (2 CFR part 200, subpart E, and USDA implementing regulations in 2 CFR parts 400, 415, and 418); and governing the drug-free workplace requirements (2 CFR part 182); FNS guidelines; and, instructions issued under the FNS Directives Management System.

(c) *Designation of responsibility among **Summer** EBT agencies and requirements for written inter-agency agreements. *To ensure clear roles and responsibilities, the coordinating Summer EBT agency and any partnering Summer EBT agency or agencies must enter into an inter-agency written agreement that defines the roles and responsibilities of each, as well as the administrative structure and lines of authority, if applicable.

(1) The inter-agency written agreement should outline the Summer EBT agencies assignment of responsibilities including, but not limited to:

(i) Certification and enrollment of children;

(ii) Issuance, control, and accountability of Summer EBT benefits and EBT cards;

(iii) Developing and maintaining complaint procedures;

(iv) Developing, conducting, and evaluating training;

(v) Keeping records necessary to determine whether the program is being conducted in compliance with the requirements in this part for the proper storage and use of data. The records must survive the duration of this agreement;

(vi) Submitting accurate and timely financial and program plans, forms, and reports; and

(vii) Public notification and participant support.

(2) [Reserved]

(d) *Suspension, termination, and closeout procedures. *Whenever it is determined that a Summer EBT agency has materially failed to comply with the provisions of this part, FNS may suspend or terminate the agreement between FNS and the Summer EBT agency or agencies or take any other action as may be available and appropriate. A Summer EBT agency may also terminate the agreement, but must provide FNS at least 60 days advance written notice, including a detailed explanation and the proposed effective date of the change. FNS and the Summer EBT agency shall comply with the provisions of 2 CFR part 200, subpart D, and USDA implementing regulations in 2 CFR parts 400 and 415 concerning grant suspension termination and closeout procedures.

(e) *Authority to waive statute and regulations for State Summer EBT agencies.*

(1) As authorized under section 12(l) of the Richard B. Russell National School Lunch Act, 42 U.S.C. 1760(l), FNS may waive provisions of such Act or the Child Nutrition Act of 1966, as amended, and the provisions of this part with respect to a State or eligible service provider. The provisions of this part required by other statutes may not be waived under this authority. FNS may only approve requests for a waiver that are submitted by a State Summer EBT agency and comply with the requirements at section 12(l)(1) and the limitations at section 12(l)(4), including that FNS may not grant a waiver that increases Federal costs.

(2) A State Summer EBT agency may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l)(2) and the provisions of this part.

(3) A State Summer EBT agency may submit a request to waive specific statutory or regulatory requirements on behalf of eligible service providers that operate in the State. Any waiver where the State concurs must be submitted to the appropriate FNSRO.

(4) An eligible service provider may submit a request for a waiver under paragraph (e)(1) of this section in accordance with section 12(l) and the provisions of this part.

(i) Any waiver request submitted by an eligible service provider must be submitted to the State Summer EBT agency for review.

(ii) A State Summer EBT agency must act promptly on such a waiver request and must deny or concur with a request submitted by an eligible service provider.

§ 292.4 [Reserved]

Subpart B—Eligibility Standards and Criteria

(iii) If a State Summer EBT agency concurs with a request from an eligible service provider, the Summer EBT agency must promptly forward to the appropriate FNSRO the request and a rationale, consistent with section 12(l)(2), supporting the request.

(iv) By forwarding the request to the FNSRO, the State Summer EBT agency affirms:

(A) The request meets all requirements for waiver submissions; and,

(B) The State Summer EBT agency will conduct all monitoring requirements related to regular Program operations and the implementation of the waiver.

(v) If the State Summer EBT agency denies the request, the State Summer EBT agency must notify the requesting eligible service provider and state the reason for denying the request in writing within 30 calendar days of the State Summer EBT agency's receipt of the request. The State Summer EBT agency response is final and may not be appealed to FNS.

(f) *Waivers for ITO Summer EBT agencies.*

(1) The Secretary may waive or modify specific regulatory provisions of this part for one or more ITO Summer EBT agency. Waivers may be issued following an ITO Summer EBT agency request or at the discretion of USDA.

(2) To be approvable, a waiver must:

(i) Address a specific regulatory provision which cannot be implemented effectively by the requesting ITO operation;

(ii) Result in more effective and efficient administration of the Program;

(iii) Be consistent with the provisions of the Act; and

(iv) Not result in material impairment of any statutory or regulatory rights of participants or potential participants.

(3) When submitting requests for waivers, ITO Summer EBT agencies must provide compelling justification for the waiver in terms of how the waiver will improve the efficiency and effectiveness of the administration of the Program. At a minimum, requests for waivers must include, but not necessarily be limited to:

(i) Reasons why the waiver is needed;

(ii) Anticipated impact on service to participants or potential participants who would be affected;

(iii) Anticipated time period for which the waiver is needed; and

(iv) A thorough description of the proposed waiver and how it would be implemented.

§ 292.5 General purpose and scope.

§ 292.6 Eligibility.

Children eligible for Summer EBT include those who, at any time during the period of eligibility, are:

§ 292.7 Period to establish eligibility.

Subpart C—Requirements of Summer EBT Agencies

(a) Summer EBT eligibility is based on the eligibility standards for the NSLP/SBP, which includes children who are income eligible for free or reduced-price school meals based on the Income Eligibility Guidelines published by the Department by notice in the FEDERAL REGISTER and in accordance with the household size and income standards for free and reduced price school meals, and children who are categorically eligible, as defined in § 292.2.

(b) The Income Eligibility Guidelines are published annually and change on July 1. The guidelines in effect on the date of application must be used to determine eligibility.

(a) School-aged and categorically eligible.

(b) Enrolled in an NSLP/SBP-participating school, except for special provision schools, and:

(1) Categorically eligible;

(2) Meet the requirements to receive free or reduced price meals at § 292.5(a), as determined through an NSLP/SBP application;

(3) Otherwise are determined eligible to receive a free or reduced price meal; or

(4) Determined eligible through a Summer EBT application, consistent with § 292.13.

(c) Enrolled in a special provision school, and:

(1) Categorically eligible;

(2) Otherwise meet the requirements to receive free or reduced price meals at § 292.5(a), as determined through an NSLP/SBP application; or

(3) Determined eligible through a Summer EBT application, consistent with § 292.13.

(a) Eligibility for Summer EBT, as determined through an application or by streamlined certification, may be established from the first day of the instructional year immediately preceding the summer operational period through the last day of the summer operational period, as defined by the Summer EBT agency in the Plan for Operations and Management (POM).

(b) Households are not required to report changes in circumstances during the instructional year or summer operational period, but a household may voluntarily contact the State or LEA to report any changes in income, household composition, or program participation.

(c) The carryover period in the school meal programs, as required at § 245.6(c)(1) of this chapter, may not be used to confer eligibility for Summer EBT benefits during the summer operational period following the instructional year in which the carryover benefit was provided as it is outside of the period to establish eligibility, as described in paragraph (a) of this section.

§ 292.8 Plan for Operations and Management.

(a) Not later than August 15 of each year, the Summer EBT agency must submit to the FNS Regional Office its intent to administer the Summer EBT Program the following summer, along with an interim Plan for Operations and Management (POM) and expenditure plan for the Summer EBT Program for the upcoming fiscal year. For 2024 only, the Summer EBT agency must submit to the FNS regional office its intent to administer the Summer EBT Program by January 1, 2024, and the interim POM and expenditure plan as soon as is practicable. The interim POM must:

(1) Include the Summer EBT agency's forecasted program participation, anticipated administrative funding needs as part of an expenditure plan, and other programmatic information required in paragraphs (e) and (f) of this section, if applicable, to the extent that such information has been determined at the time of submission.

(2) Be approved by FNS before the Summer EBT agency may draw Federal administrative funds for the fiscal year.

(b) Not later than February 15 of each year, the Summer EBT agency must submit to the FNS Regional Office a final POM. The final POM must:

(1) Address all the requirements of paragraphs (e) and (f) of this section, if applicable.

(2) Be approved by FNS before the Summer EBT agency may draw Federal food benefit funds for the fiscal year.

(c) USDA will respond to the interim and final POM, respectively, within 30 calendar days of receipt. If the plan initially submitted is not approved, the Summer EBT agency and USDA will collaborate to ensure changes to the plan are submitted for approval.

(d) At any time after approval, the Summer EBT agency may amend an interim or final POM to reflect changes. The Summer EBT agency must submit the amendments to USDA for approval. The amendments must be signed by the Summer EBT agency-designated official responsible for ensuring that the Program is operated in accordance with the POM.

(e) Summer EBT agencies must include the following in their final POM, at a minimum:

(1) A copy of the inter-agency written agreement between the Summer EBT coordinating agency and each partnering agency that outlines the roles and responsibilities of each as required in § 292.3(e) if applicable.

(2) An estimate of the number of participants who will be served for the coming year.

(3) The administrative budget on behalf of the State's or ITO's entire program operations which reflects the comprehensive needs of the Summer EBT agencies and local education agencies. The budget must include the Summer EBT agency's plan to comply with any standards prescribed by the Secretary for the use of these funds, as well as an expenditure plan reflecting planned administrative cost requirements for the year. Should administrative fund needs change, an amended expenditure plan is required.

(4) A plan for timely and effective action against program violators.

(5) A plan to comply with the Summer EBT agency requirements in §§ 292.12 through 292.14.

(6) A plan to ensure that Summer EBT benefits are issued to children based on their enrollment at the end of the instructional year immediately preceding each summer.

(7) A description of enrollment procedures including, but not limited to, applications, NSLP enrollment database, direct verification and verification, as applicable.

(8) The plan to coordinate with an ITO Summer EBT Program or State Summer EBT Program, as applicable, in accordance with § 292.9.

(9) The procedures to detect and prevent dual participation including a child simultaneously receiving benefits from more than one Summer EBT Program, or simultaneously receiving multiple allotments from the same State or ITO-administered Summer EBT Program as required in § 292.9(b)(3).

(10) A description of the issuance process including:

(i) The start and end dates of the summer operational period;

(ii) Date(s) when benefits will be issued;

(iii) Benefit issuance dates for LEAs operating on a continuous school calendar, as applicable;

(iv) Whether benefits will be added to an existing EBT card or other mobile payment instrument used to deliver SNAP or WIC benefits or, instead, whether benefits will be issued on a unique Summer EBT card or instrument;

(v) Whether benefits will be issued to each eligible child or to households, as applicable;

(vi) How the Summer EBT agency will provide access to households experiencing homelessness and other vulnerable populations; and

(vii) Claims procedures in cases of erroneous payments in accordance with requirements at § 292.16(g).

(11) Customer service plans including:

(i) A single point of contact for all customer service information and inquiries including a hotline and website;

(ii) How eligible households will be informed of the availability of program benefits and the process to apply for benefits, if necessary; and

(iii) A simplified process for households to opt out of the program.

(12) A copy of the fair hearing procedure for participants.

(f) In addition to the items listed in paragraph (e) of this section, an ITO Summer EBT agency must include in its POM:

(1) The service area of the ITO, a map or other visual reference aid, and a description of any Tribal areas outside of the ITO's jurisdiction that they propose to serve;

(2) A plan and procedures to enroll children already deemed eligible by a State Summer EBT agency serving the same geographic area, without further application;

(3) A plan and procedures to determine eligibility for and enroll children who must apply through the ITO Summer EBT agency to receive benefits because they have not already been identified as eligible, *e.g., *by a State Summer EBT agency serving the same geographic area. The ITO Summer EBT agency must use the eligibility criteria under § 292.6;

§ 292.9 Coordination between State-administered and ITO-administered Summer EBT Programs.

(4) A description of the benefit delivery model to be used. The ITO Summer EBT agency may use a cash-value benefit (CVB) model, a food package model, a combination of the two, or an alternate model. The ITO Summer EBT agency must use the same benefit model for all participants throughout its service area;

(i) For ITOs using a CVB-only benefit delivery model, a description of how the benefit level equal to the amount set forth in § 292.15(e); or

(ii) For ITOs using a food package benefit delivery model, a combination CVB and food package benefit delivery model, or an alternate benefit delivery model, a description of how the benefit level will not exceed the amount set forth in § 292.15(e);

(5) The list of supplemental foods for which participants can transact upon enrollment, excluding infant formula and infant foods;

(6) Procedures for enrolling applicable vendors to transact and redeem Summer EBT Program benefits. As a prerequisite, such vendors must be approved for participation in the WIC Program;

(7) A plan for providing technical assistance and training to vendors enrolled to transact and redeem Summer EBT Program benefits; and

(8) A plan for vendor integrity and monitoring, pursuant to § 292.19.

(a) The ITO Summer EBT agency must receive priority consideration to serve eligible individuals within its service area, as identified in its FNS-approved Plan for Operations and Management (POM) per § 292.8.

(b) An ITO Summer EBT agency and State Summer EBT agency serving proximate geographic areas must coordinate Summer EBT Program services, which may include a written agreement between both parties. ITO Summer EBT agency and State Summer EBT agency coordination must, at minimum, include the following:

(1) The State Summer EBT agency must share data, including household contact information, indicating those individuals deemed eligible in the ITO Summer EBT agency's service area in a manner and timeframe that will allow the ITO Summer EBT agency to issue program benefits timely;

(2) The ITO Summer EBT agency and the State Summer EBT agency must each provide notice to eligible individuals or households that they may choose to receive Summer EBT Program benefits from either Summer EBT agency, in addition to referral information upon individual or household request; and

(3) The ITO Summer EBT agency and State Summer EBT agency must coordinate to detect and prevent dual participation in the same summer operational period when serving proximate service areas in accordance with § 292.15(d). For all student data exchanged applicable to the Summer EBT Program, the ITO Summer EBT agency and State Summer EBT agency must ensure the confidentiality of such data and data must only be used for program purposes in accordance with § 292.13(o).

(c) Eligible households choosing to participate in either the ITO-operated Summer EBT Program or the State-operated Summer EBT Program must participate in the same program for the duration of the summer operational period in any given year.

§ 292.10 [Reserved]

§ 292.11 Advance Planning Document (APD) processes.

(a) *APD process for State agencies and ITOs. *As a condition for the initial and continued ability to claim Federal financial participation (FFP) for the costs of the planning, development, acquisition, installation, and implementation of Information System (IS) equipment and services used in the administration of the Summer EBT Program, Summer EBT agencies must adhere to the APD process in this section (see guidance in Food and Nutrition Service's (FNS' Handbook 901 for more information), the State Systems APD process in paragraph (b) of this section, and for SNAP and WIC ITOs the existing APD process requirements for Management Information Systems and/or Information Systems as outlined in 7 CFR parts 246, 274, and 277, respectively. Summer EBT Projects have the option to include the Summer EBT Program in an existing SNAP or WIC EBT APD or to create a separate APD specific to Summer EBT services. Where the Summer EBT agency is a SNAP or WIC agency, changes to the Management Information System to support Summer EBT follow the APD processes as outlined in §§ 246.12 and 277.18 of this chapter (see guidance within FNS' Handbook 901 for more information). Child Nutrition Programs do not have a similar requirement for Management Information Systems, so the APD requirements will only apply the EBT services projects associated with the Summer EBT Program.

(b) *APD process for States. *Requirements for FNS prior approval of IS projects—

(1) *For the acquisition of IS equipment or services to be utilized in an EBT system regardless of the cost of the acquisition in accordance with the **Summer** EBT issuance standards (subpart D of this part). *For Summer EBT agencies that administer SNAP and are planning changes to their SNAP information systems to incorporate the Summer EBT requirements, refer to § 277.18 of this chapter.

(2) *Specific prior approval requirements.*

(i) For IS projects which require prior approval, as specified in paragraph (b)(1) of this section, the State Summer EBT agency must obtain the prior written approval of USDA for:

(A) Conducting planning activities, entering into contractual agreements or making any other commitment for acquiring the necessary planning services for the development of an initial Summer EBT services project; and

(B) Conducting design, development, testing or implementation activities, entering into contractual agreements or making any other commitment for the acquisition of IS equipment or services.

(ii) For IS equipment and services acquisitions requiring prior approval as specified in paragraph (b)(1) of this section, prior approval of the following documents associated with such acquisitions is also required:

(A) *Requests for Proposals (RFPs). *Unless specifically exempted by FNS, the State Summer EBT agency must obtain prior written approval of the RFP before the RFP may be released. The State Summer EBT agency must obtain prior written approval from FNS for RFPs which are associated with an EBT system regardless of the cost.

(B) *Contracts. *All contracts must be submitted to FNS. The State Summer EBT agency must obtain prior written approval from FNS for contracts which are associated with an EBT system regardless of the cost.

(C) *Contract amendments. *All contract amendments must be submitted to FNS. Unless specifically exempted by FNS, the State Summer EBT agency must obtain prior written approval from FNS of any contract amendments which cumulatively exceed 20 percent of the base contract costs before being signed by the State Summer EBT agency.

(3) *Procurement requirements.*

(i) Procurements of IS equipment and services are subject to § 277.14 of this chapter (procurement standards) regardless of any conditions for prior approval contained in this section, except the requirements of § 277.14(b)(1) and (2) of this chapter regarding review of proposed contracts. The procurement standards in § 277.14(b)(1) and (2) include a requirement for maximum practical open and free competition regardless of whether the procurement is formally advertised or negotiated.

(ii) The standards prescribed by § 277.14 of this chapter, as well as the requirement for prior approval in this paragraph (b), apply to IS services and equipment acquired primarily to support Summer EBT regardless of the acquiring entity.

(iii) The competitive procurement policy prescribed by § 277.14 of this chapter must be applicable except for IS services provided by the agency itself, or by other State or local agencies.

(iv) The following FNS-required provisions as required under 2 CFR part 200, appendix II, apply to Summer EBT procurements as well:

(A) Compliance with Executive Order 11246 related to equal employment opportunity.

(B) Compliance with Clean Air Act (42 U.S.C. 7401-7671q).

(C) Compliance with Clean Water Act (33 U.S.C. 1251-1387).

(D) Compliance with Anti-Lobbying Act.

(E) Compliance with Americans with Disabilities Act.

(F) Compliance with drug-free workplace requirements.

(G) Compliance with suspension/debarment requirements.

(H) USDA has royalty-free rights to use software and documentation developed.

(I) The State Summer EBT agency must obtain prior written approval from FNS, as specified in paragraphs (b)(1) and (2) of this section, to claim and receive reimbursement for the associated costs of the IS acquisition.

(4) *Document submission requirements.*

(i) For IS projects requiring prior approval as specified in paragraphs (b)(1) and (2) of this section, the State Summer EBT agency must submit the following documents to FNS for approval:

(A) Planning APD as described in § 292.2.

(B) Implementation APD as described in § 292.2.

(C) Annual APDU as described in § 292.2 for the initial Summer EBT implementation.

(ii) The Annual APDU must be submitted to FNS 60 days prior to the expiration of the FFP approval, unless the submission date is specifically altered by USDA. In years where an As Needed APDU is required, as described in § 292.2, FNS may waive or modify the requirement to submit the annual APDU. The requirement in this paragraph (b)(4)(ii) will only apply to the initial implementation of Summer EBT.

(iii) As Needed APDU as described in § 292.2. As Needed APDU are required to obtain a commitment of FFP whenever significant project changes occur. Significant project changes are defined as changes in cost, schedule, scope or strategy which exceed FNS-defined thresholds or triggers. Without such approval, the Summer EBT agency is at risk for funding of project activities which are not in compliance with the terms and conditions of the approved APD and subsequently approved APDU until such time as approval is specifically granted by FNS.

(iv) Acquisition documents as described in § 277.14(g) of this chapter for Summer EBT agencies that administer SNAP (see guidance within in FNS Handbook 901 for more information), or for Summer EBT services projects utilizing an existing or new SNAP EBT services contract for Summer EBT.

(v) Emergency acquisition requests as described in paragraph (j) of this section.

(c) *Prior approval. *The State Summer EBT agency must obtain prior FNS approval of the documents specified in paragraph (b)(4)(i) of this section in order to claim and receive reimbursement for the associated costs of the IS acquisition.

(d) *Approval by the State Summer EBT agency. *Approval by the State Summer EBT agency is required for all documents and acquisitions specified in this subpart prior to submission for FNS approval. However, the State Summer EBT agency may delegate approval authority to any subordinate entity for those acquisitions of IS equipment and services not requiring prior approval by FNS.

(e) *Prompt action on requests for prior approval. *FNS will reply promptly to State Summer EBT agency requests for prior approval. If FNS has not provided written approval, disapproval, or a request for additional information within 60 days of FNS' acknowledgment of receipt of the State Summer EBT agency's request, the request will be deemed to have provisionally met the prior approval requirement in paragraph (b) of this section. However, provisional approval will not exempt a State Summer EBT agency from having to meet all other Federal requirements which pertain to the acquisition of IS equipment and services. Such requirements remain subject to Federal audit and review.

(f) *APD content requirements *—

(1) *Planning APD (PAPD). *The PAPD is a written plan of action to acquire proposed services or equipment and to perform necessary activities to investigate the feasibility, system alternatives, requirements and resources needed to replace, modify, or upgrade the State Summer EBT agency's IS. The PAPD must contain adequate documentation to demonstrate the need to undertake a planning process, as well as a thorough description of the proposed planning activities, and estimated costs and timeline (see guidance within FNS' Handbook 901 for more information).

(2) *Implementation APD (IAPD). *The IAPD is a written plan of action to acquire the proposed IS services or equipment and to perform necessary activities to design, develop, acquire, install, test, and implement the new IS. The IAPD must contain detailed documentation of planning and preparedness for the proposed project, (see guidance within FNS' Handbook 901 for more information), demonstrating the feasibility of the project, thorough analysis of system requirements and design, a

rigorous management approach, stewardship of Federal funds, a realistic schedule and budget, and preliminary plans for key project phases. The IAPD must be submitted and approved prior to incurring any costs under the new EBT service contract.

(3) *Annual APDU content requirements. *The Annual APDU is a yearly update to ongoing IS projects when planning or implementation activities occur. The Annual APDU must contain documentation on the project activity status and a description of major tasks, milestones, budget, and any changes (see guidance within FNS' Handbook 901 for more information).

(4) *As Needed APDU content requirements.*

The As Needed APDU document must contain the items as defined in paragraph (b)(4)(ii) of this section with emphasis on the area(s) where changes have occurred or are anticipated that triggered the submission of the APDU (see guidance within FNS' Handbook 901 for more information).”

Paragraph (d) should read: (q) *APD process for ITOs. *For the acquisition of IS equipment or services to be utilized in an EBT system regardless of the cost of the acquisition in accordance with the Summer EBT issuance standards in subpart D to this part, WIC EBT coordinating Summer EBT agencies, administering WIC, that are planning changes to their ITO Management Information Systems to incorporate the Summer EBT requirements should refer to the APD process requirements outlined in 7 CFR 246.12, 2 CFR part 200, appendix XI, and the APD process in this section (see guidance within FNS' Handbook 901 for more information).

(g) *Service agreements.*

(1) The State Summer EBT agency must execute service agreements when IS services are to be provided by a State central IT facility or another State or local agency. *Service agreement *means the document signed by the State or local agency and the State or local central IT facility whenever an IT facility provides IT services to the State or local agency. Service agreements must:

(i) Identify the IS services that will be provided;

(ii) Include a schedule of rates for each identified IS service, and a certification that these rates apply equally to all users;

(iii) Include a description of the method(s) of accounting for the services rendered under the agreement and computing services charges;

(iv) Include assurances that services provided will be timely and satisfactory;

(v) Include assurances that information in the IS as well as access, use and disposal of IS data will be safeguarded in accordance with provisions of §§ 272.1(c) (disclosure) and 277.13 (property) of this chapter;

(vi) Require the provider to obtain prior approval from FNS pursuant to paragraph (b) of this section for IS equipment and IS services that are acquired from commercial sources primarily to support federally aided public assistance programs and require the provider to comply with § 277.14 of this chapter (procurement standards) for procurements related to the service agreement. IS equipment and services are considered to be primarily acquired to support federally aided public assistance programs when the Programs may reasonably be expected to either be billed for more than 50 percent of the total charges made to all users of the IS equipment and services during the time period covered by the service agreement, or directly charged for the total cost of the purchase or lease of IS equipment or services;

(vii) Include the beginning and ending dates of the period of time covered by the service agreement; and

(viii) Include a schedule of expected total charges to the Program for the period of the service agreement.

(2) The State Summer EBT agency must maintain a copy of each service agreement in its files for Federal review upon request.

(h) *Basis for continued Federal financial participation (**FFP) *—

(1) General. FNS will continue FFP at the levels approved in the Planning APD and the Implementation APD provided that project development proceeds in accordance with the conditions and terms of the approved APD and that IS resources are used for the purposes authorized. FNS will use the APDU to monitor IS project development. The submission of the update as prescribed in paragraph (b)(4) of this section for the duration of project development is a condition for continued FFP. In addition, periodic onsite reviews of IS project development and State and local agency IS operations may be conducted by or for FNS to assure compliance with approved APDs, proper use of IS resources, and the adequacy of State or local agency IS operations.

(2) *Pre-implementation. *The State Summer EBT agency must demonstrate through thorough testing that the system meets all program functional and performance requirements. FNS may require a pre-implementation review of the system to validate system functionality prior to Summer EBT agency testing.

(3) *Testing. *The State Summer EBT agency must commit to completing and submitting the following documents for FNS approval and obtaining such approval prior to issuance of benefits to eligible households in the project area:

(i) *Functional demonstration. *A functional demonstration of the functional requirements prescribed in this part in combination with the system components described by the approved system design is recommended in order to identify and resolve any problems prior to acceptance testing. The Department reserves the right to participate in the functional demonstration if one is conducted. FNS may require that any or all of these tests be repeated in instances where significant modifications are made to the system after these tests are initially completed or if problems that surfaced during initial testing warrant a retest.

(ii) *An Acceptance Test Plan. *The Acceptance Test Plan for the project must describe the methodology to be utilized to verify that the EBT system complies with Program requirements and System Design specifications. At a minimum, the Acceptance Test Plan must address:

(A) The types of testing to be performed;

(B) The organization of the test team and associated responsibilities, test database generation, test case development, test schedule, and the documentation of test results. Acceptance testing must include functional requirements testing, error condition handling and destructive testing, security testing, recovery testing, controls testing, stress and throughput performance testing, and regression testing; and

(C) A “what-if” component must also be included to permit the opportunity for observers and participants to test possible scenarios in a free-form manner.

(iii) *Independent testing. *The Department reserves the right to participate and conduct independent testing as necessary during the acceptance testing and appropriate events during system design, development, implementation, and operation.

(iv) *An acceptance test report. *The State Summer EBT agency must provide a separate report after the completion of the acceptance test only in instances where FNS is not present at the testing or when serious problems are uncovered during the testing that remain unresolved by the end of the test session. The report must summarize the activities, describe any discrepancies, describe the proposed solutions to discrepancies, and the timetable for their retesting and completion. In addition, the report must contain the State Summer EBT agency's recommendations regarding implementation of the EBT system.

(v) *A prototype food retailer agreement. *The State Summer EBT agency must enter an agreement with each FNS authorized retailer that complies with the requirements under § 274.3 of this chapter.

(vi) *An implementation plan.*

(A) The implementation plan must include the following:

*(1) *A description of the tools, procedures, detailed schedules, and resources needed to implement the project;

*(2) *The equipment acquisition and installation requirements, ordering schedules, and system and component testing;

*(3) *A phase-in-strategy which permits a measured and orderly transition from one EBT system to another. In describing this strategy, the plan must address schedules that avoid disruption of normal shopping patterns and operations of participating children and food retailers. Training of Summer EBT eligible children, State Summer EBT agency personnel and retailers and/or their trainers must be coordinated with the installation of equipment in retail stores;

*(4) *A description of on-going tasks associated with fine-tuning the system and making any corrective actions necessary to meet contractual requirements. The description must also address those tasks associated with ongoing training, document updates, equipment maintenance, on-site support and system adjustments, as needed to meet Program requirements; and,

*(5) *A plan for orderly phase-out of the project and/or for continuing benefit issuance operations if it is demonstrated during the pilot project or conversion operations that the new system is not acceptable.

(B) The State Summer EBT agency must submit a written contingency plan for FNS approval. The contingency plan must contain information regarding the back-up issuance system that will be activated in the event of an emergency shut-down which results in short-term or extended system inaccessibility, or total discontinuation of EBT system operations. The contingency plan must be incorporated into the Summer EBT State system security plan after FNS approval as specified in paragraph (p) of this section.

(i) *Disallowance of Federal financial participation (FFP). *If FNS finds that any acquisition approved under the provisions of paragraph (b) of this section fails to comply with the criteria, requirements and other undertakings described in the approved or modified APD, payment of FFP may be suspended or may be disallowed in whole or in part.

(j) *Emergency acquisition requirements. *The State Summer EBT agency may request FFP for the costs of IS equipment and services acquired to meet emergency situations in which the agency can demonstrate to FNS an immediate need to acquire IS equipment or services in order to continue operation of Summer EBT; and the State Summer EBT agency can clearly document that the need could not have been anticipated or planned for and precludes the State from following the prior approval requirements of paragraph (c) of this section. FNS may provide FFP in emergency situations if the following conditions are met:

(1) The State Summer EBT agency must submit a written request to FNS prior to the acquisition of any IS equipment or services. The written request must include:

(i) A brief description of the IS equipment and/or services to be acquired and an estimate of their costs;

(ii) A brief description of the circumstances which result in the State Summer EBT agency's need to proceed with the acquisition prior to fulfilling approval requirements at paragraph (c) of this section; and

(iii) A description of the adverse impact which would result if the State Summer EBT agency does not immediately acquire the IS equipment and/or services.

(2) Upon receipt of a written request for emergency acquisition FNS must provide a written response to the State Summer EBT agency within 14 days. The FNS response must:

(i) Inform the State Summer EBT agency that the request has been disapproved and the reason for disapproval.

(ii) If FNS approves the request submitted under paragraph (j)(1) of this section, FFP will be available from the date the State Summer EBT agency acquires the IS equipment and services.

(iii) FNS recognizes that an emergency situation exists and grants conditional approval pending receipt of the State Summer EBT agency's formal submission of the IAPD information specified at paragraph (b)(4) of this section within 90 days from the date of the agency's initial written request.

(iv) If the complete IAPD submission required by paragraph (b)(2) of this section is not received by FNS within 90 days from the date of the initial written request, costs may be subject to disallowance.

(k) *General cost requirements *—

(1) *Cost determination. *Actual costs must be determined in compliance with 2 CFR part 200, subpart E, and USDA implementing regulations in 2 CFR parts 400 and 415 and an FNS approved budget and must be reconcilable with the approved FNS funding level. A State Summer EBT agency must not claim reimbursement for costs charged to any other Federal program or uses of IS systems for purposes not connected with Summer EBT. The approved APD cost allocation plan includes the methods which will be used to identify and classify costs to be claimed. This methodology must be submitted to FNS as part of the request for FNS approval of funding as required in this section.

Operational costs are to be allocated based on the statewide cost allocation plan rather than the APD cost plan. Approved cost allocation plans for ongoing operational costs must not apply to IS system development costs under this section unless documentation required under paragraph (b) of this section is submitted to and approvals are obtained from FNS. Any APD-related costs approved by FNS must be excluded in determining the Summer EBT agency's administrative costs under any other section of this part.

(2) *Cost identification for purposes of FFP claims. *State Summer EBT agencies must assign and claim the costs incurred under an approved APD in accordance with the following criteria:

(i) *Development costs. *Using its normal departmental accounting system, in accordance with the cost principles set forth in 2 CFR part 200, subpart E, and USDA implementing regulations in 2 CFR parts 400 and 415, the State Summer EBT agency must specifically identify what items of costs constitute development costs, assign these costs to specific project cost centers, and distribute these costs to funding sources based on the specific identification, assignment and distribution outlined in the approved APD. The methods for distributing costs set forth in the APD should provide for assigning identifiable costs, to the extent practicable, directly to program/functions. The State Summer EBT agency must amend the cost allocation plan required by 2 CFR part 200, subpart E, to include the approved APD methodology for the identification, assignment, and distribution of the development costs.

(ii) *Operational costs. *Costs incurred for the operation of an IS must be identified and assigned by the State Summer EBT agency to funding sources in accordance with the approved cost allocation plan required by 2 CFR part 200, subpart E.

(iii) *Service agreement costs. *States that operate a central data processing facility must use their approved central service cost allocation plan required by 2 CFR part 200, subpart E, and USDA implementing regulations in 2 CFR parts 400 and 415 to identify and assign costs incurred under service agreements with the State Summer EBT agency. The State Summer EBT agency must then distribute these costs to funding sources in accordance with the development and operational costs outlined in this section.

(iv) *Claiming costs. *Prior to claiming funding under this section the State Summer EBT agency must have complied with the requirements for obtaining approval and prior approval of paragraph (b) of this section.

(v) *Budget authority. *FNS approval of requests for funding must provide notification to the State Summer EBT agency of the budget authority and dollar limitations under which such funding may be claimed. FNS must provide this amount as a total authorization for such funding which may not be exceeded unless amended by FNS. FNS's determination of the amount of this authorization must be based on the budget submitted by the State Summer EBT agency. Activities not included in the approved budget, as well as continuation of approved activities beyond scheduled deadlines in the approved plan, must require FNS approval of an As Needed APDU as prescribed in paragraphs (b)(4) and (f)(4) of this section, including an amended State budget. Requests to amend the budget authorization approved by FNS must be submitted to FNS prior to claiming such expenses.

(l) *Access to the system and records. *Access to the system in all aspects, including but not limited to design, development, and operation, including work performed by any source, and including cost records of contractors and subcontractors, must be made available by the State Summer EBT agency to FNS or its authorized representatives at intervals as are deemed necessary by FNS, in order to determine whether

the conditions for approval are being met and to determine the efficiency, economy and effectiveness of the system. Failure to provide full access to all parts of the system may result in suspension and/or termination of Summer EBT funds for the costs of the system and its operation.

(m) *Ownership rights. *The State Summer EBT agency must comply with the requirements under this part and the requirement for intangible property in 2 CFR 200.315.

(n) *Software.*

(1) The State or local government must include a clause in all procurement instruments which provides that the State or local government must have all ownership rights in any software or modifications thereof and associated documentation designed, developed, or installed with FFP under this section.

(2) FNS reserves a royalty-free, nonexclusive, and irrevocable license to reproduce, publish, or otherwise use and to authorize others to use for Federal Government purposes, such software, modifications, and documentation.

(3) Proprietary operating/vendor software packages which meet the definition of COTS in § 292.2 must not be subject to the ownership provisions in paragraph (m) of this section. FFP is not available for development costs for proprietary application software developed specifically for Summer EBT.

(o) *Information Systems equipment. *The policies and procedures governing title, use and disposition of property purchased with FFP, which appear at 2 CFR 200.315 are applicable to IS equipment.

(p) *Information system security requirements and review process *-(1) *Information system security requirements. *State and local agencies are responsible for the security of all IS projects under development, and operational systems involved in the administration of Summer EBT. State and local agencies must determine appropriate IS security requirements based on recognized industry standards or compliance with standards governing security of Federal information systems and information processing.

(2) *Information security program. *State Summer EBT agencies must implement and maintain a comprehensive Security Program for IS and installations involved in the administration of the Summer EBT. Security Programs must include the following components:

(i) Determination and implementation of appropriate security requirements as prescribed in paragraph (p)(1) of this section.

(ii) Establishment of a security plan and, as appropriate, policies and procedures to address the following areas of IS security:

(A) Physical security of IS resources;

(B) Equipment security to protect equipment from theft and unauthorized use;

(C) Software and data security;

(D) Telecommunications security;

(E) Personnel security;

(F) Contingency plans to meet critical processing needs in the event of short- or long-term interruption of service;

(G) Emergency preparedness; and

(H) Designation of an Agency IS Security Manager.

(3) *Periodic risk analyses. *State Summer EBT agencies must establish and maintain a program for conducting periodic risk analyses to ensure that appropriate, cost-effective safeguards are incorporated into new and existing systems. In addition, risk analyses must be performed whenever significant system changes occur.

(4) *IS** security reviews. *State Summer EBT agencies must review the security of IS involved in the administration of Summer EBT on a biennial basis. At a minimum, the reviews must include an evaluation of physical and data security, operating procedures and personnel practices. State Summer EBT agencies must maintain reports of their biennial IS security reviews, together with pertinent supporting documentation, for Federal review upon request.

(5) *Applicability. *The security requirements of this section apply to all IS systems used by State and local governments to administer Summer EBT.

(q) *APD process for ITOs. *For the acquisition of IS equipment or services to be utilized in an EBT system regardless of the cost of the acquisition in accordance with the Summer EBT issuance standards in subpart D of this part, WIC EBT coordinating Summer EBT agencies, administering WIC, that are planning changes to their ITO Management Information Systems to incorporate the Summer EBT requirements should refer to the APD process requirements outlined in 7 CFR 246.12, 2 CFR part 200, appendix XI, and the APD process (see guidance within FNS' Handbook 901 for more information).

(r) *ITO EBT management and reporting.*

(1) The Summer EBT agency must follow the Department APD requirements in this section and submit Planning and Implementation APDs and appropriate updates, for Department approval, for planning, development, and implementation of initial and subsequent EBT systems.

(2) If an ITO plans to incorporate additional programs in its EBT system, the ITO must consult with ITO officials responsible for administering the programs prior to submitting the Planning APD (PAPD) document and include the outcome of those discussions in the PAPD submission to the Department for approval.

(3) Annually as part of the State plan, the Summer EBT agency must submit EBT project status reports. At a minimum, the annual status report must contain:

(i) Any information on future EBT changes and procurement updates affecting present operations; and

(ii) Such other information the Secretary may require.

(4) The ITO must be responsible for EBT coordination and management for planning, implementation and ongoing operations of Summer EBT.

(s) *ITO Summer EBT procurements. *The following procurement requirements from title 2 of the Code of Federal Regulations apply to ITO Summer EBT agencies:

(1) 2 CFR 200.315;

(2) 2 CFR 200.317;

(3) 2 CFR 200.326;

(4) 2 CFR part 200, appendix II:


[Note: Additional sections of Part 292 continue]`;

const SYSTEM_INSTRUCTION = `You are CNPReg AI, a free regulatory intelligence tool developed by LS Digital Solutions, LLC for state agency administrators of USDA Child Nutrition Programs.

## YOUR ROLE
Provide precise, cited answers to regulatory questions about USDA Child Nutrition Programs (NSLP, SBP, CACFP, SFSP, FFVP, Summer EBT, USDA Foods).

## PRIMARY SOURCE
Use the regulatory knowledge base provided below as your primary source. The knowledge base contains current Federal Register text as of April 13, 2026 for 10 CFR parts.

## CRITICAL FACTUAL RULES — NEVER DEVIATE
1. **Community Eligibility Provision (CEP) ISP threshold is 25%** — NOT 40%. The 40% figure was the OLD threshold prior to the Healthy, Hunger-Free Kids Act updates. Per 7 CFR § 245.9, schools/LEAs with an Identified Student Percentage (ISP) of 25% or greater are eligible to elect CEP.
2. **CEP claiming percentage** = ISP × 1.6 (capped at 100%)
3. **Verification requirements** — SFAs must verify 3% or 3,000 applications (whichever is less) annually.
4. **Income eligibility** — Free meals at or below 130% FPL; Reduced price 130-185% FPL.

## RESPONSE STANDARDS
- Always cite exact CFR sections (e.g., "7 CFR § 210.10(c)(2)" or "7 CFR § 226.20(b)")
- Quote directly from the regulatory text when possible
- Note when state agency discretion applies or policy varies by state
- Flag recent changes or areas under revision
- If a question falls outside the embedded regulatory text, use your trained knowledge but explicitly note it
- Never guess on compliance matters — if uncertain, say so clearly
- Format answers with **bold** for key terms and regulatory citations
- Keep answers concise and actionable for busy state agency administrators

## MANDATORY FOOTER
End EVERY response with this exact line on its own:

⚠️ Verify all guidance against official USDA FNS sources before making compliance decisions.

## REGULATORY KNOWLEDGE BASE

` + KB;

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request — messages array required' });
    }

    const geminiKey = process.env.GEMINI_KEY;
    if (!geminiKey) {
      return res.status(500).json({ error: 'API key not configured on server' });
    }

    // Convert chat history to Gemini format
    // System instruction is now a separate parameter — cleaner separation
    const geminiContents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const geminiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=' + geminiKey;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }],
        },
        contents: geminiContents,
        generationConfig: {
          maxOutputTokens: 4000,
          temperature: 0.2,
        },
      }),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
