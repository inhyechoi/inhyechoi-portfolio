import React from 'react';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Goo from 'gooey-react'
import Pdf from '../../Assets/Files/Inhye_Choi_Resume.pdf';


// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4'
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });
  
//   const MyDoc = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );

const About = () => {

    return(
        <div className="about" style={{height: `100%`}}>
            {/* <a class="btn btn-danger" role="button" href="../../Assets/Files/Inhye_Choi_Resume.pdf" download="inhye_resume">Download</a>
            <a href="../../Assets/Files/Inhye_Choi_Resume.pdf" download="Inhye_Choi_resume.pdf">Download</a> */}

            {/* <a href={ Pdf } target="_blank" className="resumeBtn" download="Inhye_Choi_resume.pdf">Download Resume</a> */}
            <a href={ Pdf } className="resumeBtn" download="Inhye_Choi_resume.pdf">Download Resume</a>

            <title>Inhye Choi</title>
            <Goo intensity="weak">
            <svg className="inhyeBgFilter">
                <defs>
                    {/* <filter colorInterpolationFilters="sRGB" id="gooey-react">
                        <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 72 -36">
                        </feColorMatrix>
                    </filter> */}
                    {/* <filter id="gooey-title-react">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                        <feOffset dx="0" dy="0" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter> */}
                </defs>
            </svg>
            <div className="inhyeBgWrapper">
                <svg id="inhyeBg" width="100%" height="100%" xmlms="https://www.w3.org/TR/SVG/" viewBox="0 0 523.87 535.79">
                    <g className="inhyeBg-g">
                        <circle className="c-1" cx="50%" cy="50%" r="42" ></circle>
                        <circle className="c-2" cx="50%" cy="50%" r="36" ></circle>  
                        <circle className="c-3" cx="50%" cy="50%" r="30" ></circle>
                        <circle className="c-4" cx="50%" cy="50%" r="24" ></circle>
                    </g>
                </svg>
            </div>
            </Goo>
            <svg id="inhye-txt" width="100%" height="100%" xmlms="https://www.w3.org/TR/SVG/" viewBox="0 0 824.65 485.8">
                <foreignObject x="60%" y="70%" width="300" height="400" className="aboutHeader">
                    <div xmlns="https://www.w3.org/TR/SVG/">
                        <h1 className="title">
                            <span>Hello I’m Inhye,a  </span>
                            <span>Front-end Developer.</span>
                        </h1>
                        <h2 className="title">
                            <span>My passion is in </span>
                            <span>creative frontend </span>
                        <span>development</span>
                        </h2>
                    </div>
                </foreignObject>
            </svg>
            {/* <PDFDownloadLink document={<MyDoc />} href="../../Assets/Files/Inhye_Choi_Resume.pdf" className="resumeBtn">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Resume')}
            </PDFDownloadLink> */}
        </div>
    );
}

export default About
