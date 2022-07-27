











export default function PageLayout({childern, className}) {


    return(
        <Container>
            <Navbar />
            <div className={`page-wrapper ${className} `}>
                {childern}
            </div>
            <footer className="page-footer">
                <div>
                    <a href="#">courses</a>{' | '}
                    <a href="#">github</a>{' | '}
                    <a href="#">facebook</a>
                </div>
            </footer>
        </Container>
    )


}