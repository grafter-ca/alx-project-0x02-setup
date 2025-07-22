import Card  from "@/components/common/Card";
import Header from "@/components/layout/Header";

const home = () => {
  return (

    <>
    <Header />
    <section className="container mx-auto p-4 flex flex-col items-center">
        <header className="text-center mb-8">

     <h1 className="p-8">Welcome to our propert listing</h1>
     <p>
         This is the home page of our application. Here you can find various properties listed for rent or sale.
     </p>
        </header>

        <article>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            <Card title="Luxury Apartment" content="A beautiful luxury apartment in the heart of the city." />
            <Card title="Cozy Cottage" content="A cozy cottage in the countryside, perfect for a weekend getaway." />
            <Card title="Modern Office Space" content="A modern office space available for rent in a prime location." />
            <Card title="Beachfront Villa" content="A stunning beachfront villa with breathtaking ocean views." />
            <Card title="Downtown Loft" content="A stylish downtown loft with all the amenities you need." />
            <Card title="Suburban Family Home" content="A spacious family home in a quiet suburban neighborhood." />
            <Card title="Penthouse Suite" content="An exclusive penthouse suite with luxury finishes and panoramic views." />
            <Card title="Historic Mansion" content="A historic mansion with rich architectural details and a large garden." />
            <Card title="Urban Studio" content="A chic urban studio apartment with modern design elements." />
            </div>
        </article>
    </section>
    </>
  );
}

export default home;