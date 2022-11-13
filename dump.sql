--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: films; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name text NOT NULL,
    plataform text NOT NULL,
    genero text NOT NULL,
    status boolean DEFAULT false
);


--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    email text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: films id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.films VALUES (6, 'A pequena sereia', 'Prime', 'romance', false);
INSERT INTO public.films VALUES (8, 'As tranças de um careca', 'Pobreflix', 'Triste', false);
INSERT INTO public.films VALUES (9, 'As tranças de um careca', 'Pobreflix', 'Triste', false);
INSERT INTO public.films VALUES (3, 'A pequena sereia', 'Prime', 'romance', true);
INSERT INTO public.films VALUES (4, 'A pequena sereia', 'Prime', 'romance', true);
INSERT INTO public.films VALUES (10, 'A pequena sereia', 'Prime', 'romance', false);
INSERT INTO public.films VALUES (2, 'A pequena sereia', 'Prime', 'romance', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'OtoSabor', 'oto@gmail.com');
INSERT INTO public.users VALUES (4, 'Oto', 'otosabor@gmail.com');
INSERT INTO public.users VALUES (5, 'Lele', 'lele@gmail.com');
INSERT INTO public.users VALUES (6, 'Teste', 'meuteste@gmail.com');
INSERT INTO public.users VALUES (8, 'Test', 'teste@gmail.com');
INSERT INTO public.users VALUES (12, 'Amigo', 'amigo@gmail.com');
INSERT INTO public.users VALUES (15, 'Amigo', 'amigooto@gmail.com');
INSERT INTO public.users VALUES (18, 'Amigos', 'amigootosabor@gmail.com');
INSERT INTO public.users VALUES (21, 'IPVA', 'ipva@gmail.com');
INSERT INTO public.users VALUES (24, 'IPTU', 'iptu@gmail.com');
INSERT INTO public.users VALUES (26, 'IPTU2', 'iptu2@gmail.com');
INSERT INTO public.users VALUES (27, 'IPTU21', 'iptu21@gmail.com');
INSERT INTO public.users VALUES (32, 'capoeira', 'capoeira@gmail.com');
INSERT INTO public.users VALUES (35, 'capoeira1', 'capoeira1@gmail.com');
INSERT INTO public.users VALUES (40, 'novo', 'novo@gmail.com');


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films_id_seq', 10, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 40, true);


--
-- Name: films films_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

