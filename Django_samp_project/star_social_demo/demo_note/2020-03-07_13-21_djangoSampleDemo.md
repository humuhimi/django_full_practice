
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

