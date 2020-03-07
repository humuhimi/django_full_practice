
### pipについて
---

#### version
pip 19.2.3 (python 3.7)

- pip freeze or pip list

インストールしたパッケージ名とバージョンが表示される。

--- 
- settings.pyについて
```python
TEMPLATE_DIR設定
↓
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR],
↓
//
STATICFILES_DIR = [os.path.join(BASE_DIR,'static')]
```
プロジェクトには、特定のアプリケーションに紐付けられていない 静的な assets があることがあります。<br />その場合には、アプリケーション内の static/ ディレクトリの他に、設定ファイルでディレクトリのリスト (STATICFILES_DIRS) を定義して、Django が静的ファイルを検索できるようにすることができます。<br/>
[詳細](https://docs.djangoproject.com/ja/3.0/howto/static-files/)

---

- templateのタグについて
```html
base.html
    {% block content %}
    {% endblock %}
---
index.html

{% extends "base.html" %}

    {% block content %}
            ここになんかいれる
    {% endblock %}
```
---
- modelsのラベルについて

```python
# デフォルトでないlabel値を指定する場合
name = forms.CharField(label='Your name')
url = forms.URLField(label='Your website', required=False)
```
<tr><th>Your name:</th><td><input type="text" name="name" required></td></tr>
<tr><th>Your website:</th><td><input type="url" name="url"></td></tr>
<br /> 
---


```python
# 認証関連のビューが有効化
path('accounts/',include('django.contrib.auth.urls'))
```
[詳細](https://github.com/django/django/blob/b9cf764be62e77b4777b3a75ec256f6209a57671/django/contrib/auth/urls.py)

---

- gitについて②

- git rm --cache(git管理下から削除するだけ)
- git clean -f ~で untracked fileから削除する。