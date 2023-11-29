import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing quality content and services to our
            users. Explore our platform to discover more.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Have questions or suggestions? Reach out to us at{' '}
            <a href="mailto:info@example.com">AlexanderTsiklidis@pursuit.org</a>.
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            Stay connected on social media:
            <br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="data:image/jpeg;base64,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" alt="Twitter" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUYd/L///8gevIIc/IAbvGnwfkAcPIAafFnnvUSdfLb5vwAbPHm7/34+//K3PuavPh4p/aLs/e60fp/rPYkfvNAifTv9f7e6v2vyvmev/hJjPTV4/wxgfM4hPOlxPnP4PxZlvXO+ySRAAACtElEQVRoge3b23KbMBAGYBkRgRAHcXab1PH7P2XBDmOwBYzWu2I61X+VCybfYGS8Oiw7zZLlRdw2jCZNGxd5NufY489EMyG4lES2lFwIphODnWopiNR5hNTps10FIdUNLyPDoFrapXIj33RVzu06ciaPieqHXbqlB7yc7Eo5phlT1d1OA3fPeooM0putQ+c0Y6Ee7YTsbbIVKZPB1i5eKa8R+sSyQ+QxGcuPue3hxnNWHGYXLOYH2Txm7RGjfIxsWXOYTVWk+PjQhAsVPaLCodp1A4uoiYuq724Ffpf2+flXHf92UHpK1dSfi4L/Z5aRfRLbUnxdulf4Xu/TlgVS1Gsytc1ZvioT27xZv2lim/8xDDE3Nm/STZrQlnzrWdPaYb1DE9rb44zUVpc9mvC+t8c4pc13nzadHX0fZkuxT1PZPF4D+3NR/0RTyEO1sDLKz0GkxBSi6U5ofKd1VxdrVaI30NnVxaRSctO3u3CzciJNwzpwQrPAYFeOFoxMtqtVG5Ptahpvsh09bm9729ve/vdtEc6juMHmKlwGiy4/ljHYT1d8XJA+iMhUI+0FaZkrSvap53RI230QO0fa74PYF6TBBrFLpBoKYl+RaiiI/XWcnWFtLQPsHmtHHWCjbakDbLTdRoCtsabf9naG9RUD2B3anp+9naLNDO3tb7RDK/a/32e0Uyv8Gi9j0JYXIM6IJV+EGWy2uIJuMv7f1Mje9ra3ve1tb3vb2972tmsbcD4Vx5YB5Fwukt1CziPj2DyGnMPGsUUBOX+OZOeQc/dI4zyD9Bug2GO/AaDPAsO+91nY95dg2Pf+Evu+GgR76quxXvxEsKd+Ius+qvftRx+Vbf/Y2/a8f8yyb+5N+6lvzq5f8C37tV/Qqk/yHdvUJ3my6A+F2Rv9oWNufbH7/wVmBy99sX8BmzcjLV0BzpcAAAAASUVORK5CYII=" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EkjJ-Ey9hKHMlwfhPHa4KFkl3z-0jL2huxj2YFbuFA&s" alt="Instagram" />
          </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 COSMOS. All rights reserved by Alexander Tsiklidis.</p>
      </div>
    </footer>
  );
}