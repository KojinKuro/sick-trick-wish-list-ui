const API_URL = "http://localhost:3001/api/v1/tricks";

export function getTricks() {
  return fetch(API_URL)
    .then((r) => {
      if (!r.ok) throw new Error("Could not get tricks");
      return r.json();
    })
    .catch((err) => console.log(err));
}

export function postTricks(trick) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(trick),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (!r.ok) throw new Error("Could not post trick");
      return r.json();
    })
    .catch((err) => console.log(err));
}

export function deleteTrick(id) {
  return fetch(API_URL + `/${id}`, {
    method: "DELETE",
  })
    .then((r) => {
      if (!r.ok) throw new Error(`Could not delete trick with id of ${id}`);
      return r.json();
    })
    .catch((err) => console.log(err));
}
