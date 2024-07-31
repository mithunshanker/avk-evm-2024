import React from 'react';
import { useState, useEffect } from 'react';
import database from '@/server/firebase';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Shaurya() {
  const [shc, setshc] = useState();
  const [shvc, setshvc] = useState();

  const [shcv, setshcv] = useState("");
  const [shvcv, setshvcv] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('Auth') == null || sessionStorage.getItem('Auth') == 0) {
      router.push('/');
    }
    var shcNames = database.ref('/shc');
    shcNames.on('value', (snapshot) => {
      const shcdata = snapshot.val();
      const shcarray = shcdata && Object.values(shcdata);
      setshc(shcarray);
    });

    var shvcNames = database.ref('/shvc');
    shvcNames.on('value', (snapshot) => {
      const shvcdata = snapshot.val();
      const shvcArray = shvcdata && Object.values(shvcdata);
      setshvc(shvcArray);
    });
  }, []);

  const castvote = async () => {
    if (shcv && shvcv !== "") {
      try {
        await database.ref(shcv).transaction(function (value) {
          return (value || 0) + 1;
        });
      } catch {
        null;
      }
      try {
        await database.ref(shvcv).transaction(function (value) {
          return (value || 0) + 1;
        });
      } catch {
        null;
      }

      setshcv("");
      setshvcv("");
      new Audio('./assets/success.wav').play().then(router.reload());
    } else {
      alert("Please Vote For All The Posts");
    }
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <title>EVM Admin Dashboard</title>
      </Head>

      <div className="container-fluid mx-auto">
        <div className="h-100 d-flex align-items-center justify-content-center ">
          <button type="button" className="btn btn-lg btn-dark rounded-0 border border-1 border-secondary" data-bs-toggle="modal" data-bs-target="#ssp">
            <h1 className="display-1">Vote !</h1>
          </button>
        </div>

        <div className="modal fade" id="ssp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Shaurya House Captain</h1>
              </div>
              <div className="modal-body">
                {shc && shc.map((n) => (
                  <div className="form-check" key={n.id}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id={`flexRadioDefault1${n.name}`} onChange={(e) => {
                      if (e.target.checked) {
                        setshcv(`/shc/${n.id}/value`);
                      }
                    }} required />
                    <label className="form-check-label text-black" htmlFor={`flexRadioDefault1${n.name}`}>
                      {n.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-dark fw-bold rounded-0" data-bs-toggle="modal" data-bs-target="#ssvp">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="ssvp" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content mx-auto">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Shaurya House Vice Captain</h1>
              </div>
              <div className="modal-body">
                {shvc && shvc.map((n) => (
                  <div className="form-check" key={n.id}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id={`flexRadioDefault4${n.name}`} onChange={(e) => {
                      if (e.target.checked) {
                        setshvcv(`/shvc/${n.id}/value`);
                      }
                    }} />
                    <label className="form-check-label text-black" htmlFor={`flexRadioDefault4${n.name}`}>
                      {n.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-warning rounded-0 text-black fw-bold" data-bs-toggle="modal" data-bs-target="#ssp">
                  Previous
                </button>
                <button type="button" className="btn btn-success rounded-0 text-black fw-bold" onClick={castvote}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </>
  );
}

export default Shaurya;
