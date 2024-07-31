import React from 'react';
import { useState, useEffect } from 'react';
import database from '@/server/firebase';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Ahimsa() {
  const [ac, setac] = useState();
  const [avc, setavc] = useState();

  const [acv, setacv] = useState("");
  const [avcv, setavcv] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('Auth') == null || sessionStorage.getItem('Auth') == 0) {
      router.push('/');
    }
    var acNames = database.ref('/ac');
    acNames.on('value', (snapshot) => {
      const acdata = snapshot.val();
      const acarray = acdata && Object.values(acdata);
      setac(acarray);
    });

    var avcNames = database.ref('/avc');
    avcNames.on('value', (snapshot) => {
      const avcdata = snapshot.val();
      const avcArray = avcdata && Object.values(avcdata);
      setavc(avcArray);
    });
  }, []);

  const castvote = async () => {
    if (acv && avcv != "") {
      try {
        await database.ref(acv).transaction(function (value) {
          return (value || 0) + 1;
        });
      } catch {
        null;
      }
      try {
        await database.ref(avcv).transaction(function (value) {
          return (value || 0) + 1;
        });
      } catch {
        null;
      }

      setacv("");
      setavcv("");
      new Audio('./assets/sucess.wav').play().then(router.reload());
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
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Ahimsa House Captain</h1>
              </div>
              <div className="modal-body">
                {ac && ac.map((n) => (
                  <div className="form-check" key={n.id}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id={`flexRadioDefault1${n.name}`} onChange={(e) => {
                      if (e.target.checked) {
                        setacv(`/ac/${n.id}/value`);
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
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Ahimsa House Vice Captain</h1>
              </div>
              <div className="modal-body">
                {avc && avc.map((n) => (
                  <div className="form-check" key={n.id}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id={`flexRadioDefault4${n.name}`} onChange={(e) => {
                      if (e.target.checked) {
                        setavcv(`/avc/${n.id}/value`);
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

export default Ahimsa;
