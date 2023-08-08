import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import './Resume.css'

const ResumeContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const projects = [
    <div className='mt-5'>
      <p className='font-semibold'>Memory Virtualization Project</p>
      <p className=''>Operating Systems | <a className='font-semibold' href='https://github.com/kbsanchez/COP4600-MemVirtualization'>Link</a></p>
        <ul>
          <li>- Developed a C++ virtual memory system simulator to evaluate FIFO, LRU, and Segmented FIFO page replacement algorithms.</li>
          <li>- Implemented configurable command-line options for policy selection, memory frame allocation, and verbosity mode (quiet/debug).</li>
          <li>- Conducted thorough testing on diverse memory traces to validate simulator accuracy and efficiency, presenting quantified performance metrics for each algorithm.</li>
        </ul>
    </div>,
    <div className='mt-5'>
      <p className='font-semibold'>ElasticSearch Management Utility</p>
      <p className=''>Capstone Project | <a className='font-semibold' href='https://github.com/kbsanchez/Team-SunView'>Link</a></p>
        <ul>
          <li>- Spearheaded the front-end development of an automated index management utility for Elasticsearch, streamlining client operations.</li>
          <li>- Implemented Agile-based methodologies in collaboration with the SunView sponsor, ensuring seamless project progress.</li>
          <li>- Collaborated effectively within a four-person team over a 10 week period to deliver a fully functional web application and comprehensive documentation.</li>
        </ul>
    </div>,
    <div className='mt-5'>
      <p className='font-semibold'>InCollege Python Command Line Utility</p>
      <p className=''>USF Term-Long Project | <a className='font-semibold' href='https://google.com'>Link</a></p>
        <ul>
          <li>- Collaborated in a six-person team to develop a utility to empower college students in creating accounts, job searching, and networking, akin to LinkedIn.</li>
          <li>- Orchestrated a minimum viable product (MVP) approach to attract potential investors and secure funding for future software iterations.</li>
          <li>- Successfully executed a ten-week development timeline, tracking stories and bugs through Jira for efficient project management.</li>
          <li>- Rotated through different scrum roles (scrum master, tester, developer) each week, fostering a well-rounded understanding of project dynamics and responsibilities.</li>
        </ul>
    </div>
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/4 flex items-center text-center mb-4 md:mb-0">
        <div className="flex flex-col border-r-2 pr-2">
          <ResumeTab title="Education" ico='TbSchool'onClick={() => handleTabChange(0)} active={activeTab === 0} />
          <ResumeTab title="Experience" ico='TbBriefcase' onClick={() => handleTabChange(1)} active={activeTab === 1} />
          <ResumeTab title="Skills" ico='TbTerminal2' onClick={() => handleTabChange(2)} active={activeTab === 2} />
          <ResumeTab title="Involvement" ico='TbUsers' onClick={() => handleTabChange(3)} active={activeTab === 3} />
        </div>
      </div>
      <div className="w-full md:w-3/4 pl-0 md:pl-8 overflow-y-auto">
        {activeTab === 0 && (
          <ResumeSection title="Education">
            <p className='font-bold'>University of South Florida &emsp;|&emsp; Class of 2022</p>
            <p className='font-semibold italic'>Bachelor of Science in Computer Science</p>
            <br/>
            <p>Relevant Coursework: Database Design, Software Engineering,
            <br/>Analysis of Algorithms,Data Structures, Object Oriented Design,
            <br/>Computer Architecture,Programming Concepts, Program Design,
            <br/>Automata Theory and Formal Languages, Operating Systems,
            <br/>Secure Coding, Embedded Systems</p>
          </ResumeSection>
        )}
        {activeTab === 1 && (
          <ResumeSection title="Experience">
            <ul>
              {projects.map((project) => (
                <li>{project}</li>
              ))}
            </ul>
          </ResumeSection>
        )}
        {activeTab === 2 && (
          <ResumeSection title="Skills">
            <p><strong>Programming:</strong> C++, ReactJS, Python, C, Javascript, C#, SQL</p>
            <p><strong>Environments:</strong> Visual Studio 2019/ VS Code, PyCharm, XCode, MobaXterm, Xcode, Code Composer Studio</p>
            <p><strong>Tools:</strong> Git/GitHub, Jira, Figma, Lucidchart</p>
          </ResumeSection>
        )}
        {activeTab === 3 && (
          <ResumeSection title="Involvement">
            <p className='font-bold'>USF Engineering Expo</p>
            <p className='font-semibold'>Volunteer</p>
            <p>Aided in presenting the Society of Competitive Programmer’s 2020, “Turning Brain Waves into Art” interactive project to K-12 students in the Tampa Bay area.</p>
            <br />
            <br />
            <p className='font-bold'>CLUBS AND ORGANIZATIONS</p>
            <p className='font-semibold'>Member of Society of Competitive Programmers (SCP), Women in Computer Science and Engineering (WiCSE)</p>
            <p>Attended weekly workshops hosted by the Society of Competitive Programmers. Participated in mentoring luncheons hosted by WiCSE to connect with women tech leaders.</p>
          </ResumeSection>
        )}
      </div>
    </div>
  );
};

const DynamicIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.TbPlus />;
  }

  return <IconComponent className='' />;
};

const ResumeTab = ({ title, ico, onClick, active }) => {
  return (
    <div
      className={`py-2 cursor-pointer flex  ${active ? "bg-gray-100" : ""}`}
      onClick={onClick}
    >
      <DynamicIcon name={ico} />
      <p className={`text-lg font-semibold pl-2 ${active ? "text-indigo-600" : ""}`}>{title}</p>
    </div>
  );
};

const ResumeSection = ({ title, children }) => {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default ResumeContent;
