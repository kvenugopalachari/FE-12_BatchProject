import './App.css';

const pages = [
  { title: 'Home', file: 'home.html', description: 'Explore JobTrack.' },
  { title: 'Login', file: 'index.html', description: 'Sign in to your account.' },
  { title: 'Signup', file: 'signup.html', description: 'Create a new account.' },
  { title: 'User Dashboard', file: 'user-module.html', description: 'Access user features.' },
  { title: 'Admin Dashboard', file: 'admin-dashboard.html', description: 'Manage job applications.' },
  { title: 'Applications', file: 'applications.html', description: 'View job applications.' },
];

export default function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>JobTrack</h1>
        <p>Online Job Application Tracker</p>
      </header>

      <section className="welcome">
        <h2>Track your job journey in one place.</h2>
        <p>Manage applications, follow progress, and stay organized.</p>
      </section>

      <section className="pages">
        {pages.map((page) => (
          <a className="page-card" href={`/legacy/${page.file}`} key={page.file}>
            <h3>{page.title}</h3>
            <p>{page.description}</p>
            <span>Open page →</span>
          </a>
        ))}
      </section>

      <footer>JobTrack · Project Review 2</footer>
    </main>
  );
}
